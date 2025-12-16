import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, MessageCircle, Sparkles, Leaf, Sun } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Book = () => {
  const calendlyUrl = "https://calendly.com/ayurglow";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Floating decorative icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Leaf className="absolute top-32 right-20 w-6 h-6 text-primary/20 animate-float" style={{ animationDelay: '0s' }} />
        <Sun className="absolute top-48 left-16 w-5 h-5 text-accent/20 animate-float" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-48 right-32 w-4 h-4 text-primary/15 animate-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-64 left-24 w-5 h-5 text-accent/15 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-2xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <Sparkles className="w-4 h-4 text-primary/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mb-6 border border-accent/20">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium tracking-wide">Personal Guidance</span>
          </div>
          
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Book a Free <span className="text-primary">1:1</span> Call
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A calm, friendly chat to explore your Dosha result and digestion. 
            <span className="block mt-2 text-foreground/70 italic">No pressure, no sales — just genuine guidance.</span>
          </p>
        </div>

        <Card className="relative p-8 md:p-10 shadow-soft rounded-3xl border-border/30 bg-gradient-to-br from-card via-card to-primary/5 animate-fade-in-up overflow-hidden" style={{ animationDelay: '0.1s' }}>
          {/* Card decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-gradient-to-br from-primary/15 to-primary/5 rounded-2xl border border-primary/20 shadow-sm">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "15-minute gentle conversation",
                    "Review your Dosha results together",
                    "Personalized tips for your constitution",
                    "Ask any questions about gut health"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground group animate-fade-in"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Heart className="w-3 h-3 text-accent" />
                      </div>
                      <span className="group-hover:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-border/30">
              <Button 
                className="btn-gold w-full text-lg py-7 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                onClick={() => window.open(calendlyUrl, '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Choose a Time on Calendly
                <Sparkles className="w-4 h-4 ml-2 opacity-60" />
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-5 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                <span>Free consultation</span>
                <span className="text-border">·</span>
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Testimonial-style trust element */}
        <div className="mt-10 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Heart key={i} className="w-3.5 h-3.5 text-accent fill-accent/30" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic max-w-md mx-auto">
            "A warm, judgment-free space to understand your unique constitution"
          </p>
        </div>

        <div className="text-center mt-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all text-sm group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Book;