import ScrollReveal from "./ScrollReveal";

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-28 md:py-36 bg-card section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-10">Origin</p>
        <ScrollReveal>
          Virtual Village emerged from life experiences where critical moments collided with digital complexity. This led to the ambition to create a coherent, trustworthy, human-centered digital environment for urban life.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PhilosophySection;
