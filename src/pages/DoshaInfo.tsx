import React from 'react';
import Header from '@/components/Header';
import DoshaCard from '@/components/DoshaCard';
import { doshaDescriptions } from '@/utils/questionnaireData';

const DoshaInfo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-10 sm:py-12 md:py-16 bg-secondary/30">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 sm:mb-4">
                Understanding the Doshas
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Explore the three fundamental energies that govern our physical and mental processes according to Ayurveda.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {Object.entries(doshaDescriptions).map(([key, dosha]) => {
                if (key === 'vata' || key === 'pitta' || key === 'kapha') {
                  return (
                    <div key={key} className="max-w-4xl mx-auto w-full">
                      <DoshaCard
                        title={dosha.title}
                        subtitle={dosha.subtitle}
                        description={dosha.description}
                        characteristics={dosha.characteristics}
                        color={dosha.color}
                      />
                      <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 px-2 sm:px-0">
                        <div>
                          <h3 className="text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">Diet Suggestions:</h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{dosha.recommendations.diet}</p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">Lifestyle Practices:</h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{dosha.recommendations.lifestyle}</p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">Beneficial Herbs:</h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{dosha.recommendations.herbs}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DoshaInfo;
