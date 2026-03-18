import NetworkCanvas from "./NetworkCanvas";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-24">
      <NetworkCanvas />
      <div className="relative z-10 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-10">
          Life, just simplified.
        </h1>
        <button
          onClick={() => scrollTo("philosophy")}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-sm font-medium text-foreground transition-all duration-300"
          style={{
            background: 'hsl(35 22% 91%)',
            border: '1px solid hsl(35 18% 87%)',
            boxShadow: '4px 4px 12px hsl(35 12% 82%), -4px -4px 12px hsl(0 0% 98%)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '5px 5px 14px hsl(35 12% 80%), -5px -5px 14px hsl(0 0% 99%)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '4px 4px 12px hsl(35 12% 82%), -4px -4px 12px hsl(0 0% 98%)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
