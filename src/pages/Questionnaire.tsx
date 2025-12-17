import React from 'react';
import Header from '@/components/Header';
import QuestionnaireForm from '@/components/QuestionnaireForm';
import DecorativeBackground from '@/components/DecorativeBackground';
import { Leaf, Sparkles } from 'lucide-react';

const Questionnaire = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        <DecorativeBackground variant="minimal" />
        
        <section className="relative z-10 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
          <div className="ayur-container max-w-2xl">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-10 animate-fade-in-up">
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary/40" />
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-primary/40" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4 sm:mb-5 border border-primary/20">
                <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-primary">Dosha Quiz</span>
              </div>
              
              <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-3 sm:mb-4">
                Discover Your <span className="gradient-text">Constitution</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed px-2">
                Answer based on your natural tendencies throughout life, not just how you feel today. There are no right or wrong answers.
              </p>
            </div>
            
            <QuestionnaireForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Questionnaire;
