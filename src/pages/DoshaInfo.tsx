
import React from 'react';
import Header from '@/components/Header';
import DoshaCard from '@/components/DoshaCard';
import { doshaDescriptions } from '@/utils/questionnaireData';

const DoshaInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-ayurveda-sand/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="font-lora text-3xl md:text-4xl font-semibold text-ayurveda-forest mb-4">
                Understanding the Doshas
              </h1>
              <p className="text-lg text-ayurveda-forest/80">
                Explore the three fundamental energies that govern our physical and mental processes according to Ayurveda.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-12">
              {Object.entries(doshaDescriptions).map(([key, dosha]) => {
                // Only display the three main doshas
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
                      <div className="mt-6 space-y-4">
                        <div>
                          <h3 className="text-lg font-medium text-ayurveda-forest mb-2">Diet Suggestions:</h3>
                          <p className="text-gray-700">{dosha.recommendations.diet}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-ayurveda-forest mb-2">Lifestyle Practices:</h3>
                          <p className="text-gray-700">{dosha.recommendations.lifestyle}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-ayurveda-forest mb-2">Beneficial Herbs:</h3>
                          <p className="text-gray-700">{dosha.recommendations.herbs}</p>
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
