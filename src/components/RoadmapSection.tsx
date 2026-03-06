const phases = [
  {
    label: "Foundation",
    title: "Strategic Foundation",
    description: "Architecture, design prototype and modular framework defined. AI integration roadmap established.",
    status: "complete" as const,
  },
  {
    label: "Phase 1",
    title: "Core Development",
    description: "Platform core development, contextual AI integration, initial module build-out.",
    status: "active" as const,
  },
  {
    label: "Phase 2",
    title: "Pilot Implementation",
    description: "Pilot deployment in Wolfsburg (Germany) and Trnava (Slovakia). Strategic city partnerships.",
    status: "upcoming" as const,
  },
  {
    label: "Phase 3",
    title: "European Expansion",
    description: "Scaling across European cities. Foundational urban digital infrastructure.",
    status: "upcoming" as const,
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-28 md:py-36 bg-card section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Roadmap</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Structured Development. Phased Scaling.
          </h2>
        </div>

        <div className="space-y-0">
          {phases.map((phase, i) => (
            <div key={phase.label} className="flex gap-6 md:gap-10">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full shrink-0 ${
                    phase.status === "complete"
                      ? "bg-foreground"
                      : phase.status === "active"
                      ? "bg-foreground ring-4 ring-foreground/10"
                      : "bg-border"
                  }`}
                />
                {i < phases.length - 1 && (
                  <div className="w-px flex-1 bg-border min-h-[80px]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-1">{phase.label}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-2xl bg-accent border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Strategic discussions and soft commitments with pilot cities are progressing. Long-term ambition: foundational urban digital infrastructure across Europe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
