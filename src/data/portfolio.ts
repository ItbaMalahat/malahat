import type {
  Award,
  Education,
  NavItem,
  Project,
  Publication,
  ResearchInterest,
  SocialLinks,
  TimelineEntry,
  WritingEntry,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Itba Malahat",
  title: "Itba Malahat | Trustworthy AI Researcher and Engineer",
  description:
    "Itba Malahat is an AI researcher and engineer working on trustworthy AI, multimodal deepfake detection, AI systems, culturally grounded evaluation, and reliable AI for underrepresented communities.",
  url: "https://malahat.vercel.app",
  location: "Pakistan · Open to remote and international opportunities",
  ogTitle: "Itba Malahat",
  ogDescription: "Trustworthy AI · Multimodal Learning · AI Systems",
};

export const socialLinks: SocialLinks = {
  email: "itbamalahat@gmail.com",
  phone: "+92 3420266614",
  linkedin: "https://www.linkedin.com/in/itba-malahat",
  github: "https://github.com/ItbaMalahat",
  // TODO: Add Google Scholar profile URL once a public citations page exists
  googleScholar: "",
  medium: "https://itbamalahat.medium.com/",
  // TODO: Add CV PDF at /public/cv/itba-malahat-cv.pdf before enabling this link
  cv: "",
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Awards", href: "#awards" },
  { label: "Writing", href: "#writing" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "AI Researcher & Engineer",
  name: "Itba Malahat",
  descriptor: "Trustworthy AI · Multimodal Learning · AI Systems",
  paragraphs: [
    "I am an AI researcher and engineer from Pakistan working across trustworthy AI, multimodal learning, deepfake detection, AI systems, and data engineering.",
    "My research interests centre on how intelligent systems perform across diverse cultures, languages, demographics, and real-world deployment environments. I am particularly interested in culturally grounded evaluation, multimodal media integrity, model generalisation, and the development of reliable AI systems for underrepresented communities.",
    "Alongside research, I have worked on production AI products, large-scale data pipelines, enterprise analytics, geospatial systems, and technical infrastructure. These experiences shape how I approach AI research: not only through model accuracy, but also through reliability, accessibility, deployment, and real-world impact.",
  ],
};

export const researchAffiliation =
  "Research Assistant with Dr. Dilrukshi Gamage, Senior Lecturer at the University of Colombo School of Computing.";

export const researchInterests: ResearchInterest[] = [
  {
    title: "Culturally Grounded AI Evaluation",
    description:
      "How AI systems can be evaluated in ways that account for cultural behaviours, languages, identities, and social practices often missing from mainstream benchmarks.",
  },
  {
    title: "Multimodal Deepfake Detection",
    description:
      "Building and evaluating systems that identify manipulated content across image, video, and audio — with attention to robustness beyond laboratory settings.",
  },
  {
    title: "AI Safety for Underrepresented Regions",
    description:
      "Studying how the risks and benefits of AI differ across geographic, cultural, and socioeconomic contexts, including synthetic media and low-resource languages.",
  },
  {
    title: "Model Generalisation and Fairness",
    description:
      "Examining when strong benchmark performance fails to transfer across demographics, data distributions, and real-world deployment environments.",
  },
  {
    title: "Large Language Model Evaluation",
    description:
      "Using LLMs for structured evaluation and research tooling, with a focus on factuality, hallucination, and reproducible assessment pipelines.",
  },
  {
    title: "Reliable AI Systems and Infrastructure",
    description:
      "Bridging the gap between models that work in notebooks and systems that remain dependable under production constraints.",
  },
];

export const publications: Publication[] = [
  {
    year: "2025",
    venue: "Materials Proceedings · MTME 2025 · MDPI",
    title:
      "Double-Layered Authentication Door-Lock System Utilizing Hybrid RFID-PIN Technology for Enhanced Security",
    authors: "A. Ramzan, W. Farhan, Itba Malahat, N. Afzal",
    type: "Conference Paper",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.3390/materproc2025023019",
      },
    ],
  },
  {
    year: "2024",
    venue: "Preprint",
    title: "The Socio-Political Implications of Deepfake in Developing Countries",
    authors: "L. Noor, Itba Malahat, H. Noor",
    type: "Preprint",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.20944/preprints202409.1654.v1",
      },
    ],
  },
  {
    year: "Undergraduate Thesis",
    title: "Audio Visual Integrity Analyzer for Multimodal Deepfake Detection",
    authors: "Itba Malahat",
    venue:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    type: "Undergraduate Thesis",
    isThesis: true,
    description:
      "A multimodal deepfake detection framework integrating ConvNeXt for image forensics, GenConViT for video analysis, and a CNN-BiLSTM architecture for synthesised speech detection. Evaluated across twelve public datasets with an end-to-end web interface for media authentication.",
  },
];

