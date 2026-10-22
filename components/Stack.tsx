import SectionHeader from "./SectionHeader";
import { Code } from "lucide-react";
import { tools } from "@/constants/mock";

const Stack = () => {
  const skills = tools.flatMap((group) => group.items);

  return (
    <section className="mb-24">
      <SectionHeader icon={<Code />} title="Skills" />

      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 md:gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-border bg-card px-3 py-3 text-center text-sm text-foreground/85 transition-colors hover:border-foreground/25 hover:text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Stack;
