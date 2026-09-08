export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  challenges: string[];
  technicalDecisions: { title: string; description: string }[];
  architecture: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface NavLink {
  href: string;
  label: string;
}
