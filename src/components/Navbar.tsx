import { useState, useEffect } from "react";
import logo from "@/assets/mmconcept.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-warm-white/80 border-b border-border/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
          <img src={logo} alt="mm concept" className="h-7" />
        </button>
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${
          scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
        }`}>
          <button onClick={() => scrollTo("philosophy")} className="hover:text-primary-foreground transition-colors">Philosophy</button>
          <button onClick={() => scrollTo("virtual-village")} className="hover:text-primary-foreground transition-colors">Virtual Village</button>
          <button onClick={() => scrollTo("ecosystem")} className="hover:text-primary-foreground transition-colors">Ecosystem</button>
          <button onClick={() => scrollTo("founder")} className="hover:text-primary-foreground transition-colors">About</button>
          <button onClick={() => scrollTo("cta")} className="pill-button text-xs !py-2 !px-5">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
