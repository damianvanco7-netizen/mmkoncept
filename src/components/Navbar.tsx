import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-vv-2.svg";
import ContactFormDialog from "@/components/ContactFormDialog";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

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
  const useDarkText = isVV && !mobileOpen;
  const menuDarkText = isVV;
  const showLogo = scrolled || !isHome;
  const shellClassName = scrolled && !mobileOpen
    ? isMobile
      ? "mt-4 mx-6 rounded-full px-6 py-3"
      : "mt-4 mx-auto max-w-3xl rounded-full px-6 md:px-8 py-3"
    : "mt-0 max-w-none rounded-none section-padding py-6";
  const scrolledSurfaceStyle = isMobile
    ? {
        background: useDarkText
          ? "linear-gradient(135deg, hsl(0 0% 100% / 0.72) 0%, hsl(0 0% 100% / 0.56) 100%)"
          : "linear-gradient(135deg, hsl(0 0% 100% / 0.12) 0%, hsl(0 0% 100% / 0.05) 100%)",
        border: useDarkText
          ? "1px solid hsl(18 100% 3% / 0.08)"
          : "1px solid hsl(0 0% 100% / 0.12)",
        backdropFilter: "blur(24px) saturate(1.4)",
        WebkitBackdropFilter: "blur(24px) saturate(1.4)",
        boxShadow: useDarkText
          ? "0 4px 18px hsl(18 100% 3% / 0.08)"
          : "0 4px 18px hsl(18 100% 3% / 0.12)",
      }
    : {
        background: useDarkText
          ? "linear-gradient(135deg, hsl(0 0% 100% / 0.30) 0%, hsl(0 0% 100% / 0.15) 100%)"
          : "linear-gradient(135deg, hsl(0 0% 100% / 0.07) 0%, hsl(0 0% 100% / 0.03) 100%)",
        border: useDarkText
          ? "1px solid hsl(18 100% 3% / 0.06)"
          : "1px solid hsl(0 0% 100% / 0.08)",
        backdropFilter: "blur(28px) saturate(1.6)",
        WebkitBackdropFilter: "blur(28px) saturate(1.6)",
        boxShadow: useDarkText
          ? "0 4px 24px hsl(18 100% 3% / 0.05)"
          : "0 4px 24px hsl(18 100% 3% / 0.08)",
      };

  return (
    <>
      {/* Mobile fullscreen blur + menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[59] md:hidden"
          style={{
            background: menuDarkText
              ? 'linear-gradient(135deg, hsl(0 0% 100% / 0.85) 0%, hsl(0 0% 100% / 0.75) 100%)'
              : 'linear-gradient(135deg, hsl(0 0% 100% / 0.08) 0%, hsl(0 0% 100% / 0.03) 100%)',
            backdropFilter: 'blur(24px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
          }}
        >
          <div className="flex flex-col items-start justify-center h-full px-10 gap-8">
            <button onClick={goHome} className={`text-2xl font-semibold ${menuDarkText ? 'text-foreground' : 'text-white'}`}>Origin</button>
            <button onClick={() => scrollTo("philosophy")} className={`text-2xl font-semibold ${menuDarkText ? 'text-foreground' : 'text-white'}`}>Our Portfolio</button>
            <button onClick={() => scrollTo("founder")} className={`text-2xl font-semibold ${menuDarkText ? 'text-foreground' : 'text-white'}`}>About</button>
            <button onClick={() => { setMobileOpen(false); setContactOpen(true); }} className={`text-2xl font-semibold ${menuDarkText ? 'text-foreground' : 'text-white'}`}>Contact</button>
          </div>
          {/* Contact info */}
          <div className={`absolute bottom-12 left-10 right-10 text-xs leading-relaxed ${menuDarkText ? 'text-foreground/50' : 'text-white/50'}`}>
            <p className={`font-semibold text-sm mb-1 ${menuDarkText ? 'text-foreground/70' : 'text-white/70'}`}>Martina Masaryková</p>
            <p>CEO, mm concept</p>
            <p>Vision & Project Lead, Virtual Village</p>
            <p className="mt-2">
              <a href="tel:+421908168840" className={`transition-colors ${menuDarkText ? 'hover:text-foreground/80' : 'hover:text-white/80'}`}>Slovakia +421 908 168 840</a>
            </p>
            <p>
              <a href="tel:+491728890408" className={`transition-colors ${menuDarkText ? 'hover:text-foreground/80' : 'hover:text-white/80'}`}>Germany +49 172 8890408</a>
            </p>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 right-0 z-[60]">
        <div className={shellClassName}
          style={{
            transitionProperty: 'max-width, margin-top, padding, border-radius, background, backdrop-filter, box-shadow',
            transitionDuration: isMobile ? '0.45s' : '2.4s',
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            ...(scrolled && !mobileOpen ? {
              ...scrolledSurfaceStyle,
            } : {
              background: 'transparent',
              border: '1px solid transparent',
              backdropFilter: 'none',
              boxShadow: 'none',
            }),
          }}
        >
          <div className="flex items-center justify-between relative z-10">
            <button onClick={goHome} className="flex items-center">
              <img
                src={logo}
                alt="mm concept"
                className={`transition-all duration-500 ${
                  scrolled ? "h-10 md:h-12" : "h-14 md:h-16"
                } ${
                  mobileOpen ? (menuDarkText ? "brightness-0 opacity-40" : "brightness-0 invert opacity-40") : useDarkText ? "brightness-0 opacity-40" : "brightness-0 invert opacity-40"
                } ${showLogo || mobileOpen ? "" : "opacity-0 pointer-events-none"}`}
              />
            </button>

            {/* Desktop nav */}
            <div className={`hidden md:flex items-center gap-8 font-medium transition-all duration-500 ${
              scrolled ? "text-sm" : "text-base"
            } ${useDarkText ? "text-foreground/50" : "text-white/50"}`}>
              <button onClick={goHome} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>Origin</button>
              <button onClick={() => scrollTo("philosophy")} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>Our Portfolio</button>
              <button onClick={() => scrollTo("founder")} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>About</button>
              <button onClick={() => setContactOpen(true)} className={`transition-colors ${useDarkText ? "hover:text-foreground/80" : "hover:text-white/80"}`}>Contact</button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden relative z-[60] transition-colors ${
                mobileOpen ? (menuDarkText ? "text-foreground/70" : "text-white/70") : useDarkText ? "text-foreground/70" : "text-white/70"
              }`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <ContactFormDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Navbar;
