import type {
  Award,
  BeyondItem,
  CurrentResearch,
  Education,
  Experience,
  NavItem,
  Project,
  Publication,
  ResearchInterest,
  SocialLinks,
  WritingEntry,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Itba Malahat",
  title: "Itba Malahat | Trustworthy AI Researcher and Engineer",
  description:
    "Itba Malahat is an AI researcher and engineer working on trustworthy AI, multimodal deepfake detection, AI systems, culturally grounded evaluation, and AI safety for the Global South.",
  url: "https://malahat.vercel.app",
  location: "Pakistan · Open to remote and international opportunities",
  ogTitle: "Itba Malahat",
  ogDescription: "Trustworthy AI, Multimodal Learning & AI Systems",
};

export const socialLinks: SocialLinks = {
  // TODO: Add verified email address
  email: "",
  // TODO: Add verified LinkedIn URL
  linkedin: "",
  github: "https://github.com/ItbaMalahat",
  // TODO: Add verified Google Scholar URL
  googleScholar: "",
  // TODO: Add verified Medium profile URL
  medium: "",
  // TODO: Add CV PDF at /public/cv/itba-malahat-cv.pdf before enabling this link
  cv: "",
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Writing", href: "#writing" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Research Assistant · DeepTrace: South Asia Deepfake Detection Challenge",
  name: "Itba Malahat",
  descriptor: "Trustworthy AI, Multimodal Learning & AI Systems",
  paragraphs: [
    "I am an AI researcher and engineer from Pakistan working at the intersection of trustworthy AI, multimodal learning, AI safety, and production systems.",
    "My research examines how AI systems perform across cultures, languages, and regions that remain underrepresented in mainstream datasets and benchmarks. I am particularly interested in culturally grounded evaluation, multimodal deepfake detection, and the development of reliable AI systems for the Global South.",
    "Currently, I am a Research Assistant with the DeepTrace: South Asia Deepfake Detection Challenge, where I contribute to culturally representative datasets, evaluation pipelines, and benchmarking methods for deepfake detection across South Asia.",
    "Before moving more deeply into research, I worked across production AI, data engineering, agricultural technology, enterprise analytics, and technical support. These experiences continue to shape how I approach research: not only as a question of model performance, but also of reliability, deployment, accessibility, and real-world impact.",
  ],
};

export const about = {
  paragraphs: [
    "I am interested in what happens when artificial intelligence leaves the laboratory and encounters the complexity of the real world.",
    "My work brings together machine learning, software systems, data infrastructure, cultural representation, and public-interest technology. I care about whether AI systems remain useful and reliable across different languages, communities, environments, and deployment conditions.",
    "I am especially drawn to problems where technical performance cannot be separated from social context: synthetic media, misinformation, accessibility, culturally grounded evaluation, and the representation of the Global South in AI research.",
  ],
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Culturally Grounded AI Evaluation",
    question:
      "How can AI systems be evaluated in ways that account for cultural behaviours, identities, environments, languages, and social practices?",
    description:
      "I am interested in moving AI evaluation beyond technical quality and aggregate accuracy. My work explores how benchmarks can better represent communities whose experiences are often absent from mainstream datasets.",
  },
  {
    title: "Multimodal Deepfake Detection",
    question:
      "Building and evaluating systems that identify manipulated content across image, video, and audio.",
    description:
      "I am particularly interested in cross-dataset generalisation, multimodal fusion, demographic fairness, and the performance of deepfake detectors in South Asian deployment contexts.",
  },
  {
    title: "AI Safety for the Global South",
    question:
      "Studying how the risks and benefits of AI differ across geographic, cultural, and socioeconomic contexts.",
    description:
      "My interests include misinformation, synthetic media, representation, low-resource languages, public awareness, and the design of governance and evaluation frameworks that remain meaningful outside the Global North.",
  },
  {
    title: "AI Systems and Infrastructure",
    question:
      "Designing the data pipelines, evaluation systems, observability layers, and production infrastructure required to make machine learning systems reliable beyond the research environment.",
    description:
      "My engineering experience has made me especially interested in the distance between a model that performs well in a notebook and a system that continues to work under real-world constraints.",
  },
  {
    title: "Large Language Models and Evaluation",
    question:
      "Using large language models for structured evaluation, research tooling, annotation assistance, and the analysis of multimodal content.",
    description:
      "I am interested in factuality, hallucination, culturally grounded evaluation, and methods for making LLM-assisted pipelines more transparent and reproducible.",
  },
];

