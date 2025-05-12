
import React from 'react';

const CareerSection = () => {
  const careers = [
    {
      id: 1,
      role: "Senior Fullstack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing best practices for code quality and performance."
    },
    {
      id: 2,
      role: "Fullstack Developer",
      company: "WebFusion Inc.",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects using JavaScript frameworks, RESTful APIs, and database systems. Collaborated with UX designers to implement responsive, accessible interfaces."
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Digital Innovators",
      period: "2018 - 2020",
      description: "Developed responsive web applications with modern JavaScript frameworks. Optimized web performance and implemented component-based architecture."
    },
    {
      id: 4,
      role: "Web Development Intern",
      company: "CreativeTech Studios",
      period: "2018",
      description: "Assisted in developing web applications and gained practical experience with HTML, CSS, JavaScript, and basic backend technologies."
    }
  ];

  return (
    <section id="career" className="section bg-light-gray">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Career Timeline</h2>
        
        <div className="mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-soft-gray bg-opacity-20 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {careers.map((item, index) => (
                <div 
                  key={item.id}
                  className={`relative opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-deep-blue rounded-full transform translate-x-[-50%] z-10"></div>
                    
                    {/* Timeline dot (mobile) */}
                    <div className="md:hidden absolute left-0 top-0 w-4 h-4 bg-deep-blue rounded-full z-10"></div>
                    
                    {/* Date */}
                    <div className="md:w-1/2 text-center md:text-right px-6">
                      <span className="font-mont text-soft-gray">{item.period}</span>
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="font-playfair text-xl font-bold text-deep-blue">{item.role}</h3>
                      <p className="font-mont text-soft-gray font-medium mb-3">{item.company}</p>
                      <p className="font-mont text-soft-gray">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
