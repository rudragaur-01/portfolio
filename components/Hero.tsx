import { Github, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rudragaur-01",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rudragaur3601/",
    },
    {
      icon: Instagram,
    },
    {
      icon: Twitter,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 text-primary">
      <div className="flex flex-col items-center md:items-start">
        <div className="relative w-40 h-40 lg:w-50 lg:h-50 mb-6 rounded-full ring-2 ring-gray-100 overflow-hidden bg-gray-900/50">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex w-full items-center gap-4 justify-between">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return link.href ? (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Icon size={24} />
                </Link>
              ) : (
                <Icon
                  key={index}
                  size={24}
                  className="opacity-50 cursor-not-allowed"
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-3 tracking-widest">
          Rudra Gaur
        </h1>
        <p className="text-lg lg:text-xl text-gray-400 mb-5 tracking-widest">
          Full-Stack Developer | Next.js, React, Node.js
        </p>
        <p className="text-neutral-300 leading-relaxed tracking-widest text-md lg:text-lg max-w-2xl">
          Self-taught Full-Stack Developer from India, passionate about crafting
          modern, scalable web experiences with technologies like Next.js. I
          enjoy experimenting, building, and growing through hands-on projects.
        </p>
      </div>
    </div>
  );
};

export default Hero;
