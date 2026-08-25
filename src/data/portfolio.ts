import type {
  ArticleEntry,
  Certification,
  CommunityService,
  EducationEntry,
  ExperienceEntry,
  LeadershipRole,
  MentorshipOption,
  NavItem,
  NewsItem,
  ParagraphSegment,
  PersonBlock,
  Publication,
  ProjectEntry,
  ResearchProject,
  SelectedWorkItem,
  SocialLinks,
  Bio,
  Talk,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Itba Malahat",
  roleSubtitle: "Machine Learning Engineer · Trustworthy AI Researcher",
  title: "Itba Malahat | Trustworthy AI Researcher & Machine Learning Engineer",
  description:
    "Machine learning engineer and trustworthy AI researcher working on deepfake detection, multimodal learning, AI safety, and safer digital spaces in South Asia.",
  url: "https://malahat.vercel.app",
  primaryTagline: "Building AI systems—and digital spaces—worthy of trust.",
  secondaryTagline: "I build for Pakistan and beyond.",
  ogTitle: "Itba Malahat — Trustworthy AI Researcher & Machine Learning Engineer",
  ogDescription:
    "Researching deepfake detection, multimodal AI, and culturally grounded evaluation to build safer digital spaces in South Asia.",
  profileImage: "/images/itba-malahat.jpg",
  profileImageAlt:
    "Portrait of Itba Malahat, a machine learning engineer and trustworthy AI researcher from Pakistan.",
};

