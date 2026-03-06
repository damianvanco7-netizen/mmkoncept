const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-28 md:py-36 bg-card section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Origin</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              From Personal Need
              <br />
              to a Digital Home
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Virtual Village emerged from life experiences where critical moments collided with digital complexity. This led to the ambition to create a coherent, trustworthy, human-centered digital environment for urban life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              People should feel as safe, oriented and empowered in the digital world as they do at home — in their own Village.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Technology should create structure, reduce friction and enable meaningful participation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
