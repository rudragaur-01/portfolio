import React from "react";
import { TrendingUpIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, experience } from "../constants/mock";
import type { ExperienceType } from "@/types";

interface ExpCardProps {
  item: ExperienceType;
  ed?: boolean;
}

function getExperience(startDate: Date) {
  const now = new Date();

  let months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  months %= 12;

  if (years > 0 && months > 0) {
    return `${years} yr${years > 1 ? "s" : ""} ${months} mo${
      months > 1 ? "s" : ""
    }`;
  }

  if (years > 0) {
    return `${years} yr${years > 1 ? "s" : ""}`;
  }

  return `${months} mo${months > 1 ? "s" : ""}`;
}
const ExpCard: React.FC<ExpCardProps> = ({ item, ed }) => {
  return (
    <div className="relative group tracking-wide">
      <div className="absolute -left-[31px] top-1 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300" />

      <div className="flex flex-col gap-2">
    <span className="text-neutral-400 text-base xl:text-lg group-hover:text-primary transition duration-300">
  {item.year}
  {!ed && item.startDate && (
    <span className="ml-2 text-primary">
      • {getExperience(new Date(item.startDate))}
    </span>
  )}
</span>

        <h3 className="text-lg lg:text-xl font-semibold mt-1">
          {item.title}
        </h3>

        <p className="text-sm lg:text-base text-neutral-400 mb-1">
          {ed ? "Course by" : "Company:"}{" "}
          <span className="font-medium text-foreground">
            {item.institute}
          </span>
        </p>

        <ul className="list-disc pl-5 space-y-2 text-sm lg:text-base text-neutral-400">
          {item.desc.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProfessionalJourney = () => {
  return (
    <section className="mb-16" id="professional-journey">
      <SectionHeader
        icon={<TrendingUpIcon />}
        title="Professional Journey"
      />

      <p className="text-neutral-300 md:text-left mx-auto md:mx-0 leading-relaxed text-base xl:text-lg tracking-wide mb-8">
        A comprehensive overview of my education, work experience, and
        technologies I use to build modern, scalable, and high-performance
        applications.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
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