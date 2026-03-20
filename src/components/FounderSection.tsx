import martinaPhoto from "@/assets/martina.png";

const FounderSection = () => {
  return (
    <section
      id="founder"
      className="py-28 md:py-36 section-padding overflow-hidden"
    >
      <div className="w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Bio */}
          <div className="md:col-span-3 order-2 md:order-1">
            <p className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-4">Founder</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">Martina</h2>
            <p className="text-lg font-medium text-white/50 mb-8">Leader & Visionary</p>
            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                I am Martina, a strategist, entrepreneur, and the architect of mm concept and the Virtual Village ecosystem.
              </p>
              <p className="text-white/90 leading-relaxed font-semibold">
                My mission is driven by a simple but powerful belief: Life, just simplified.
              </p>
              <p className="text-white/60 leading-relaxed">
                My perspective was shaped at the intersection of diverse worlds. From the high-precision automotive environments of Volkswagen to my transformative journey across Slovakia, Germany, and Africa, I have learned that the most powerful solutions are always the most intuitive.
              </p>
              <p className="text-white/60 leading-relaxed">
                Beyond my professional role, I'm a mother of two. This life-shaping experience fuels my drive for simplification — a daily reminder that technology should remain an invisible supporter.
              </p>
              <p className="text-white/90 leading-relaxed">
                I design environments that turn complexity into clarity. By connecting the right data with a human-centric approach, I help create spaces, both virtual and real, where people can truly thrive.
              </p>
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden" style={{ width: "clamp(220px, 22vw, 340px)", height: "clamp(220px, 22vw, 340px)" }}>
              <img
                src={martinaPhoto}
                alt="Martina Masaryková – CEO, mm concept"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
