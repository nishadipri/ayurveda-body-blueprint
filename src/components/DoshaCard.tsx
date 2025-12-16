import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wind, Flame, Droplets } from 'lucide-react';

export interface DoshaCardProps {
  title: string;
  subtitle: string;
  description: string;
  characteristics: string[];
  color: string;
}

const DoshaCard = ({ title, subtitle, description, characteristics, color }: DoshaCardProps) => {
  // Map old colors to new design system
  const colorMap: Record<string, { border: string; bg: string; icon: string }> = {
    'border-ayurveda-sky': { 
      border: 'border-l-[hsl(200,35%,65%)]', 
      bg: 'from-[hsl(200,35%,65%,0.1)] to-transparent',
      icon: 'text-[hsl(200,35%,65%)]'
    },
    'border-ayurveda-terra': { 
      border: 'border-l-[hsl(25,55%,55%)]', 
      bg: 'from-[hsl(25,55%,55%,0.1)] to-transparent',
      icon: 'text-[hsl(25,55%,55%)]'
    },
    'border-ayurveda-leaf': { 
      border: 'border-l-[hsl(145,30%,45%)]', 
      bg: 'from-[hsl(145,30%,45%,0.1)] to-transparent',
      icon: 'text-[hsl(145,30%,45%)]'
    }
  };
  
  const colorStyle = colorMap[color] || { border: 'border-l-accent', bg: 'from-accent/10 to-transparent', icon: 'text-accent' };
  
  const getIcon = () => {
    if (title.toLowerCase().includes('vata')) return <Wind className={`w-6 h-6 ${colorStyle.icon}`} />;
    if (title.toLowerCase().includes('pitta')) return <Flame className={`w-6 h-6 ${colorStyle.icon}`} />;
    if (title.toLowerCase().includes('kapha')) return <Droplets className={`w-6 h-6 ${colorStyle.icon}`} />;
    return null;
  };
  
  return (
    <Card className={`group relative border-0 border-l-4 ${colorStyle.border} shadow-soft rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorStyle.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="font-cormorant text-2xl text-foreground">{title}</CardTitle>
          <div className="p-2 rounded-xl bg-muted/50 group-hover:bg-background/80 transition-colors">
            {getIcon()}
          </div>
        </div>
        <CardDescription className="text-sm text-muted-foreground">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="mb-4 text-muted-foreground text-sm leading-relaxed">{description}</p>
        <h4 className="font-medium text-foreground text-sm mb-3">Key Characteristics:</h4>
        <ul className="space-y-2">
          {characteristics.slice(0, 3).map((trait, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground/80 transition-colors">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colorStyle.icon.replace('text-', 'bg-')}`} />
              {trait}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DoshaCard;