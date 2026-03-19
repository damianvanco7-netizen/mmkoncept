import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "linear-gradient(180deg, #302F2F 0%, #3a3836 15%, #4a4745 30%, #7a756f 50%, #a39d95 65%, #C5BEB4 80%, #C5BEB4 100%)",
      }}
    >
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
