import React from 'react';
import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import DoshaCard from '@/components/DoshaCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { doshaDescriptions } from '@/utils/questionnaireData';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header/>
      <main className="flex-grow">
        <LandingHero />
        
        {/* Dosha Overview Section */}
        <section className="py-20 bg-secondary/30">
          <div className="ayur-container">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-cormorant text-3xl md:text-4xl font-medium text-foreground mb-4">
                The Three Doshas
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In Ayurveda, your unique constitution is shaped by three vital energies. Understanding your dominant dosha unlocks the path to lasting balance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              <DoshaCard 
                title={doshaDescriptions.vata.title} 
                subtitle={doshaDescriptions.vata.subtitle}
                description={doshaDescriptions.vata.description}
                characteristics={doshaDescriptions.vata.characteristics}
                color={doshaDescriptions.vata.color}
              />
              <DoshaCard 
                title={doshaDescriptions.pitta.title} 
                subtitle={doshaDescriptions.pitta.subtitle}
                description={doshaDescriptions.pitta.description}
                characteristics={doshaDescriptions.pitta.characteristics}
                color={doshaDescriptions.pitta.color}
              />
              <DoshaCard 
                title={doshaDescriptions.kapha.title} 
                subtitle={doshaDescriptions.kapha.subtitle}
                description={doshaDescriptions.kapha.description}
                characteristics={doshaDescriptions.kapha.characteristics}
                color={doshaDescriptions.kapha.color}
              />
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20">
          <div className="ayur-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="font-cormorant text-3xl md:text-4xl font-medium text-foreground mb-4">
                  Why Your Dosha Matters
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ancient wisdom meets modern wellness. Understanding your constitution transforms how you eat, rest, and live.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-medium">
                    1
                  </span>
                  <div>
                    <h3 className="font-cormorant text-xl font-medium text-foreground mb-1">Personalized Nutrition</h3>
                    <p className="text-muted-foreground">Discover which foods nourish your constitution and which ones create imbalance in your gut.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-medium">
                    2
                  </span>
                  <div>
                    <h3 className="font-cormorant text-xl font-medium text-foreground mb-1">Aligned Daily Rituals</h3>
                    <p className="text-muted-foreground">Learn the optimal times for movement, rest, and mindfulness based on your unique energy.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-medium">
                    3
                  </span>
                  <div>
                    <h3 className="font-cormorant text-xl font-medium text-foreground mb-1">Gut Health Clarity</h3>
                    <p className="text-muted-foreground">Understand your digestive tendencies and how to support a thriving microbiome.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-medium">
                    4
                  </span>
                  <div>
                    <h3 className="font-cormorant text-xl font-medium text-foreground mb-1">Deeper Self-Awareness</h3>
                    <p className="text-muted-foreground">Gain insight into your natural strengths, tendencies, and the root of your well-being.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-14">
                <Button className="btn-gold text-lg py-7 px-10" asChild>
                  <Link to="/email-collection">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Begin Your Journey
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