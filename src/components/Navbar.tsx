const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-warm-white/80 border-b border-border/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-foreground font-semibold text-lg tracking-tight">
          mm concept
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => scrollTo("philosophy")} className="hover:text-foreground transition-colors">Philosophy</button>
          <button onClick={() => scrollTo("virtual-village")} className="hover:text-foreground transition-colors">Virtual Village</button>
          <button onClick={() => scrollTo("ecosystem")} className="hover:text-foreground transition-colors">Ecosystem</button>
          <button onClick={() => scrollTo("founder")} className="hover:text-foreground transition-colors">About</button>
          <button onClick={() => scrollTo("cta")} className="pill-button-dark text-xs !py-2 !px-5">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
