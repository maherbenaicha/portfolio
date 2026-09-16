/** Portfolio content based on Maher Ben Aicha's CV. */

export const IDENTITY = {
  name: "Maher Ben Aicha",
  firstName: "Maher",
  role: "Software Engineering Student at ENIT",
  focusLine: "AI • Computer Vision",
  heroDescription:
    "Building end-to-end applications that combine AI models, computer vision, and full-stack web development.",
  location: "Tunis, Tunisia",
  coordinates: { lat: "36.8065° N", lon: "10.1815° E" },
  quote: "Code is the tool. Intelligence is the goal.",
  cursiveTag: "AI Meets Code",
  phrases: {
    heroLine1: "LEARN  BUILD  SHIP",
    heroLine2: "INTELLIGENT SYSTEMS",
    tunisiaToWorld: "TUNISIA → THE WORLD",
    alwaysBuilding: "ALWAYS A STUDENT // ALWAYS BUILDING",
  },
} as const;

export const SOCIALS = {
  github: "https://github.com/maherbenaicha",
  linkedin: "https://www.linkedin.com/in/maher-ben-aicha-86808a368/",
  email: "maher.benaicha@etudiant-enit.utm.tn",
  phone: "+216 94 916 106",
  phoneHref: "tel:+21694916106",
  resume: "/Resume.pdf",
} as const;

/** Hero portrait. Placeholder monogram graphic — swap this file for a real
 *  photo cutout whenever one is available; the rest of the Hero treats it as
 *  a plain image (oval mask, backlight, rim light are all applied in CSS). */
export const PORTRAIT = {
  current: "/assets/maher-portrait.png",
  alt: "Maher Ben Aicha",
} as const;

