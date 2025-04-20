
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you'd handle the form submission to a backend service
    console.log("Form submitted");
    alert("Thank you for your message! This is a demo form and doesn't actually send messages.");
  };

  return (
    <section id="contact" className="bg-navy text-white">
      <div className="container-inner">
        <h2 className="section-title text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="opacity-0 animate-slide-up">
            <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
            <p className="text-slate-light mb-8 max-w-xl">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  <Mail className="text-highlight" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-light">Email</p>
                  <a href="mailto:your.email@example.com" className="text-white hover:text-highlight transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  <Phone className="text-highlight" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-light">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-highlight transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy-light flex items-center justify-center">
                  <ExternalLink className="text-highlight" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-light">Social</p>
                  <div className="flex gap-4 mt-1">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-highlight transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-highlight transition-colors">
                      GitHub
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-highlight transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-navy-light border-navy-light shadow-lg opacity-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-slate-light">Name</label>
                    <Input id="name" placeholder="Your Name" required className="bg-navy-dark border-navy text-white focus-visible:ring-highlight" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-slate-light">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required className="bg-navy-dark border-navy text-white focus-visible:ring-highlight" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-slate-light">Subject</label>
                  <Input id="subject" placeholder="How can I help you?" required className="bg-navy-dark border-navy text-white focus-visible:ring-highlight" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-slate-light">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    required
                    className="bg-navy-dark border-navy text-white resize-none focus-visible:ring-highlight"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-highlight text-navy hover:bg-highlight/90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
