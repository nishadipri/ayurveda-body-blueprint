
import React from 'react';
import Header from '@/components/Header';
import LandingHero from '@/components/LandingHero';
import DoshaCard from '@/components/DoshaCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { doshaDescriptions } from '@/utils/questionnaireData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow">
        <LandingHero />
        
        <section className="py-16 bg-ayurveda-sand/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-lora text-3xl md:text-4xl font-semibold text-ayurveda-forest mb-4">
                Understanding Your Ayurvedic Constitution
              </h2>
              <p className="text-lg text-ayurveda-forest/80">
                In Ayurveda, your constitution (Prakrti) is determined by the balance of three doshas: Vata, Pitta, and Kapha.
                Knowing your dominant dosha helps you make lifestyle choices that maintain balance and promote wellbeing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
            
            <div className="text-center">
              <Button className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white text-lg py-6 px-8">
                <Link to="/questionnaire">Discover Your Dosha Now</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-ayurveda-clay/20 to-ayurveda-terra/20 rounded-2xl">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1820&q=80')] bg-cover bg-center opacity-80"></div>
                </div>
              </div>
              
              <div>
                <h2 className="font-lora text-3xl md:text-4xl font-semibold text-ayurveda-forest mb-6">
                  Why Understanding Your Dosha Matters
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-ayurveda-leaf text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
                    <div className="ml-4">
                      <h3 className="font-lora text-xl font-medium text-ayurveda-forest">Personalized Nutrition</h3>
                      <p className="text-ayurveda-forest/80 mt-1">Discover which foods balance your unique constitution and which ones might cause imbalances.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-ayurveda-leaf text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
                    <div className="ml-4">
                      <h3 className="font-lora text-xl font-medium text-ayurveda-forest">Tailored Daily Routines</h3>
                      <p className="text-ayurveda-forest/80 mt-1">Learn the best times for activities like exercise, work, and rest based on your dosha.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-ayurveda-leaf text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">3</span>
                    <div className="ml-4">
                      <h3 className="font-lora text-xl font-medium text-ayurveda-forest">Preventative Health</h3>
                      <p className="text-ayurveda-forest/80 mt-1">Understand which imbalances you're prone to and how to prevent them before they manifest as discomfort.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-ayurveda-leaf text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1">4</span>
                    <div className="ml-4">
                      <h3 className="font-lora text-xl font-medium text-ayurveda-forest">Deeper Self-Understanding</h3>
                      <p className="text-ayurveda-forest/80 mt-1">Gain insights into your natural tendencies, strengths, and challenges from an Ayurvedic perspective.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="bg-ayurveda-clay hover:bg-ayurveda-terra text-white text-lg py-6 px-8">
                    <Link to="/questionnaire">Take the Dosha Quiz</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default Index;
