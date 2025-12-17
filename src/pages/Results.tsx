import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import DecorativeBackground from '@/components/DecorativeBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { DoshaScore, calculateDoshaType, doshaDescriptions } from '@/utils/questionnaireData';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Mail, Sparkles, Heart, Leaf, Calendar, Check, Wind, Flame, Droplets } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const scores = location.state?.scores as DoshaScore | undefined;
  
  useEffect(() => {
    if (!scores) {
      navigate('/email-collection');
    }
  }, [scores, navigate]);
  
  if (!scores) {
    return null;
  }
  
  const doshaType = calculateDoshaType(scores);
  const doshaInfo = doshaDescriptions[doshaType];
  
  const { vata, pitta, kapha } = scores;
  const total = vata + pitta + kapha;
  
  // Sort doshas by percentage (highest first)
  const sortedDoshas = [
    { name: 'Vata', value: vata, percentage: Math.round((vata / total) * 100) },
    { name: 'Pitta', value: pitta, percentage: Math.round((pitta / total) * 100) },
    { name: 'Kapha', value: kapha, percentage: Math.round((kapha / total) * 100) }
  ].sort((a, b) => b.percentage - a.percentage);
  
  const dominantDosha = sortedDoshas[0];
  const secondaryDosha = sortedDoshas[1];
  
  const COLORS = {
    'Vata': 'hsl(200, 35%, 65%)',
    'Pitta': 'hsl(25, 55%, 55%)',
    'Kapha': 'hsl(145, 30%, 45%)'
  };
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 shadow-soft rounded-xl border border-border">
          <p className="font-medium text-foreground">{`${payload[0].name}: ${payload[0].payload.percentage}%`}</p>
        </div>
      );
    }
    return null;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    if (!consent) {
      toast({
        title: "Please check the box to receive your result by email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const doshaKey = dominantDosha.name.toLowerCase();
      
      const { data, error } = await supabase.functions.invoke('quiz-complete', {
        body: {
          email: email.trim().toLowerCase(),
          consent: true,
          dosha_result: doshaKey,
          scores: scores,
          source: 'results_page_email',
        },
      });

      if (error) throw error;

      setEmailSubmitted(true);
      toast({
        title: "Sent! ✉️",
        description: "Check your inbox (or spam/promotions folder).",
      });
    } catch (error: any) {
      console.error('Email send error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDoshaIcon = (name: string) => {
    if (name === 'Vata') return <Wind className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (name === 'Pitta') return <Flame className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (name === 'Kapha') return <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />;
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <DecorativeBackground variant="default" />
        
        <section className="relative z-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="ayur-container">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 animate-fade-in-up">
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-accent/40" />
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-accent/40" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mb-4 sm:mb-5 border border-accent/20">
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-accent">Your Results</span>
              </div>
              <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-3 sm:mb-4">
                A Moment of <span className="gradient-text-gold">Clarity</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
                Your unique constitution reveals itself. Here's what your body and mind have been trying to tell you.
              </p>
            </div>
            
            {/* Two Dominant Doshas Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-14">
              {/* Primary Dosha */}
              <Card className="group relative overflow-hidden shadow-soft rounded-xl sm:rounded-2xl border-0 animate-fade-in-up animate-delay-100 hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Primary Dosha</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-accent/10 text-accent">
                      {getDoshaIcon(dominantDosha.name)}
                    </div>
                  </div>
                  <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold mb-1 sm:mb-2">
                    <span className="gradient-text-gold">{dominantDosha.name}</span>
                  </h2>
                  <p className="text-2xl sm:text-3xl font-cormorant text-accent font-medium">{dominantDosha.percentage}%</p>
                </div>
                <CardContent className="p-4 sm:p-6 relative">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {dominantDosha.name === 'Vata' && 'Creative, quick-thinking, and adaptable. You thrive with warmth, routine, and grounding practices.'}
                    {dominantDosha.name === 'Pitta' && 'Passionate, focused, and driven. You shine with cooling foods, moderation, and mindful rest.'}
                    {dominantDosha.name === 'Kapha' && 'Calm, nurturing, and steady. You flourish with movement, variety, and stimulating activities.'}
                  </p>
                </CardContent>
              </Card>
              
              {/* Secondary Dosha */}
              <Card className="group relative overflow-hidden shadow-soft rounded-xl sm:rounded-2xl border-0 animate-fade-in-up animate-delay-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-br from-secondary via-secondary/70 to-transparent p-5 sm:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Secondary Dosha</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                      {getDoshaIcon(secondaryDosha.name)}
                    </div>
                  </div>
                  <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold mb-1 sm:mb-2">
                    <span className="gradient-text">{secondaryDosha.name}</span>
                  </h2>
                  <p className="text-2xl sm:text-3xl font-cormorant text-primary font-medium">{secondaryDosha.percentage}%</p>
                </div>
                <CardContent className="p-4 sm:p-6 relative">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {secondaryDosha.name === 'Vata' && 'Your secondary Vata brings creativity and movement to your constitution.'}
                    {secondaryDosha.name === 'Pitta' && 'Your secondary Pitta adds ambition and transformation energy.'}
                    {secondaryDosha.name === 'Kapha' && 'Your secondary Kapha provides stability and endurance.'}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Chart Section */}
            <Card className="mb-8 sm:mb-12 shadow-soft animate-fade-in-up animate-delay-300">
              <CardContent className="p-4 sm:p-8">
                <h3 className="font-cormorant text-xl sm:text-2xl font-medium text-center mb-4 sm:mb-6">Your Complete Dosha Profile</h3>
                <div className="h-[220px] sm:h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sortedDoshas}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={3}
                        dataKey="value"
                        strokeWidth={0}
                      >
                        {sortedDoshas.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={COLORS[entry.name as keyof typeof COLORS]} 
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-4">
                  {sortedDoshas.map((dosha) => (
                    <div key={dosha.name} className="flex items-center gap-2">
                      <div 
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[dosha.name as keyof typeof COLORS] }}
                      />
                      <span className="text-xs sm:text-sm text-muted-foreground">{dosha.name} ({dosha.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recommendations */}
            <Card className="mb-8 sm:mb-12 shadow-soft animate-fade-in-up animate-delay-400">
              <CardContent className="p-4 sm:p-8">
                <h3 className="font-cormorant text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Personalized Guidance for Your Constitution</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-secondary/50">
                    <h4 className="font-medium text-primary mb-2 text-sm sm:text-base">Nourishing Foods</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{doshaInfo.recommendations.diet}</p>
                  </div>
                  
                  <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-secondary/50">
                    <h4 className="font-medium text-primary mb-2 text-sm sm:text-base">Daily Rituals</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{doshaInfo.recommendations.lifestyle}</p>
                  </div>
                  
                  <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-secondary/50">
                    <h4 className="font-medium text-primary mb-2 text-sm sm:text-base">Supportive Herbs</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{doshaInfo.recommendations.herbs}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Optional Email Capture */}
            {!emailSubmitted ? (
              <Card className="mb-8 sm:mb-12 shadow-soft border-accent/20 bg-gradient-to-br from-card to-accent/5 animate-fade-in-up">
                <CardContent className="p-5 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 mb-3 sm:mb-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="font-cormorant text-xl sm:text-2xl font-medium mb-2 sm:mb-3">
                    Send me a copy of my result
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-lg mx-auto leading-relaxed">
                    Get your personalized dosha tips delivered to your inbox. <span className="text-primary font-medium">Optional</span> — continue without it.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 rounded-lg sm:rounded-xl border-border/50 focus:border-accent text-sm sm:text-base"
                      />
                      <Button 
                        type="submit" 
                        className="btn-gold whitespace-nowrap text-sm sm:text-base"
                        disabled={isSubmitting || !email || !consent}
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </Button>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <Checkbox 
                        id="consent" 
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked as boolean)}
                        className="mt-0.5"
                      />
                      <label htmlFor="consent" className="text-xs sm:text-sm text-muted-foreground cursor-pointer leading-relaxed">
                        Yes, send my dosha result and tips to my email.
                      </label>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-8 sm:mb-12 shadow-soft border-primary/20 bg-gradient-to-br from-card to-primary/5 animate-scale-in">
                <CardContent className="p-5 sm:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-3 sm:mb-4">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-cormorant text-xl sm:text-2xl font-medium mb-2">
                    Sent! ✉️
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Check your inbox (and spam/promotions folder).
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Book a Call CTA */}
            <Card className="mb-8 sm:mb-12 shadow-soft border-primary/30 animate-fade-in-up">
              <CardContent className="p-5 sm:p-8 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-3 sm:mb-4">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-cormorant text-xl sm:text-2xl font-medium mb-2 sm:mb-3">
                  Want to explore your results together?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-lg mx-auto leading-relaxed">
                  A calm, friendly chat to understand your Dosha and digestion better. No pressure, no sales.
                </p>
                <Button 
                  className="btn-teal text-sm sm:text-base"
                  asChild
                >
                  <Link to="/book">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Free 1:1 Call
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Footer Actions */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="rounded-lg sm:rounded-xl border-primary/30 text-primary hover:bg-primary/5 text-sm sm:text-base"
                  asChild
                >
                  <Link to="/dosha-info">Learn More About Doshas</Link>
                </Button>
                <Button 
                  className="btn-gold text-sm sm:text-base"
                  asChild
                >
                  <Link to="/email-collection">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Retake the Quiz
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Results;
