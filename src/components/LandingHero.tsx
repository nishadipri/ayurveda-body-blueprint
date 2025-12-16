import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Leaf } from 'lucide-react';

const LandingHero = () => {
  return (
    <section className="py-20 md:py-32 questionnaire-container">
      <div className="ayur-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-accent mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Ancient Wisdom, Modern Living</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground mb-6 animate-fade-in-up animate-delay-100">
            Discover Your 
            <span className="block mt-2">
              <span className="dosha-highlight">Ayurvedic</span> Blueprint
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Understand your unique mind-body constitution and unlock personalized guidance for gut health, daily balance, and lasting wellness.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up animate-delay-300">
            <Button className="btn-gold text-lg py-7 px-10" asChild>
              <Link to="/email-collection">
                Take the Dosha Quiz
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Only takes 3 minutes • Completely free
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm">Personalized Results</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm">Gut Health Focused</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm">5,000+ Years of Wisdom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;