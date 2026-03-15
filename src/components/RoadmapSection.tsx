import { CheckCircle, Loader, Calendar, Rocket } from "lucide-react";
import ConcentricCircles from "@/components/ConcentricCircles";

const phases = [
  {
    label: "Foundation",
    title: "Strategic Foundation",
    description: "Architecture, design prototype and modular framework defined. AI integration roadmap established.",
    status: "Completed",
    icon: CheckCircle,
    statusColor: "text-green-600",
  },
  {
    label: "Phase 1",
    title: "Core Development",
    description: "Platform core development, contextual AI integration, initial module build-out.",
    status: "In Progress",
    icon: Loader,
    statusColor: "text-amber-500",
  },
  {
    label: "Phase 2",
    title: "Pilot Implementation",
    description: "Pilot deployment in Wolfsburg (Germany) and Trnava (Slovakia). Strategic city partnerships.",
    status: "May 2026",
    icon: Calendar,
    statusColor: "text-muted-foreground",
  },
  {
    label: "Phase 3",
    title: "European Expansion",
    description: "Scaling across European cities. Foundational urban digital infrastructure.",
    status: "September 2026",
    icon: Rocket,
    statusColor: "text-muted-foreground",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="relative py-28 md:py-36 bg-card section-padding overflow-hidden">
      <ConcentricCircles />
      <div className="relative z-10 w-full">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Roadmap</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Structured Development. Phased Scaling.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-12">
          {phases.map(({ label, title, description, status, icon: Icon, statusColor }) => (
            <div key={label} className="p-6 neu-card">
              <div className="w-10 h-10 rounded-xl neu-inset flex items-center justify-center mb-5">
                <Icon className={`w-5 h-5 ${statusColor}`} />
              </div>
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-1">{label}</p>
              <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
              <span className={`text-xs font-semibold tracking-wide ${statusColor}`}>{status}</span>
            </div>
          ))}
        </div>

        <div className="p-6 neu-card flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Strategic discussions and soft commitments with pilot cities are progressing. Long-term ambition: foundational urban digital infrastructure across Europe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
