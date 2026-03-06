import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import VirtualVillageIntro from "@/components/VirtualVillageIntro";
import StrategicPillars from "@/components/StrategicPillars";
import EcosystemSection from "@/components/EcosystemSection";
import WhyMmConcept from "@/components/WhyMmConcept";
import TrustTechSection from "@/components/TrustTechSection";
import FounderSection from "@/components/FounderSection";
import RoadmapSection from "@/components/RoadmapSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <VirtualVillageIntro />
      <StrategicPillars />
      <EcosystemSection />
      <WhyMmConcept />
      <TrustTechSection />
      <FounderSection />
      <RoadmapSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
