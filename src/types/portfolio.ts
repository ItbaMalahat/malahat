export type ExternalLink = {
  label: string;
  url: string;
};

export type ResearchInterest = {
  title: string;
  question: string;
  description: string;
};

export type CurrentResearch = {
  title: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  researchQuestion?: string;
};

export type Publication = {
  year: string;
  venue?: string;
  title: string;
  authors: string;
  description?: string;
  type?: string;
  links?: ExternalLink[];
  isThesis?: boolean;
};

export type Project = {
  title: string;
  category: string;
  description: string[];
  technologies?: string[];
  status?: string;
  links?: ExternalLink[];
  outcome?: string;
};

export type Experience = {
  period: string;
  role: string;
  organisation: string;
  location?: string;
  description: string[];
  highlights?: string[];
  technologies?: string[];
};

export type Education = {
  degree: string;
  institution: string;
  dates: string;
  thesis?: string;
  advisor?: string;
  researchAreas?: string[];
  description?: string;
};

export type Award = {
  title: string;
  organisation?: string;
  year?: string;
  description?: string;
};

export type WritingEntry = {
  title: string;
  description: string;
  // TODO: Add verified Medium URL when available
  url?: string;
};

export type BeyondItem = {
  title: string;
  description: string;
};

export type SocialLinks = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  googleScholar: string;
  medium: string;
  cv: string;
};

export type NavItem = {
  label: string;
  href: string;
};
