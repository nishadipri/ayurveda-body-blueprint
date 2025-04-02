
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ayurveda-sand/50 border-t border-ayurveda-sand py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-lora text-xl font-semibold mb-4 text-ayurveda-forest">Ayurveda Blueprint</h3>
            <p className="text-ayurveda-forest/80 mb-4">
              Discover your unique Ayurvedic constitution and receive personalized wellness recommendations.
            </p>
          </div>
          
          <div>
            <h4 className="font-lora text-lg font-semibold mb-4 text-ayurveda-forest">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-ayurveda-forest/80 hover:text-ayurveda-terra transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/questionnaire" className="text-ayurveda-forest/80 hover:text-ayurveda-terra transition-colors">
                  Dosha Quiz
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-lora text-lg font-semibold mb-4 text-ayurveda-forest">Connect</h4>
            <p className="text-ayurveda-forest/80 mb-2">
              Sign up for our newsletter to receive Ayurvedic wellness tips.
            </p>
            <div className="flex mt-4">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-4 py-2 border border-ayurveda-sand rounded-l-md focus:outline-none focus:border-ayurveda-leaf"
              />
              <button className="bg-ayurveda-leaf hover:bg-ayurveda-forest text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-ayurveda-sand/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ayurveda-forest/70 text-sm">
            © {new Date().getFullYear()} Ayurveda Blueprint. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-ayurveda-forest/70 hover:text-ayurveda-terra text-sm">Privacy Policy</a>
            <a href="#" className="text-ayurveda-forest/70 hover:text-ayurveda-terra text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
