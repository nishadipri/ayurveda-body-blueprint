import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border/30 bg-background/70 backdrop-blur-md sticky top-0 z-50">
      <div className="ayur-container py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="Ayur Glow" 
            className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
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

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="ayur-container py-4 px-4 flex flex-col gap-3">
            <Link 
              to="/dosha-info" 
              className="text-sm text-muted-foreground hover:text-foreground transition-soft py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Doshas
            </Link>
            <Link 
              to="/book" 
              className="text-sm text-muted-foreground hover:text-foreground transition-soft py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
            <Link 
              to="/email-collection" 
              className="inline-flex items-center justify-center gap-1.5 text-sm px-4 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-soft mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Take Quiz
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
