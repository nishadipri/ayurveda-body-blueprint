import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Heart, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Book = () => {
  const calendlyUrl = "https://calendly.com/ayurglow"; // Replace with actual Calendly link

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Personal Guidance</span>
          </div>
          
          <h1 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Book a Free 1:1 Call
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A calm, friendly chat to explore your Dosha result and digestion. No pressure, no sales — just genuine guidance.
          </p>
        </div>

        <Card className="p-8 md:p-10 shadow-soft rounded-2xl border-border/50 bg-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    <span>15-minute gentle conversation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    <span>Review your Dosha results together</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    <span>Personalized tips for your constitution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-accent" />
                    <span>Ask any questions about gut health</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <Button 
                className="btn-gold w-full text-lg py-6"
                onClick={() => window.open(calendlyUrl, '_blank')}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Choose a Time on Calendly
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Free consultation · No commitment required
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="text-primary hover:text-primary/80 transition-soft text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Book;