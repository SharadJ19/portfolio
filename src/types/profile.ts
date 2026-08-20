// ============================================================================
// FILE: src/types/profile.ts
// ============================================================================

export interface ProfileLinks {
  linkedin: string;
  github: string;
  leetcode: string;
  resume: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  links: ProfileLinks;
  tagline: string;
  osBadge: string;
}

export interface Skills {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  tools: string[];
  core: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  logo?: string;
}

export interface ProjectLinks {
  live?: string;
  code?: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  highlights: string[];
  links: ProjectLinks;
  logo?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  logo?: string;
}
