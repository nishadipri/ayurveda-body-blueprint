import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const EmailCollection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Store email in localStorage for now
    localStorage.setItem('userEmail', email);
    
    // Simulate a brief loading state
    setTimeout(() => {
      toast({
        title: "Email Collected!",
        description: "Thank you! Now let's discover your dosha.",
      });
      navigate('/questionnaire');
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow questionnaire-container">
        <section className="py-12 md:py-16">
          <div className="container max-w-2xl">
            <div className="text-center mb-10">
              <h1 className="font-neuton text-3xl md:text-4xl font-semibold text-primary mb-4">
                Start Your Ayur Glow Journey
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Enter your email to receive your personalized dosha results and exclusive Ayurvedic wellness tips.
              </p>
            </div>
            
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-neuton">
                  Get Your Personalized Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-base py-3"
                      required
                    />
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>✓ Receive your detailed dosha analysis</p>
                    <p>✓ Get personalized wellness recommendations</p>
                    <p>✓ Access exclusive Ayurvedic lifestyle tips</p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Start Dosha Quiz →'}
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  We respect your privacy. Your email will only be used to send your results and wellness tips.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmailCollection;