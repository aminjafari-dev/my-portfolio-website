import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isStreaming?: boolean;
}