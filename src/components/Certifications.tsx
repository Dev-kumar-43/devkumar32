import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      title: "Getting Started with AI and Machine Learning",
      issuer: "LinkedIn",
      date: "Nov 2023 - Dec 2023",
      description: "Comprehensive understanding of AI and ML fundamentals, including practical implementation and best practices.",
      credentialLink: "https://example.com/credential"
    },
    {
      id: 2,
      title: "Programming using Java",
      issuer: "Cipher Schools",
      date: "Jun 2024 - Jul 2024",
      description: "Advanced Java programming concepts, including OOP, multithreading, and GUI development.",
      credentialLink: "https://example.com/credential"
    },
    {
      id: 3,
      title: "Generative AI with Large Language Models",
      issuer: "Coursera",
      date: "Nov 2023 - Dec 2023",
      description: "Deep dive into LLM architecture, training, and implementation strategies.",
      credentialLink: "https://example.com/credential"
    },
    {
      id: 4,
      title: "Ethical Hacking Essentials",
      issuer: "Coursera",
      date: "Dec 2024 - Jan 2025",
      description: "Comprehensive training in cybersecurity principles and ethical hacking methodologies.",
      credentialLink: "https://example.com/credential"
    }
  ];

  return (
    <section id="certifications" className="bg-secondary/50">
      <div className="container-inner">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  return (
    <Card className="overflow-hidden bg-white opacity-0 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
      <div className="flex flex-col md:flex-row">
        {certification.badgeImage && (
          <div className="w-full md:w-1/3 lg:w-1/4 bg-navy/5">
            <img 
              src={certification.badgeImage} 
              alt={`${certification.title} badge`} 
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        )}
        
        <CardContent className={`p-6 flex-1 ${!certification.badgeImage ? 'w-full' : ''}`}>
          <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
            <h3 className="text-lg font-bold">{certification.title}</h3>
            <Badge variant="outline" className="bg-secondary text-slate font-mono">
              {certification.date}
            </Badge>
          </div>
          
          <p className="text-slate font-medium mb-3">{certification.issuer}</p>
          <p className="text-slate-light mb-4">{certification.description}</p>
          
          {certification.credentialLink && (
            <a 
              href={certification.credentialLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-navy hover:text-highlight transition-colors"
            >
              Verify Credential <ExternalLink size={14} />
            </a>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default Certifications;
