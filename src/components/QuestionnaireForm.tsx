import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { doshaQuestions, DoshaScore, calculateDoshaType } from '@/utils/questionnaireData';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const QuestionnaireForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isEmbedded = location.pathname.includes('embedded');
  
  const totalQuestions = doshaQuestions.length;
  const progress = Math.round((currentStep / totalQuestions) * 100);
  const currentQuestion = doshaQuestions.find(q => q.id === currentStep);

  useEffect(() => {
    setSelectedAnswer(answers[currentStep] || null);
  }, [currentStep, answers]);

  const handleSelectAnswer = (dosha: string) => {
    setSelectedAnswer(dosha);
  };

  const handleNext = () => {
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

  const calculateResults = async () => {
    setFormSubmitted(true);
    
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
    
    const doshaType = calculateDoshaType(scores);
    
    const resultsPath = isEmbedded ? '/embedded-results' : '/results';
    navigate(resultsPath, { state: { scores } });
    
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      try {
        await supabase.functions.invoke('quiz-complete', {
          body: {
            email: userEmail,
            consent: true,
            dosha_result: doshaType,
            scores,
            source: 'quiz_completion'
          }
        });
        localStorage.removeItem('userEmail');
      } catch (err) {
        console.error('Failed to send quiz results:', err);
      }
    }
  };

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center p-8 sm:p-12">
        <div className="text-muted-foreground text-sm sm:text-base">Loading your journey...</div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      {/* Progress Section */}
      <div className="mb-6 sm:mb-8">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <span className="text-xs sm:text-sm text-muted-foreground">
            Question {currentStep} of {totalQuestions}
          </span>
          <span className="text-xs sm:text-sm font-medium text-primary">
            {progress}% complete
          </span>
        </div>
        <div className="progress-calm">
          <div 
            className="progress-calm-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Take your time — there are no wrong answers
        </p>
      </div>

      {/* Question Card */}
      <Card className="p-4 sm:p-6 md:p-8 shadow-soft rounded-xl sm:rounded-2xl border-border/50 card-calm">
        <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-medium text-foreground mb-5 sm:mb-8 leading-relaxed">
          {currentQuestion.text}
        </h3>
        
        <RadioGroup 
          className="space-y-2 sm:space-y-3" 
          value={selectedAnswer || undefined}
          onValueChange={setSelectedAnswer}
        >
          {['vata', 'pitta', 'kapha'].map((dosha) => (
            <div 
              key={dosha}
              className={`
                flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl cursor-pointer
                transition-soft border-2
                ${selectedAnswer === dosha 
                  ? 'border-accent bg-accent/5' 
                  : 'border-transparent bg-secondary/30 hover:bg-secondary/50'
                }
              `}
              onClick={() => handleSelectAnswer(dosha)}
            >
              <RadioGroupItem 
                value={dosha} 
                id={dosha}
                className="border-muted-foreground data-[state=checked]:border-accent data-[state=checked]:bg-accent flex-shrink-0"
              />
              <Label 
                htmlFor={dosha} 
                className="flex-1 cursor-pointer text-foreground leading-relaxed text-sm sm:text-base"
              >
                {currentQuestion.options[dosha as keyof typeof currentQuestion.options]}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-border/50">
          <Button 
            variant="ghost" 
            onClick={handlePrevious} 
            disabled={currentStep === 1}
            className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg sm:rounded-xl gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden xs:inline">Previous</span>
          </Button>
          
          {currentStep < totalQuestions ? (
            <Button 
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="btn-teal gap-1 sm:gap-2 text-sm sm:text-base"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button 
              onClick={calculateResults}
              disabled={!selectedAnswer || formSubmitted}
              className="btn-gold gap-1 sm:gap-2 text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4" />
              See My Results
            </Button>
          )}
        </div>
      </Card>
      
      {/* Encouraging Footer */}
      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
        Your answers help us understand your unique constitution
      </p>
    </div>
  );
};

export default QuestionnaireForm;
