import mockup1 from "@/assets/vv-app-mockup-1.jpg";
import mockup2 from "@/assets/vv-app-mockup-2.jpg";
import { Shield, Layers, Brain } from "lucide-react";

const StrategicPillars = () => {
  return (
    <section id="pillars" className="py-28 md:py-36 bg-card section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-4">Strategic Pillars</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built on Three Foundations
          </h2>
        </div>

        {/* STAR Pro — Contextual AI */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Contextual AI Layer</p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">STAR Pro</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                An adaptive intelligence layer built on advanced multimodal AI models. It integrates contextual signals — user preferences, real-time location, behavior patterns and environmental inputs — to guide navigation and support relevant decisions across the ecosystem.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-accent border border-border">
                  <p className="text-sm font-medium text-foreground mb-1">Health scenario</p>
                  <p className="text-sm text-muted-foreground italic">
                    "I noticed you are looking for emergency care. Here is the fastest route, and I have already shared your location."
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-accent border border-border">
                  <p className="text-sm font-medium text-foreground mb-1">Gastro scenario</p>
                  <p className="text-sm text-muted-foreground italic">
                    "It's raining. Here are 3 favorite places nearby with free tables and covered parking."
                  </p>
                </div>
              </div>
            </div>

            {/* Phone mockups */}
            <div className="flex justify-center gap-6">
              <div className="w-44 md:w-52 rounded-[2rem] border-4 border-foreground/10 overflow-hidden shadow-xl bg-foreground/5 p-1.5">
                <div className="rounded-[1.5rem] overflow-hidden">
                  <img src={mockup1} alt="STAR Pro health scenario" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
              <div className="w-44 md:w-52 rounded-[2rem] border-4 border-foreground/10 overflow-hidden shadow-xl bg-foreground/5 p-1.5 mt-8">
                <div className="rounded-[1.5rem] overflow-hidden">
                  <img src={mockup2} alt="STAR Pro gastro scenario" className="w-full h-auto" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Modularity + Ethical Data */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-10 rounded-2xl bg-accent border border-border">
            <Layers className="w-6 h-6 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">System Modularity</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A unified platform architecture serving Citizens (B2C), Cities & Municipalities (B2G), and Local Businesses (B2B). Standardized core layers with locally adaptable modules.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Standardized Core", "Local Adaptation", "Global Scale", "Long-term Infrastructure"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-card border border-border text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-2xl bg-accent border border-border">
            <Shield className="w-6 h-6 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-4">Ethical Data Environment</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trust-based digital framework aligned with European data governance and AI regulation standards. Privacy-by-design architecture, transparent data usage, responsible AI principles.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Privacy-by-Design", "EU AI Act Aligned", "Digital Sovereignty", "User Autonomy"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-card border border-border text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;
