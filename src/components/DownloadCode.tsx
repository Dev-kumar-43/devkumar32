
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DownloadCode: React.FC = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    const skills = document.getElementById('skills')?.innerText;
    
    const content = `// Skills Section Code\n${skills || ''}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-code.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    toast({
      title: "Download Started",
      description: "Your code is being downloaded.",
    });
  };

  return (
    <Button
      onClick={handleDownload}
      className="fixed bottom-4 right-4 bg-highlight text-primary hover:bg-highlight/90 z-50"
    >
      <Download className="mr-2 h-4 w-4" />
      Download Code
    </Button>
  );
};

export default DownloadCode;
