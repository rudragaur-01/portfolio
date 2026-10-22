

export type ProjectType = {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
  projectLink: string;
  ownership: "personal" | "company" | "freelance";
};

export interface ExperienceType {
  year: string;
  startDate?: string;
  title: string;
  note?: string;
  institute: string;
  desc: string[];
  tags?: string[];
  highlights?: { value: string; label: string }[];
}
export type ServiceType = {
  title: string;
  desc: string;
  highlight: string;
  icon: React.ReactNode;
};

export type ToolType = {
  category: string;
  items: string[];
};
