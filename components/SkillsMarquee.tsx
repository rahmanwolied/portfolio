import React from 'react';
import { SKILLS } from '../constants';

const SkillsMarquee: React.FC = () => {
  // Flatten skills for the marquee
  const allSkills = SKILLS.flatMap(cat => cat.skills);

  return (
    <div className="w-full bg-blueprint-600 py-3 overflow-hidden border-y border-blueprint-900 relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-blueprint-600 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blueprint-600 to-transparent z-10"></div>
        
        <div className="flex animate-marquee whitespace-nowrap">
            {/* Repeat list twice for seamless loop */}
            {[...allSkills, ...allSkills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="flex items-center mx-6">
                <div className="w-2 h-2 bg-white rotate-45 mr-3"></div>
                <span className="text-white font-mono text-sm md:text-base font-bold uppercase tracking-wider">
                {skill}
                </span>
            </div>
            ))}
        </div>
    </div>
  );
};

export default SkillsMarquee;
