import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Header = () => {
  return (
    <header className="border-b border-border/30 bg-background/70 backdrop-blur-md sticky top-0 z-50">
      <div className="ayur-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src={logoLight} 
            alt="Ayur Glow" 
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
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