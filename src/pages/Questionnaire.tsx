import React from 'react';
import Header from '@/components/Header';
import QuestionnaireForm from '@/components/QuestionnaireForm';
import { Leaf } from 'lucide-react';

const Questionnaire = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow questionnaire-container">
        <section className="py-12 md:py-16">
          <div className="ayur-container max-w-2xl">
            {/* Header */}
            <div className="text-center mb-10 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Dosha Quiz</span>
              </div>
              <h1 className="font-cormorant text-3xl md:text-4xl font-medium text-foreground mb-4">
                Discover Your Constitution
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
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