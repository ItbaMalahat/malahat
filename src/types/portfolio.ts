export type ExternalLink = {
  label: string;
  url?: string;
};

export type ParagraphSegment = string | { text: string; href: string };

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLinks = {
  email: string;
  emailObfuscated: string;
  linkedinLabel: string;
  linkedin: string;
  githubLabel: string;
  github: string;
  mediumLabel: string;
  medium: string;
  cv: string;
  location: string;
};

export type ResearchProject = {
  status: "Ongoing" | "Completed";
  title: string;
  tags: string[];
  body: string[];
  meta?: string;
  supervisors?: string;
  statusNote?: string;
  links?: ExternalLink[];
};

export type Publication = {
  section: "Published" | "In preparation";
  kind: string;
  title: string;
  authors?: string;
  venue?: string;
  doiUrl?: string;
  description?: string;
};

export type ExperienceEntry = {
  group: "Research" | "Professional";
  role: string;
  organisation: string;
  location?: string;
  advisor?: string;
  period: string;
  bullets: string[];
};

export type CourseworkEntry = string;

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  body?: string[];
  thesis?: string;
  advisor?: string;
  coursework?: CourseworkEntry[];
};

export type ProjectEntry = {
  title: string;
  tags: string[];
  body: string[];
  links?: ExternalLink[];
};

export type Certification = {
  group: string;
  year: string;
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
};

export type LeadershipSubRole = {
  title: string;
  period: string;
  description: string;
};

export type LeadershipRole = {
  title?: string;
  organisation: string;
  fullForm?: string;
  period?: string;
  bullets: string[];
  subRoles?: LeadershipSubRole[];
};

export type Milestone = {
  date: string;
  text: string;
};

export type CommunityService = {
  title?: string;
  organisation?: string;
  period?: string;
  milestones?: Milestone[];
  bullets: string[];
};

export type NewsItem = {
  date: string;
  body: string;
};

export type ArticleEntry = {
  title: string;
  description: string;
  tags: string[];
  year?: string;
  url?: string;
};

export type PersonBlock = {
  title: string;
  body: string;
};

export type Talk = {
  title: string;
  event: string;
  date: string;
  location?: string;
  url?: string;
};

export type MentorshipOption = {
  number: string;
  category: "Mentorship" | "Collaborate";
  title: string;
  duration: string;
  intro: string[];
  topicsLabel?: string;
  topics?: string[];
  note?: string;
  buttonLabel: string;
  calendlyUrl: string;
};

export type SelectedWorkItem = {
  title: string;
  description: string;
  tags: string[];
};

export type Bio = {
  label: string;
  body: string;
};
