const FounderSection = () => {
  return (
    <section id="founder" className="py-28 md:py-36 bg-accent section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-secondary to-muted flex items-end justify-center overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted-foreground/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-light text-muted-foreground">M</span>
                  </div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">Portrait</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Founder</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Martina</h2>
            <p className="text-lg font-medium text-muted-foreground mb-8">Leader & Visionary</p>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                With a background spanning strategic innovation, digital transformation and urban technology, Martina founded mm concept to bridge the gap between human needs and digital infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Her vision: create a structured, trustworthy digital ecosystem that empowers citizens and institutions alike — built on European values of privacy, transparency and human-centered design.
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                Based between Germany and Slovakia, Martina brings a cross-cultural perspective to building digital infrastructure that serves diverse communities across Europe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
