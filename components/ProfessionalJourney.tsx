import React from "react";
import { TrendingUpIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, experience } from "../constants/mock";
import type { ExperienceType } from "@/types";

interface ExpCardProps {
  item: ExperienceType;
  ed?: boolean;
}

const ExpCard: React.FC<ExpCardProps> = ({ item, ed }) => {
  return (
    <div className="relative group tracking-wide">
      <div className="absolute -left-[31px] top-1 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300" />
      <div className="flex flex-col gap-2">
        <span className="text-neutral-400 text-base xl:text-lg group-hover:text-primary transition duration-300">
          {item.year}
        </span>

        <h3 className="text-lg lg:text-xl font-semibold mt-1">{item.title}</h3>

        <p className="text-sm lg:text-base text-neutral-400 mb-1">
          {ed ? "Course by" : "Company:"}{" "}
          <span className="font-medium text-foreground">{item.institute}</span>
        </p>

        <p className="text-sm lg:text-base text-neutral-400">{item.desc}</p>
      </div>
    </div>
  );
};

const ProfessionalJourney = () => {
  return (
    <section className="mb-16" id="professional-journey">
      <SectionHeader icon={<TrendingUpIcon />} title="Professional Journey" />

      <p className="  text-neutral-300 md:text-left mx-auto md:mx-0 leading-relaxed text-base xl:text-lg tracking-wide mb-8">
        A comprehensive overview of my education, work experience, and
        technologies I use to build modern, scalable, and high-performance
        applications.
      </p>

      <div className="grid gap-8 md:grid-cols-2 ">
        <div>
          <h2 className="text-xl lg:text-3xl font-semibold mb-4 lg:mb-8">
            Work Experience
          </h2>
          <div className="space-y-10 border-l border-neutral-700 pl-6">
            {experience.map((item, i) => (
              <ExpCard key={i} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl lg:text-3xl font-semibold mb-4 lg:mb-8">
            Education
          </h2>
          <div className="space-y-10 border-l border-neutral-700 pl-6">
            {education.map((item, i) => (
              <ExpCard key={i} item={item} ed />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
