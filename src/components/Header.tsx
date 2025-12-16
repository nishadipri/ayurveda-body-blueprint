import React from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="ayur-container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 text-accent transition-soft group-hover:rotate-12" />
          <span className="font-cormorant text-2xl font-semibold text-foreground">
            AyurGlow
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/dosha-info" 
            className="text-sm text-muted-foreground hover:text-foreground transition-soft"
          >
            About Doshas
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;