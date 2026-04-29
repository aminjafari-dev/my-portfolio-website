import React from 'react';
import { Project, Experience, Skill, ProcessStep } from './types';
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
export const HERO_SUBTITLE =
  "Flutter developer with a decade across mobile and web—including seven years shipping production Flutter for mobile and web. I focus on scalable products, performance, Bloc and TDD, Firebase and CI/CD, and technical leadership from team lead to org-wide development standards.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Appx Labz',
    description:
      'Joined the initial Canadian savings-account team as a mobile engineer and helped build the product from scratch. Led three projects and shipped to the App Store and Google Play; contributed to the design system and backend architecture. Bloc, TDD, Git Flow, Firebase, CI/CD, and 50+ unit and widget tests.',
    tags: ['Flutter', 'Bloc', 'TDD', 'CI/CD', 'FinTech'],
    imageUrl: '/1.jpeg',
    link: '#',
    github: undefined,
    category: 'Savings & Banking',
  },
  {
    id: '2',
    title: 'Plasco',
    description:
      'Led application developers between UI/UX and backend; coordinated two store releases. OAuth and Firebase auth cut unauthorized access; Bloc, TDD, and Git Flow improved quality; CI/CD cut deployment errors; mentoring and code reviews lifted team standards.',
    tags: ['Flutter', 'Firebase Auth', 'OAuth', 'Git Flow', 'CI/CD'],
    imageUrl: '/2.jpeg',
    link: '#',
    github: undefined,
    category: 'Enterprise Apps',
  },
  {
    id: '3',
    title: 'Raimon',
    description:
      'Google services integration improved retention and satisfaction; GitHub workflows sped collaboration; custom push notifications and 10+ custom widgets and animations; responsive layouts for diverse devices; internationalization for three languages.',
    tags: ['Flutter', 'Google Services', 'Localization', 'Push Notifications'],
    imageUrl: '/3.jpeg',
    link: '#',
    github: undefined,
    category: 'Consumer Flutter',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Flutter & Dart', icon: <Smartphone className="w-5 h-5" />, level: 98, category: 'mobile' },
  { name: 'Bloc & Provider', icon: <Code className="w-5 h-5" />, level: 95, category: 'mobile' },
  { name: 'Firebase & GCP', icon: <Server className="w-5 h-5" />, level: 90, category: 'backend' },
  { name: 'CI/CD & Git Flow', icon: <GitBranch className="w-5 h-5" />, level: 92, category: 'tools' },
  { name: 'TDD & Unit Testing', icon: <Terminal className="w-5 h-5" />, level: 88, category: 'tools' },
  { name: 'TypeScript, React & Node', icon: <Database className="w-5 h-5" />, level: 82, category: 'frontend' },
  { name: 'Performance Opt.', icon: <Cpu className="w-5 h-5" />, level: 90, category: 'mobile' },
  { name: 'Responsive UI/UX', icon: <Layout className="w-5 h-5" />, level: 95, category: 'frontend' },
];