export const projects: Project[] = [
  {
    title: "AVIA — Audio Visual Integrity Analyzer",
    category: "Multimodal Deepfake Detection",
    description: [
      "An end-to-end framework for identifying manipulated image, video, and audio content through specialised deep-learning models.",
      "AVIA brings multiple detection modalities into a single application, making media-integrity analysis more accessible than relying on separate tools for each media type.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "ConvNeXt",
      "GenConViT",
      "CNN",
      "BiLSTM",
    ],
  },
  {
    title: "Agricultural Data Infrastructure",
    category: "Data Engineering · Geospatial AI",
    description: [
      "Designed production-grade Apache Airflow pipelines supporting AI-driven agricultural analytics across more than two million acres.",
      "The work covered geospatial processing, automated reporting, cloud storage, monitoring, historisation, and production troubleshooting.",
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
      "Developed three enterprise analytics products during an internship at Procter & Gamble for teams across Pakistan and Gulf markets.",
      "The systems included fault-tolerant ETL pipelines, automated validation checks, and monitoring dashboards that reduced recurring reporting inconsistencies.",
    ],
  },
  {
    title: "Smart Attendance System",
    category: "Computer Vision · Full-Stack Development",
    description: [
      "A facial-recognition attendance system with a Python backend for real-time multi-face recognition using MTCNN and SVM models.",
      "A Flask-backed application supported multi-device analysis, with data augmentation used to improve robustness across lighting conditions.",
    ],
    technologies: ["Python", "Flask", "MTCNN", "SVM"],
    links: [
      {
        label: "Read",
        url: "https://itbamalahat.medium.com/building-a-smart-attendance-system-using-flutter-and-flask-03729bf8786d",
      },
    ],
  },
  {
    title: "RFID-PIN Authentication System",
    category: "Embedded Systems · Security",
    description: [
      "A physical access-control system combining RFID authentication with PIN verification.",
      "The project was subsequently published in Materials Proceedings (MDPI).",
    ],
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.3390/materproc2025023019",
      },
    ],
  },
  {
    title: "AI-Powered Object Recognition Glasses",
    category: "Accessibility · Computer Vision · Multilingual AI",
    status: "In Development",
    description: [
      "A public-interest technology concept for assisting blind and visually impaired users.",
      "A wearable camera observes the user’s surroundings, an AI model identifies relevant objects or obstacles, and the system communicates this information through speech in English, Urdu, and regional Pakistani languages.",
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    period: "2025 – Present",
    role: "Research Assistant",
    organisation: "University of Colombo School of Computing",
    location: "Remote",
    description: [
      "Working with Dr. Dilrukshi Gamage, Senior Lecturer at the University of Colombo School of Computing, on research related to trustworthy and multimodal artificial intelligence.",
    ],
  },
  {
    period: "Dec 2025 – Jun 2026",
    role: "Senior Technical Support Engineer",
    organisation: "Motive",
    description: [
      "Diagnosed and resolved complex production issues spanning AI-powered telematics systems, firmware, cloud infrastructure, and API integrations for enterprise fleets.",
      "Collaborated with Engineering, Product, and QA teams to reproduce defects, validate fixes, and improve platform reliability using Grafana, Redash, and Snowflake.",
    ],
    technologies: ["Grafana", "Redash", "Snowflake", "REST APIs"],
  },
  {
    period: "Apr 2025 – Dec 2025",
    role: "Automations Engineer",
    organisation: "Farmdar",
    description: [
      "Delivered AI-driven crop yield analytics across 2M+ acres through twelve production-grade Apache Airflow pipelines for enterprise clients.",
      "Supported 100+ geospatial reports, resolved more than sixty pipeline issues, and improved QA workflows through historisation and version control with PGVersion.",
    ],
    technologies: ["Apache Airflow", "AWS S3", "CloudWatch", "QGIS"],
  },
  {
    period: "Jul 2024 – Sep 2024",
    role: "Data Science Intern",
    organisation: "Procter & Gamble",
    description: [
      "Developed three enterprise-grade analytics products for Pakistan and Gulf markets, with fault-tolerant ETL pipelines, automated validation checks, and monitoring dashboards.",
      "The systems reduced recurring reporting discrepancies and analyst rework.",
    ],
  },
  {
    period: "Sep 2021 – Jun 2025",
    role: "BS Computer Science",
    organisation:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    description: [
      "Completed a Bachelor of Science in Computer Science with a thesis on multimodal deepfake detection.",
      "Advisor: Dr Khurram Khan Jadoon, Associate Professor at GIK Institute.",
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

// TODO: Add verified awards and distinctions before enabling this section
export const awards: Award[] = [];

export const writingIntro =
  "I write about artificial intelligence, data engineering, software systems, and the social consequences of emerging technologies.";

export const writing: WritingEntry[] = [
  {
    title: "Addressing the Deepfake Threat: A Multimodal Approach to Media Integrity",
    description:
      "On the motivation, architecture, and public value of multimodal deepfake detection.",
    topic: "Deepfake Detection",
    year: "2025",
    url: "https://itbamalahat.medium.com/addressing-the-deepfake-threat-a-multimodal-approach-to-media-integrity-9a25d0912226",
  },
  {
    title: "PostGIS Performance at Scale: Partitioning vs. Views for Satellite Data",
    description:
      "A practical look at database design choices for large geospatial datasets.",
    topic: "Data Engineering",
    year: "2025",
    url: "https://itbamalahat.medium.com/postgis-performance-at-scale-partitioning-vs-views-for-satellite-data-6b46a595a07a",
  },
  {
    title: "Building a Smart Attendance System Using Flutter and Flask",
    description:
      "A walkthrough of connecting a mobile application with a Python recognition backend.",
    topic: "Computer Vision",
    year: "2024",
    url: "https://itbamalahat.medium.com/building-a-smart-attendance-system-using-flutter-and-flask-03729bf8786d",
  },
  {
    title: "Debugging: The Key Skill Every Software Engineer Needs to Ace",
    description:
      "A reflection on debugging as a method of reasoning rather than only correcting code.",
    topic: "Engineering Practice",
    year: "2025",
    url: "https://itbamalahat.medium.com/debugging-the-key-skill-every-software-engineer-needs-to-ace-8c867de9f820",
  },
];

export const community = [
  {
    title: "Cohere",
    description: "Community member.",
  },
  {
    title: "Women in Tech",
    description: "Community member.",
  },
];

export const contact = {
  heading: "Contact",
  copy: "I am always open to thoughtful conversations and collaborations around trustworthy AI, multimodal learning, AI safety, AI systems, public-interest technology, and culturally grounded evaluation.",
  followUp:
    "I am especially interested in connecting with researchers, mission-driven teams, open-source collaborators, educators, and people building technology for public impact.",
};

export const footer = {
  copyright: "© 2026 Itba Malahat",
  line: "Building AI systems that remain trustworthy when they encounter the complexity of the real world.",
};

export function getAvailableSocialLinks() {
  return [
    socialLinks.email
      ? {
          label: "Email",
          href: `mailto:${socialLinks.email}`,
          external: false,
        }
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
