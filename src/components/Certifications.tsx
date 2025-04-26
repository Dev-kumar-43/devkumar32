
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface CertificationInfo {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

const Certifications: React.FC = () => {
  const certifications: CertificationInfo[] = [
    {
      title: "Getting Started with AI and Machine learning",
      issuer: "LinkedIn",
      date: "Nov 2023-Dec 2023"
    },
    {
      title: "Programming using Java",
      issuer: "Cipher Schools",
      date: "Jun 2024-Jul 2024"
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "Coursera",
      date: "Nov 2023-Dec 2023"
    },
    {
      title: "Ethical Hacking Essentials",
      issuer: "Coursera",
      date: "Dec 2024-Jan 2025"
    }
  ];

  return (
    <section id="certifications" className="bg-background/50">
      <div className="container-inner">
        <h2 className="section-title">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-slate mb-1">{cert.issuer}</p>
                <p className="text-sm text-slate-light">{cert.date}</p>
                {cert.description && (
                  <p className="mt-2 text-slate">{cert.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