export const NAV_LINKS = [
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

export const ABOUT_SUMMARY =
  "I am a final-year software engineering student at the National Engineering School of Tunis (ENIT), with a strong interest in artificial intelligence, computer vision, machine learning, and full-stack development. I build end-to-end applications that combine AI models, REST APIs, databases, and modern web technologies. I am currently seeking a PFE / internship opportunity abroad in software engineering or artificial intelligence.";

export type Expertise = {
  number: string;
  title: string;
  description: string;
  stack: string[];
};

export const EXPERTISE: Expertise[] = [
  {
    number: "01",
    title: "Artificial Intelligence & Computer Vision",
    description:
      "Detection and classification pipelines built on YOLOv8, OpenCV, and MediaPipe, from satellite imagery to real-time gesture tracking.",
    stack: ["YOLOv8", "OpenCV", "MediaPipe", "CNN", "LSTM", "Deep Learning", "Computer Vision"],
  },
  {
    number: "02",
    title: "Machine Learning & LLMs",
    description:
      "Fine-tuning and integrating language models into applications, from prompt-engineered assistants to automated scoring systems.",
    stack: ["LLM Fine-Tuning", "Prompt Engineering", "Hugging Face Transformers", "DistilGPT-2", "Groq API", "Llama 3.3"],
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications connecting React and Angular front ends to Node.js, Express, and Spring Boot back ends.",
    stack: ["React", "Node.js", "Express", "Angular", "Spring Boot", "FastAPI", "REST APIs"],
  },
  {
    number: "04",
    title: "Data, Cloud & Geospatial",
    description:
      "Working with relational and NoSQL databases, containerized deployments, and geospatial data from satellite sources.",
    stack: ["SQL Server", "MySQL", "MongoDB", "Docker", "Sentinel-1", "GeoTIFF", "Copernicus API", "Leaflet.js"],
  },
  {
    number: "05",
    title: "Software Engineering Foundations",
    description:
      "A solid base across languages and tools that keeps the AI and full-stack work grounded in good engineering practice.",
    stack: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Git", "Linux", "Postman"],
  },
];

export const STACK_GROUPS = [
  { title: "Programming", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "Artificial Intelligence",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "LLM Fine-Tuning", "Prompt Engineering"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Spring Boot", "Angular", "FastAPI", "OpenCV", "MediaPipe", "YOLOv8"],
  },
  { title: "Databases & Tools", items: ["SQL Server", "MySQL", "MongoDB", "Git", "Docker", "Postman", "Linux"] },
] as const;

export const MARQUEE_TECH = [
  "Délice Danone",
  "Safran Electrical & Power",
  "ENIT Tunis",
  "YOLOv8",
  "LLM Fine-Tuning",
  "Computer Vision",
  "Sentinel-1 SAR",
  "Groq API · Llama 3.3",
] as const;

export const SKILL_BARS = {
  left: {
    title: "Artificial Intelligence & CV",
    items: [
      { name: "Machine Learning / Deep Learning", pct: 90 },
      { name: "Computer Vision (YOLOv8 / OpenCV)", pct: 88 },
      { name: "LLM Fine-Tuning & Prompt Engineering", pct: 82 },
      { name: "MediaPipe / Gesture Recognition", pct: 80 },
      { name: "NLP", pct: 75 },
    ],
  },
  right: {
    title: "Programming & Full-Stack",
    items: [
      { name: "Python", pct: 92 },
      { name: "React / Node.js / Express", pct: 87 },
      { name: "Java / Spring Boot", pct: 80 },
      { name: "TypeScript / Angular", pct: 78 },
      { name: "Docker / SQL / MongoDB", pct: 76 },
    ],
  },
} as const;

export const TECH_CHIPS = [
  "Python", "Java", "TypeScript", "JavaScript", "SQL", "React", "Node.js", "Express",
  "Angular", "Spring Boot", "FastAPI", "YOLOv8", "OpenCV", "MediaPipe", "CNN", "LSTM",
  "Hugging Face", "DistilGPT-2", "Llama 3.3", "Groq API", "Docker", "SQL Server",
  "MySQL", "MongoDB", "Git", "Postman", "Linux", "Sentinel-1", "GeoTIFF", "Leaflet.js",
  "Copernicus API", "Roboflow",
] as const;

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  github: string;
  live?: string;
  /** abstract visual identity for the generated card artwork */
  visual: "pipeline" | "agents" | "recon" | "vision" | "cloud" | "app" | "search" | "game";
  emoji: string;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "oilscan",
    name: "OilScan — Oil Spill Detection from SAR Satellite Imagery",
    category: "Computer Vision × Geospatial",
    year: "2025–2026",
    shortDesc:
      "An end-to-end computer vision pipeline for maritime oil spill detection using Sentinel-1 SAR imagery.",
    fullDesc:
      "Developed at ENIT, OilScan preprocesses and calibrates Sentinel-1 SAR satellite images, fine-tunes YOLOv8 on 1,000 annotated SAR images to detect oil spills, and serves the results through a FastAPI web GIS interface for geo-referenced spill visualization.",
    tags: ["Python", "YOLOv8", "OpenCV", "NumPy", "Sentinel-1", "GeoTIFF", "FastAPI", "Leaflet.js", "Copernicus API", "Roboflow"],
    github: "https://github.com/maherbenaicha",
    visual: "vision",
    emoji: "🛰️",
  },
  {
    slug: "tunisian-sign-language",
    name: "Tunisian Sign Language to Text Translation",
    category: "Computer Vision × Mobile",
    year: "2025–2026",
    shortDesc:
      "A mobile application for bidirectional translation between Tunisian Sign Language and text.",
    fullDesc:
      "Designed and developed a mobile application for bidirectional translation between Tunisian Sign Language and text, combining OpenCV and MediaPipe for hand and body keypoint detection with CNN and LSTM models for temporal gesture classification.",
    tags: ["Python", "OpenCV", "MediaPipe", "CNN", "LSTM", "Deep Learning"],
    github: "https://github.com/maherbenaicha",
    visual: "app",
    emoji: "🤟",
  },
  {
    slug: "llm-chatbot",
    name: "Intelligent LLM-Based Chatbot",
    category: "AI × Full Stack",
    year: "2024–2025",
    shortDesc:
      "A conversational application powered by a fine-tuned DistilGPT-2 model with persistent conversation history.",
    fullDesc:
      "Developed an intelligent conversational application powered by DistilGPT-2, covering model fine-tuning, REST API integration, and persistent conversation management. Connected the system to MySQL, containerized it with Docker, and deployed it to a cloud environment for evaluation.",
    tags: ["Python", "Hugging Face Transformers", "DistilGPT-2", "Docker", "MySQL", "REST API"],
    github: "https://github.com/maherbenaicha",
    visual: "pipeline",
    emoji: "🤖",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    slug: "stagedelice",
    name: "StageDélice — Recruitment Platform",
    category: "Full Stack × AI",
    year: "2025–2026",
    shortDesc:
      "A full-stack technical recruitment platform with AI-powered question generation and CV analysis, built during a Délice Danone internship.",
    fullDesc:
      "Designed and developed a full-stack technical recruitment platform for Délice Danone using React, Node.js/Express, and SQL Server. Implemented MCQ test management, timed candidate assessments with automatic grading, results dashboards with Excel/PDF export, and AI-powered question generation using Llama 3.3 70B through the Groq API. Also developed the Talent AI module for automated CV analysis, candidate compatibility scoring, candidate ranking, and an HR assistant chatbot.",
    tags: ["React", "Node.js", "Express", "SQL Server", "Groq API", "Llama 3.3", "Docker"],
    github: "https://github.com/maherbenaicha",
    visual: "app",
    emoji: "💼",
  },
  {
    slug: "safran-notification-service",
    name: "Automated Email Notification Microservice",
    category: "Backend × Enterprise",
    year: "2025",
    shortDesc:
      "A scheduled email notification microservice built during an internship at Safran Electrical & Power.",
    fullDesc:
      "Contributed to an automated email notification microservice within the digitalization team at Safran Electrical & Power. Developed REST APIs with Java 8 and Spring Boot 2.7, implemented scheduled notification processing with Spring @Scheduled, and integrated SQL Server for notification templates and history, alongside an Angular/TypeScript frontend for template management and notification history.",
    tags: ["Java", "Spring Boot", "Maven", "SQL Server", "Angular", "TypeScript"],
    github: "https://github.com/maherbenaicha",
    visual: "cloud",
    emoji: "📧",
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];

