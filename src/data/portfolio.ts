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
  email: "itbamalahat@gmail.com",
  phone: "+92 3420266614",
  // TODO: Add verified LinkedIn profile URL
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
  { label: "Blogging", href: "#blogging" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Itba Malahat",
  descriptor: "Trustworthy AI, Multimodal Learning & AI Systems",
  paragraphs: [
    "I am an AI researcher and engineer from Pakistan working at the intersection of trustworthy AI, multimodal learning, AI safety, and production systems.",
    "My research examines how AI systems perform across cultures, languages, and regions that remain underrepresented in mainstream datasets and benchmarks. I am particularly interested in culturally grounded evaluation, multimodal deepfake detection, and the development of reliable AI systems for the Global South.",
    "I currently contribute to culturally representative datasets, evaluation pipelines, and benchmarking methods for deepfake detection across South Asia.",
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

export const researchInterestTags = [
  "Trustworthy AI",
  "AI Safety",
  "Multimodal Learning",
  "Computer Vision",
  "Deepfake Detection",
  "Large Language Models (LLMs)",
];

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
  period: "Nov 2025 – Present",
  description: [
    "Selected as one of five Global South Research Assistants by Dr. Dilrukshi Gamage, Senior Lecturer at the University of Colombo School of Computing, to develop open-source benchmarks for culturally grounded deepfake detection, collaborating with an international research team to advance trustworthy AI and AI safety research across South Asia.",
    "Developing LLM-powered evaluation pipelines and culturally grounded data curation workflows to support reproducible benchmarking of multimodal AI systems for misinformation detection and responsible AI research.",
  ],
};

export const publications: Publication[] = [
  {
    year: "2025",
    title:
      "Double Layered Authentication Door-lock System Utilizing Hybrid RFID-PIN Technology for Enhanced Security",
    authors: "A. Ramzan, W. Farhan, I. Malahat, N. Afzal",
    venue:
      "3rd International Conference on Modern Technologies in Mechanical and Materials Engineering – MTME 2025, Materials Proceedings, MDPI, 2025 (accepted)",
    type: "Conference Paper",
    description:
      "A hybrid physical-security system combining RFID authentication with PIN-based verification to strengthen access control.",
  },
  {
    year: "2024",
    title: "The Socio-Political Implications of Deepfake in Developing Countries",
    authors: "L. Noor, I. Malahat, H. Noor",
    venue: "Preprints 2024, 2024091654",
    type: "Preprint",
    description:
      "A study of how deepfakes interact with political instability, media literacy, institutional trust, and information ecosystems in developing countries.",
    links: [
      {
        label: "DOI",
        url: "https://doi.org/10.20944/preprints202409.1654.v1",
      },
    ],
  },
  {
    year: "Undergraduate Thesis",
    title: "Audio Visual Integrity Analyzer for Multimodal Deepfake Detection",
    authors: "I. Malahat",
    venue:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    type: "Undergraduate Thesis",
    isThesis: true,
    description:
      "A multimodal deepfake detection framework integrating ConvNeXt for image forensics, GenConViT for video analysis, and a CNN-BiLSTM architecture for synthesized speech detection. Trained and evaluated on 12 benchmark datasets comprising over 5,000 image, audio, and video samples, with an end-to-end web-based verification platform for multimodal media authentication.",
  },
];

export const projects: Project[] = [
  {
    title: "Audio Visual Integrity Analyzer for Multimodal Deepfake Detection",
    category: "Multimodal Deepfake Detection",
    description: [
      "Designed and developed a multimodal deepfake detection framework integrating ConvNeXt for image forensics, GenConViT for video analysis, and a CNN-BiLSTM architecture for synthesized speech detection, enabling unified verification across images, videos, and audio.",
      "Trained and evaluated the framework on 12 benchmark datasets comprising over 5,000 image, audio, and video samples, implementing specialised pipelines to distinguish GAN-generated and diffusion-generated synthetic media while improving robustness across multiple modalities.",
      "Built an end-to-end web-based verification platform to demonstrate multimodal media authentication, translating research into an accessible tool for detecting AI-generated misinformation.",
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
    title: "Smart Attendance System with Multi-face Facial Detection",
    category: "Computer Vision · Full-Stack Development",
    description: [
      "Developed a Python backend service for real-time multi-face recognition using MTCNN and SVM models, achieving 91% detection accuracy and processing times under 850ms per image.",
      "Programmed a cross-platform application backed by a Flask architecture, enabling seamless real-time multi-face image analysis and consistent multi-device performance.",
      "Applied data augmentation techniques and fine-tuned models to enhance recognition accuracy across diverse lighting conditions.",
    ],
    technologies: ["Python", "Flask", "MTCNN", "SVM", "Computer Vision"],
  },
  {
    title: "CD Pipeline for Containerized Application Deployment",
    category: "DevOps · Cloud Infrastructure",
    description: [
      "Reduced manual deployment time by 80% by orchestrating a Jenkins-based CI/CD pipeline for containerized ReactJS and Node.js services across 3 AWS EC2 environments (Dev, Testing, Staging).",
      "Enforced deployment consistency and security by configuring Docker containers for frontend, backend, and database services, and implementing shared security groups and IAM roles for environment parity.",
      "Strengthened code reliability and quality control by deploying automated pipelines for unit and integration testing, enabling seamless container-to-container communication.",
    ],
    technologies: ["Jenkins", "Docker", "AWS EC2", "ReactJS", "Node.js"],
  },
];

export const experience: Experience[] = [
  {
    period: "Nov 2025 – Present",
    role: "Research Assistant",
    organisation: "DeepTrace: South Asia Deepfake Detection Challenge",
    location: "Pakistan · University of Colombo School of Computing",
    description: [
      "Selected as one of five Global South Research Assistants by Dr. Dilrukshi Gamage, Senior Lecturer at the University of Colombo School of Computing, to develop open-source benchmarks for culturally grounded deepfake detection, collaborating with an international research team to advance trustworthy AI and AI safety research across South Asia.",
      "Developing LLM-powered evaluation pipelines and culturally grounded data curation workflows to support reproducible benchmarking of multimodal AI systems for misinformation detection and responsible AI research.",
    ],
  },
  {
    period: "Mar 2024 – May 2025",
    role: "Student Researcher",
    organisation:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    description: [
      "Contributed to research spanning physical security systems, deepfake socio-political analysis, and adaptive mammogram preprocessing.",
      "Synthesized findings from 70+ peer-reviewed studies to identify research gaps in adaptive mammogram preprocessing, producing a survey manuscript targeting journal publication.",
    ],
  },
  {
    period: "Dec 2025 – Jun 2026",
    role: "Senior Technical Support Engineer",
    organisation: "Motive",
    description: [
      "Diagnosed and resolved over 200 complex production issues spanning AI-powered telematics systems, firmware, cloud infrastructure, and API integrations for enterprise fleets, collaborating directly with engineering teams to isolate defects and improve platform reliability.",
      "Partnered with Product, Quality Assurance, and Account Management teams to reproduce customer-reported defects, isolate firmware issues, validate fixes, and drive timely product improvements through structured bug investigations.",
      "Leveraged Grafana, Redash, and Snowflake to query and analyse large-scale historical telematics datasets, monitor platform health, identify usage trends, and provide data-driven insights for troubleshooting and incident resolution.",
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
    period: "Apr 2025 – Dec 2025",
    role: "Automations Engineer",
    organisation: "Farmdar",
    description: [
      "Delivered AI-driven crop yield analytics across 2M+ acres via 12 production-grade backend pipelines on Apache Airflow for enterprise clients across Pakistan and international markets.",
      "Enabled reliable delivery of 100+ optimised geospatial reports leveraging AWS S3 and CloudWatch for large-scale data handling and monitoring, while resolving over 60 pipeline issues.",
      "Accelerated QA workflows by 80% and reduced geometry load times in QGIS by implementing historisation and version control across develop, prod, and staging databases using PGVersion.",
    ],
    technologies: [
      "Apache Airflow",
      "Python",
      "AWS S3",
      "CloudWatch",
      "QGIS",
      "PGVersion",
    ],
  },
  {
    period: "Jul 2024 – Sep 2024",
    role: "Summer Intern — Data Engineering & DevOps",
    organisation: "Procter & Gamble",
    description: [
      "Secured a top 0.35% selection (20 out of 6,500 applicants) for P&G’s Summer Internship Program, with a focus on Data Engineering and DevOps.",
      "Enabled data-driven decision-making across Pakistan and Gulf markets with 95% accuracy, ensuring scalable deployment and robust post-launch support, by developing 3 enterprise-grade analytics products.",
      "Eliminated recurring billing/reporting data discrepancies and reduced analyst rework by 40 hours per month, via a fault-tolerant ETL pipeline with 10+ automated validation checks and 3 monitoring dashboards.",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
  dates: "Sep 2021 – Jun 2025",
  thesis: "Audio Visual Integrity Analyzer for Multimodal Deepfake Detection",
  advisor: "Dr Khurram Khan Jadoon, Associate Professor at GIK Institute",
  researchAreas: [
    "Computer Vision",
    "Machine Learning",
    "Trustworthy AI",
    "Multimodal Learning",
  ],
};

// TODO: Add verified awards and distinctions before enabling this section in the UI
export const awards: Award[] = [];

export const bloggingIntro = [
  "Blogging helps me understand how individual technical decisions connect to larger systems.",
  "I write about artificial intelligence, data engineering, software development, research, and the social consequences of emerging technologies.",
];

export const blogging: WritingEntry[] = [
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
    socialLinks.phone
      ? { label: socialLinks.phone, href: `tel:${socialLinks.phone.replace(/\s+/g, "")}`, external: false }
      : null,
    socialLinks.email
      ? { label: socialLinks.email, href: `mailto:${socialLinks.email}`, external: false }
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
