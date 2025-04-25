
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
      title: "Fitness Activity Tracker",
      description: "A comprehensive web application designed to boost fitness activity tracking with team collaboration features. Includes real-time activity monitoring, team challenges, and progress analytics.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600",
      technologies: ["React.js", "Node.js", "MongoDB", "WebSocket"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/yourusername/fitness-tracker",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Java Quiz Platform",
      description: "An interactive GUI quiz application featuring time-limited questions, multiple view modes, and comprehensive score tracking. Built with Java Swing for a responsive desktop experience.",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=600",
      technologies: ["Java", "Swing", "AWT"],
      codeLink: "https://github.com/yourusername/java-quiz",
      category: "other"
    },
    {
      id: 3,
      title: "Advanced Antivirus Solution",
      description: "A sophisticated security tool leveraging VirusTotal API and heuristic analysis to detect malicious files and suspicious behavior patterns in real-time.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "VirusTotal API", "ML Analytics"],
      codeLink: "https://github.com/yourusername/antivirus",
      category: "backend"
    },
    {
      id: 4,
      title: "E-Learning Platform",
      description: "A comprehensive educational website supporting multiple courses, interactive class booking, and progress tracking. Features responsive design and intuitive user interface.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/yourusername/elearning",
      category: "frontend"
    },
    {
      id: 5,
      title: "Hospital Management System",
      description: "Full-stack solution for hospital data management with CRUD operations, user authentication, and an AI-powered chatbot for patient inquiries using RAG-based QnA system.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/yourusername/hospital-management",
      category: "fullstack"
    },
    {
      id: 6,
      title: "Secure Chat Application",
      description: "Advanced messaging platform with adjustable encryption strength based on message sensitivity. Implements multiple encryption algorithms for varying security levels.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600",
      technologies: ["Python", "AES", "RSA", "Cryptography"],
      codeLink: "https://github.com/yourusername/secure-chat",
      category: "backend"
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
