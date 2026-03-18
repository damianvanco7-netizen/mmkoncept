import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import EcosystemSection from "@/components/EcosystemSection";
import WhyMmConcept from "@/components/WhyMmConcept";
import TrustTechSection from "@/components/TrustTechSection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <EcosystemSection />
      <WhyMmConcept />
      <div className="bg-near-black section-padding">
        <hr className="border-white/10" />
      </div>
      <TrustTechSection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
