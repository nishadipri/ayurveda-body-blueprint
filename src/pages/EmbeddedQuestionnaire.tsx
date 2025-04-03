import React from 'react';
import QuestionnaireForm from '@/components/QuestionnaireForm';

const EmbeddedQuestionnaire = () => {
  return (
    <div className="embedded-questionnaire py-6">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-lora text-3xl md:text-4xl font-semibold text-ayurveda-forest mb-4">
            Discover Your Ayurvedic Constitution
          </h1>
          <p className="text-lg text-ayurveda-forest/80 max-w-2xl mx-auto">
            Answer the following 20 questions honestly based on your natural tendencies throughout your life, not just your current state. This will help determine your unique Ayur Glow body blueprint.
          </p>
        </div>
        
        <QuestionnaireForm />
      </div>
    </div>
  );
};

export default EmbeddedQuestionnaire;