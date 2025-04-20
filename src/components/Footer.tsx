
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-slate-light py-10">
      <div className="container-inner">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-white">
              Portfolio<span className="text-highlight">.</span>
            </a>
            <p className="mt-2 text-sm">Building exceptional digital experiences.</p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#about" className="text-sm hover:text-highlight transition-colors">About</a>
            <a href="#resume" className="text-sm hover:text-highlight transition-colors">Resume</a>
            <a href="#projects" className="text-sm hover:text-highlight transition-colors">Projects</a>
            <a href="#certifications" className="text-sm hover:text-highlight transition-colors">Certifications</a>
            <a href="#skills" className="text-sm hover:text-highlight transition-colors">Skills</a>
            <a href="#contact" className="text-sm hover:text-highlight transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-navy-light flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm">© {currentYear} Your Name. All rights reserved.</p>
          
          <p className="text-xs mt-2 md:mt-0">
            Designed and built with <span className="text-highlight">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
