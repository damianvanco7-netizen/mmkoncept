import villageImg from "@/assets/vv-village-3d.jpg";

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
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            One Ecosystem. Clear Structure. Contextual Intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={villageImg}
              alt="Virtual Village 3D concept rendering"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Virtual Village is a modular AI-powered digital ecosystem — unified, personalised, structured, and seamless for citizens, cities and services.
            </p>
            <div className="flex flex-wrap gap-3">
              {modules.map((mod) => (
                <span
                  key={mod}
                  className="px-4 py-2 rounded-full bg-card text-sm font-medium text-foreground border border-border"
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualVillageIntro;
