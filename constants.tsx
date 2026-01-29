import React from 'react';
import { Project, Experience, Skill } from './types';
import { 
  Code, 
  Smartphone, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Terminal, 
  Cpu
} from 'lucide-react';

export const HERO_TITLE = "Architecting Mobile Excellence";
export const HERO_SUBTITLE = "Senior Mobile Engineer with 10 years of programming experience, including 6.5+ years delivering commercial Flutter applications. Specialized in scalable FinTech solutions using Clean Architecture and Bloc.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Superlist — Savings & Banking',
    description: 'Joined the initial Canadian savings-account team as mobile engineer. Built the mobile app from scratch; led 3 projects and published high-quality apps on App Store and Google Play. Design system, Bloc, Git Flow, 50+ unit/widget tests.',
    tags: ['Flutter', 'Bloc', 'TDD', 'CI/CD', 'Fintech'],
    imageUrl: 'https://picsum.photos/800/600?random=10',
    link: '#',
    github: undefined
  },
  {
    id: '2',
    title: 'Natrium — Enterprise Apps',
    description: 'Led app developers; released 2 applications with app-store coordination. OAuth & Firebase auth (30% fewer unauthorized access), Bloc refactor (18% performance), TDD (23% fewer bugs), CI/CD (25% fewer deployment errors), WebSocket push.',
    tags: ['Flutter', 'Firebase Auth', 'OAuth', 'WebSocket', 'Git Flow'],
    imageUrl: 'https://picsum.photos/800/600?random=20',
    link: '#',
    github: undefined
  },
  {
    id: '3',
    title: 'Anytime Podcast Player',
    description: 'Google service integration (20% retention, 15% satisfaction), GitHub collaboration (35% efficiency), custom push notifications (20% engagement), 10+ custom widgets/animations, internationalization for 3 languages.',
    tags: ['Flutter', 'Google Services', 'Localization', 'Push Notifications'],
    imageUrl: 'https://picsum.photos/800/600?random=30',
    link: '#',
    github: undefined
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter & Dart', icon: <Smartphone className="w-5 h-5" />, level: 98, category: 'mobile' },
  { name: 'Bloc & Provider', icon: <Code className="w-5 h-5" />, level: 95, category: 'mobile' },
  { name: 'Firebase & GCP', icon: <Server className="w-5 h-5" />, level: 90, category: 'backend' },
  { name: 'CI/CD & Git Flow', icon: <GitBranch className="w-5 h-5" />, level: 92, category: 'tools' },
  { name: 'TDD & Unit Testing', icon: <Terminal className="w-5 h-5" />, level: 88, category: 'tools' },
  { name: 'RESTful & Web3 API', icon: <Database className="w-5 h-5" />, level: 85, category: 'backend' },
  { name: 'Performance Opt.', icon: <Cpu className="w-5 h-5" />, level: 90, category: 'mobile' },
  { name: 'Responsive UI/UX', icon: <Layout className="w-5 h-5" />, level: 95, category: 'frontend' },
];

/** Resume skills list (flat) for display where needed */
export const SKILL_TAGS = [
  'Flutter', 'Web3 API', 'GitHub Action', 'Google API', 'Firebase notification', 'Cloud Messaging',
  'Google Maps', 'Android', 'Git', 'Google Cloud Platform', 'Bloc', 'Shared preferences',
  'Performance Optimization', 'Hive', 'iOS', 'API Development', 'Localization', 'GetIt', 'TDD',
  'MVC', 'JWT authentication', 'Responsive UI', 'Windows', 'Block chain API', 'Provider', 'Git Flow',
  'CI/CD', 'RESTful API', 'WordPress API', 'Dart', 'macOS',
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Senior Flutter Engineer',
    company: 'Superlist',
    period: '12/2023 – Present',
    description: [
      'Joined the initial savings-account Canadian team as mobile engineer; contributed to creating the mobile app from scratch.',
      'Led three projects and successfully published high-quality applications on Apple App Store and Google Play.',
      'Collaborated on app design system and robust, efficient backend architecture.',
      'Standardized development workflow using Bloc and Git Flow; wrote unit and widget tests for 50+ critical functions.'
    ]
  },
  {
    id: '2',
    role: 'Senior Flutter Engineer',
    company: 'Natrium',
    period: '06/2021 – 10/2023',
    description: [
      'Led a team of application developers; communicated between UI/UX designers and backend developers.',
      'Spearheaded release of 2 applications, coordinating with app stores for timely, error-free launches.',
      'Conducted 20+ code reviews and 10+ mentoring sessions; 30% increase in team code quality.',
      'Reduced unauthorized access by 30% with OAuth and Firebase auth; refactored to Bloc (18% performance gain).',
      'TDD and automated testing (23% fewer post-release bugs); CI/CD pipelines (25% fewer deployment errors).',
      'Integrated WebSocket (Go backend) for instant push notifications and reduced battery usage.'
    ]
  },
  {
    id: '3',
    role: 'Mid-level Flutter Developer',
    company: 'Anytime Podcast Player',
    period: '04/2020 – 05/2021',
    description: [
      'Enhanced app performance with Google service integration; 20% higher user retention, 15% greater satisfaction.',
      'Implemented GitHub for version control and team collaboration; 35% increase in development efficiency.',
      'Crafted custom push notification solutions, boosting user engagement by 20%.',
      'Created 10+ custom widgets and animations; internationalization for 3 language audiences.'
    ]
  },
  {
    id: '4',
    role: 'Mid-level Flutter Developer',
    company: 'Alget',
    period: '04/2019 – 03/2020',
    description: [
      'Refactored old code, cutting redundant lines by 10%.',
      'Shifted to GetX state management and MVC architecture, slashing loading times by 27%.',
      'Managed app localization and support for 2 languages and regions.',
      'Integrated social sharing and deep linking; improved functionality and user satisfaction with Google Maps and Firebase.'
    ]
  },
  {
    id: '5',
    role: 'Mobile App Developer',
    company: 'Atron',
    period: '08/2017 – 03/2019',
    description: [
      'Co-founded Atron; led development of 3 personal applications and 2 client projects.',
      'Improved app accessibility, enhancing inclusivity and making it 30% more user-friendly.',
      'Organized 5+ customer onboarding meetings to ensure satisfaction and product adoption.'
    ]
  }
];

/** Education entry for display in Experience section */
export const EDUCATION = {
  degree: "Bachelor's in Computer Software",
  school: 'Payam Noor, Isfahan',
  date: '09/2015',
} as const;

/** Languages for display (e.g. in Hero or Experience) */
export const LANGUAGES = [
  { name: 'English', level: 'Full Professional Proficiency' },
  { name: 'Persian', level: 'Native or Bilingual Proficiency' },
] as const;

/** Resume PDF path: file lives in public/resume.pdf and is served statically at /resume.pdf */
export const RESUME_PDF_URL = '/resume.pdf';

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for a portfolio website. The owner is Amin Jafari, a Senior Flutter Developer.
Here is his profile:
- **Name**: Amin Jafari
- **Role**: Senior Flutter Engineer / Mobile Developer
- **Summary**: 10 years of programming experience, 6.5+ years commercial Flutter. Specialized in scalable FinTech solutions using Clean Architecture and Bloc. Technical lead with TDD and CI/CD optimization.
- **Contact**: dev@aminjafari.me | LinkedIn: linkedin.com/in/aminjafari-dev | Stack Overflow: stackoverflow.com/aminjafari-dev | GitHub: github.com/aminjafari-dev
- **Tech Stack**: Flutter, Dart, Bloc, Provider, GetIt, TDD, Firebase (Auth, Cloud Messaging), Google Maps, CI/CD, GitHub Actions, RESTful API, Web3 API, Hive, JWT, MVC.
- **Experience**: Senior Flutter Engineer at Superlist (Canada, savings app from scratch); previously Senior at Natrium (2 apps, OAuth, WebSocket, 30% code quality gain); Anytime Podcast Player; Alget; Atron (co-founder).
- **Education**: Bachelor's in Computer Software, Payam Noor, Isfahan (2015).
- **Languages**: English (Full Professional), Persian (Native).

Answer visitor questions about Amin politely and professionally. For contact, suggest the form or dev@aminjafari.me. Highlight Flutter, TDD, Clean Architecture, and CI/CD when asked about skills. Keep answers concise.
`;