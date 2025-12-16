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

serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, consent, source, dosha_result }: SubscribeRequest = await req.json();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Please enter a valid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role key for secure insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert subscriber
    const { error } = await supabase.from("subscribers").insert({
      email: email.toLowerCase().trim(),
      consent,
      source: source || "results_page",
      dosha_result,
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