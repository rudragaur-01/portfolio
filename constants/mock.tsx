import type { ProjectType, ServiceType, ToolType } from "@/types";
import { Code, Layout, Globe, Layers } from "lucide-react";
export const education = [
  {
    year: "2019 - 2023",
    title: "Bachelor of Technology (CSE)",
    institute: "Delhi Technical Campus",
    desc: [
      "Graduated with a CGPA of 8.26 / 10.",
      "Built a strong foundation in software engineering, data structures, algorithms, and full-stack development.",
    ],
  },
];

export const experience = [
  {
    year: "Aug 2024 – Present",
    title: "Full Stack Developer",
    startDate: "2024-08-01",
    institute: "Frisson Devhub, Noida, India",
    desc: [
      "Started as a Full Stack Developer Intern and progressed to a Full Stack Developer role based on performance.",
      "Built and maintained scalable web applications using React.js, Next.js, Node.js, Express.js, PostgreSQL, and MongoDB.",
      "Designed and developed REST APIs with authentication, authorization, and role-based access control.",
      "Integrated Stripe payment gateway for high-traffic production applications serving 100K+ users.",
      "Worked extensively with Strapi CMS and Sitecore CMS for dynamic content management.",
      "Optimized application performance through efficient database design, API improvements, and frontend optimizations.",
      "Collaborated with cross-functional teams to deliver production-ready client projects from development to deployment.",
      "Debugged, maintained, and enhanced existing applications while implementing new business requirements."
    ],
  },
];


export const services: ServiceType[] = [
  {
    title: "Full Stack Development",
    desc: "Building production-ready web applications across frontend, backend, and database layers using React, Next.js, Node.js, MongoDB, and PostgreSQL.",
    highlight: "End-to-End Solutions",
    icon: <Code className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Frontend Engineering",
    desc: "Creating responsive, accessible, and performant user interfaces with modern React ecosystems, optimized for usability and seamless user experiences.",
    highlight: "Modern Frontend Stack",
    icon: <Layout className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Backend Development",
    desc: "Developing scalable REST APIs, authentication systems, business logic, and database-driven applications using Node.js, Express.js, MongoDB, and PostgreSQL.",
    highlight: "API & Database Systems",
    icon: <Globe className="h-6 w-6 text-green-400" />,
  },
  {
    title: "CMS & Integrations",
    desc: "Implementing payment gateways, headless CMS platforms, and third-party services including Stripe, Razorpay, Strapi, Sitecore, and authentication providers.",
    highlight: "Business Integrations",
    icon: <Layers className="h-6 w-6 text-green-400" />,
  },
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: '/SikhTrust.png',
    title: 'Global Sikh Charitable Trust',

    projectLink: 'https://globalsikhcharity.in/',
    ownership: 'company',
  },
  {
    imgSrc: '/project1.png',
    title: 'CultureNOW – Digital Museum',
    projectLink: 'https://culturenow.org/',
    ownership: 'company',
  },
  {
    imgSrc: '/project5.png',
    title: 'Digitas',

    projectLink: 'https://www.diriyah.sa/en',
    ownership: 'company',
  },
  {
    imgSrc: '/project6.png',
    title: 'Gathergram',

    projectLink: 'https://www.gathergram.app/about',
    ownership: 'company',
  },

  {
    imgSrc: '/project7.png',
    title: 'Event Management Platform',

    projectLink: 'https://github.com/rudragaur-01/event-platform',
    ownership: 'freelance',
  },
  {
    imgSrc: '/phys.webp',
    title: 'Phishing Analyzer API',

    projectLink: 'https://github.com/rudragaur-01/phishing-analyzer-api',
    ownership: 'personal',
  },
];

export const tools: ToolType[] = [
  { label: "JavaScript" },
  { label: "Python" },
  { label: "TypeScript" },
  { label: "HTML5" },
  { label: "CSS3" },
  { label: "React.js" },
  { label: "Next.js" },
  { label: "Redux" },
  { label: "Tailwind CSS" },
  { label: "Node.js" },
  { label: "Express.js" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
  { label: "Strapi" },
  { label: "Git & GitHub" },
  { label: "JWT Auth" },
  { label: "Agile Workflow" },
  { label: "Stripe API" },
];
