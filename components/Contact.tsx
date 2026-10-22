import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";

const EMAIL = "rudrag9870@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/rudra-gaur-5a8b40409/";
const GITHUB = "https://github.com/rudragaur-01";

const channels = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Linkedin, label: "LinkedIn", value: "in/rudra-gaur", href: LINKEDIN },
  { icon: Github, label: "GitHub", value: "rudragaur-01", href: GITHUB },
];

const Contact = () => {
  return (
    <section className="scroll-mt-20" id="contact">
      <SectionHeader icon={<MailIcon />} title="Contact" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-xl -translate-x-1/2 rounded-full bg-foreground/6 blur-3xl" />

        <div className="relative grid gap-10 p-6 sm:p-10 md:grid-cols-[1.2fr_1fr] md:gap-12 md:p-12">
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
              Let&apos;s build something together.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
              I&apos;m open to full-time roles, freelance projects, and
              collaborations. Whether you have a question or an idea, my inbox
              is always open — I usually reply within a day.
            </p>

            <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" /> Noida, India · Open to remote
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={`mailto:${EMAIL}`}>
                  <Mail /> Email me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>

          <ul className="flex flex-col justify-center divide-y divide-border rounded-xl border border-border bg-background/40">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-accent/60"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground group-hover:text-foreground transition-colors">
                    <Icon className="size-4.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-16 flex flex-col-reverse items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Rudra Gaur. All rights reserved.</p>
        <a
          href="#"
          className="hover:text-foreground transition-colors"
        >
          Back to top ↑
        </a>
      </footer>
    </section>
  );
};

export default Contact;
