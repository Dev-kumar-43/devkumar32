
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState("education");
  
  return (
    <section id="resume" className="bg-background">
      <div className="container-inner">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="section-title mb-4 md:mb-0">Resume</h2>
          <Button className="flex items-center gap-2 bg-highlight text-navy hover:bg-highlight/90 self-start">
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
                  degree: "Master of Science in Computer Science",
                  institution: "University Name",
                  period: "2013 - 2015",
                  description: "Specialized in AI and Machine Learning. Thesis on 'Improving Neural Network Efficiency for Mobile Applications'.",
                  achievements: ["GPA: 3.85/4.0", "Teaching Assistant for Advanced Algorithms"]
                },
                {
                  degree: "Bachelor of Science in Software Engineering",
                  institution: "University Name",
                  period: "2009 - 2013",
                  description: "Comprehensive program covering software development lifecycle, data structures, algorithms, and system design.",
                  achievements: ["Dean's List", "Senior Project: E-commerce Platform"]
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
