
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-highlight font-mono mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hi there, I'm
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="text-foreground">Your Full Name</span>
              <span className="text-gradient">.</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              I build exceptional digital experiences.
            </h2>
            <p className="text-slate-light text-lg mb-8 max-w-xl opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              I'm a [your profession] specializing in [your specialization]. 
              Currently, I'm focused on [current focus or project].
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button asChild className="bg-highlight text-navy hover:bg-highlight/90">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-highlight/20 p-1">
                <div className="w-full h-full rounded-full bg-navy overflow-hidden">
                  <img 
                    src="/lovable-uploads/0c313d02-5c20-4795-b165-09db54ccd122.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover object-top opacity-80"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-highlight/20 to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block opacity-0 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <a href="#about" className="flex flex-col items-center text-slate hover:text-highlight transition-colors">
            <span className="text-sm mb-2 font-mono">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
