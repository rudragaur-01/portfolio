import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import ProfessionalJourney from "@/components/ProfessionalJourney";
import Services from "@/components/Services";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-6xl mx-auto p-6 lg:p-8 bg-background text-foreground tracking">
        <Hero />
        <ProfessionalJourney />
        <Stack />
        <FeaturedProjects />
        <Services />
        <Contact />
      </div>
    </div>
  );
}
