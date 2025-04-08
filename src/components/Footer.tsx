
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ayurveda-forest text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-lora text-xl font-semibold">
              Ayur Glow
            </Link>
            <p className="text-sm mt-2 text-white/80">
              Reclaim balance, Feel grounded, Live in flow
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/ayur_glow222/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-ayurveda-clay transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61573170218070" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-ayurveda-clay transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@ayurglow222?_t=ZS-8vN2OqkHNv6&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-ayurveda-clay transition-colors"
                aria-label="TikTok"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12.5v5a2.5 2.5 0 0 1-5 0v-7.5a5 5 0 0 1 10 0v1.5a1 1 0 0 0 2 0V6a3 3 0 0 1 6 0v9.5a5.5 5.5 0 0 1-11 0V12"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center text-sm">
              <Phone size={16} className="mr-2" />
              <span>+45 22227553</span>
            </div>
            <p className="text-sm mt-2 text-white/80">Website: Coming soon</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} Ayur Glow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
