import { CheckCircle, Loader, Calendar, Rocket, Compass, Code, MapPin, Globe } from "lucide-react";

const phases = [
  {
    label: "Foundation",
    title: "Strategic Foundation",
    description: "Architecture, design prototype and modular framework defined. AI integration roadmap established.",
    status: "Completed",
    icon: Compass,
    statusColor: "text-green-600",
    statusBg: "bg-green-600/15",
  },
  {
    label: "Phase 1",
    title: "Core Development",
    description: "Platform core development, contextual AI integration, initial module build-out.",
    status: "In Progress",
    icon: Code,
    statusColor: "text-amber-500",
    statusBg: "bg-amber-500/15",
  },
  {
    label: "Phase 2",
    title: "Pilot Implementation",
    description: "Pilot deployment in Wolfsburg (Germany) and Trnava (Slovakia). Strategic city partnerships.",
    status: "May 2026",
    icon: Calendar,
    statusColor: "text-muted-foreground",
    statusBg: "bg-muted-foreground/15",
  },
  {
    label: "Phase 3",
    title: "European Expansion",
    description: "Scaling across European cities. Foundational urban digital infrastructure.",
    status: "September 2026",
    icon: Rocket,
    statusColor: "text-muted-foreground",
    statusBg: "bg-muted-foreground/15",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-28 md:py-36 bg-card section-padding overflow-hidden">
      <div className="w-full">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Roadmap</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Structured Development. Phased Scaling.
          </h2>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ height: 'clamp(500px, 65vh, 700px)' }}>
          {/* Left tall card — strategic note */}
          <div className="md:row-span-2 p-8 neu-card flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight max-w-[200px] mb-6">
                Strategic<br />Outlook
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic discussions and soft commitments with pilot cities are progressing. Long-term ambition: foundational urban digital infrastructure across Europe.
            </p>
          </div>

          {/* 4 phase cards in 2x2 grid — matching Modules style */}
          {phases.map(({ label, title, description, status, icon: Icon, statusColor, statusBg }) => (
            <div key={label} className="p-8 neu-card flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center mb-5">
                  <Icon className={`w-5 h-5 ${statusColor}`} />
                </div>
                <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-1">{label}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
              <div className="mt-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusColor} ${statusBg}`}>
                  {(status === "Completed" || status === "In Progress") && (
                    <Icon className={`w-3 h-3 ${statusColor}`} />
                  )}
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
