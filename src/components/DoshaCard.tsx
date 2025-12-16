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
  // Map old colors to new design system
  const colorMap: Record<string, string> = {
    'border-ayurveda-sky': 'border-l-[hsl(200,35%,65%)]',
    'border-ayurveda-terra': 'border-l-[hsl(25,55%,55%)]',
    'border-ayurveda-leaf': 'border-l-[hsl(145,30%,45%)]'
  };
  
  const borderColor = colorMap[color] || 'border-l-accent';
  
  return (
    <Card className={`border-0 border-l-4 ${borderColor} shadow-soft rounded-xl overflow-hidden card-calm bg-card`}>
      <CardHeader className="pb-3">
        <CardTitle className="font-cormorant text-2xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground text-sm leading-relaxed">{description}</p>
        <h4 className="font-medium text-foreground text-sm mb-2">Key Characteristics:</h4>
        <ul className="space-y-1">
          {characteristics.slice(0, 3).map((trait, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              {trait}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DoshaCard;