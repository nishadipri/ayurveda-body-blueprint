import React from 'react';
import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import DoshaCard from '@/components/DoshaCard';
import DecorativeBackground from '@/components/DecorativeBackground';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { doshaDescriptions } from '@/utils/questionnaireData';
import { Sparkles, ArrowRight, Leaf, Heart, Sun, Moon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header/>
      <main className="flex-grow">
        <LandingHero />
        
        {/* Dosha Overview Section */}
        <section className="relative py-24 bg-gradient-to-b from-secondary/50 via-secondary/30 to-background overflow-hidden">
          <DecorativeBackground variant="minimal" />
          
          <div className="ayur-container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              {/* Section header decoration */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
                <Leaf className="w-4 h-4 text-primary/60" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
              </div>
              
              <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5">
                The Three <span className="gradient-text">Doshas</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                In Ayurveda, your unique constitution is shaped by three vital energies. Understanding your dominant dosha unlocks the path to lasting balance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="animate-fade-in-up">
                <DoshaCard 
                  title={doshaDescriptions.vata.title} 
                  subtitle={doshaDescriptions.vata.subtitle}
                  description={doshaDescriptions.vata.description}
                  characteristics={doshaDescriptions.vata.characteristics}
                  color={doshaDescriptions.vata.color}
                />
              </div>
              <div className="animate-fade-in-up animate-delay-100">
                <DoshaCard 
                  title={doshaDescriptions.pitta.title} 
                  subtitle={doshaDescriptions.pitta.subtitle}
                  description={doshaDescriptions.pitta.description}
                  characteristics={doshaDescriptions.pitta.characteristics}
                  color={doshaDescriptions.pitta.color}
                />
              </div>
              <div className="animate-fade-in-up animate-delay-200">
                <DoshaCard 
                  title={doshaDescriptions.kapha.title} 
                  subtitle={doshaDescriptions.kapha.subtitle}
                  description={doshaDescriptions.kapha.description}
                  characteristics={doshaDescriptions.kapha.characteristics}
                  color={doshaDescriptions.kapha.color}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="relative py-24 overflow-hidden">
          <DecorativeBackground variant="minimal" />
          
          <div className="ayur-container relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                {/* Section header decoration */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/30" />
                  <Heart className="w-4 h-4 text-accent/60" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/30" />
                </div>
                
                <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-5">
                  Why Your Dosha <span className="gradient-text-gold">Matters</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ancient wisdom meets modern wellness. Understanding your constitution transforms how you eat, rest, and live.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  { num: 1, icon: Sun, title: 'Personalized Nutrition', desc: 'Discover which foods nourish your constitution and which ones create imbalance in your gut.', color: 'accent' },
                  { num: 2, icon: Moon, title: 'Aligned Daily Rituals', desc: 'Learn the optimal times for movement, rest, and mindfulness based on your unique energy.', color: 'primary' },
                  { num: 3, icon: Leaf, title: 'Gut Health Clarity', desc: 'Understand your digestive tendencies and how to support a thriving microbiome.', color: 'accent' },
                  { num: 4, icon: Sparkles, title: 'Deeper Self-Awareness', desc: 'Gain insight into your natural strengths, tendencies, and the root of your well-being.', color: 'primary' },
                ].map((item, index) => (
                  <div 
                    key={item.num}
                    className="group flex items-start gap-5 p-6 rounded-2xl bg-card/50 border border-border/30 hover:bg-card hover:border-border/50 hover:shadow-soft transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-${item.color}/10 flex items-center justify-center group-hover:bg-${item.color}/20 transition-colors`}>
                      <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </span>
                    <div>
                      <h3 className="font-cormorant text-xl font-medium text-foreground mb-2 group-hover:text-foreground transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-16">
                <Button className="btn-gold text-lg py-7 px-10 group" asChild>
                  <Link to="/email-collection">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Begin Your Journey
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default Index;