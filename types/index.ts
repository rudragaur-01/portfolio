
import type { JSX } from "react";

export type ProjectType = {
  imgSrc: string;
  title: string;
  projectLink: string;
  ownership: "personal" | "company" | "freelance";
};

export interface ExperienceType {
  year: string;
  startDate?: string;
  title: string;
  institute: string;
  desc: string[];
}
export type ServiceType = {
  title: string;
  desc: string;
  highlight: string;
  icon: React.ReactNode;
};

export type ToolType = {
  label: string;
};
