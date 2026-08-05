// ============================================================================
// profileData.ts
// Single source of truth for all portfolio content, extracted from
// Sharad Chandel's resume. Update this file to change what renders across
// the site — no component should ever hardcode profile content directly.
// ============================================================================

import type { Profile, Skills, Experience, Project, Education } from '../types/profile';

export const profile: Profile = {
  name: 'Sharad Chandel',
  role: 'Software Engineer (Full-Stack)',
  location: 'Chandigarh, India',
  email: 'sharadchandel2005@gmail.com',
  phone: '+91 75908 89608',
  links: {
    linkedin: 'https://linkedin.com/in/sharadchandel2005',
    github: 'https://github.com/SharadJ19',
    leetcode: 'https://leetcode.com/u/SharadChandel',
    website: 'https://sharad.is-a.dev',
  },
  tagline:
    'Full-stack engineer building fast, scalable web platforms — from micro-frontend systems to real-time, event-driven apps.',
  osBadge: 'Arch + Sway (btw)',
};

export const skills: Skills = {
  languages: ['Java', 'JavaScript', 'TypeScript'],
  frontend: ['React', 'Angular', 'RxJS', 'Tailwind CSS', 'Responsive Design'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  databases: ['PostgreSQL', 'Redis'],
  tools: ['Docker', 'Git', 'Linux', 'Postman', 'Swagger', 'Jest', 'Selenium'],
  core: ['Data Structures & Algorithms', 'System Design', 'Microservices', 'Caching'],
};

export const experience: Experience[] = [
  {
    id: 'quark-software',
    role: 'Software Development Engineer Intern',
    company: 'Quark Software Inc.',
    location: 'Mohali',
    period: 'Jan 2026 – June 2026',
    highlights: [
      'Built and delivered 3 sidebar plugins using Angular and Node.js, reducing development time by 30%',
      'Designed a micro-frontend plugin system integrated with backend services, enabling independent deployments and scalability',
      'Developed scalable REST APIs with validation, rate limiting, and Redis caching, improving throughput by 20–30%',
      'Implemented secure authentication systems using JWT, OAuth2, and role-based access control across services',
      'Optimized frontend rendering (lazy loading, change detection) and backend queries, significantly reducing latency and UI lag',
      'Built 10+ reusable UI components and modular backend services, improving maintainability and developer productivity',
      'Developed real-time systems using WebSockets for live updates and asynchronous message processing',
      'Identified and fixed 20+ critical bugs using debugging and Selenium automation, improving release stability',
      'Contributed to CI/CD pipeline improvements by automating build, test, and deployment workflows',
      'Designed and optimized database schemas and indexing strategies, ensuring efficient data retrieval at scale',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'chowkspot',
    name: 'ChowkSpot',
    subtitle: 'Real-Time P2P Marketplace Platform',
    description:
      'A full-stack local service marketplace connecting customers and service providers across 80+ specialized service categories.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT', 'Render'],
    highlights: [
      'Designed a robust relational database schema using PostgreSQL and Drizzle ORM, implementing atomic transaction scripts for bulk seeding of users, bookings, and reviews',
      'Developed secure REST endpoints backed by JWT and a dual token-refresh interceptor architecture to enforce role-based access control',
      'Implemented bi-directional real-time event synchronization and client notifications using Socket.io WebSockets for live booking status transitions',
      'Handled cloud serverless spin-down latency by designing a custom health-check polling component with automated exponential fallback feedback',
      'Configured containerized production deployments via Docker and Infrastructure-as-Code YAML configurations targeting low-latency regional servers',
    ],
    links: {
      live: 'https://chowkspot.vercel.app',
      code: 'https://github.com/SharadJ19/chowkspot',
    },
  },
];

export const education: Education[] = [
  {
    id: 'chitkara',
    degree: 'B.E. Computer Science',
    institution: 'Chitkara University',
    location: 'Himachal Pradesh',
    period: 'Graduated July 2026',
    coursework: [
      'Data Structures',
      'Algorithms',
      'DBMS',
      'Object-Oriented Programming',
      'Distributed Systems',
    ],
  },
];
