import { useState } from "react";

const tabs = [
  {
    id: "core",
    label: "Core Stack",
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

const TechTabs = () => {
  const [active, setActive] = useState<string>("core");
  const [animating, setAnimating] = useState(false);

  const current = tabs.find((t) => t.id === active)!;

  const switchTab = (id: string) => {
    if (animating || id === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(id);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="py-28 md:py-36 section-padding">
      <div className="w-full flex flex-col items-center text-center">
        <p className="text-xs font-semibold tracking-widest text-foreground/60 uppercase mb-4">
          Technology
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem] font-bold text-foreground/80 leading-tight mb-4">
          Cloud‑native.<br />AI‑powered.<br />Built to scale globally.
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-12">
          A modern architecture designed<br />
          for speed, intelligence, and seamless growth.
        </p>

        {/* Pill buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active === tab.id
                  ? "border-foreground/40 text-foreground bg-foreground/10 shadow-sm"
                  : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="max-w-2xl text-left transition-all duration-250 ease-in-out"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
          }}
        >
          {current.content}
        </div>
      </div>
    </section>
  );
};

export default TechTabs;
