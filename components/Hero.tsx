import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { experience } from "@/constants/mock";
import { getExperience } from "@/lib/utils";
import { Button } from "./ui/button";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rudragaur-01",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rudra-gaur-5a8b40409/",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rudrag9870@gmail.com",
    },
  ];

  const startDate = experience[0]?.startDate;
  const stats = [
    {
      value: startDate ? getExperience(new Date(startDate)) : "—",
      label: "Professional experience",
    },
    { value: "8+", label: "Production apps delivered" },
    { value: "73%", label: "Faster APIs after optimization" },
  ];

  return (
    <section className="pt-10 md:pt-14 pb-14 md:pb-16 border-b border-border mb-16 md:mb-20">
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-16">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Open to new opportunities
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
            Rudra Gaur
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-2">
            Full Stack Developer
          </p>

          <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
            <MapPin className="size-4" /> Noida, India
          </p>

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
            I build production-ready web apps end to end with React, Next.js,
            Node.js, MongoDB, and PostgreSQL — from fast, well-documented REST
            APIs and database optimization to OAuth integrations with Meta Ads,
            Google Ads, and LinkedIn, payment gateways, and CMS platforms.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">
                View projects <ArrowDown />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#contact">
                Get in touch <ArrowUpRight />
              </a>
            </Button>

            <div className="flex items-center gap-1 ml-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <div className="size-32 md:size-56 rounded-full overflow-hidden border border-border bg-muted">
            <img
              src="/profile.png"
              alt="Rudra Gaur"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <dl className="grid grid-cols-3 gap-4 mt-10 md:mt-12 max-w-2xl">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse border-l border-border pl-4">
            <dt className="text-xs md:text-sm text-muted-foreground mt-1">
              {stat.label}
            </dt>
            <dd className="text-lg sm:text-xl md:text-3xl font-semibold tracking-tight whitespace-nowrap">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Hero;
