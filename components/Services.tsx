import { SparkleIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { services } from "@/constants/mock";
import { ServiceType } from "@/types";

type Accent = { glow: string; tile: string };

// Class names are written out in full so Tailwind can detect them.
const accents: Accent[] = [
  {
    glow: "from-emerald-500/90 via-emerald-600/25",
    tile: "bg-emerald-500 shadow-emerald-500/40",
  },
  {
    glow: "from-indigo-500/90 via-indigo-600/25",
    tile: "bg-indigo-500 shadow-indigo-500/40",
  },
  {
    glow: "from-sky-500/90 via-sky-600/25",
    tile: "bg-sky-500 shadow-sky-500/40",
  },
  {
    glow: "from-orange-500/90 via-orange-600/25",
    tile: "bg-orange-500 shadow-orange-500/40",
  },
];

// Angled light bands across the top of each card.
const Bands = () => (
  <svg
    aria-hidden
    className="absolute inset-x-0 top-0 h-40 w-full text-white opacity-[0.12]"
    viewBox="0 0 400 160"
    preserveAspectRatio="none"
  >
    <polygon points="0,0 40,0 0,40" fill="currentColor" />
    <polygon points="90,0 140,0 200,70 175,95" fill="currentColor" />
    <polygon points="260,0 310,0 225,95 200,70" fill="currentColor" />
    <polygon points="360,0 400,0 400,40" fill="currentColor" />
  </svg>
);

const ServiceCard = ({
  service,
  accent,
}: {
  service: ServiceType;
  accent: Accent;
}) => {
  return (
    <div className="rounded-[28px] border border-border bg-card/40 p-1.5">
      <div className="relative h-full overflow-hidden rounded-[22px] border border-border bg-card px-6 pt-12 pb-10 md:px-10 text-center">
        <div
          className={`absolute inset-x-0 top-0 h-3/5 bg-linear-to-b to-transparent ${accent.glow}`}
        />
        <Bands />
        <div className="absolute inset-x-0 bottom-0 h-24 text-foreground/25 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[14px_14px] mask-[linear-gradient(to_top,black,transparent)]" />

        <div className="relative">
          <div
            className={`mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl text-white shadow-lg ring-1 ring-inset ring-white/25 [&_svg]:size-8 ${accent.tile}`}
          >
            {service.icon}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
            {service.title}
          </h3>

          <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
            {service.desc}
          </p>

          <span className="inline-block mt-6 rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground/70">
            {service.highlight}
          </span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="mb-24 scroll-mt-20" id="services">
      <SectionHeader icon={<SparkleIcon />} title="Core Expertise" />

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            accent={accents[i % accents.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
