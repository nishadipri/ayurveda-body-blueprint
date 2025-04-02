
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dosha Quiz", path: "/questionnaire" },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-ayurveda-sand sticky top-0 z-40">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-lora text-2xl font-semibold text-ayurveda-forest">Ayurveda Blueprint</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-ayurveda-forest hover:text-ayurveda-terra transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white">
            <Link to="/questionnaire">Take the Quiz</Link>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-lg font-medium text-ayurveda-forest hover:text-ayurveda-terra py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white mt-4">
                <Link to="/questionnaire">Take the Quiz</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
