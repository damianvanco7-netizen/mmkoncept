import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, hsl(var(--warm-beige)) 0%, hsl(var(--warm-taupe)) 25%, hsl(var(--warm-beige)) 50%, hsl(var(--warm-taupe)) 75%, hsl(var(--warm-beige)) 100%)" }}>
      <Navbar />
      <HeroSection />
      <hr className="border-t border-foreground/20 mx-[clamp(1.5rem,5vw,6rem)]" />
      <PhilosophySection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
