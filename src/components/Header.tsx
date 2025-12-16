import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/30 bg-background/70 backdrop-blur-md sticky top-0 z-50">
      <div className="ayur-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="p-1.5 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <Leaf className="w-5 h-5 text-accent transition-soft group-hover:rotate-12" />
          </div>
          <span className="font-cormorant text-2xl font-semibold text-foreground">
            Ayur<span className="gradient-text-gold">Glow</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/dosha-info" 
            className="text-sm text-muted-foreground hover:text-foreground transition-soft magic-underline"
          >
            About Doshas
          </Link>
          <Link 
            to="/book" 
            className="text-sm text-muted-foreground hover:text-foreground transition-soft magic-underline"
          >
            Book a Call
          </Link>
          <Link 
            to="/email-collection" 
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-soft"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Take Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;