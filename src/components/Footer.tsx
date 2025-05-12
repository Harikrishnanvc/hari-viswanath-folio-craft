
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-playfair text-2xl font-bold">HV.</span>
            <p className="font-mont text-sm mt-2 text-white text-opacity-70">
              Crafting modern, scalable digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-white text-opacity-70 hover:text-opacity-100 transition-opacity">
                LinkedIn
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-opacity-100 transition-opacity">
                GitHub
              </a>
              <a href="#" className="text-white text-opacity-70 hover:text-opacity-100 transition-opacity">
                Twitter
              </a>
            </div>
            <p className="font-mont text-sm text-white text-opacity-50">
              © {new Date().getFullYear()} Harikrishnan Viswanath. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
