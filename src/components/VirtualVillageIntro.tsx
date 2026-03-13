import mockupImg from "@/assets/vv-mockup-trio.png";

const modules = [
  "Municipal Services",
  "Healthcare",
  "Education",
  "Mobility",
  "Culture",
  "Local Economy",
];

const VirtualVillageIntro = () => {
  return (
    <section id="virtual-village" className="py-28 md:py-36 bg-accent section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Flagship Platform</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Virtual Village
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            One Ecosystem. Clear Structure. Contextual Intelligence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Virtual Village is a modular AI-powered digital ecosystem — unified, personalised, structured, and seamless for citizens, cities and services.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-xl mx-auto">
            {modules.map((mod) => (
              <span
                key={mod}
                className="px-4 py-2 text-sm font-medium rounded-full neu-inset text-foreground"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>

        {/* App Mockup Showcase */}
        <div>
          <img
            src={mockupImg}
            alt="Virtual Village app — city services, navigation and detail screens"
            className="w-full max-w-4xl mx-auto h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VirtualVillageIntro;
