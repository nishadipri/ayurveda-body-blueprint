import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuizCompleteRequest {
  email?: string;
  consent?: boolean;
  dosha_result: string;
  scores: { vata: number; pitta: number; kapha: number };
  source?: string;
}

// Dosha tips for email
const doshaTips: Record<string, string[]> = {
  vata: [
    "🌿 Favor warm, grounding foods like root vegetables and warming spices",
    "🧘 Practice gentle yoga and regular oil massage (abhyanga)",
    "⏰ Maintain consistent daily routines for better balance",
    "🛏️ Prioritize rest and avoid overstimulation",
    "🍵 Sip warm herbal teas throughout the day"
  ],
  pitta: [
    "🥒 Choose cooling foods like cucumber, mint, and fresh fruits",
    "🌊 Exercise during cooler hours, enjoy water activities",
    "😌 Practice cooling breathing exercises (pranayama)",
    "🌳 Spend time in nature to balance intensity",
    "💆 Avoid excessive heat and take breaks from work"
  ],
  kapha: [
    "🌶️ Include warming spices like ginger and black pepper",
    "🏃 Stay active with regular, stimulating exercise",
    "🌅 Wake early and maintain an energizing routine",
    "🥗 Favor light, warm foods and reduce heavy dairy",
    "🌟 Embrace variety and new experiences to stay motivated"
  ],
  vata_pitta: [
    "🍲 Favor warm, nourishing foods that aren't too spicy",
    "⚖️ Balance activity with adequate rest",
    "🌡️ Avoid extreme temperatures",
    "🧘 Practice calming meditation regularly",
    "🌿 Ashwagandha and brahmi herbs can be beneficial"
  ],
  pitta_kapha: [
    "🥬 Choose light, warm foods that aren't too oily",
    "🏋️ Regular, moderate exercise is key",
    "🍃 Include bitter and astringent tastes in meals",
    "📅 Maintain schedules with some flexibility",
    "🌿 Triphala can support your constitution"
  ],
  vata_kapha: [
    "🍜 Favor warm, light, and mildly spiced foods",
    "🚶 Regular moderate exercise keeps energy balanced",
    "☀️ Keep warm and dry, especially in winter",
    "🎯 Find balance between routine and stimulation",
    "🌿 Ginger and tulsi can be very beneficial"
  ],
  tri_dosha: [
    "🌈 Eat seasonally and include all six tastes",
    "🔄 Adjust routines based on the season",
    "🧘 Practice moderate exercise regularly",
    "👀 Pay attention to which dosha needs attention",
    "🌿 Triphala and ashwagandha support overall balance"
  ]
};

const doshaNames: Record<string, string> = {
  vata: "Vata (Air & Ether)",
  pitta: "Pitta (Fire & Water)",
  kapha: "Kapha (Earth & Water)",
  vata_pitta: "Vata-Pitta",
  pitta_kapha: "Pitta-Kapha",
  vata_kapha: "Vata-Kapha",
  tri_dosha: "Tri-Dosha (Balanced)"
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, consent, dosha_result, scores, source }: QuizCompleteRequest = await req.json();

    // Validate dosha_result exists
    if (!dosha_result) {
      return new Response(
        JSON.stringify({ error: "Missing dosha_result" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Quiz complete request:", { email: email ? "provided" : "none", dosha_result, scores });

    // Initialize Supabase client with service role key
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // If email is provided, save to subscribers
    if (email && email.includes("@")) {
      const emailLower = email.toLowerCase().trim();
      
      const { error: insertError } = await supabase.from("subscribers").upsert(
        {
          email: emailLower,
          consent: consent || false,
          source: source || "quiz_completion",
          dosha_result: dosha_result,
        },
        { onConflict: "email" }
      );

      if (insertError) {
        console.error("Subscriber insert error:", insertError);
      } else {
        console.log("Subscriber saved:", emailLower);
      }

      // Send email if consent is given and we have an API key
      const resendApiKey = Deno.env.get("RESEND_API_KEY");
      if (consent && resendApiKey) {
        try {
          const resend = new Resend(resendApiKey);
          
          const tips = doshaTips[dosha_result] || doshaTips.tri_dosha;
          const doshaDisplayName = doshaNames[dosha_result] || dosha_result;
          
          // Use SITE_URL env var or fallback
          const siteUrl = Deno.env.get("SITE_URL") || "https://wpczgwxsriezaubncuom.lovable.app";
          
          const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Georgia, 'Times New Roman', serif; background-color: #f8f6f3; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px;">
    
    <div style="text-align: center; margin-bottom: 30px;">
      <h1 style="color: #2d4a3e; font-size: 28px; margin: 0;">Your Dosha Result 🌿</h1>
      <p style="color: #6b7b6e; font-size: 14px; margin-top: 8px;">From AyurGlow</p>
    </div>
    
    <div style="background: linear-gradient(135deg, #2d4a3e 0%, #3d5a4e 100%); color: white; padding: 30px; border-radius: 16px; text-align: center; margin-bottom: 30px;">
      <p style="margin: 0 0 8px 0; font-size: 14px; opacity: 0.9;">Your primary constitution is</p>
      <h2 style="margin: 0; font-size: 32px; color: #c9a227;">${doshaDisplayName}</h2>
    </div>
    
    <div style="margin-bottom: 30px;">
      <h3 style="color: #2d4a3e; font-size: 18px; margin-bottom: 16px;">Your Personalized Tips</h3>
      <ul style="padding-left: 0; list-style: none; margin: 0;">
        ${tips.map(tip => `<li style="padding: 12px 0; border-bottom: 1px solid #e8e4de; color: #4a5a4d; font-size: 15px;">${tip}</li>`).join('')}
      </ul>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${siteUrl}/results" 
         style="display: inline-block; background-color: #c9a227; color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
        View Full Results
      </a>
    </div>
    
    <div style="background-color: #f8f6f3; padding: 20px; border-radius: 12px; text-align: center; margin-top: 20px;">
      <p style="color: #6b7b6e; font-size: 14px; margin: 0 0 12px 0;">Ready for personalized guidance?</p>
      <a href="${siteUrl}/book" 
         style="color: #2d4a3e; font-weight: 600; text-decoration: underline;">
        Book a Free 1:1 Call →
      </a>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e8e4de;">
      <p style="color: #9a9a9a; font-size: 12px; margin: 0;">
        With warmth from AyurGlow 🤍<br>
        <a href="https://instagram.com/ayur_glow222" style="color: #9a9a9a;">@ayur_glow222</a>
      </p>
    </div>
    
  </div>
</body>
</html>
          `;

          const { error: emailError } = await resend.emails.send({
            from: "AyurGlow <onboarding@resend.dev>",
            to: [emailLower],
            subject: "Your AyurGlow Dosha Result 🌿",
            html: emailHtml,
          });

          if (emailError) {
            console.error("Email send error:", emailError);
          } else {
            console.log("Email sent successfully to:", emailLower);
          }
        } catch (emailErr) {
          console.error("Email sending exception:", emailErr);
        }
      } else {
        console.log("Email not sent - consent:", consent, "API key:", !!resendApiKey);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Quiz completed successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Quiz complete error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
