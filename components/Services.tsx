import { SparkleIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { services } from "@/constants/mock";
import { ServiceType } from "@/types";

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="flex items-start justify-between rounded-2xl border border-neutral-700 p-8 xl:p-10 2xl:p-12 hover:bg-zinc-900 transition-all duration-300 hover:border-primary relative">
      <div className="space-y-3 xl:space-y-4 2xl:space-y-5">
        <h3 className="text-lg xl:text-xl 2xl:text-2xl font-medium text-white">
          {service.title}
        </h3>

        <p className="text-neutral-300 text-base xl:text-lg  leading-relaxed">
          {service.desc}
        </p>

        <span className="text-sm xl:text-base 2xl:text-lg text-neutral-400 font-medium uppercase tracking-wide lining-nums">
          {service.highlight}
        </span>
      </div>

      <div className="shrink-0">{service.icon}</div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="mb-16 scroll-mt-10" id="services">
      <SectionHeader icon={<SparkleIcon />} title="Services" />

      <div className="grid md:grid-cols-2 gap-8 xl:gap-10 2xl:gap-12 ">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
