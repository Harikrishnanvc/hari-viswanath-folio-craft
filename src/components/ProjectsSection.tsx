
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with product management, cart functionality, payment integration, and user profiles.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, task assignments, and progress tracking.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Healthcare Analytics Dashboard",
      description: "Interactive dashboard visualizing healthcare data with filtering, dynamic charts, and exportable reports.",
      tech: ["React", "D3.js", "Express", "GraphQL", "AWS"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              
              <div className="project-overlay text-white">
                <h3 className="font-playfair text-2xl font-bold mb-3">{project.title}</h3>
                <p className="font-mont text-sm mb-4 text-center">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="border border-white px-4 py-2 rounded-lg text-sm font-mont transition-all duration-300 hover:bg-white hover:text-deep-blue">
                  View Project
                </button>
              </div>
              
              <div className="p-6 bg-white border border-light-gray border-t-0 rounded-b-lg">
                <h3 className="font-playfair text-xl font-bold text-deep-blue mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs font-mont text-soft-gray">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-mont text-soft-gray">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="font-mont text-soft-gray mb-6">
            Explore more of my work on GitHub
          </p>
          <a 
            href="#" 
            className="inline-block border-2 border-deep-blue text-deep-blue px-8 py-3 rounded-lg font-mont font-medium transition-all duration-300 hover:bg-deep-blue hover:text-white"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
