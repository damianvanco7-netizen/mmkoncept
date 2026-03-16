import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mmconcept.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    setMobileOpen(false);
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
          <img
            src={logo}
            alt="mm concept"
            className={`h-7 transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </button>

        {/* Desktop nav */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${
          scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
        }`}>
          <button onClick={() => scrollTo("philosophy")} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-primary-foreground"}`}>Philosophy</button>
          <button onClick={() => scrollTo("virtual-village")} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-primary-foreground"}`}>Virtual Village</button>
          <button onClick={() => scrollTo("ecosystem")} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-primary-foreground"}`}>Ecosystem</button>
          <button onClick={() => scrollTo("founder")} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-primary-foreground"}`}>About</button>
          <button onClick={() => scrollTo("cta")} className="pill-button text-xs !py-2 !px-5">Contact</button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden px-6 pb-6 flex flex-col gap-4 text-base font-medium ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-xl text-foreground"
            : "bg-near-black/80 backdrop-blur-xl text-primary-foreground"
        }`}>
          <button onClick={() => scrollTo("philosophy")} className="text-left py-2">Philosophy</button>
          <button onClick={() => scrollTo("virtual-village")} className="text-left py-2">Virtual Village</button>
          <button onClick={() => scrollTo("ecosystem")} className="text-left py-2">Ecosystem</button>
          <button onClick={() => scrollTo("founder")} className="text-left py-2">About</button>
          <button onClick={() => scrollTo("cta")} className="pill-button text-sm mt-2 w-fit">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
