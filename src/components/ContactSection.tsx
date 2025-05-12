
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-playfair text-2xl font-bold text-deep-blue mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <p className="font-mont text-soft-gray">
                I'm always open to discussing new projects, opportunities or partnerships. Feel free to reach out using the contact form or through any of the channels below.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-deep-blue mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="font-mont font-medium text-deep-blue">Email</p>
                    <a href="mailto:contact@harikrishnan.dev" className="font-mont text-soft-gray hover:text-deep-blue transition-colors">contact@harikrishnan.dev</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-deep-blue mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-mont font-medium text-deep-blue">Location</p>
                    <p className="font-mont text-soft-gray">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-mont font-medium text-deep-blue mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center text-deep-blue hover:bg-deep-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center text-deep-blue hover:bg-deep-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-light-gray flex items-center justify-center text-deep-blue hover:bg-deep-blue hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <form className="p-6 bg-light-gray rounded-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block font-mont font-medium text-deep-blue mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue" 
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-mont font-medium text-deep-blue mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue" 
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-mont font-medium text-deep-blue mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue" 
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-mont font-medium text-deep-blue mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-blue" 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-deep-blue text-white px-6 py-3 rounded-lg font-mont font-medium transition-all duration-300 hover:bg-opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
