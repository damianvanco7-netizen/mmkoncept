import { useState } from "react";
import techVideo from "@/assets/vv-tech-video.mp4";

const tabs = [
  {
    id: "core",
    label: "Core Stack",
    title: "",
    content: (
      <div>
        <p className="text-lg md:text-xl font-bold text-foreground mb-1">
          React Native <span className="font-normal">(TypeScript + Expo)</span>
        </p>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-6">
          One codebase. Seamless experience across iOS and Android.
        </p>
        <p className="text-lg md:text-xl font-bold text-foreground mb-1">
          Supabase <span className="font-normal">(PostgreSQL)</span>
        </p>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-6">
          Real-time data, instant synchronization, scalable backend.
        </p>
        <p className="text-lg md:text-xl font-bold text-foreground mb-1">
          Edge Functions <span className="font-normal">(Deno)</span>
        </p>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
          Serverless logic that scales effortlessly with demand.
        </p>
      </div>
    ),
  },
  {
    id: "ai",
    label: "AI Layer — STAR",
    title: "AI Layer — STAR",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-accent mb-2">
          Intelligence that acts, not just responds
        </h3>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-6">
          Powered by Google Gemini, STAR transforms context — location, time, and behavior — into real-time, actionable guidance.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-accent mb-1">
          Proactive when you need it.
        </h3>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
          On demand when you ask.
        </p>
      </div>
    ),
  },
  {
    id: "data",
    label: "Data & Quality",
    title: "Data & Quality",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Reliable, relevant, and human-centered:
        </h3>
        <ul className="space-y-2 text-sm md:text-base text-foreground/60">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
            Integrated with Google Places API
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
            Curated results (≥ 4.0 rating baseline)
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
            Intelligent matching for precision and trust
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "security",
    label: "Security & Scale",
    title: "Security & Scale",
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Built for trust.<br />Designed for global expansion.
        </h3>
        <ul className="space-y-2 text-sm md:text-base text-foreground/60">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
            Row Level Security (RLS) ensures strict data protection
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
            Modular Universe architecture enables instant rollout across cities — without rebuilding
          </li>
        </ul>
      </div>
    ),
  },
];

const TechTabs = ({ mockup }: { mockup: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);

  const current = active ? tabs.find((t) => t.id === active) : null;

  const switchTab = (id: string) => {
    if (animating) return;
    if (id === active) {
      setAnimating(true);
      setTimeout(() => {
        setActive(null);
        setAnimating(false);
      }, 250);
      return;
    }
    setAnimating(true);
    setTimeout(() => {
      setActive(id);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="py-28 md:py-36 section-padding">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left — text */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-bold text-foreground/80 leading-tight mb-4">
            Cloud‑native.<br />AI‑powered.<br />Built to scale globally.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-12">
            A modern architecture designed<br />
            for speed, intelligence, and seamless growth.
          </p>

          {/* Circle buttons */}
          <div className="flex flex-wrap gap-6 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className="flex flex-col items-center gap-0 group"
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    active === tab.id
                      ? "border-foreground/40 shadow-md"
                      : "border-foreground/15 hover:border-foreground/30"
                  }`}
                  style={{
                    background: active === tab.id
                      ? "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(200,195,190,0.3))"
                      : "linear-gradient(145deg, rgba(255,255,255,0.3), rgba(200,195,190,0.15))",
                    boxShadow: active === tab.id
                      ? "4px 4px 12px rgba(0,0,0,0.08), -2px -2px 6px rgba(255,255,255,0.4)"
                      : "2px 2px 6px rgba(0,0,0,0.04), -1px -1px 4px rgba(255,255,255,0.3)",
                  }}
                >
                  <span className={`text-[10px] md:text-xs font-semibold text-center leading-tight px-2 transition-colors duration-300 ${
                    active === tab.id ? "text-foreground" : "text-foreground/50"
                  }`}>
                    {tab.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Content — only shown when a circle is active */}
          {current && (
            <div
              className="transition-all duration-250 ease-in-out"
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(8px)" : "translateY(0)",
              }}
            >
              {current.content}
            </div>
          )}
        </div>

        {/* Right — mockup */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-[350px] md:w-[425px] lg:w-[500px] xl:w-[550px]">
            <img
              src={mockup}
              alt="Virtual Village technology"
              className="relative z-10 w-full pointer-events-none"
            />
            <video
              src={techVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute z-0 object-cover"
              style={{
                top: '5%',
                left: '7.3%',
                width: '57%',
                height: '78%',
                borderRadius: 'clamp(1.2rem, 3vw, 2.5rem)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTabs;
