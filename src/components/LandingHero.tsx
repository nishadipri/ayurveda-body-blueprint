
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LandingHero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-semibold leading-tight text-ayurveda-forest mb-6">
              Discover Your Ayurveda Body Blueprint
            </h1>
            <p className="text-lg text-ayurveda-forest/80 mb-8 max-w-lg">
              Unlock the ancient wisdom of Ayurveda to understand your unique body constitution and receive personalized wellness recommendations tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white text-lg py-6 px-8">
                <Link to="/email-collection">Take the Dosha Quiz</Link>
              </Button>
              
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-ayurveda-sage to-ayurveda-sky/30 rounded-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
              <div className="relative z-10 p-8 text-center">
                <span className="inline-block bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-lora text-ayurveda-forest text-lg">
                  Balance • Harmony • Wellness
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