/** Resume skills list (flat) for display where needed */
export const SKILL_TAGS = [
  'Flutter',
  'Web3 API',
  'GitHub Action',
  'Google API',
  'Firebase notification',
  'Cloud Messaging',
  'Google Maps',
  'TypeScript',
  'Git',
  'Google Cloud Platform',
  'Lifecycle of application',
  'Bloc',
  'Shared preferences',
  'Performance Optimization',
  'Hive',
  '.Net Framework',
  'API Development',
  'Localization',
  'GetIt',
  'TDD',
  'MVC',
  'JWT authentication',
  'Responsive UI',
  'Node.js',
  'Block chain API',
  'Provider',
  'Git Flow',
  'CI/CD',
  'RESTful API',
  'WordPress API',
  'Dart',
  'React',
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Full-stack developer',
    company: 'Entekhab Group, Esfahan',
    period: '07/2025 – Present',
    description: [
      'Led the Flutter team at Entekhab Group; introduced Cursor and other AI coding tools and showed how the team could finish complex tasks faster, cleaner, and with far less manual effort.',
      "Gained leadership's attention by demonstrating how AI could transform the daily workflow; was asked to write the official Cursor rules for the entire organization.",
      'Took on core responsibility for high-performance, best-practice Cursor rules and development guidelines for the full program team—Flutter mobile, .NET backend, and React/Node.js frontend.',
      'Designed and documented structured, scalable rules so every developer could write cleaner, more efficient, and more maintainable code across the tech stack.',
      'Worked closely with Flutter, backend, and frontend teams to implement modern AI-assisted practices, improving development speed and code quality while fostering continuous learning and innovation.'
    ]
  },
  {
    id: '2',
    role: 'Senior Flutter Engineer',
    company: 'Appx Labz, Canada',
    period: '12/2023 – 06/2025',
    description: [
      'Joined the initial savings-account Canadian team as a mobile engineer and contributed to creating the mobile app product from scratch.',
      'Led three projects and successfully published high-quality applications on both the Apple App Store and Google Play.',
      "Collaborated on developing the app's design system and contributed to creating a robust, efficient, and optimized backend architecture for the application.",
      "Maintained close collaboration with the UI and QA teams to ensure the application's optimal performance.",
      'Utilized Bloc, TDD, Git Flow, and Firebase to boost app performance and initiated continuous integration and deployment (CI/CD) pipelines.',
      'Developed unit tests and widget tests for over 50 functions, improving app quality.'
    ]
  },
  {
    id: '3',
    role: 'Senior Flutter Developer',
    company: 'Plasco, Asaluyeh',
    period: '06/2021 – 10/2023',
    description: [
      'Led a team of application developers, communicating between UI/UX designers and backend developers.',
      'Spearheaded the release process of 2 applications, including coordinating with app stores for timely and error-free launches.',
      'Conducted 20+ code reviews and facilitated 10+ mentoring sessions, leading to a 30% increase in team code quality.',
      'Reduced unauthorized access by 30% with OAuth and Firebase auth.',
      'Utilized Bloc, TDD, Git Flow, and Firebase to boost app performance and enhance code quality by 18%.',
      'Developed unit tests and widget tests, improving app quality with a 23% reduction in bugs.',
      'Initiated CI/CD pipelines, reducing deployment errors by 25%.'
    ]
  },
  {
    id: '4',
    role: 'Mid-level Flutter Developer',
    company: 'Raimon, Isfahan',
    period: '04/2020 – 05/2021',
    description: [
      'Enhanced app performance with Google service integration, resulting in 20% higher user retention and 15% greater user satisfaction.',
      'Implemented GitHub for version control and team collaboration, achieving a 35% increase in development efficiency.',
      'Crafted custom push notification solutions, boosting user engagement by 20%.',
      'Enhanced the app for diverse devices, increasing user engagement by 25%.',
      'Created more than 10 custom widgets and animations to enhance the user experience and app aesthetics.',
      'Implemented internationalization to cater to 3 language audiences.'
    ]
  },
  {
    id: '5',
    role: 'Mid-level Flutter Developer',
    company: 'Alget, Amsterdam',
    period: '04/2019 – 03/2020',
    description: [
      'Refactored old code, cutting redundant lines by 10%.',
      'Shifted to GetX state management and MVC architecture, slashing loading times by 27%.',
      'Managed app localization and support for 2 languages and regions.',
      'Integrated social sharing and deep linking for user engagement and app growth.',
      'Improved app functionality and user satisfaction by 25% and 20%, respectively, through Google Maps and Firebase services.'
    ]
  },
  {
    id: '6',
    role: 'Mobile App Developer',
    company: 'Atron, Isfahan',
    period: '08/2017 – 03/2019',
    description: [
      'Co-founded the Atron team alongside 3 other individuals.',
      'Successfully developed 3 personal applications and completed 2 project assignments as a team.',
      'Improved app accessibility, enhancing inclusivity and making it 30% more user-friendly.',
      'Initiated, organized, and conducted over 5 meetings to onboard customers, ensuring satisfaction and product adoption.'
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

/** Marquee strings used in the About section ticker */
export const MARQUEE_ITEMS: string[] = [
  'DESIGN BY AMIN',
  'FLUTTER & MOBILE',
  'FROM SCRATCH TO SCALE',
  'TEAM LEAD & ARCHITECT',
  'BLOC · TDD · CI/CD',
];

/** Process steps used in the PLAN / CODE / SCALE section */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'plan',
    label: 'PLAN',
    description:
      'Discovery, requirements, and architecture. I shape the design system, Bloc patterns, and engineering rules so the team ships clean, predictable code from day one.',
    imageUrl: '/1.jpeg',
  },
  {
    id: 'code',
    label: 'CODE',
    description:
      'Production Flutter for mobile and web. TDD with 50+ unit and widget tests, Bloc / Provider / GetIt, Hive, and modern AI-assisted workflows—built to last.',
    imageUrl: '/2.jpeg',
  },
  {
    id: 'scale',
    label: 'SCALE',
    description:
      'Firebase and GCP, CI/CD pipelines, App Store and Google Play releases, internationalization, push notifications, and the mentorship that levels up the whole team.',
    imageUrl: '/3.jpeg',
  },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for a portfolio website. The owner is Amin Jafari, a Flutter developer.
Here is his profile:
- **Name**: Amin Jafari
- **Role**: Flutter Developer (full-stack and mobile); leads teams and standards where needed
- **Summary**: About a decade in mobile and web, with seven years focused on Flutter for mobile and web. Cares about scalable products, performance, Bloc, TDD, Firebase, and CI/CD. Strong backend integration experience; leadership improving architecture and engagement. Recently introduced org-wide Cursor rules and AI-assisted practices at Entekhab Group across Flutter, .NET, and React/Node.js.
- **Contact**: dev@aminjafari.com | LinkedIn: linkedin.com/in/aminjafari-dev | Stack Overflow: stackoverflow.com/users/19699656/aminjafari-dev | GitHub: github.com/aminjafari-dev
- **Tech Stack**: Flutter, Dart, Bloc, Provider, GetIt, TDD, MVC, Firebase (notifications, Cloud Messaging, auth), Google Maps, Google APIs, CI/CD, GitHub Actions, RESTful API, Web3/blockchain APIs, Hive, JWT, TypeScript, React, Node.js, .NET.
- **Experience**: Full-stack developer at Entekhab Group, Esfahan (Jul 2025–present, Flutter lead, Cursor/org rules); Senior Flutter Engineer at Appx Labz, Canada (Dec 2023–Jun 2025, Canadian savings-account app from scratch); Senior Flutter Developer at Plasco, Asaluyeh (Jun 2021–Oct 2023); Mid-level at Raimon, Isfahan; Mid-level at Alget, Amsterdam; Mobile developer at Atron, Isfahan (co-founder).
- **Education**: Bachelor's in Computer Software, Payam Noor, Isfahan (Sep 2015).
- **Languages**: English (Full Professional), Persian (Native).

Answer visitor questions about Amin politely and professionally. For contact, suggest the form or dev@aminjafari.com. Highlight Flutter, TDD, Bloc, Firebase, and CI/CD when asked about skills. Keep answers concise.
`;