import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Header from '@/components/Header';
import DecorativeBackground from '@/components/DecorativeBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { DoshaScore, calculateDoshaType, doshaDescriptions } from '@/utils/questionnaireData';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Sparkles, Heart, Leaf, Calendar, Wind, Flame, Droplets } from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const scores = location.state?.scores as DoshaScore | undefined;
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  useEffect(() => {
    if (!scores) {
      navigate('/email-collection');
    } else {
      // Show booking modal after a short delay when results load
      const timer = setTimeout(() => setShowBookingModal(true), 1500);
      return () => clearTimeout(timer);
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

  const getDoshaIcon = (name: string) => {
    if (name === 'Vata') return <Wind className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (name === 'Pitta') return <Flame className="w-4 h-4 sm:w-5 sm:h-5" />;
    if (name === 'Kapha') return <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />;
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Book a Call Popup Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-accent/20 to-primary/20">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
            </div>
            <DialogTitle className="font-cormorant text-2xl sm:text-3xl text-center">
              Book a <span className="gradient-text-gold">Free Call</span> With Us
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground pt-2">
              A calm, friendly chat to explore your Dosha result and digestion. No pressure, just guidance.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button 
              className="btn-teal w-full"
              onClick={() => {
                setShowBookingModal(false);
                navigate('/book');
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Yes, Book My Free Call
            </Button>
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => setShowBookingModal(false)}
            >
              Maybe Later
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
