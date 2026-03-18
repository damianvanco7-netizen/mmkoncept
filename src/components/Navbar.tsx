import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/mmconcept-logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

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

  const goHome = () => {
    setMobileOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
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
          <button onClick={goHome} className="flex items-center">
            <img
              src={logo}
              alt="mm concept"
              className="h-9 md:h-10 transition-all duration-300"
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={goHome} className="transition-colors hover:text-foreground">Origin</button>
            <button onClick={() => scrollTo("philosophy")} className="transition-colors hover:text-foreground">Projects & Services</button>
            <button onClick={() => scrollTo("founder")} className="transition-colors hover:text-foreground">About</button>
            <button onClick={() => scrollTo("footer")} className="transition-colors hover:text-foreground">Contact</button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-[60] transition-colors text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-card flex flex-col items-start justify-center px-10 gap-8 md:hidden">
          <button onClick={goHome} className="text-2xl font-semibold text-foreground">Origin</button>
          <button onClick={() => scrollTo("philosophy")} className="text-2xl font-semibold text-foreground">Projects & Services</button>
          <button onClick={() => scrollTo("founder")} className="text-2xl font-semibold text-foreground">About</button>
          <button onClick={() => scrollTo("footer")} className="pill-button text-base mt-4">Contact</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
