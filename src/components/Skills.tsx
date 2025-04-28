import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  proficiency: number;
  category: 'languages' | 'frameworks' | 'tools' | 'soft';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: "JavaScript", proficiency: 90, category: "languages" },
    { name: "TypeScript", proficiency: 85, category: "languages" },
    { name: "Python", proficiency: 80, category: "languages" },
    { name: "Java", proficiency: 75, category: "languages" },
    { name: "SQL", proficiency: 85, category: "languages" },
    { name: "HTML/CSS", proficiency: 95, category: "languages" },
    
    // Frameworks/Libraries
    { name: "React", proficiency: 90, category: "frameworks" },
    { name: "Node.js", proficiency: 85, category: "frameworks" },
    { name: "Express.js", proficiency: 80, category: "frameworks" },
    { name: "Next.js", proficiency: 75, category: "frameworks" },
    
    // Tools/Platforms
    { name: "Git", proficiency: 90, category: "tools" },
    { name: "AWS", proficiency: 75, category: "tools" },
    { name: "MongoDB", proficiency: 85, category: "tools" },
    
    // Soft Skills
    { name: "Problem Solving", proficiency: 95, category: "soft" },
    { name: "Communication", proficiency: 90, category: "soft" },
    { name: "Team Leadership", proficiency: 85, category: "soft" },
    { name: "Project Management", proficiency: 80, category: "soft" },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryTitles = {
    languages: "Programming Languages",
    frameworks: "Frameworks & Libraries",
    tools: "Tools & Platforms",
    soft: "Soft Skills"
  };

  return (
    <section id="skills" className="bg-background">
      <div className="container-inner">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div key={category} className="opacity-0 animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-xl font-bold mb-6 border-l-4 border-highlight pl-3">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              
              <div className="space-y-6">
                {categorySkills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill}
                    delay={skillIndex * 0.1 + 0.2} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: Skill;
  delay: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => {
  return (
    <div className="opacity-0 animate-slide-up" style={{ animationDelay: `${delay}s` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm font-mono text-slate">{skill.proficiency}%</span>
      </div>
      <Progress 
        value={skill.proficiency} 
        className="h-2 bg-secondary"
      />
    </div>
  );
};

export default Skills;
