export interface ProjectStep {
  number: string; // e.g. "01"
  title: string;
  subtitle?: string;
  phaseLabel?: string;
  description: string;
  breakdown?: { label: string; text: string }[];
  infographicType?: 'ambient-dial' | 'grid-taxonomy' | 'acoustic-wave' | 'patient-journey' | 'horology-mesh' | 'schematic-nodes' | 'minimal-editorial' | 'image' | 'none';
  graphicDetails?: {
    tag?: string;
    caption?: string;
    metrics?: { label: string; value: string }[];
    nodes?: { id: string; label: string; x?: number; y?: number }[];
    accentColor?: string;
  };
  image?: string;
  imageAlt?: string;
  imagePlaceholder?: boolean | string;
}

export interface Project {
  id: string;
  code: string; // e.g. "01", "02"
  title: string;
  client: string;
  year: string;
  discipline: string;
  tagline: string;
  overview: string;
  role?: string;
  timeline?: string;
  tools?: string[];
  team?: string;
  image?: string;
  imageAlt?: string;
  liveUrl: string;
  liveUrlLabel?: string;
  steps: ProjectStep[];
  themeAccent?: string;
}

export interface TimelineEntry {
  period: string;
  yearRange: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlightTag?: string;
}

export interface SkillItem {
  title: string;
  description: string;
}

export interface AboutData {
  name: string;
  title: string;
  location: string;
  statementHeadline: string;
  statementPill: string;
  bioParagraphs: string[];
  philosophyQuotes: {
    quote: string;
    author: string;
    context: string;
  }[];
  timeline: TimelineEntry[];
  skills: string[];
  skillItems?: SkillItem[];
  links: {
    linkedin: string;
    email: string;
    github?: string;
    readcv?: string;
    locationCity: string;
  };
}

export type ViewType = 'landing' | 'project' | 'about';
