
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState("education");
  const { toast } = useToast();
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/6583728e-3390-46d7-880e-a445e650ad22.png';
    link.download = 'Dev_Kumar_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download Started",
      description: "Your CV is being downloaded.",
    });
  };
  
  return (
    <section id="resume" className="bg-background">
      <div className="container-inner">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="section-title mb-4 md:mb-0">Resume</h2>
          <Button onClick={handleDownloadCV} className="flex items-center gap-2 bg-highlight text-navy hover:bg-highlight/90">
            <Download size={18} /> Download CV
          </Button>
        </div>
        
        <Tabs defaultValue="education" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="education" className="mt-6">
            <div className="space-y-6">
              {[
                {
                  degree: "B.Tech in Computer Science",
                  institution: "Lovely Professional University",
                  period: "2022 - 2026",
                  description: "Comprehensive program covering software development, data structures, algorithms, and system design.",
                  achievements: ["Active member of the Tech Club", "Participated in various hackathons"]
                },
                {
                  degree: "Higher Secondary Education (XII)",
                  institution: "Suraj School",
                  period: "2021 - 2022",
                  description: "Completed higher secondary education with focus on Mathematics and Computer Science.",
                  achievements: ["School prefect", "Tech Club coordinator"]
                }
              ].map((edu, index) => (
                <EducationCard key={index} {...edu} delay={index * 0.2} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
  delay: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, institution, period, description, achievements, delay }) => {
  return (
    <Card className="opacity-0 animate-slide-up" style={{ animationDelay: `${delay}s` }}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{degree}</h3>
            <p className="text-slate-light">{institution}</p>
          </div>
          <span className="text-sm font-mono text-slate bg-secondary/50 px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
            {period}
          </span>
        </div>
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-1 text-slate">
          {achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Resume;
