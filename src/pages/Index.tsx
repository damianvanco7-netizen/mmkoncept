import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "#302F2F" }}>
      <Navbar />
      <HeroSection />
      <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />
      <PhilosophySection />
      <hr className="border-t border-white/10 mx-[clamp(1.5rem,5vw,6rem)]" />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
