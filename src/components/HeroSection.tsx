
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-light-gray opacity-90"></div>
      </div>
      
      <div className="container mx-auto text-center z-10 mt-16">
        <p className="font-mont text-soft-gray text-lg mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>Hello, I am</p>
        <h1
            className="font-mont text-deep-blue opacity-0 animate-fade-in"
            style={{
              fontSize: 'clamp(3rem, 6vw, 10rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-4px',
              marginBottom: '2rem',
              animationDelay: '0.4s'
            }}
          >
            Harikrishnan Viswanath
          </h1>

        <h2 className="font-mont text-2xl md:text-3xl text-deep-blue font-light mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Fullstack Developer
        </h2>
        <p className="font-mont text-soft-gray text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          Crafting modern, scalable digital experiences
        </p>
        <div className="flex justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="#contact" className="bg-deep-blue text-white px-8 py-3 rounded-lg font-mont font-medium transition-all duration-300 hover:bg-opacity-90 hover:translate-y-[-2px]">
            Get in touch
          </a>
          <a href="#projects" className="border-2 border-deep-blue text-deep-blue px-8 py-3 rounded-lg font-mont font-medium transition-all duration-300 hover:bg-deep-blue hover:text-white hover:translate-y-[-2px]">
            View projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-deep-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
