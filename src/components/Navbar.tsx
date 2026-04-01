import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-mmconcept-2.svg";
import ContactFormDialog from "@/components/ContactFormDialog";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isVV = location.pathname === "/virtual-village";
  const useLight = !scrolled && isHome && !mobileOpen;
  const useDarkText = isVV && !mobileOpen;
  const showLogo = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] ${
          mobileOpen ? "bg-card" : ""
        }`}
      >
        <div className={`transition-all mx-auto ${
          scrolled && !mobileOpen
            ? "mt-3 max-w-3xl rounded-full px-6 py-3"
            : "mt-0 max-w-none rounded-none px-6 md:px-12 lg:px-20 xl:px-32 py-4"
        }`}
          style={{
            transitionProperty: 'all',
            transitionDuration: '700ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            ...(scrolled && !mobileOpen ? {
              background: useDarkText
                ? 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.18) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(28px) saturate(1.6)',
              WebkitBackdropFilter: 'blur(28px) saturate(1.6)',
              boxShadow: useDarkText
                ? '0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.3)'
                : '0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.1)',
            } : {}),
          }}
        >
          <div className="flex items-center justify-between relative z-10">
            <button onClick={goHome} className="flex items-center">
              <img
                src={logo}
                alt="mm concept"
                className={`h-10 md:h-12 transition-all duration-500 ${
                  useDarkText ? "brightness-0 opacity-40" : "brightness-0 invert opacity-40"
                } ${showLogo ? "" : "opacity-0 pointer-events-none"}`}
              />
            </button>

            {/* Desktop nav */}
            <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${useDarkText ? "text-foreground/50" : "text-white/50"}`}>
              <button onClick={goHome} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>Origin</button>
              <button onClick={() => scrollTo("philosophy")} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>Projects & Services</button>
              <button onClick={() => scrollTo("founder")} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>About</button>
              <button onClick={() => setContactOpen(true)} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>Contact</button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden relative z-[60] transition-colors ${useDarkText ? "text-foreground/70" : "text-white/70"}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-card flex flex-col items-start justify-center px-10 gap-8 md:hidden">
          <button onClick={goHome} className="text-2xl font-semibold text-foreground">Origin</button>
          <button onClick={() => scrollTo("philosophy")} className="text-2xl font-semibold text-foreground">Projects & Services</button>
          <button onClick={() => scrollTo("founder")} className="text-2xl font-semibold text-foreground">About</button>
          <button onClick={() => { setMobileOpen(false); setContactOpen(true); }} className="text-2xl font-semibold text-foreground">Contact</button>
        </div>
      )}

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Navbar;