export const currentResearch: CurrentResearch = {
  title: "DeepTrace: South Asia Deepfake Detection Challenge",
  role: "Research Assistant",
  location: "Pakistan",
  period: "November 2025 – Present",
  description:
    "DeepTrace is a multi-country research initiative focused on developing culturally grounded datasets, benchmarks, and tools for deepfake detection across South Asia.",
  researchQuestion:
    "How can deepfake detection systems be evaluated fairly and effectively when cultural context, language, and regional media practices shape both the threat and the evidence?",
};

export const publications: Publication[] = [
  {
    year: "2026",
    title: "The Socio-Political Implications of Deepfakes in Developing Countries",
    authors: "L. Noor, I. Malahat, H. Noor",
    type: "Preprint",
    description:
      "A study of how deepfakes interact with political instability, media literacy, institutional trust, and information ecosystems in developing countries.",
    // TODO: Add verified preprint URL
  },
  {
    year: "2025",
    title:
      "Double-Layered Authentication Door-Lock System Utilizing Hybrid RFID-PIN Technology for Enhanced Security",
    authors: "A. Ramzan, W. Farhan, I. Malahat, N. Afzal",
    venue: "Materials Proceedings, 23(1), 19",
    description:
      "A hybrid physical-security system combining RFID authentication with PIN-based verification to strengthen access control.",
    // TODO: Add verified paper URL
  },
  {
    year: "Undergraduate Thesis",
    title: "Audio Visual Integrity Analyzer: A Multimodal Deepfake Detection Framework",
    authors: "I. Malahat",
    venue:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    type: "Undergraduate Thesis",
    isThesis: true,
    description:
      "A unified deepfake detection framework for image, video, and audio content. AVIA combined ConvNeXt for manipulated-image detection, GenConViT for manipulated-video detection, and CNN and BiLSTM architectures for synthetic-audio detection. The system was trained and evaluated across twelve public datasets and was designed to make media-integrity analysis more accessible through a unified interface.",
  },
];

export const projects: Project[] = [
  {
    title: "AVIA — Audio Visual Integrity Analyzer",
    category: "Multimodal Deepfake Detection",
    description: [
      "An end-to-end framework for identifying manipulated image, video, and audio content through specialised deep-learning models.",
      "The system was designed to bring multiple detection modalities into a single application rather than requiring users to rely on separate tools for each media type.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "ConvNeXt",
      "GenConViT",
      "CNN",
      "BiLSTM",
      "Computer Vision",
      "Audio Processing",
    ],
  },
  {
    title: "DeepTrace Evaluation Pipelines",
    category: "Trustworthy AI · Multimodal Evaluation",
    description: [
      "Research pipelines supporting the evaluation of deepfake datasets and detection systems across South Asian cultural and geographic contexts.",
      "The work includes dataset organisation, structured evaluation, LLM-assisted analysis, benchmarking, documentation, and reproducibility.",
    ],
  },
  {
    title: "AI-Powered Object Recognition Glasses",
    category: "Accessibility · Computer Vision · Multilingual AI",
    status: "Concept / In Development",
    description: [
      "An ongoing public-interest technology concept for assisting blind and visually impaired users.",
      "A wearable camera observes the user’s surroundings, an AI model identifies relevant objects or obstacles, and the system communicates this information through speech in English, Urdu, and regional Pakistani languages.",
      "The project combines computer vision, edge or mobile hardware, speech generation, accessibility design, and low-resource language support.",
    ],
  },
  {
    title: "Agricultural Data Infrastructure",
    category: "Data Engineering · Geospatial AI",
    description: [
      "Designed production-grade Apache Airflow pipelines supporting AI-driven agricultural analytics across more than two million acres.",
      "The infrastructure handled geospatial data processing, automated reporting, cloud storage, monitoring, historisation, and production troubleshooting.",
    ],
    technologies: [
      "Apache Airflow",
      "Python",
      "PostgreSQL",
      "AWS S3",
      "CloudWatch",
      "QGIS",
      "PGVersion",
    ],
  },
  {
    title: "Enterprise Analytics Systems",
    category: "Data Science · Business Intelligence",
    description: [
      "Developed three enterprise analytics products during my internship at Procter & Gamble for teams operating across Pakistan and Gulf markets.",
      "The work included fault-tolerant ETL pipelines, automated validation checks, monitoring dashboards, and solutions for recurring billing and reporting inconsistencies.",
    ],
  },
  {
    title: "Smart Attendance System",
    category: "Computer Vision · Full-Stack Development",
    description: [
      "A facial-recognition attendance system developed using Flutter and Flask.",
      "The application connected a mobile interface to a Python backend for identity verification and attendance management.",
    ],
  },
  {
    title: "Double-Layered Authentication Door Lock",
    category: "Embedded Systems · Security",
    description: [
      "A physical access-control system combining RFID authentication with PIN verification.",
      "The project was subsequently published in Materials Proceedings.",
    ],
  },
];

