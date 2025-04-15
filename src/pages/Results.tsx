import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DoshaScore, calculateDoshaType, doshaDescriptions } from '@/utils/questionnaireData';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get scores from location state or redirect if missing
  const scores = location.state?.scores as DoshaScore | undefined;
  
  useEffect(() => {
    if (!scores) {
      navigate('/questionnaire');
    }
  }, [scores, navigate]);
  
  if (!scores) {
    return null;
  }
  
  // Calculate dosha type based on scores
  const doshaType = calculateDoshaType(scores);
  const doshaInfo = doshaDescriptions[doshaType];
  
  // Prepare chart data
  const { vata, pitta, kapha } = scores;
  const total = vata + pitta + kapha;
  const chartData = [
    { name: 'Vata', value: vata, percentage: Math.round((vata / total) * 100) },
    { name: 'Pitta', value: pitta, percentage: Math.round((pitta / total) * 100) },
    { name: 'Kapha', value: kapha, percentage: Math.round((kapha / total) * 100) }
  ];
  
  // Colors for chart
  const COLORS = ['#AAC8DF', '#C17A4E', '#6A8D73'];
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-md rounded-md border border-gray-200">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value} (${payload[0].payload.percentage}%)`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-ayurveda-sand/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="font-lora text-3xl md:text-4xl font-semibold text-ayurveda-forest mb-4">
                Your Ayurvedic Constitution Results
              </h1>
              <p className="text-lg text-ayurveda-forest/80">
                Based on your responses, we've analyzed your Ayurvedic body blueprint. 
                Here's what we discovered about your unique constitution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-1">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Your Dosha Profile</CardTitle>
                    <CardDescription>Distribution of your doshas</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, percentage }) => `${name}: ${percentage}%`}
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardHeader className={`${doshaInfo.color.replace('border', 'bg')} bg-opacity-20`}>
                    <CardTitle className="text-2xl">Your Primary Constitution: {doshaInfo.title}</CardTitle>
                    <CardDescription className="text-base font-medium">{doshaInfo.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4">{doshaInfo.description}</p>
                    
                    <h3 className="text-lg font-medium mb-2">Your Key Characteristics:</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      {doshaInfo.characteristics.map((trait, index) => (
                        <li key={index}>{trait}</li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h3 className="text-lg font-medium mb-3">Personalized Recommendations:</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-ayurveda-forest">Diet Suggestions:</h4>
                          <p className="text-gray-700">{doshaInfo.recommendations.diet}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-ayurveda-forest">Lifestyle Practices:</h4>
                          <p className="text-gray-700">{doshaInfo.recommendations.lifestyle}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-ayurveda-forest">Beneficial Herbs:</h4>
                          <p className="text-gray-700">{doshaInfo.recommendations.herbs}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center">
              <p className="mb-6 text-gray-700">
                Interested in discovering more about your body type and how you can enhance your well-being? We're here to help with personalized advice on diet and daily routines. Contact us to begin your customized wellness journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-ayurveda-leaf text-ayurveda-leaf hover:bg-ayurveda-leaf/10">
                  Learn More About Your Dosha
                </Button>
                <Button className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white" onClick={() => navigate('/questionnaire')}>
                  Retake the Quiz
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Results;
