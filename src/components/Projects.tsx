
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'other';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product listings, shopping cart, and secure checkout. Integrated with payment gateway and inventory management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "An intuitive task management system with drag-and-drop functionality, task prioritization, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project",
      category: "frontend"
    },
    {
      id: 3,
      title: "API Gateway Service",
      description: "A scalable API gateway that handles authentication, rate limiting, and request routing for a microservices architecture.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
      technologies: ["Express.js", "Redis", "Docker", "Kubernetes"],
      codeLink: "https://github.com/yourusername/project",
      category: "backend"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing professional skills and projects with dark/light mode and animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project",
      category: "frontend"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Other', value: 'other' }
  ];

  return (
    <section id="projects" className="bg-navy text-white">
      <div className="container-inner">
        <h2 className="section-title text-white">My Projects</h2>
        
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-4 py-2 rounded-full transition-all",
                activeFilter === filter.value 
                  ? "bg-highlight text-navy font-medium"
                  : "bg-navy-light text-slate-light hover:bg-navy-light/70"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Card className={cn(
      "overflow-hidden bg-navy-light border-navy-light transition-all duration-300 hover:shadow-xl hover:shadow-highlight/10 opacity-0 animate-slide-up",
    )}
    style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <Badge key={idx} className="bg-highlight/20 text-highlight border-none hover:bg-highlight/30">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge className="bg-highlight/20 text-highlight border-none hover:bg-highlight/30">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-light mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex gap-3">
          {project.liveLink && (
            <Button asChild variant="outline" size="sm" className="border-slate/30 hover:border-highlight text-slate hover:text-highlight">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Eye size={16} /> Live Demo
              </a>
            </Button>
          )}
          {project.codeLink && (
            <Button asChild variant="outline" size="sm" className="border-slate/30 hover:border-highlight text-slate hover:text-highlight">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Code size={16} /> View Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
