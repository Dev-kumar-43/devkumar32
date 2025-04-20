
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="container-inner flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-foreground">
          Portfolio<span className="text-highlight">.</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#resume" className="nav-link">Resume</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#certifications" className="nav-link">Certifications</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li>
              <Button asChild variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                <a href="#contact">Contact</a>
              </Button>
            </li>
          </ul>
        </nav>

        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-navy/95 z-50 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <button 
            className="absolute top-6 right-6 text-highlight"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <nav>
            <ul className="flex flex-col space-y-6 items-center text-xl">
              <li><a href="#about" className="nav-link" onClick={toggleMobileMenu}>About</a></li>
              <li><a href="#resume" className="nav-link" onClick={toggleMobileMenu}>Resume</a></li>
              <li><a href="#projects" className="nav-link" onClick={toggleMobileMenu}>Projects</a></li>
              <li><a href="#certifications" className="nav-link" onClick={toggleMobileMenu}>Certifications</a></li>
              <li><a href="#skills" className="nav-link" onClick={toggleMobileMenu}>Skills</a></li>
              <li>
                <Button asChild variant="outline" className="border-highlight text-highlight hover:bg-highlight/10 mt-4">
                  <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
