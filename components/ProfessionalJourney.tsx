import React from "react";
import { Check, GraduationCap, TrendingUpIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { education, experience } from "../constants/mock";
import type { ExperienceType } from "@/types";
import { getExperience } from "@/lib/utils";

// Emphasises metrics like "8+", "73%" or "~26 ms" inside a bullet point.
const METRIC = /(~?\d[\d.]*\s?(?:\+|%|ms\b))/g;

const Highlighted = ({ text }: { text: string }) => (
  <>
    {text.split(METRIC).map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="font-semibold text-foreground">
          {part}
        </span>
      ) : (
        part
      )
    )}
  </>
);

const initials = (name: string) =>
  name
    .split(",")[0]
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

interface EntryProps {
  item: ExperienceType;
  ed?: boolean;
}

const Entry: React.FC<EntryProps> = ({ item, ed }) => {
  const isCurrent = /present/i.test(item.year);

  return (
    <article className="rounded-2xl border border-border bg-card p-5 sm:p-6 md:p-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary font-mono text-sm font-semibold text-secondary-foreground">
            {ed ? <GraduationCap className="size-5" /> : initials(item.institute)}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              {item.note && (
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                  {item.note}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm md:text-base text-muted-foreground">
              {item.institute}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1.5 pl-16 sm:pl-0">
          <span className="font-mono text-xs md:text-sm text-muted-foreground whitespace-nowrap">
            {item.year}
          </span>
          {isCurrent && item.startDate && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-success" />
              {getExperience(new Date(item.startDate))}
            </span>
          )}
        </div>
      </header>

      {item.highlights && (
        <dl className="mt-6 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-background/40">
          {item.highlights.map((h) => (
            <div key={h.label} className="flex flex-col-reverse px-3 py-3 sm:px-5 sm:py-4">
              <dt className="mt-1 text-[11px] sm:text-xs leading-snug text-muted-foreground">
                {h.label}
              </dt>
              <dd className="text-xl sm:text-2xl font-semibold tracking-tight">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <ul
        className={`mt-6 grid gap-x-8 gap-y-3.5 text-sm md:text-[15px] text-muted-foreground leading-relaxed ${
          item.desc.length > 3 ? "lg:grid-cols-2" : ""
        }`}
      >
        {item.desc.map((point, index) => (
          <li key={index} className="flex gap-3">
            <Check className="mt-1 size-4 shrink-0 text-success/80" />
            <span>
              <Highlighted text={point} />
            </span>
          </li>
        ))}
      </ul>

      {item.tags && (
        <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

const ProfessionalJourney = () => {
  return (
    <section className="mb-24 scroll-mt-20" id="professional-journey">
      <SectionHeader icon={<TrendingUpIcon />} title="Experience" />

      <div className="space-y-4">
        {experience.map((item, i) => (
          <Entry key={i} item={item} />
        ))}
      </div>

      <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-12 mb-4">
        Education
      </h3>

      <div className="space-y-4">
        {education.map((item, i) => (
          <Entry key={i} item={item} ed />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalJourney;
