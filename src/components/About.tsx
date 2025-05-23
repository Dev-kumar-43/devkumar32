import React from 'react';
import { Card } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container-inner">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 opacity-0 animate-slide-up">
              Hello! I'm Dev Kumar, a passionate Full-Stack Developer with 2+ years of experience in web development and scalable application design. 
              I specialize in MERN stack (MongoDB, Express.js, React.js, Node.js), developing solutions that blend seamless front-end interfaces with powerful back-end systems.
            </p>
            
            <p className="text-lg mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              My journey in development began when I discovered a love for solving real-world problems through code. Since then, 
              I've worked on diverse projects ranging from e-learning platforms and hospital management systems to secure encrypted QR code systems and interactive games, 
              always striving to create reliable, secure, and user-friendly solutions.
            </p>
            
            <p className="text-lg opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Beyond technical skills, I value collaboration, innovation, and continuous learning. 
              I believe that great software is built not just with code, but with empathy, curiosity, and a passion for creating impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Problem Solver", description: "I enjoy tackling complex challenges and finding elegant solutions." },
              { title: "Continuous Learner", description: "Always exploring new technologies and methodologies to enhance my skills." },
              { title: "Team Player", description: "I thrive in collaborative environments and value diverse perspectives." },
              { title: "Detail-Oriented", description: "I pay attention to the small details that make big differences in quality." }
            ].map((trait, index) => (
              <Card key={index} className="p-6 bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow opacity-0 animate-slide-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <h3 className="font-bold text-lg mb-2 text-navy">{trait.title}</h3>
                <p className="text-slate">{trait.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
