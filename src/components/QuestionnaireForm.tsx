
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { doshaQuestions, DoshaScore } from '@/utils/questionnaireData';

const QuestionnaireForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if we're in embedded mode
  const isEmbedded = location.pathname.includes('embedded');
  
  const totalQuestions = doshaQuestions.length;
  const progress = Math.round((currentStep / totalQuestions) * 100);
  const currentQuestion = doshaQuestions.find(q => q.id === currentStep);

  useEffect(() => {
    // When changing question, set the selected answer based on any previously saved answer
    setSelectedAnswer(answers[currentStep] || null);
  }, [currentStep, answers]);

  const handleSelectAnswer = (dosha: string) => {
    setSelectedAnswer(dosha);
  };

  const handleNext = () => {
    // Save the selected answer
    if (selectedAnswer) {
      setAnswers(prev => ({ ...prev, [currentStep]: selectedAnswer }));
      
      if (currentStep < totalQuestions) {
        setCurrentStep(currentStep + 1);
      } else {
        calculateResults();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResults = () => {
    setFormSubmitted(true);
    
    // Calculate dosha scores
    const scores: DoshaScore = {
      vata: 0,
      pitta: 0,
      kapha: 0
    };
    
    Object.keys(answers).forEach(questionId => {
      const dosha = answers[Number(questionId)];
      if (dosha in scores) {
        scores[dosha as keyof DoshaScore]++;
      }
    });
    
    // Navigate to the appropriate results page based on whether we're in embedded mode
    const resultsPath = isEmbedded ? '/embedded-results' : '/results';
    navigate(resultsPath, { state: { scores } });
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="animate-fade-up">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Question {currentStep} of {totalQuestions}</span>
          <span className="text-sm font-medium">{progress}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-6 shadow-md">
        <h3 className="text-xl font-medium mb-6">{currentQuestion.text}</h3>
        
        <RadioGroup 
          className="space-y-4" 
          value={selectedAnswer || undefined}
          onValueChange={setSelectedAnswer}
        >
          <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-ayurveda-sand/20 transition-colors cursor-pointer" 
               onClick={() => handleSelectAnswer('vata')}>
            <RadioGroupItem value="vata" id="vata" />
            <Label htmlFor="vata" className="flex-1 cursor-pointer">{currentQuestion.options.vata}</Label>
          </div>
          
          <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-ayurveda-sand/20 transition-colors cursor-pointer"
               onClick={() => handleSelectAnswer('pitta')}>
            <RadioGroupItem value="pitta" id="pitta" />
            <Label htmlFor="pitta" className="flex-1 cursor-pointer">{currentQuestion.options.pitta}</Label>
          </div>
          
          <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-ayurveda-sand/20 transition-colors cursor-pointer"
               onClick={() => handleSelectAnswer('kapha')}>
            <RadioGroupItem value="kapha" id="kapha" />
            <Label htmlFor="kapha" className="flex-1 cursor-pointer">{currentQuestion.options.kapha}</Label>
          </div>
        </RadioGroup>

        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrevious} 
            disabled={currentStep === 1}
            className="border-ayurveda-leaf text-ayurveda-leaf hover:bg-ayurveda-leaf/10"
          >
            Previous
          </Button>
          
          {currentStep < totalQuestions ? (
            <Button 
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white"
            >
              Next
            </Button>
          ) : (
            <Button 
              onClick={calculateResults}
              disabled={!selectedAnswer || formSubmitted}
              className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white"
            >
              See Results
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuestionnaireForm;
