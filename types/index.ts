
import type { JSX } from "react";

export type ProjectType = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  ownership: "personal" | "company" | "freelance";
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  highlight: string;
  icon: React.ReactNode;
};

export type ToolType = {
  label: string;
};