export const experience: Experience[] = [
  {
    period: "2025 – Present",
    role: "Research Assistant",
    organisation: "DeepTrace: South Asia Deepfake Detection Challenge",
    location: "University of Colombo School of Computing · Remote",
    description: [
      "Contributing to the creation and evaluation of culturally grounded deepfake datasets and benchmarks spanning Pakistan, Nepal, Sri Lanka, India, and Bangladesh.",
      "My responsibilities include multimodal data curation, LLM-assisted evaluation, survey research, benchmarking, documentation, and the study of fairness and generalisation in South Asian contexts.",
    ],
  },
  {
    period: "2025 – 2026",
    role: "Senior Technical Support Engineer",
    organisation: "Motive",
    description: [
      "Worked on complex production issues affecting AI Dashcams, AI Omnicams, electronic logging devices, telematics hardware, cloud services, and REST APIs used by enterprise and mid-market fleets.",
      "I collaborated with Engineering, Product, QA, Account Management, and support teams to reproduce defects, analyse logs, isolate firmware and hardware behaviour, validate fixes, and maintain service reliability.",
      "The role gave me direct exposure to what happens when AI leaves a controlled development environment and becomes part of a large-scale physical system.",
    ],
    technologies: [
      "Grafana",
      "Redash",
      "Snowflake",
      "REST APIs",
      "Telemetry Systems",
      "Log Analysis",
    ],
  },
  {
    period: "2025",
    role: "Automations Engineer",
    organisation: "Farmdar",
    description: [
      "Designed and maintained twelve production-grade Apache Airflow pipelines supporting agricultural analytics across more than two million acres in Pakistan and overseas markets.",
    ],
    highlights: [
      "Produced more than one hundred optimised geospatial reports.",
      "Resolved more than sixty production pipeline issues.",
      "Built AWS S3 and CloudWatch workflows.",
      "Improved quality-assurance processes by approximately 80%.",
      "Reduced QGIS geometry-loading times.",
      "Implemented PGVersion-based data historisation across development, staging, and production environments.",
    ],
  },
  {
    period: "2024",
    role: "Data Science Intern",
    organisation: "Procter & Gamble",
    description: [
      "Selected among 20 interns from approximately 6,500 applicants.",
      "Developed three enterprise analytics products for Pakistan and Gulf markets, achieving approximately 95% accuracy in their target workflows.",
      "Built fault-tolerant ETL processes with more than ten validation checks and three monitoring dashboards.",
      "The resulting systems eliminated recurring reporting discrepancies and reduced manual analyst rework by approximately forty hours per month.",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Science in Computer Science",
  institution:
    "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
  dates: "2021 – 2025",
  thesis: "Audio Visual Integrity Analyzer for Multimodal Deepfake Detection",
  description:
    "Intelligent systems, research, and the relationship between technology and society.",
};

// TODO: Add verified awards and distinctions before enabling this section in the UI
export const awards: Award[] = [];

export const writingIntro = [
  "Writing helps me understand how individual technical decisions connect to larger systems.",
  "I write about artificial intelligence, data engineering, software development, research, and the social consequences of emerging technologies.",
];

export const writing: WritingEntry[] = [
  {
    title: "Addressing the Deepfake Threat: A Multimodal Approach to Media Integrity",
    description:
      "An introduction to the motivation, architecture, and broader public value of multimodal deepfake detection.",
  },
  {
    title: "PostGIS Performance at Scale: Partitioning vs. Views for Satellite Data",
    description:
      "A practical examination of database design choices for large geospatial datasets.",
  },
  {
    title: "Building a Smart Attendance System Using Flutter and Flask",
    description:
      "A technical walkthrough of connecting a mobile application with a Python-based recognition backend.",
  },
  {
    title: "Debugging: The Key Skill Every Software Engineer Needs to Ace",
    description:
      "A reflection on debugging as a method of reasoning rather than merely correcting code.",
  },
  {
    title: "How Working as a Researcher Changed Other Areas of My Life",
    description:
      "A personal essay on curiosity, evidence, uncertainty, articulation, and the ways research can reshape how we form opinions.",
  },
];

export const leadership: BeyondItem[] = [
  {
    title: "Women in Tech Global Mentorship",
    description:
      "Mentoring and supporting women interested in technology, professional growth, and navigating technical careers.",
  },
  {
    title: "Humans of GIKI",
    description:
      "Helped organise and document more than 165 student stories for an audience of over 800 people. The project strengthened my interest in storytelling, identity, and understanding how individual experiences shape larger communities.",
  },
  {
    title: "Marketing Head — GIKI",
    description:
      "Led a thirty-member team across six internal events and coordinated planning, communication, and execution.",
  },
  {
    title: "AIESEC Leadership Development Experience",
    description:
      "Participated in youth leadership and community-development initiatives.",
  },
];

export const teaching = {
  paragraphs: [
    "I have several years of experience helping students strengthen their English communication and prepare for exams including IELTS, TOEFL, and GRE.",
    "Teaching has shaped how I communicate technical ideas: understanding something deeply also means being able to explain it clearly.",
  ],
};

export const currentExplorations = [
  "AI Safety and Governance",
  "Forward-Deployed Engineering",
  "System Design",
  "Distributed Systems",
  "Advanced Python",
  "LLM Infrastructure",
  "Accessibility Technology",
  "Computer Networks",
  "Calculus",
  "Research Communication",
  "Public Speaking",
  "Entrepreneurship",
];

export const outsideWork = [
  "Beyond research and engineering, I enjoy reading, writing personal essays, photography, teaching, collecting postcards, travelling, discovering unfamiliar ideas, and finding connections between technology, culture, and everyday life.",
  "I am also building a postcard business centred on memory, art, storytelling, and the joy of receiving something tangible in an increasingly digital world.",
];

export const contact = {
  heading: "Contact",
  copy: "I am always open to thoughtful conversations and collaborations around trustworthy AI, multimodal learning, AI safety, AI systems, public-interest technology, and culturally grounded evaluation.",
  followUp:
    "I am especially interested in connecting with researchers, AI safety organisations, mission-driven teams, open-source collaborators, educators, conference organisers, and people building technology for public impact.",
};

export const footer = {
  copyright: "© 2026 Itba Malahat",
  line: "Building AI systems that remain trustworthy when they encounter the complexity of the real world.",
};

export function getAvailableSocialLinks() {
  return [
    socialLinks.email
      ? { label: "Email", href: `mailto:${socialLinks.email}`, external: false }
      : null,
    socialLinks.linkedin
      ? { label: "LinkedIn", href: socialLinks.linkedin, external: true }
      : null,
    socialLinks.github
      ? { label: "GitHub", href: socialLinks.github, external: true }
      : null,
    socialLinks.googleScholar
      ? {
          label: "Google Scholar",
          href: socialLinks.googleScholar,
          external: true,
        }
      : null,
    socialLinks.medium
      ? { label: "Medium", href: socialLinks.medium, external: true }
      : null,
    socialLinks.cv
      ? { label: "CV", href: socialLinks.cv, external: true }
      : null,
  ].filter((link): link is { label: string; href: string; external: boolean } =>
    Boolean(link),
  );
}

export function getNavigationItems() {
  let items = [...navigation];

  if (awards.length === 0) {
    items = items.filter((item) => item.href !== "#awards");
  }

  if (socialLinks.cv) {
    items = [
      ...items.slice(0, -1),
      { label: "CV", href: socialLinks.cv },
      ...items.slice(-1),
    ];
  }

  return items;
}
