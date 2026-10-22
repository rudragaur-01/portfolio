import { projectsData } from "@/constants/mock";
import { ProjectType } from "@/types";
import { ArrowUpRight, Code, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

const ownershipLabel: Record<ProjectType["ownership"], string> = {
  company: "Company",
  freelance: "Freelance",
  personal: "Personal",
};

const ProjectCard = ({
  imgSrc,
  projectLink,
  title,
  description,
  tags,
  ownership,
}: ProjectType) => {
  const isGithub = projectLink?.includes("github.com");

  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5 hover:border-foreground/20"
    >
      <div className="relative overflow-hidden border-b border-border bg-muted aspect-16/10">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-foreground border border-border">
          {ownershipLabel[ownership]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <span className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
            {isGithub ? (
              <Github className="size-5" />
            ) : (
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </span>
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

const FeaturedProjects = () => {
  return (
    <section className="mb-24 scroll-mt-20" id="projects">
      <SectionHeader icon={<Code />} title="Projects" />

      <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
        I’ve worked on a wide variety of projects — from sleek, responsive
        websites to dynamic full-stack applications. Here’s a glimpse of some
        key highlights.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {projectsData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      <div className="mt-10">
        <a
          href="https://github.com/rudragaur-01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          Explore more projects on GitHub <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
