import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Heart, Leaf } from 'lucide-react';

const EmailCollection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Please enter a valid email",
        description: "We need your email to send your personalized results.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    localStorage.setItem('userEmail', email);
    
    setTimeout(() => {
      toast({
        title: "Welcome to your journey",
        description: "Let's discover your unique constitution together.",
      });
      navigate('/questionnaire');
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow questionnaire-container">
        <section className="py-16 md:py-24">
          <div className="ayur-container max-w-xl">
            {/* Header */}
            <div className="text-center mb-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Begin Your Journey</span>
              </div>
              <h1 className="font-cormorant text-4xl md:text-5xl font-medium text-foreground mb-4">
                Discover Your Dosha
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                In just a few minutes, uncover the ancient wisdom of your unique mind-body constitution.
              </p>
            </div>
            
            {/* Email Card */}
            <Card className="shadow-soft rounded-2xl border-border/50 animate-fade-in-up animate-delay-100">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium text-foreground">
                      Where should we send your results?
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-base py-6 rounded-xl border-border/50 focus:border-accent"
                      required
                    />
                  </div>
                  
                  {/* Benefits */}
                  <div className="space-y-3 py-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Personalized dosha analysis based on Ayurvedic wisdom</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Custom food, lifestyle, and gut health recommendations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Insights for daily balance and self-awareness</p>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full btn-gold text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Starting...' : 'Begin the Quiz'}
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground text-center mt-6">
                  Your privacy matters. We'll only use your email to send your results and gentle wellness tips.
                </p>
              </CardContent>
            </Card>
            
            {/* Trust indicators */}
            <div className="text-center mt-8 animate-fade-in-up animate-delay-200">
              <p className="text-sm text-muted-foreground">
                Based on 5,000+ years of Ayurvedic knowledge
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmailCollection;