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
export const HERO_SUBTITLE = "Senior Flutter Developer with a decade of experience building scalable, high-performance mobile solutions and leading engineering teams.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Digital Banking Platform',
    description: 'Lead engineer for a Canadian savings-account app. Built the product from scratch using Clean Architecture, Bloc, and TDD, contributing to backend design and security.',
    tags: ['Flutter', 'Bloc', 'TDD', 'CI/CD', 'Fintech'],
    imageUrl: 'https://picsum.photos/800/600?random=10',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Enterprise Management Suite',
    description: 'Spearheaded the release of 2 major enterprise applications. Implemented OAuth security, reduced unauthorized access by 30%, and optimized performance by 18%.',
    tags: ['Flutter', 'Firebase Auth', 'OAuth', 'Git Flow'],
    imageUrl: 'https://picsum.photos/800/600?random=20',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Multi-Lingual Social App',
    description: 'Enhanced a social platform with Google Services integration, custom push notifications, and internationalization for 3 distinct language markets.',
    tags: ['Flutter', 'Google Maps', 'Localization', 'Notifications'],
    imageUrl: 'https://picsum.photos/800/600?random=30',
    link: '#',
    github: '#'
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

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Senior Flutter Engineer',
    company: 'Appx Labz, Canada',
    period: '12/2023 – Present',
    description: [
      'Contributed to creating a savings-account mobile app product from scratch.',
      'Led 3 projects and successfully published high-quality applications on App Store and Google Play.',
      'Utilized Bloc, TDD, Git Flow, and Firebase to boost app performance and initiated CI/CD pipelines.',
      'Developed unit/widget tests for 50+ functions, improving app quality.'
    ]
  },
  {
    id: '2',
    role: 'Senior Flutter Developer',
    company: 'Plasco, Asaluyeh',
    period: '06/2021 – 10/2023',
    description: [
      'Led a team of developers, facilitating communication between UI/UX and backend teams.',
      'Conducted 20+ code reviews and mentoring sessions, increasing code quality by 30%.',
      'Reduced unauthorized access by 30% with OAuth and Firebase auth.',
      'Initiated CI/CD pipelines, reducing deployment errors by 25%.'
    ]
  },
  {
    id: '3',
    role: 'Mid-level Flutter Developer',
    company: 'Raimon, Isfahan',
    period: '04/2020 – 05/2021',
    description: [
      'Enhanced app performance with Google service integration (20% higher retention).',
      'Implemented GitHub for version control, achieving a 35% increase in efficiency.',
      'Crafted custom push notification solutions boosting engagement by 20%.',
      'Implemented internationalization for 3 language audiences.'
    ]
  },
  {
    id: '4',
    role: 'Mid-level Flutter Developer',
    company: 'Alget, Amsterdam',
    period: '04/2019 – 03/2020',
    description: [
      'Shifted to GetX state management and MVC architecture, slashing loading times by 27%.',
      'Managed app localization and support for 2 languages/regions.',
      'Refactored old code, cutting redundant lines by 10%.'
    ]
  },
  {
    id: '5',
    role: 'Mobile App Developer',
    company: 'Atron, Isfahan',
    period: '08/2017 – 03/2019',
    description: [
      'Co-founded the Atron team; successfully developed 3 personal applications.',
      'Improved app accessibility, enhancing inclusivity and making it 30% more user-friendly.'
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for a portfolio website. The owner is Amin Jafari, a Senior Flutter Developer.
Here is his profile:
- **Name**: Amin Jafari
- **Role**: Senior Flutter Engineer / Mobile Developer
- **Summary**: 10 years of experience in mobile/web development, 7 years focused on Flutter. Passionate about scalable learning solutions, performance optimization, and clean architecture.
- **Contact**: dev.amin.jafari@gmail.com | (+98) 9133265739 | Canada/Remote.
- **Tech Stack**: Flutter, Dart, Bloc, Provider, GetIt, TDD, Firebase (Auth, Cloud Messaging), Google Maps, CI/CD, GitHub Actions, RESTful API, Web3 API.
- **Experience Highlights**: 
  - Currently Senior Engineer at Appx Labz (Canada), building banking apps from scratch.
  - Previously led teams at Plasco, improving code quality by 30%.
  - Experience with internationalization, complex animations, and backend integration.
- **Education**: Bachelor's in Computer Software from Payam Noor, Isfahan (2015).
- **Languages**: English (Full Professional), Persian (Native).

Your goal is to answer visitor questions about Amin politely and professionally.
If asked about contact info, you can provide the email or suggest using the form.
Highlight his expertise in Flutter, TDD, and CI/CD when asked about technical skills.
Keep answers concise and helpful.
`;