import type { ProjectType, ServiceType, ToolType } from "@/types";
import { Code, Layout, Globe } from "lucide-react";
export const education = [
  {
    year: "2019 - 2023",
    title: "Bachelor of Technology (CSE)",
    institute: "Delhi Technical Campus",
    desc: "Secured a CGPA of 8.26 / 10. Built a strong foundation in software engineering, data structures, and full-stack development.",
  },
];

export const experience = [
  {
    year: "Nov 2024 – Jan 2026",
    title: "Full Stack Developer",
    institute: "Frisson Devhub, Noida, India",
    desc: "Optimized full-stack applications, improved performance, integrated Stripe payments, built REST APIs, and accelerated development using modular UI components.",
  },
  {
    year: "Aug 2024 – Oct 2024",
    title: "Full Stack Developer Intern",
    institute: "Frisson Devhub, Noida, India",
    desc: "Improved UI components, collaborated in Agile sprints, strengthened debugging and Git workflows, and worked on scalable module development.",
  },
];

export const services: ServiceType[] = [
  {
    title: "Full Stack Development",
    desc: "I develop scalable, high-performance web applications using modern technologies like Next.js, React, Node.js, and MongoDB.",
    highlight: "End-to-End Solutions",
    icon: <Code className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Frontend Engineering",
    desc: "Creating responsive, accessible, and visually engaging user interfaces with a focus on performance and seamless user experience.",
    highlight: "Modern Frontend Stack",
    icon: <Layout className="h-6 w-6 text-green-400" />,
  },
  {
    title: "Backend Development",
    desc: "Building secure and efficient APIs, integrating databases, and architecting reliable backend systems using Node.js and Express.",
    highlight: "Robust API Architecture",
    icon: <Globe className="h-6 w-6 text-green-400" />,
  },
];

export const projectsData: ProjectType[] = [
  {
    imgSrc: '/project1.png',
    title: 'CultureNOW – Digital Museum',
    tags: ['Frontend', 'Backend', 'Database'],
    projectLink: 'https://culturenow.org/',
    ownership: 'company',
  },
  {
    imgSrc: '/project5.png',
    title: 'Digitas',
    tags: ['Frontend', 'CMS'],
    projectLink: 'https://www.diriyah.sa/en',
    ownership: 'company',
  },
  {
    imgSrc: '/project6.png',
    title: 'Gathergram',
    tags: ['Frontend'],
    projectLink: 'https://www.gathergram.app/about',
    ownership: 'company',
  },

  {
    imgSrc: '/project7.png',
    title: 'Event Management Platform',
    tags: ['Frontend', 'Backend', 'Database'],
    projectLink: 'https://github.com/rudragaur-01/event-platform',
    ownership: 'freelance',
  },
  {
    imgSrc: '/project4.png',
    title: 'Dashboard',
    tags: ['Frontend'],
    projectLink: 'https://github.com/rudragaur-01',
    ownership: 'personal',
  },
  {
    imgSrc: '/phys.webp',
    title: 'Phishing Analyzer API',
    tags: ['Backend', 'Python'],
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
