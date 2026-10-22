import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import Services from "@/components/Services";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <Hero />
        <ProfessionalJourney />
        <FeaturedProjects />
        <Stack />
        <Services />
        <Contact />
      </div>
    </div>
  );
}
