
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialLink?: string;
  badgeImage?: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "October 2023",
      description: "Comprehensive understanding of AWS architecture best practices and services for designing and deploying scalable systems.",
      credentialLink: "https://example.com/credential",
      badgeImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 2,
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "July 2022",
      description: "Certified in Scrum methodology implementation, project management, and agile practices.",
      credentialLink: "https://example.com/credential",
      badgeImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 3,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "May 2023",
      description: "Ability to design, build, and maintain data processing systems with a focus on security and scalability.",
      credentialLink: "https://example.com/credential",
      badgeImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 4,
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "January 2023",
      description: "Skills in designing, building, testing, and maintaining cloud applications on Microsoft Azure.",
      credentialLink: "https://example.com/credential",
      badgeImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300"
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
