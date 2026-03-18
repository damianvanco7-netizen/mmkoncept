import martinaPhoto from "@/assets/martina.png";

const FounderSection = () => {
  return (
    <section id="founder" className="py-28 md:py-36 bg-card section-padding overflow-hidden">
      <div className="w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={martinaPhoto}
                alt="Martina Masaryková – CEO, mm concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Founder</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">Martina</h2>
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
