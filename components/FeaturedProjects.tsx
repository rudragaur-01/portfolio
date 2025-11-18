import { projectsData } from "@/constants/mock";
import { ProjectType } from "@/types";
import { Code, Github, Globe } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ProjectCard = ({
  imgSrc,
  projectLink,
  tags,
  title,
  ownership,
}: {
  imgSrc: string;
  projectLink: string;
  tags: string[];
  title: string;
  ownership: "personal" | "company" | "freelance";
}) => {
  const isGithub = projectLink?.includes("github.com");

  return (
    <div className="group block overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900/40 hover:bg-neutral-800/60 transition">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute top-3 right-3 px-4 py-2 rounded-full text-xs font-semibold shadow-md
            ${
              ownership === "personal"
                ? "bg-white text-black"
                : ownership === "company"
                ? "bg-black text-white"
                : "bg-white text-black"
            }
          `}
        >
          {ownership === "personal"
            ? "Personal"
            : ownership === "company"
            ? "Company"
            : "Freelance"}
        </span>
      </div>

      <div className="flex flex-col p-5 space-y-4">
        <div>
          <h3 className="text-white text-lg xl:text-xl 2xl:text-2xl font-semibold mb-1 group-hover:text-primary transition">
            {title}
          </h3>

          <p className="text-sm text-neutral-400">
            {ownership === "personal"
              ? "A personal project built for learning and experimentation."
              : ownership === "company"
              ? "A company project developed as part of a professional team."
              : "A freelance project built for a client."}
          </p>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3 pt-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-neutral-800/70 text-neutral-300 py-1 px-2 rounded-md text-xs sm:text-sm hover:bg-primary hover:text-black transition"
              >
                {tag}
              </span>
            ))}
          </div>

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-100 px-3 py-1.5 text-xs sm:text-sm font-medium text-black transition hover:bg-primary hover:text-black"
            >
              {isGithub ? (
                <>
                  <Github className="w-4 h-4" /> GitHub
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4" /> Website
                </>
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="mb-16 scroll-mt-10 3xl:pt-30" id="projects">
      <SectionHeader icon={<Code />} title="Featured Projects" />

      <p className=" text-neutral-300 md:text-left mx-auto md:mx-0 leading-relaxed text-base xl:text-lg tracking-wide">
        I've worked on a wide variety of projects — from sleek, responsive
        websites to dynamic full-stack applications. Here's a glimpse of some
        key highlights.
      </p>

      <div className="grid md:grid-cols-2 3xl:grid-cols-3 gap-9 xl:gap-12 2xl:gap-14 mt-12 xl:mt-16 2xl:mt-20">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
