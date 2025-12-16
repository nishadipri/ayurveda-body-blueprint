import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
  consent: boolean;
  source?: string;
  dosha_result?: string;
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

// Input validation constants
const MAX_SOURCE_LENGTH = 100;
const MAX_DOSHA_RESULT_LENGTH = 500;
const MAX_EMAIL_LENGTH = 255;

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.log(`Rate limited IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email, consent, source, dosha_result }: SubscribeRequest = await req.json();

    // Validate email format and length
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > MAX_EMAIL_LENGTH) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate and sanitize source field
    const sanitizedSource = source 
      ? String(source).slice(0, MAX_SOURCE_LENGTH).trim() 
      : "results_page";

    // Validate and sanitize dosha_result field
    const sanitizedDoshaResult = dosha_result 
      ? String(dosha_result).slice(0, MAX_DOSHA_RESULT_LENGTH).trim() 
      : undefined;

    // Create Supabase client with service role key for secure insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert subscriber
    const { error } = await supabase.from("subscribers").insert({
      email: email.toLowerCase().trim(),
      consent,
      source: sanitizedSource,
      dosha_result: sanitizedDoshaResult,
    });

    if (error) {
      // Handle duplicate email
      if (error.code === "23505") {
        return new Response(
          JSON.stringify({ success: true, message: "You're already subscribed 🤍" }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      console.error("Insert error:", error);
      throw error;
    }

    console.log("New subscriber:", email);

    return new Response(
      JSON.stringify({ success: true, message: "Saved 🤍" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Subscribe error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong, try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});