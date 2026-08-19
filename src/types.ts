/**
 * Types and interfaces for João Cainã's Personal Portfolio
 */

export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
}

export interface ProfileFact {
  label: string;
  value: string;
  subtext?: string;
}

export interface SkillItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category?: 'core' | 'tool' | 'methodology';
}

export interface SoftSkill {
  title: string;
  description?: string;
}

export interface JourneyStep {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  displayValue: string;
  isExternal: boolean;
}

export interface ConnectionElement {
  id: string;
  label: string;
  sublabel: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  status: string;
  liveUrl?: string;
  githubUrl?: string;
}
