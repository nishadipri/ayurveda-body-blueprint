import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DoshaScore, calculateDoshaType, doshaDescriptions } from '@/utils/questionnaireData';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Mail, Sparkles, Heart, Leaf } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const scores = location.state?.scores as DoshaScore | undefined;
  
  useEffect(() => {
    if (!scores) {
      navigate('/email-collection');
    }
    // Check if email already exists
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
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

  const handlePdfRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('userEmail', email);
      setEmailSubmitted(true);
      toast({
        title: "Thank you!",
        description: "Your personalized Dosha guide will arrive in your inbox soon.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-20">
          <div className="ayur-container">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-accent mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Your Results</span>
              </div>
              <h1 className="font-cormorant text-4xl md:text-5xl font-medium text-foreground mb-4">
                A Moment of Clarity
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your unique constitution reveals itself. Here's what your body and mind have been trying to tell you.
              </p>
            </div>
            
            {/* Two Dominant Doshas Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Primary Dosha */}
              <Card className="overflow-hidden shadow-soft animate-fade-in-up animate-delay-100">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Primary Dosha</span>
                  </div>
                  <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mb-2">
                    <span className="dosha-highlight text-foreground">{dominantDosha.name}</span>
                  </h2>
                  <p className="text-3xl font-cormorant text-accent font-medium">{dominantDosha.percentage}%</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {dominantDosha.name === 'Vata' && 'Creative, quick-thinking, and adaptable. You thrive with warmth, routine, and grounding practices.'}
                    {dominantDosha.name === 'Pitta' && 'Passionate, focused, and driven. You shine with cooling foods, moderation, and mindful rest.'}
                    {dominantDosha.name === 'Kapha' && 'Calm, nurturing, and steady. You flourish with movement, variety, and stimulating activities.'}
                  </p>
                </CardContent>
              </Card>
              
              {/* Secondary Dosha */}
              <Card className="overflow-hidden shadow-soft animate-fade-in-up animate-delay-200">
                <div className="bg-gradient-to-br from-secondary to-secondary/50 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Leaf className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Secondary Dosha</span>
                  </div>
                  <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mb-2">
                    <span className="text-foreground">{secondaryDosha.name}</span>
                  </h2>
                  <p className="text-3xl font-cormorant text-primary font-medium">{secondaryDosha.percentage}%</p>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {secondaryDosha.name === 'Vata' && 'Your secondary Vata brings creativity and movement to your constitution.'}
                    {secondaryDosha.name === 'Pitta' && 'Your secondary Pitta adds ambition and transformation energy.'}
                    {secondaryDosha.name === 'Kapha' && 'Your secondary Kapha provides stability and endurance.'}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Chart Section */}
            <Card className="mb-12 shadow-soft animate-fade-in-up animate-delay-300">
              <CardContent className="p-8">
                <h3 className="font-cormorant text-2xl font-medium text-center mb-6">Your Complete Dosha Profile</h3>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sortedDoshas}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={110}
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
                <div className="flex justify-center gap-8 mt-4">
                  {sortedDoshas.map((dosha) => (
                    <div key={dosha.name} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: COLORS[dosha.name as keyof typeof COLORS] }}
                      />
                      <span className="text-sm text-muted-foreground">{dosha.name} ({dosha.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recommendations */}
            <Card className="mb-12 shadow-soft animate-fade-in-up animate-delay-400">
              <CardContent className="p-8">
                <h3 className="font-cormorant text-2xl font-medium mb-6">Personalized Guidance for Your Constitution</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-xl bg-secondary/50">
                    <h4 className="font-medium text-primary mb-2">Nourishing Foods</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{doshaInfo.recommendations.diet}</p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-secondary/50">
                    <h4 className="font-medium text-primary mb-2">Daily Rituals</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{doshaInfo.recommendations.lifestyle}</p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-secondary/50">
                    <h4 className="font-medium text-primary mb-2">Supportive Herbs</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{doshaInfo.recommendations.herbs}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* PDF Email Invitation - Gentle Gift */}
            {!emailSubmitted ? (
              <Card className="mb-12 shadow-soft border-accent/20 bg-gradient-to-br from-card to-accent/5 animate-fade-in-up">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-medium mb-3">
                    Would you like a deeper, personalized guide?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
                    I've created a simple PDF with food recommendations, daily rituals, and gut health tips specifically for your {dominantDosha.name} constitution. It's my gift to you.
                  </p>
                  <form onSubmit={handlePdfRequest} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-xl border-border/50 focus:border-accent"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="btn-gold whitespace-nowrap"
                    >
                      Send My Guide
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-4">
                    No spam, just ancient wisdom for modern living.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-12 shadow-soft border-primary/20 bg-gradient-to-br from-card to-primary/5 animate-scale-in">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-medium mb-2">
                    Your guide is on its way
                  </h3>
                  <p className="text-muted-foreground">
                    Check your inbox for your personalized {dominantDosha.name} Dosha guide.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {/* Footer Actions */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="rounded-xl border-primary/30 text-primary hover:bg-primary/5"
                  asChild
                >
                  <Link to="/dosha-info">Learn More About Doshas</Link>
                </Button>
                <Button 
                  className="btn-teal"
                  onClick={() => navigate('/email-collection')}
                >
                  Retake the Quiz
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