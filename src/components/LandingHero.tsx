import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Leaf, ArrowRight } from 'lucide-react';
import DecorativeBackground from './DecorativeBackground';

const LandingHero = () => {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <DecorativeBackground variant="hero" />
      
      <div className="ayur-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in-up">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <Sparkles className="w-4 h-4 text-accent" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full mb-8 border border-accent/20 animate-fade-in-up animate-delay-100">
            <span className="text-sm font-medium uppercase tracking-wider text-accent">Ancient Wisdom, Modern Living</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-foreground mb-6 animate-fade-in-up animate-delay-200">
            Discover Your 
            <span className="block mt-2">
              <span className="gradient-text-gold">Ayurvedic</span> Blueprint
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
            Understand your unique mind-body constitution and unlock personalized guidance for gut health, daily balance, and lasting wellness.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up animate-delay-400">
            <Button className="btn-gold text-lg py-7 px-10 group" asChild>
              <Link to="/email-collection">
                Take the Dosha Quiz
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-5 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
              Only takes 3 minutes • Completely free
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-20 pt-10 border-t border-border/30 animate-fade-in-up animate-delay-500">
            <div className="flex items-center gap-3 text-muted-foreground group">
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Heart className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm">Personalized Results</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm">Gut Health Focused</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground group">
              <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm">5,000+ Years of Wisdom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;