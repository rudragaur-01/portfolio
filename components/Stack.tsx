import SectionHeader from "./SectionHeader";
import { Code } from "lucide-react";
import { tools } from "@/constants/mock";
import { ToolType } from "@/types";

const ToolCard = ({ tool }: { tool: ToolType }) => {
  return (
    <div
      className="
        border border-neutral-700 
        rounded-lg
        flex justify-center items-center 
        text-center 
        text-sm lg:text-md
        py-3 px-5
        bg-neutral-900
        text-neutral-200
        tracking-wide
        hover:bg-neutral-800 
        hover:text-white
        transition-colors duration-200
      "
    >
      {tool.label}
    </div>
  );
};


const Stack = () => {
  return (
    <div className="mb-16">
      <SectionHeader icon={<Code />} title="Tools & Technologies" />

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 ">
        {tools.map((tool, i) => (
          <ToolCard key={i} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
