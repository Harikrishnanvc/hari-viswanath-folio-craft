
import React from 'react';
import IMG from './IMG_2187 2 Large.jpeg'

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square max-w-md mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-light-gray">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-light-gray flex items-center justify-center">
              <img
                src={IMG}
                alt="HV"
                className="w-full h-auto"
              />
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-deep-blue mb-6">
              Fullstack Developer with 4+ years of experience
            </h3>
            
            <div className="space-y-4 text-lg text-soft-gray">
              <p>
                I specialize in building scalable, user-friendly web applications using modern technologies and best practices. My approach combines technical expertise with a keen eye for design and user experience.
              </p>
              <p>
                With a background in both front-end and back-end development, I can take projects from concept to completion, ensuring high performance, accessibility, and maintainability.
              </p>
              <p>
                I'm passionate about clean code, efficient systems, and creating digital solutions that make a positive impact. I continuously expand my skillset to stay at the cutting edge of web development.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-light-gray text-deep-blue rounded-full text-sm font-medium hover:bg-deep-blue hover:text-white transition-colors duration-300">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-light-gray text-deep-blue rounded-full text-sm font-medium hover:bg-deep-blue hover:text-white transition-colors duration-300">
                Clean Code Advocate
              </span>
              <span className="px-4 py-2 bg-light-gray text-deep-blue rounded-full text-sm font-medium hover:bg-deep-blue hover:text-white transition-colors duration-300">
                Performance Optimizer
              </span>
              <span className="px-4 py-2 bg-light-gray text-deep-blue rounded-full text-sm font-medium hover:bg-deep-blue hover:text-white transition-colors duration-300">
                UX Enthusiast
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
