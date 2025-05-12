
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white shadow-md' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <a href="#" className="font-playfair text-xl md:text-2xl font-bold text-deep-blue">HV.</a>
        
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#career" className="nav-link">Career</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        
        <button className="md:hidden text-deep-blue">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