export type ExperienceEntry = {
  org: string;
  title: string;
  kind: "Internship";
  location: string;
  period: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    org: "Délice Danone",
    title: "Software Engineering Intern — StageDélice Recruitment Platform",
    kind: "Internship",
    location: "Tunisia",
    period: "2025–2026",
    description:
      "Designed and developed a full-stack technical recruitment platform using React, Node.js/Express, and SQL Server. Implemented MCQ test management, timed candidate assessments with automatic grading, results dashboards with Excel/PDF export, and AI-powered question generation using Llama 3.3 70B through the Groq API. Developed the Talent AI module for automated CV analysis, candidate compatibility scoring, candidate ranking, and an HR assistant chatbot.",
    tech: ["React", "Node.js", "Express", "SQL Server", "JavaScript", "JWT", "REST API", "Groq API", "Llama 3.3", "Docker"],
    links: [],
  },
  {
    org: "Safran Electrical & Power",
    title: "Software Engineering Intern",
    kind: "Internship",
    location: "Soliman, Tunisia",
    period: "June – July 2025",
    description:
      "Contributed to an automated email notification microservice within the digitalization team. Developed REST APIs with Java 8 and Spring Boot 2.7, implemented scheduled notification processing with Spring @Scheduled, and integrated SQL Server for notification templates and history. Contributed to an Angular/TypeScript frontend for template management and notification history.",
    tech: ["Java", "Spring Boot", "Maven", "SQL Server", "Angular", "TypeScript", "REST API", "Postman"],
    links: [],
  },
];

export type Certification = {
  name: string;
  org: string;
  date: string;
  href?: string;
  verifyHref?: string;
  summary: string;
  skills: string[];
};

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AI Fundamentals",
    org: "IBM SkillsBuild",
    date: "2026",
    summary:
      "Foundational certification covering core artificial intelligence and machine learning concepts and applications.",
    skills: ["Artificial Intelligence", "Machine Learning Basics"],
  },
  {
    name: "CCNA: Introduction to Networks",
    org: "Cisco Networking Academy",
    date: "2026",
    summary:
      "Foundational networking certification focused on IP addressing, switching, routing, and troubleshooting best practices.",
    skills: ["Network Fundamentals", "IPv4/IPv6 & Subnetting", "Ethernet Switching", "Routing Concepts"],
  },
];

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
  note: string | null;
};

export const EDUCATION: EducationEntry[] = [
  {
    degree: "B.Eng. in Software Engineering",
    school: "ENIT — École Nationale d'Ingénieurs de Tunis",
    period: "September 2024 — Present",
    note: "Final year",
  },
  {
    degree: "Preparatory Cycle for Engineering Studies — Mathematics & Physics (MP)",
    school: "IPEIN — Institut Préparatoire aux Études d'Ingénieurs de Nabeul",
    period: "September 2021 — July 2023",
    note: "High Honors — Rank: MP 387",
  },
];

type ClubEntry = {
  role: string;
  org: string;
  period: string;
  detail: string;
  certificate?: { href: string; title: string };
};

export const CLUBS: readonly ClubEntry[] = [
  {
    role: "Member",
    org: "G2FOSS ENIT — Software Club",
    period: "2024 → Present",
    detail: "Participating in technical workshops, software development activities, and collaborative projects.",
  },
  {
    role: "Participant",
    org: "Injaz El Arab Competition",
    period: "2025",
    detail:
      "Participated in a sustainability-focused project developing thermal insulation panels from natural materials, strengthening teamwork, project management, problem-solving, and sustainable innovation.",
  },
] as const;

export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
  { name: "English", level: "B2" },
] as const;

export const HERO_STATS = [
  { value: "5+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "ENIT", label: "Top School" },
];
