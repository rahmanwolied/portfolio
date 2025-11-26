export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  name: string;
  tech: string[];
  description: string;
  link?: string;
  type?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
}
