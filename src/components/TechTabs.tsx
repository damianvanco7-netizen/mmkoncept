import { useState, useRef, useEffect } from "react";
import ShinyText from "@/components/ShinyText";
import techReact from "@/assets/tech-react.png";
import techSupabase from "@/assets/tech-supabase.png";
import techGemini from "@/assets/tech-gemini.png";

const tabs = [
  {
    id: "core",
    label: "Core Stack",
    content: (
      <div>
        <div className="flex items-center justify-center gap-3 mb-1">
          <img src={techReact} alt="React" className="w-8 h-8 rounded-full" />
          <p className="text-lg md:text-xl font-bold text-foreground">
            React Native <span className="font-normal">(TypeScript + Expo)</span>
          </p>
        </div>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-6">
          One codebase. Seamless experience across iOS and Android.
        </p>
        <div className="flex items-center justify-center gap-3 mb-1">
          <img src={techSupabase} alt="Supabase" className="w-8 h-8 rounded-full" />
          <p className="text-lg md:text-xl font-bold text-foreground">
            Supabase <span className="font-normal">(PostgreSQL)</span>
          </p>
        </div>
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
        <div className="flex items-center justify-center gap-3 mb-2">
          <img src={techGemini} alt="Gemini" className="w-8 h-8 rounded-full" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Intelligence that acts, not just responds
          </h3>
        </div>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-6">
          Powered by Google Gemini, STAR transforms context — location, time, and behavior — into real-time, actionable guidance.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
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
      <div className="flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Reliable, relevant, and human-centered:
        </h3>
        <ul className="space-y-2 text-sm md:text-base text-foreground/60 inline-block text-left">
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
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Built for trust.<br />Designed for global expansion.
        </h3>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-2">
          Row Level Security (RLS) ensures strict data protection
        </p>
        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
          Modular Universe architecture enables instant rollout across cities — without rebuilding
        </p>
      </div>
    ),
  },
];

const TechTabs = () => {
  const [active, setActive] = useState<string>("core");
  const [animating, setAnimating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const current = tabs.find((t) => t.id === active)!;

  // Scroll active pill into view
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeBtn = container.querySelector(`[data-tab="${active}"]`) as HTMLElement;
    if (!activeBtn) return;
    const scrollLeft = activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.offsetWidth / 2;
    container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
  }, [active]);

  const switchTab = (id: string) => {
    if (animating || id === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(id);
      setAnimating(false);
    }, 250);
  };

  return (
    <section className="py-10 md:py-14 section-padding">
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="heading-h2 text-foreground/80 mb-4">
          <ShinyText speed={4} color="hsl(var(--foreground) / 0.35)" shineColor="hsl(var(--foreground))" spread={140}>
            <span className="whitespace-nowrap">Cloud‑native.</span>{" "}<span className="whitespace-nowrap">AI‑powered.</span><br />Built to scale globally.
          </ShinyText>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-12">
          A modular architecture designed<br />
          for speed, intelligence, and seamless growth.
        </p>

        {/* Pill buttons — horizontal scroll on mobile */}
        <div ref={scrollRef} className="flex md:flex-wrap md:justify-center gap-4 mb-12 overflow-x-auto scrollbar-hide pb-2 -mx-[clamp(1.5rem,5vw,6rem)] px-[clamp(1.5rem,5vw,6rem)]" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-tab={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold liquid-glass-circle-light transition-all duration-300 whitespace-nowrap snap-center flex-shrink-0 ${
                active === tab.id
                  ? "border-foreground/30 text-foreground"
                  : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="max-w-2xl text-center transition-all duration-250 ease-in-out"
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
