import type { ExperienceType, ProjectType, ServiceType, ToolType } from "@/types";
import { Code, Layout, Globe, Layers } from "lucide-react";
export const education: ExperienceType[] = [
  {
    year: "2019 - 2023",
    title: "Bachelor of Technology (CSE)",
    note: "CGPA 8.26 / 10",
    institute: "Delhi Technical Campus",
    desc: [
      "Built a strong foundation in software engineering, data structures, algorithms, and full-stack development.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    year: "Aug 2024 – Present",
    title: "Full Stack Developer",
    note: "Promoted from Intern",
    startDate: "2024-08-01",
    institute: "Frisson Devhub, Noida, India",
    desc: [
      "Delivered 8+ production-ready web apps using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.",
      "Designed, documented, and optimized 25+ REST APIs and backend services with Swagger (OpenAPI), improving maintainability and developer collaboration.",
      "Optimized MongoDB aggregation pipelines and queries, cutting average API response time from ~94 ms to ~26 ms (73% faster).",
      "Integrated Meta Ads and Google Ads into the in-house CRM via OAuth, letting each user connect their ad accounts and view their latest leads in-app.",
      "Explored publishing posts to Meta and LinkedIn directly from the CRM, enabling auto-posting from a single platform.",
      "Integrated secure payment gateways (Stripe, Razorpay) for subscription management and online payments.",
      "Built authentication and authorization with JWT, OAuth, and role-based access control.",
      "Built and maintained CMS-driven applications using Strapi and Sitecore for dynamic content management.",
      "Collaborated with cross-functional teams to improve workflows, database schemas, and dashboard performance.",
    ],
    highlights: [
      { value: "8+", label: "Production apps delivered" },
      { value: "25+", label: "REST APIs built & documented" },
      { value: "73%", label: "Faster API response time" },
    ],
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "OAuth", "Stripe", "Razorpay", "Strapi", "Sitecore", "Swagger"],
  },
];


export const services: ServiceType[] = [
  {
    title: "Full Stack Development",
    desc: "Building production-ready web applications across frontend, backend, and database layers using React, Next.js, Node.js, MongoDB, and PostgreSQL.",
    highlight: "End-to-End Solutions",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Frontend Engineering",
    desc: "Creating responsive, accessible, and performant user interfaces with modern React ecosystems, optimized for usability and seamless user experiences.",
    highlight: "Modern Frontend Stack",
    icon: <Layout className="h-6 w-6" />,
  },
  {
    title: "Backend Development",
    desc: "Developing scalable REST APIs, authentication systems, business logic, and database-driven applications using Node.js, Express.js, MongoDB, and PostgreSQL.",
    highlight: "API & Database Systems",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "CMS & Integrations",
    desc: "Integrating third-party platforms via OAuth (Meta Ads, Google Ads, LinkedIn), payment gateways like Stripe and Razorpay, and headless CMS platforms such as Strapi and Sitecore.",
    highlight: "Business Integrations",
    icon: <Layers className="h-6 w-6" />,
  },
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: '/varitva.png',
    title: 'Varitva – AI Voice & Chat Agents',
    description:
      'Platform for AI voice and chat agents that handle inbound and outbound customer conversations across languages and channels, with human handoff.',
    tags: ['Next.js', 'React', 'Vercel'],
    projectLink: 'https://www.varitva.com/',
    ownership: 'company',
  },
  {
    imgSrc: '/SikhTrust.png',
    title: 'Global Sikh Charitable Trust',
    description:
      'Website for a charitable trust showcasing its seva initiatives, with online donations powered by Razorpay.',
    tags: ['Razorpay', 'Responsive UI'],
    projectLink: 'https://globalsikhcharity.in/',
    ownership: 'company',
  },
  {
    imgSrc: '/project1.png',
    title: 'CultureNOW – Digital Museum',
    description:
      'A "museum without walls" mapping public art and architecture, with rich, content-driven pages for artworks and artists.',
    tags: ['Next.js', 'React', 'Vercel'],
    projectLink: 'https://culturenow.org/',
    ownership: 'company',
  },
  {
  imgSrc: '/project5.png',
  title: 'Digitas',
  description:
    'Multilingual destination website for Diriyah, featuring CMS-managed content and dynamic pages powered by Sitecore.',
  tags: ['Sitecore', 'CMS', 'Multilingual'],
  projectLink: 'https://www.diriyah.sa/en',
  ownership: 'company',
},
];

export const tools: ToolType[] = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "C++"] },
  { category: "Frontend", items: ["React.js", "Next.js", "HTML5", "CSS3"] },
  { category: "State Management", items: ["Redux", "Redux Toolkit", "Context API"] },
  { category: "Styling / UI", items: ["Tailwind CSS", "Material UI", "Chakra UI", "Bootstrap", "shadcn/ui"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "Bcrypt"] },
  { category: "Databases & CMS", items: ["MongoDB", "PostgreSQL", "Strapi", "Sitecore"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "Postman", "Swagger / OpenAPI", "Jira", "DBeaver"] },
];
