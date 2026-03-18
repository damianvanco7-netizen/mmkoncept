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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          mobileOpen
            ? "bg-card"
            : scrolled
              ? "backdrop-blur-xl bg-warm-white/80 border-b border-border/40"
              : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-4">
          <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMobileOpen(false); }} className="flex items-center">
            <img
              src={logo}
              alt="mm concept"
              className="h-7 transition-all duration-300"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollTo("hero")} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-primary-foreground"}`}>Origin</button>
            <button onClick={() => scrollTo("philosophy")} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-primary-foreground"}`}>Projects & Services</button>
            <button onClick={() => scrollTo("founder")} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-primary-foreground"}`}>About</button>
            <button onClick={() => scrollTo("footer")} className="pill-button text-xs !py-2 !px-5">Contact</button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden relative z-[60] transition-colors ${
              mobileOpen || scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-card flex flex-col items-start justify-center px-10 gap-8 md:hidden">
          <button onClick={() => scrollTo("hero")} className="text-2xl font-semibold text-foreground">Origin</button>
          <button onClick={() => scrollTo("philosophy")} className="text-2xl font-semibold text-foreground">Projects & Services</button>
          <button onClick={() => scrollTo("founder")} className="text-2xl font-semibold text-foreground">About</button>
          <button onClick={() => scrollTo("footer")} className="pill-button text-base mt-4">Contact</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