export const socialLinks: SocialLinks = {
  email: "itbamalahat@gmail.com",
  emailObfuscated: "itbamalahat [AT] g**** [DOT] com",
  linkedinLabel: "linkedin.com/in/itba-malahat",
  linkedin: "https://linkedin.com/in/itba-malahat",
  githubLabel: "github.com/ItbaMalahat",
  github: "https://github.com/ItbaMalahat",
  mediumLabel: "medium.com/@itbamalahat",
  medium: "https://medium.com/@itbamalahat",
  cv: "https://drive.google.com/file/d/1Lnq_wMIHqUaSA8u5iACIIkXJSXYzYu3N/view?usp=sharing",
  location: "Pakistan",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Leadership", href: "/leadership" },
  { label: "Outreach", href: "/outreach" },
  { label: "People", href: "/people" },
  { label: "News", href: "/news" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Mentorship", href: "/mentorship" },
];

export function getNavigationItems() {
  const items = [...navigation];
  if (socialLinks.cv) {
    items.push({ label: "CV", href: socialLinks.cv });
  }
  return items;
}

export const homeIntro = {
  greeting: "Hi, I'm Itba Malahat.",
  paragraphs: [
    [
      "I'm a machine learning engineer and Research Assistant at the HCI Lab, University of Colombo School of Computing, working with Dr. Dilrukshi Gamage on deepfake detection, trustworthy AI, and media literacy for the Global South. I'm also part of the core team on the ",
      {
        text: "HCI Deepfake Detection for South Asia",
        href: "https://sites.google.com/view/south-asia-deepfake-detection/team",
      },
      " initiative.",
    ],
    [
      "I did my bachelor's in Computer Science at GIKI (Ghulam Ishaq Khan Institute of Engineering Sciences and Technology).",
    ],
    [
      "I like to learn and solve problems.",
    ],
  ] as ParagraphSegment[][],
  buttons: [
    { label: "View Research", href: "/research" },
    { label: "Read Publications", href: "/publications" },
    { label: "Download CV", href: "/about#cv" },
    { label: "Start a Conversation", href: "/about#contact" },
  ],
};

export const homeResearchInterests: string[] = [
  "Trustworthy AI",
  "AI Safety",
  "Multimodal Learning",
  "Deepfake Detection",
  "Computer Vision",
  "AI Governance",
  "Agentic AI",
  "Data Engineering",
];

export const selectedWork: SelectedWorkItem[] = [
  {
    title: "Deepfake Detection in South Asia",
    description:
      "Studying the technical and sociocultural gaps that limit existing deepfake-detection methods in South Asian settings, with an emphasis on culturally grounded datasets, benchmarks, and evaluation.",
    tags: ["Trustworthy AI", "Deepfake Detection", "South Asia", "Multimodal Learning"],
  },
  {
    title: "AVIA: Audio-Visual Integrity Analyzer",
    description:
      "A unified deepfake-detection framework for images, videos, and audio, trained and evaluated across 12 benchmark datasets and more than 5,000 samples.",
    tags: ["Computer Vision", "Audio Forensics", "PyTorch", "Multimodal AI"],
  },
  {
    title: "Deepfake Discourse Across Public Platforms",
    description:
      "A mixed-methods study of how deepfake-related conversations, concerns, and harmful practices move from mainstream platforms into fragmented public channels.",
    tags: ["Computational Social Science", "NLP", "Telegram", "Mixed Methods"],
  },
];

export const homeNewsPreviewCount = 5;

export const researchIntro = {
  intro:
    "I study how intelligent systems can become more reliable, culturally aware, and accountable. My current work combines technical deepfake detection with data-centric evaluation, platform research, and the social realities of AI-generated media in the Global South.",
};

export const researchProjects: ResearchProject[] = [
  {
    status: "Ongoing",
    title: "Deepfake Detection in South Asia",
    tags: ["Trustworthy AI", "Deepfake Detection", "Machine Learning", "South Asia"],
    body: [
      "Working with Dr. Dilrukshi Gamage, Dr. Savindhu Herath, and Prof. Yash Raj Shrestha on a region-wide study of deepfake detection in South Asia. The work examines the methods, datasets, modalities, and evaluation practices represented in the literature, with particular attention to regional languages, identities, media practices, and underrepresented populations.",
    ],
    meta: "Period: November 2025–Present",
  },
  {
    status: "Ongoing",
    title: "From Reddit to Telegram: Deepfake Discourse in Fragmented Public Channels",
    tags: ["Computational Social Science", "NLP", "Mixed Methods", "Platform Research"],
    body: [
      "Investigating how deepfake-related discourse changes as it moves from Reddit into public Telegram channels. The study combines computational analysis with qualitative coding to examine creation, sharing, detection, concern, abuse, and media-literacy narratives across languages and communities.",
    ],
    meta: "Period: 2026–Present",
  },
  {
    status: "Ongoing",
    title: "Mammogram Preprocessing for Breast-Cancer Detection",
    tags: ["Medical AI", "Image Preprocessing", "Computer Vision", "Systematic Review"],
    body: [
      "Synthesising evidence from more than 70 peer-reviewed studies to understand how mammogram preprocessing affects downstream breast-cancer detection. The work maps common enhancement, denoising, segmentation, and normalisation techniques while identifying gaps in adaptive and clinically robust preprocessing pipelines.",
    ],
    supervisors: "Supervised by Dr. Omer Bin Saeed and Dr. Shahab Uddin Ansari.",
    statusNote: "Status: Manuscript in writeup stage",
  },
  {
    status: "Completed",
    title: "AVIA: Audio-Visual Integrity Analyzer for Multimodal Deepfake Detection",
    tags: ["Multimodal AI", "Computer Vision", "Audio Forensics", "Deep Learning"],
    body: [
      "Designed and developed an end-to-end framework for verifying images, videos, and audio. AVIA integrates ConvNeXt for image forensics, GenConViT for video analysis, and a CNN–BiLSTM architecture for synthetic-speech detection.",
      "The system was trained and evaluated on 12 benchmark datasets containing more than 5,000 samples, with specialised pipelines for GAN-generated and diffusion-generated media. This project formed my undergraduate thesis at GIKI under the supervision of Dr. Khurram Khan Jadoon.",
    ],
    meta: "Period: February 2024–May 2025",
    links: [
      {
        label: "Thesis document",
        url: "https://drive.google.com/file/d/1B9g9iQszLh3jlGcQya_MULJAi_yxq2FW/view?usp=sharing",
      },
    ],
  },
  {
    status: "Completed",
    title: "The Socio-Political Implications of Deepfakes in Developing Countries",
    tags: ["AI Governance", "Misinformation", "Developing Countries", "Digital Safety"],
    body: [
      "Examined why developing countries are particularly vulnerable to the political and social harms of deepfakes. The study considers disinformation, electoral interference, reputational harm, fraud, legal gaps, and declining trust in media, and argues for a response that combines technical detection, public awareness, governance, and interdisciplinary collaboration.",
    ],
    meta: "Published: 23 September 2024 · Cited 100+ times",
    links: [
      {
        label: "View preprint",
        url: "https://doi.org/10.20944/preprints202409.1654.v1",
      },
    ],
  },
  {
    status: "Completed",
    title: "Double-Layered Authentication Door-Lock System",
    tags: ["Embedded Systems", "Authentication", "RFID", "Security"],
    body: [
      "Developed and evaluated a hybrid RFID–PIN authentication mechanism designed to improve access control through two independent verification layers. The work was presented through MTME 2025 and published in Materials Proceedings.",
    ],
    meta: "Published: 2025",
    links: [
      {
        label: "View publication",
        url: "https://doi.org/10.3390/materproc2025023019",
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    section: "Published",
    kind: "Proceedings article",
    title:
      "Double-Layered Authentication Door-Lock System Utilizing Hybrid RFID-PIN Technology for Enhanced Security",
    authors: "Aneeqa Ramzan, Warda Farhan, Itba Malahat, and Namra Afzal",
    venue: "Materials Proceedings, 23(1), Article 19, 2025",
    doiUrl: "https://doi.org/10.3390/materproc2025023019",
  },
  {
    section: "Published",
    kind: "Preprint",
    title: "The Socio-Political Implications of Deepfakes in Developing Countries",
    authors: "Lailoma Noor, Itba Malahat, and Haya Noor",
    venue: "Preprints, 2024 · Posted 23 September 2024",
    doiUrl: "https://doi.org/10.20944/preprints202409.1654.v1",
  },
  {
    section: "In preparation",
    kind: "Survey",
    title:
      "Mammogram Preprocessing for Breast-Cancer Detection: Methods, Evidence, and Research Gaps",
    description:
      "A structured review of more than 70 studies examining preprocessing strategies and their implications for robust medical-image analysis.",
  },
  {
    section: "In preparation",
    kind: "Survey",
    title: "Deepfake Detection in South Asia",
    authors: "Itba Malahat, Dr. Dilrukshi Gamage, Dr. Savindhu Herath, and Prof. Yash Raj Shrestha",
    description:
      "A region-wide study of deepfake-detection methods, datasets, modalities, and evaluation practices, with particular attention to South Asian languages, identities, and underrepresented populations. In its final stages of write-up ahead of submission to ACM.",
  },
  {
    section: "In preparation",
    kind: "Mixed-methods study",
    title: "From Reddit to Telegram: Deepfake Discourse in Fragmented Public Channels",
    authors:
      "Itba Malahat, Dr. Subhayan Mukherjee, Dr. Dilrukshi Gamage, and the Data4Transparency (D4T) community",
    description:
      "A computational and qualitative study of how deepfake-related discourse changes as it moves from Reddit into public Telegram channels. Targeted for submission to ICWSM.",
  },
];

export const experience: ExperienceEntry[] = [
  {
    group: "Research",
    role: "Research Assistant",
    organisation: "Colombo HCI Lab, University of Colombo School of Computing",
    location: "Remote",
    advisor: "Dr. Dilrukshi Gamage",
    period: "November 2025–Present",
    bullets: [
      "Conducting research on deepfake detection, culturally grounded evaluation, and media literacy in the Global South, with responsibility for the Pakistan research context.",
      "Contributing to the design of culturally relevant datasets, benchmarks, and reproducible evaluation methods for synthetic-media detection.",
      "Developing mixed-methods workflows for studying deepfake discourse in public online channels, including keyword design, language identification, content decomposition, topic discovery, and qualitative coding.",
      "Translating technical findings into research and public-awareness directions aimed at safer digital spaces for women and other communities disproportionately affected by online abuse.",
    ],
  },
  {
    group: "Research",
    role: "Student Researcher",
    organisation: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    period: "March 2024–May 2025",
    bullets: [
      "Designed AVIA, an end-to-end multimodal deepfake-detection framework spanning image, video, and audio analysis.",
      "Trained and evaluated models across 12 benchmark datasets and more than 5,000 samples, including GAN-generated and diffusion-generated media.",
      "Co-authored a published proceedings paper on hybrid RFID–PIN authentication and a preprint on the socio-political implications of deepfakes in developing countries.",
      "Synthesised findings from more than 70 peer-reviewed studies to identify research gaps in mammogram preprocessing for breast-cancer detection.",
    ],
  },
  {
    group: "Professional",
    role: "Senior Technical Support Engineer",
    organisation: "Motive",
    period: "December 2025–June 2026",
    bullets: [
      "Resolved more than 200 production incidents spanning cloud services, firmware, AI telematics, and REST API integrations for enterprise fleets.",
      "Partnered with engineering teams to reproduce defects, isolate root causes, and deliver evidence-based technical escalations.",
      "Queried Snowflake and Redash data and analysed Grafana telemetry to trace failures, monitor platform health, and support production reliability.",
    ],
  },
  {
    group: "Professional",
    role: "Automations Engineer",
    organisation: "Farmdar",
    period: "April 2025–December 2025",
    bullets: [
      "Built and operated 12 production Apache Airflow pipelines delivering crop-yield analytics across more than 2 million acres for clients in Pakistan and international markets.",
      "Automated the processing and delivery of more than 100 geospatial reports using PostgreSQL, PostGIS, and AWS S3.",
      "Used CloudWatch monitoring to diagnose and resolve more than 60 workflow failures, improving the reliability of data delivery across production pipelines.",
    ],
  },
  {
    group: "Professional",
    role: "Summer Intern — Data Engineering & DevOps",
    organisation: "Procter & Gamble",
    period: "July 2024–September 2024",
    bullets: [
      "Selected among 20 interns from approximately 6,500 applicants, placing in the top 0.35% of the applicant pool.",
      "Developed three enterprise analytics products supporting data-driven decision-making across Pakistan and Gulf markets, with 95% validated output accuracy.",
      "Built a fault-tolerant ETL workflow with more than 10 automated validation checks and three monitoring dashboards.",
      "Eliminated recurring billing and reporting discrepancies, reducing analyst rework by approximately 40 hours per month.",
    ],
  },
  {
    group: "Professional",
    role: "Information Technology Summer Intern",
    organisation: "Bank of Khyber",
    location: "Peshawar",
    period: "June 2023–August 2023",
    bullets: [
      "Managed and optimised VPN access records supporting secure remote connectivity for more than 300 employees.",
      "Applied encryption and network-security protocols to strengthen the protection of sensitive organisational data and reduce exposure to unauthorised access.",
    ],
  },
  {
    group: "Professional",
    role: "English Tutor",
    organisation: "Engoo",
    location: "Remote",
    period: "June 2022–August 2023",
    bullets: [
      "Mentored more than 50 students in English-language learning and examination preparation, contributing to a 25% improvement in average test scores.",
      "Developed personalised study strategies based on each student's goals, proficiency level, and areas for improvement.",
      "Guided students towards relevant academic programmes and scholarship opportunities supporting their educational and professional development.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution:
      "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology — GIKI",
    degree: "BS in Computer Science",
    period: "September 2021–June 2025",
    location: "Swabi, Pakistan",
    thesis: "Audio-Visual Integrity Analyzer for Multimodal Deepfake Detection",
    advisor: "Dr. Khurram Khan Jadoon",
    body: [
      "My undergraduate work brought together computer vision, audio analysis, data engineering, and responsible AI, and established the research direction I continue to pursue today.",
    ],
    coursework: [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "DevOps",
      "Data Science",
      "Full-Stack Development",
      "Data Warehousing",
      "Parallel and Distributed Computing",
      "Operating Systems",
    ],
  },
  {
    institution: "Roots Millennium Khyber Campus",
    degree: "GCE A Level",
    period: "August 2018–August 2020",
    location: "Peshawar, Pakistan",
    coursework: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
  {
    institution: "Army Public School — (APSACS)",
    degree: "GCE O Level",
    period: "April 2015–August 2018",
    location: "Peshawar, Pakistan",
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "AVIA — Audio-Visual Integrity Analyzer for Multimodal Deepfake Detection",
    tags: [
      "PyTorch",
      "ConvNeXt",
      "GenConViT",
      "CNN–BiLSTM",
      "Computer Vision",
      "Audio Processing",
    ],
    body: [
      "Designed and developed a multimodal deepfake-detection framework integrating ConvNeXt for image forensics, GenConViT for video analysis, and a CNN–BiLSTM architecture for synthetic-speech detection. The system provides one verification workflow across images, videos, and audio.",
      "Trained and evaluated the framework on 12 benchmark datasets containing more than 5,000 samples. Built specialised pipelines to distinguish authentic content from GAN-generated and diffusion-generated media and to evaluate robustness across modalities.",
    ],
    // TODO: Add source code link during implementation.
    links: [
      { label: "Source code" },
      {
        label: "Thesis document",
        url: "https://drive.google.com/file/d/1B9g9iQszLh3jlGcQya_MULJAi_yxq2FW/view?usp=sharing",
      },
    ],
  },
  {
    title: "Smart Attendance System with Multi-Face Recognition",
    tags: ["Python", "Flask", "MTCNN", "SVM", "Face Recognition"],
    body: [
      "Developed a Python backend service for real-time multi-face recognition using MTCNN and SVM models, achieving 91% detection accuracy and processing times below 850 milliseconds per image.",
      "Built a cross-platform application around a Flask architecture, enabling consistent real-time image analysis across devices and supporting attendance capture for multiple faces within a single frame.",
    ],
    links: [
      { label: "Source code" },
      {
        label: "Read on Medium",
        url: "https://medium.com/@itbamalahat/building-a-smart-attendance-system-using-flutter-and-flask-03729bf8786d",
      },
    ],
  },
  {
    title: "CI/CD Pipeline for Containerised Application Deployment",
    tags: ["Jenkins", "Docker", "AWS EC2", "React", "Node.js", "IAM"],
    body: [
      "Reduced manual deployment time by 80% by orchestrating a Jenkins-based continuous-delivery pipeline for containerised React and Node.js services across development, testing, and staging environments on AWS EC2.",
      "Configured separate frontend, backend, and database containers, established shared security groups and IAM roles, and implemented automated unit and integration pipelines to maintain environment parity and reliable container-to-container communication.",
    ],
    links: [{ label: "Source code" }, { label: "Architecture diagram" }],
  },
  {
    title: "Hybrid RFID–PIN Door-Lock System",
    tags: ["Embedded Systems", "RFID", "PIN Authentication", "Access Control"],
    body: [
      "Built a double-layered access-control system combining RFID verification with PIN authentication. The project demonstrates how two independent authentication factors can strengthen physical security while remaining practical for low-cost deployment.",
    ],
    links: [
      {
        label: "View publication",
        url: "https://doi.org/10.3390/materproc2025023019",
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    group: "Artificial intelligence",
    year: "2023",
    title: "Introduction to Generative AI",
    issuer: "Coursera",
    issued: "Issued July 2023",
    credentialId: "77VG5E8UX2ZE",
  },
  {
    group: "Artificial intelligence",
    year: "2023",
    title: "AI for Everyone",
    issuer: "DeepLearning.AI",
    issued: "Issued March 2023",
    credentialId: "ZTEFHNKGS5BG",
  },
  {
    group: "Software and image processing",
    year: "2023",
    title: "Visual C++ for Graphics & Image Processing: Master to Code",
    issuer: "Udemy",
    issued: "Issued June 2023",
    credentialId: "UC-18b9688e-2a41-4201-a53b-fcfcfc64d240",
  },
  {
    group: "Software and image processing",
    year: "2023",
    title: "Visual C++ Programming for Desktop Application Development",
    issuer: "Udemy",
    issued: "Issued June 2023",
    credentialId: "UC-8c245459-11f8-4493-ac34-3a24d4bd824d",
  },
];

export const leadershipRoles: LeadershipRole[] = [
  {
    organisation: "AIESEC in GIKI",
    fullForm:
      "AIESEC — Association Internationale des Étudiants en Sciences Économiques et Commerciales",
    period: "2021–2025",
    bullets: [],
    subRoles: [
      {
        title: "Team Member — Member Experience (MXP)",
        period: "October 2021–April 2022",
        description:
          "Contributed to member engagement, internal culture, and community-building within the local chapter.",
      },
      {
        title: "Team Lead — Digital Marketing & Outreach",
        period: "June 2022–November 2022",
        description:
          "Led digital marketing and outreach efforts, coordinating communications, campaign visibility, and external engagement.",
      },
      {
        title: "Election Chair — Local Committee President",
        period: "October 2024",
        description:
          "Chaired the Local Committee President election, overseeing the process for one of the chapter's most important leadership transitions.",
      },
      {
        title: "Executive Board Discharge Chair",
        period: "February 2025",
        description:
          "Chaired the formal discharge of the outgoing Executive Board, supporting accountability and leadership transition within the chapter.",
      },
    ],
  },
  {
    title: "Co-founder and Chief Editor",
    organisation: "Humans of GIKI",
    period: "February 2022–Present",
    bullets: [
      "Co-founded a digital storytelling platform that grew to an audience of more than 800 people and fostered greater unity, inclusion, and empathy across the GIKI community.",
      "Designed and managed the editorial workflow for more than 165 interviews featuring people from diverse cultural, academic, and personal backgrounds.",
      "Guided story development, interviewing, editing, and publication to ensure that each narrative remained respectful, authentic, and engaging.",
    ],
  },
  {
    organisation: "Literary & Debating Society (LDS), GIKI",
    period: "February 2022–February 2025",
    bullets: [
      "Led marketing for open mics, book clubs, philosophy discussions, and GIK Open for Intellectual Discourse — an All-Pakistan Debate Tournament attracting 200+ debaters from across the country — helping strengthen LDS as a space for debate, literature, and intellectual exchange.",
    ],
    subRoles: [
      {
        title: "Member, Writer & Digital Artist",
        period: "February 2022–2023",
        description:
          "Contributed to literary content, creative writing, and digital artwork for society initiatives.",
      },
      {
        title: "Marketing & Creative Team",
        period: "2023–February 2024",
        description:
          "Worked across merchandise, offline marketing, digital prints, and creative support for society events.",
      },
      {
        title: "Marketing Head",
        period: "February 2024–February 2025",
        description:
          "Led a 40-member marketing team, overseeing promotion, creative direction, and outreach for major literary and intellectual events.",
      },
    ],
  },
  {
    title: "Mentor",
    organisation: "WOMEN IN TECH® Global",
    period: "October 2025–Present",
    bullets: [
      "Supporting women entering and growing within technology through mentorship, encouragement, and practical career guidance.",
    ],
  },
];

export const communityService: CommunityService[] = [
  {
    title: "Founder — Mental Health Club",
    organisation: "Roots Millennium Schools",
    period: "2019–2020",
    milestones: [
      {
        date: "2019",
        text: "Founded a student-led mental-health initiative at Roots Millennium Schools.",
      },
      {
        date: "November 2019",
        text: "Became affiliated with Rehman Medical Institute, building partnerships with licensed mental-health professionals and healthcare institutions to organise expert-led sessions.",
      },
      {
        date: "16 June 2020",
        text: "Contributed to a speaker session with Kehkishan Syed on depression, academic pressure, and mental-health challenges at a national level.",
      },
      {
        date: "19 October 2020",
        text: "Selected as the youngest speaker at the World Mental Health Day event, speaking on youth leadership in mental-health awareness.",
      },
    ],
    bullets: [
      "Introduced research-backed approaches to mental-health education, tailored for the student population.",
    ],
  },
  {
    title: "Volunteer",
    organisation: "Project Topi",
    period: "October 2021–February 2022",
    bullets: [
      "Supported community outreach and social-impact initiatives serving local communities around GIKI.",
    ],
  },
  {
    title: "Intern & Team Lead",
    organisation: "North West General Hospital & Research Center",
    period: "July 2019",
    bullets: [
      "Completed a healthcare-focused internship while taking on team coordination and leadership responsibilities.",
    ],
  },
  {
    organisation: "Women in Engineering",
    bullets: [
      "Contributed to women-focused advocacy and community initiatives, including Aurat March Day and Mahwari Justice disaster-relief efforts.",
    ],
  },
];

export const outreachIntro = {
  intro:
    "I'm interested in bringing technical research into public conversations—particularly around deepfakes, trustworthy AI, digital safety, and the Global South. I'm open to contributing to webinars, university sessions, workshops, panels, and community programmes where my research and technical experience can be useful.",
};

export const talks: Talk[] = [
  {
    title: "Safer Online Spaces for Women in the Age of Generative AI",
    event: "GatherVerse Women\u2019s AI Summit 2026",
    date: "14 September 2026",
  },
];

export const outreachTopics: PersonBlock[] = [
  {
    title: "Deepfakes in South Asia",
    body: "What global datasets, benchmarks, and detection systems often overlook.",
  },
  {
    title: "Building Multimodal Deepfake Detection Systems",
    body: "Lessons from image, video, and audio-based detection.",
  },
  {
    title: "Safer Online Spaces for Women in the Age of Generative AI",
    body: "Synthetic media, online harm, and the need for responsible technology.",
  },
  {
    title: "How to Recognise AI-Generated Media",
    body: "Practical media literacy for students and everyday users.",
  },
  {
    title: "Trustworthy AI Beyond Accuracy",
    body: "Why culture, representation, and real-world impact matter when evaluating AI systems.",
  },
  {
    title: "Navigating an Ever-Changing AI Landscape",
    body: "How students and early-career professionals can build durable skills without chasing every trend.",
  },
  {
    title: "From Research to Public Action",
    body: "Turning technical findings into awareness, education, and digital-safety initiatives.",
  },
];

export const outreachInvitation = {
  copy: "If you are organising a research seminar, student session, digital-rights programme, or public-awareness initiative, I would be glad to explore a contribution.",
  contactLabel: "Contact:",
  email: "itbamalahat@gmail.com",
};

export const peopleIntro = {
  intro:
    "Research is collaborative. These are some of the people who have shaped or currently contribute to my work.",
};

export const presentAffiliations: PersonBlock[] = [
  {
    title: "Colombo HCI Lab — University of Colombo School of Computing",
    body: "I work with Dr. Dilrukshi Gamage at the Colombo HCI Lab on research at the intersection of deepfakes, media literacy, and trustworthy AI in the Global South. In collaboration with Dr. Savindhu Herath and Prof. Yash Raj Shrestha, I contribute to research examining the performance, limitations, and regional relevance of deepfake-detection approaches within South Asian contexts.",
  },
  {
    title: "Deepfake Public Discourse Research",
    body: "I also collaborate with Dr. Dilrukshi Gamage, Dr. Subhayan Mukherjee and the Data4Transparency community on research examining how deepfakes are discussed, shared, and understood across public online spaces. The project explores emerging patterns in public discourse, platform communities, and attitudes toward synthetic media, contributing to a broader understanding of the societal dimensions of deepfakes.",
  },
];

export const researchSupervision: PersonBlock[] = [
  {
    title: "AI for Medical Imaging",
    body: "Under the supervision of Dr. Omer Bin Saeed and Dr. Shahab Uddin Ansari, I contributed to a research survey examining preprocessing methods for mammogram-based breast-cancer detection, studying how data preparation and image-enhancement techniques influence downstream AI-based diagnostic systems.",
  },
  {
    title: "Undergraduate Research — Audiovisual Integrity Analyser",
    body: "My undergraduate thesis, Audiovisual Integrity Analyser (AVIA), was advised by Dr. Khurram Khan Jadoon at the Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI). The project focused on multimodal deepfake detection across audio, image, and video, laying the foundation for my continued research in trustworthy and multimodal AI.",
  },
];

export const news: NewsItem[] = [
  {
    date: "August 2026",
    body: "Our paper, \u201cDeepfake Detection in South Asia,\u201d is in the final stages of write-up ahead of submission to ACM.",
  },
  {
    date: "July 2026",
    body: "I began working with Dr. Subhayan Mukherjee, Dr. Dilrukshi Gamage, and the Data4Transparency (D4T) community on a mixed-methods study of deepfake discourse across Reddit and public Telegram channels, targeted for submission to ICWSM.",
  },
  {
    date: "June 2026",
    body: "I concluded my role as a Senior Technical Support Engineer at Motive after resolving more than 200 production incidents across cloud services, firmware, APIs, and AI-powered telematics.",
  },
  {
    date: "December 2025",
    body: "I joined Motive as a Senior Technical Support Engineer.",
  },
  {
    date: "December 2025",
    body: "Joined the Colombo HCI Lab as a Research Assistant under Dr. Dilrukshi Gamage, researching deepfake detection and media literacy for the Global South.",
  },
  {
    date: "November 2025",
    body: "Inducted into the core team of Deeptrace: South Asia Deepfake Detection Challenge as Pakistan's representative, researching deepfake detection across South Asia.",
  },
  {
    date: "2025",
    body: "Our paper, \u201cDouble-Layered Authentication Door-Lock System Utilizing Hybrid RFID-PIN Technology for Enhanced Security\u201d, was published in Materials Proceedings.",
  },
  {
    date: "June 2025",
    body: "I graduated from GIKI with a Bachelor of Science in Computer Science.",
  },
  {
    date: "May 2025",
    body: "My mammogram-preprocessing survey — synthesising evidence from more than 70 peer-reviewed studies to understand how preprocessing affects downstream breast-cancer detection — has moved into the manuscript writeup stage, supervised by Dr. Omer Bin Saeed and Dr. Shahab Uddin Ansari.",
  },
  {
    date: "April 2025",
    body: "I joined Farmdar as an Automations Engineer, building production data pipelines for agricultural analytics.",
  },
  {
    date: "December 2024",
    body: "I began a structured review of mammogram preprocessing methods for breast-cancer detection under the supervision of Dr. Omer Bin Saeed and Dr. Shahab Uddin Ansari.",
  },
  {
    date: "September 2024",
    body: "Our preprint, \u201cThe Socio-Political Implications of Deepfakes in Developing Countries\u201d, was posted publicly and has since been cited more than 100 times.",
  },
  {
    date: "September 2024",
    body: "I concluded my internship at Procter & Gamble, having delivered data-dashboarding systems for Gulf and Pakistani stakeholders with 100% accuracy, automating quarterly fiscal reporting and enabling live connections across multiple databases.",
  },
  {
    date: "July 2024",
    body: "I joined Procter & Gamble as a Summer Intern in Data Engineering and DevOps after being selected among 20 interns from approximately 6,500 applicants.",
  },
  {
    date: "February 2024",
    body: "Our team — Itba Malahat, Haya Noor, and Lailoma Noor — began work on AVIA, our undergraduate thesis and multimodal deepfake-detection framework, under the supervision of Dr. Khurram Khan Jadoon.",
  },
  {
    date: "June 2023–August 2023",
    body: "I completed a paid summer internship in the IT department at the Bank of Khyber, Peshawar.",
  },
];

export const articlesIntro = {
  intro:
    "I write about the parts of technology that become clearer only after building, breaking, debugging, and questioning them. My articles cover deepfake detection, computer vision, data engineering, geospatial systems, and the lessons hidden inside technical failures.",
};

export const articles: ArticleEntry[] = [
  {
    title: "Multimodal Deepfake Detection",
    description:
      "Why image-only detection is not enough—and how image, video, and audio pipelines can work together to assess the integrity of modern media.",
    tags: ["Deepfakes", "Multimodal AI", "Computer Vision", "Audio Forensics"],
    url: "https://medium.com/@itbamalahat/addressing-the-deepfake-threat-a-multimodal-approach-to-media-integrity-9a25d0912226",
  },
  {
    title: "Building a Smart Attendance System",
    description:
      "A practical account of developing a multi-face recognition system, from face detection and classification to backend architecture and real-time performance.",
    tags: ["Face Recognition", "Python", "Flask", "MTCNN"],
    url: "https://medium.com/@itbamalahat/building-a-smart-attendance-system-using-flutter-and-flask-03729bf8786d",
  },
  {
    title: "What Debugging Teaches Us",
    description:
      "A reflection on debugging as more than error correction: a method for learning how systems behave, testing assumptions, and becoming a stronger engineer.",
    tags: ["Software Engineering", "Debugging", "Learning"],
    url: "https://medium.com/@itbamalahat/debugging-the-key-skill-every-software-engineer-needs-to-ace-8c867de9f820",
  },
  {
    title: "PostGIS Partitioning vs. Views",
    description:
      "A comparison of two approaches to organising and querying geospatial data, with practical trade-offs for performance, maintainability, and production workflows.",
    tags: ["PostGIS", "PostgreSQL", "Geospatial Data", "Data Engineering"],
    url: "https://medium.com/@itbamalahat/postgis-performance-at-scale-partitioning-vs-views-for-satellite-data-6b46a595a07a",
  },
];

export const aboutIntro = {
  paragraphs: [
    "I'm a computer scientist and writer who enjoys building systems, studying their consequences, and making complex ideas accessible. Professionally, I've worked across machine learning, data engineering, automation, and production support — building Airflow pipelines for agricultural analytics, enterprise data products for Pakistan and Gulf markets, and multimodal deepfake-detection systems.",
    "My research centres on trustworthy AI and the Global South — not just whether a model performs well, but who appears in its data, what it misses, and what happens when it meets a real social context. As a South Asian woman, that question is personal: my long-term goal is to connect technical research with public awareness and governance to make digital spaces safer for women in Pakistan, South Asia, and beyond.",
  ],
};

export const beyondResearchPage = {
  heading: "Itba, Beyond Research",
  intro:
    "A few things about me that don't fit neatly into a CV — my story, in my own words.",
  story: [
    "I was born and raised in Peshawar. For as long as I can remember, I've wanted to understand how the world works — physics was my first love.",
    "A gap year during COVID-19 changed my plans. I couldn't pursue physics the way I'd hoped, so I joined GIKI to study computer science instead. It wasn't the plan, but it gave me a new way to look at the same questions — systems, patterns, and cause and effect, just written in code.",
    "Along the way, I found purpose as a women's-rights activist, building solutions for communities that technology usually overlooks. That eventually led me into adversarial AI — studying where intelligent systems break, and who gets hurt when they do.",
    "I love literature, open mics, writing poetry, and conversations that start on one subject and end up somewhere completely different.",
    "I'm a lover of philosophy, physics, computing, safety, and social action — still figuring out how they all fit together. Mostly, I'm just hoping to leave the world a little better than I found it.",
  ],
};

export const currentInterests: string[] = [
  "Trustworthy AI",
  "AI Safety",
  "Multimodal Learning",
  "Synthetic-Media Detection",
  "Computer Vision",
  "Agentic AI",
  "AI Governance",
  "Data-Centric Evaluation",
  "Technology for Good",
];

export const cvSection = {
  description:
    "Download CV — Research, publications, engineering experience, projects, leadership, and service.",
};

export const bios: Bio[] = [
  {
    label: "One-line bio",
    body: "Machine learning engineer and trustworthy AI researcher building culturally grounded systems for safer digital spaces in South Asia.",
  },
  {
    label: "50-word bio",
    body: "Itba Malahat is a machine learning engineer and researcher at the Colombo HCI Lab, where she works on deepfake detection and media literacy for the Global South. Her interests span trustworthy AI, multimodal learning, AI safety, computer vision, and the use of technology to create safer digital spaces for women.",
  },
  {
    label: "100-word bio",
    body: "Itba Malahat is a machine learning engineer and trustworthy AI researcher from Pakistan. At the Colombo HCI Lab, University of Colombo School of Computing, she works with Dr. Dilrukshi Gamage on deepfake detection, culturally grounded evaluation, and media literacy for the Global South. She earned a BS in Computer Science from GIKI. Her experience spans multimodal deepfake detection, production data pipelines, enterprise analytics, AI telematics, and technical support. Her long-term mission is to connect technical research, governance, and public awareness to create safer digital spaces for women in South Asia.",
  },
  {
    label: "Speaker introduction",
    body: "Itba Malahat is a machine learning engineer and trustworthy AI researcher whose work focuses on deepfake detection, multimodal learning, and the Global South. She is a researcher at the Colombo HCI Lab. Through her research and public-interest work, she aims to make digital spaces safer for women in Pakistan and across South Asia.",
  },
];

export const mentorshipPage = {
  heading: "Mentorship & Collaboration",
  intro: [
    "A space for students, early-career professionals, researchers, and people working on meaningful social-impact problems to connect, learn, and collaborate.",
    "I offer a limited number of mentorship and collaboration sessions. Choose the conversation that best fits what you're looking for.",
  ],
  footerNote:
    "Mentorship sessions are free. I can't guarantee jobs, admissions, research positions, or publications. I can share what I've learned from my own experiences, help you think through a problem, and hopefully make your next step a little clearer.",
};

export const mentorshipOptions: MentorshipOption[] = [
  {
    number: "01",
    category: "Mentorship",
    title: "Early-Career Industry Mentorship",
    duration: "30 minutes",
    intro: [
      "For students, recent graduates, and early-stage professionals navigating careers in software, AI, data, automation, and technology.",
    ],
    topicsLabel: "We can talk about:",
    topics: [
      "Breaking into industry",
      "Choosing a career direction",
      "Moving from university to professional work",
      "CVs, portfolios, and applications",
      "Building technical experience",
      "Navigating your first few roles",
      "Research vs. industry",
    ],
    buttonLabel: "Book Mentorship",
    calendlyUrl: "https://calendly.com/yourname/industry-mentorship",
  },
  {
    number: "02",
    category: "Mentorship",
    title: "Getting Into Research",
    duration: "30 minutes",
    intro: [
      "For students and early-career professionals who want to enter research but aren't sure where to begin.",
    ],
    topicsLabel: "We can talk about:",
    topics: [
      "Finding an area you're genuinely interested in",
      "How to start reading research papers",
      "Finding research gaps",
      "Turning an interest into a research question",
      "Approaching professors and researchers",
      "Finding RA opportunities",
      "Starting your first research project",
      "Building toward publications or graduate research",
    ],
    buttonLabel: "Start Your Research Journey",
    calendlyUrl: "https://calendly.com/yourname/research-mentorship",
  },
  {
    number: "03",
    category: "Mentorship",
    title: "Research Problem Solving",
    duration: "45 minutes",
    intro: [
      "Already have a problem or research idea?",
      "Bring it to the session and we'll work through it together: understanding the problem, questioning assumptions, narrowing the scope, identifying relevant evidence, and figuring out what your next step should be.",
    ],
    note: "This isn't about giving you the answer. It's about helping you develop a better way to approach the problem.",
    buttonLabel: "Work Through a Problem",
    calendlyUrl: "https://calendly.com/yourname/research-problem-solving",
  },
  {
    number: "04",
    category: "Collaborate",
    title: "Research Collaboration",
    duration: "30 minutes",
    intro: [
      "For researchers, academics, labs, students, and practitioners interested in exploring potential research collaborations.",
    ],
    topicsLabel: "I'm particularly interested in conversations around:",
    topics: [
      "Trustworthy & Responsible AI",
      "AI Safety",
      "Deepfakes & Synthetic Media",
      "Multimodal AI",
      "Online Harms",
      "AI and the Global South",
      "Culturally grounded AI evaluation",
      "Technology and society",
    ],
    note: "Have a research question, dataset, study, paper, project, or early-stage idea where our interests overlap? Tell me about it.",
    buttonLabel: "Explore Research Collaboration",
    calendlyUrl: "https://calendly.com/yourname/research-collaboration",
  },
  {
    number: "05",
    category: "Collaborate",
    title: "Social Impact & Community Collaboration",
    duration: "30 minutes",
    intro: [
      "For NGOs, social workers, activists, educators, student organizations, digital-rights groups, and community initiatives.",
      "If you're working on a problem where technology or research could help, I'd love to hear about it.",
    ],
    topicsLabel: "I may be able to contribute through:",
    topics: [
      "Workshops and educational sessions",
      "AI and digital-safety awareness",
      "Technical guidance",
      "Research",
      "Resource development",
      "Community initiatives",
      "Awareness campaigns",
      "Responsible technology projects",
    ],
    note: "Tell me about the people you are trying to help, the problem you're addressing, and where you think I could contribute.",
    buttonLabel: "Let's Collaborate",
    calendlyUrl: "https://calendly.com/yourname/social-impact",
  },
];

export const contactPage = {
  heading: "Let\u2019s work on something meaningful",
  paragraphs: [
    "I'm always up for research collaborations, responsible-AI work, speaking opportunities, and engineering projects that sit at the intersection of AI, data, and social impact.",
    "If you're working on trustworthy AI, deepfake detection, multimodal systems, digital rights, or making online spaces safer for women, I'd love to hear from you.",
  ],
  collaborationCta: "For collaborations: itbamalahat [AT] g**** [DOT] com",
  actions: [
    { label: "Email me", href: `mailto:${socialLinks.email}` },
    { label: "Connect on LinkedIn", href: socialLinks.linkedin },
    { label: "Read my writing on Medium", href: socialLinks.medium },
  ],
};

export const footer = {
  copyright: siteConfig.name,
  line: "Built with curiosity, care, and a commitment to technology for good.",
  year: "2026",
};
