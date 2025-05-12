
import React from 'react';

const SkillsSection = () => {
  const frontendSkills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 92 },
    { name: "HTML/CSS", level: 95 },
    { name: "Next.js", level: 80 }
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 88 },
    { name: "Express", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "GraphQL", level: 75 }
  ];
  
  const tools = [
    { name: "Git & GitHub", level: 92 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 78 },
    { name: "Jest", level: 85 }
  ];

  return (
    <section id="skills" className="section bg-light-gray">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-6 bg-white rounded-lg shadow-md h-full">
              <h3 className="font-playfair text-2xl font-bold text-deep-blue mb-6">Frontend</h3>
              <div className="space-y-6">
                {frontendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mont font-medium text-deep-blue">{skill.name}</span>
                      <span className="font-mont text-soft-gray">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="p-6 bg-white rounded-lg shadow-md h-full">
              <h3 className="font-playfair text-2xl font-bold text-deep-blue mb-6">Backend</h3>
              <div className="space-y-6">
                {backendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mont font-medium text-deep-blue">{skill.name}</span>
                      <span className="font-mont text-soft-gray">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="p-6 bg-white rounded-lg shadow-md h-full">
              <h3 className="font-playfair text-2xl font-bold text-deep-blue mb-6">Tools & DevOps</h3>
              <div className="space-y-6">
                {tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-mont font-medium text-deep-blue">{skill.name}</span>
                      <span className="font-mont text-soft-gray">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional skills */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-playfair text-2xl font-bold text-deep-blue mb-6 text-center">Additional Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Responsive Design", "UI/UX", "RESTful APIs", "Agile/Scrum", 
              "Webpack", "Redux", "Authentication", "Web Security"].map((skill) => (
              <div key={skill} className="skill-item text-center">
                <span className="font-mont font-medium text-deep-blue">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
