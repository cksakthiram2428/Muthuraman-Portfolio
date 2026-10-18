export type SkillProficiency = 'Experienced' | 'Working Knowledge' | 'Familiar';

export type SkillCategory = 
  | 'Programming Languages'
  | 'Frontend & UI/UX'
  | 'Backend & Architecture'
  | 'Databases & Cloud Stores'
  | 'AI, ML & Vision'
  | 'Dev Tools & Platforms';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: SkillProficiency;
  iconName: string;
  focusArea: string;
  appliedIn: string;
  coreCapabilities: string[];
  certificationBadge?: string;
  experienceDuration?: string;
}

export interface ProjectDetail {
  problem: string;
  approach: string;
  technology: string[];
  implementation: string[];
  result: string;
  whatILearned: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  myContribution: string;
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  details: ProjectDetail;
  isCollection?: boolean;
  subProjects?: {
    title: string;
    description: string;
    tech: string[];
  }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  level: string;
  icon: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  mode: string;
  location?: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  field: string;
  year: string;
  cgpa?: string;
  location: string;
  keyCoursework?: string[];
}

export interface PhilosophyStep {
  step: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface RepositoryItem {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
}
