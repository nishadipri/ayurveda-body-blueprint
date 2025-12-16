import { Leaf, Sun, Sparkles, Heart, Circle } from "lucide-react";

interface DecorativeBackgroundProps {
  variant?: "default" | "hero" | "minimal";
}

const DecorativeBackground = ({ variant = "default" }: DecorativeBackgroundProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Glowing orbs */}
      <div className="orb orb-primary w-[400px] h-[400px] -top-20 -left-20 animate-glow-pulse" />
      <div className="orb orb-accent w-[500px] h-[500px] -bottom-32 -right-32 animate-glow-pulse" style={{ animationDelay: '2s' }} />
      
      {variant === "hero" && (
        <>
          <div className="orb orb-primary w-[300px] h-[300px] top-1/3 right-10 animate-breathe" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
            <div className="w-full h-full border border-primary/10 rounded-full animate-gentle-spin" />
            <div className="absolute inset-8 border border-accent/10 rounded-full animate-gentle-spin" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
            <div className="absolute inset-16 border border-primary/5 rounded-full animate-gentle-spin" style={{ animationDuration: '30s' }} />
          </div>
        </>
      )}

      {/* Floating decorative icons */}
      {variant !== "minimal" && (
        <>
          <Leaf className="absolute top-24 right-[15%] w-5 h-5 text-primary/15 animate-float" style={{ animationDelay: '0s' }} />
          <Sun className="absolute top-40 left-[10%] w-4 h-4 text-accent/15 animate-float" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute bottom-32 right-[20%] w-4 h-4 text-primary/10 animate-float" style={{ animationDelay: '1s' }} />
          <Heart className="absolute bottom-48 left-[15%] w-4 h-4 text-accent/10 animate-float" style={{ animationDelay: '1.5s' }} />
          <Circle className="absolute top-1/2 right-[8%] w-3 h-3 text-primary/10 animate-float" style={{ animationDelay: '2s' }} />
        </>
      )}

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};

export default DecorativeBackground;
