const CtaSection = () => {
  return (
    <section id="cta" className="py-28 md:py-36 bg-accent section-padding">
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-12">
          Let's build structured digital ecosystems that serve people.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="pill-button-dark">For Cities & Institutions</button>
          <button className="pill-button-dark">For Strategic Partners</button>
          <button className="pill-button-dark">For Investors</button>
        </div>

        <div className="mt-12">
          <button className="pill-button text-sm">
            Request Executive Brief
          </button>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            A structured overview of architecture, roadmap and strategic positioning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
