
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface DoshaCardProps {
  title: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  color: string;
}

const DoshaCard = ({ title, subtitle, description, characteristics, color }: DoshaCardProps) => {
  return (
    <Card className={`border-2 ${color} overflow-hidden hover:shadow-lg transition-all duration-300`}>
      
      <CardHeader>
        <CardTitle className="font-lora text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-700">{description}</p>
        <h4 className="font-medium mb-2">Key Characteristics:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {characteristics.map((trait, index) => (
            <li key={index} className="text-gray-700">{trait}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DoshaCard;
