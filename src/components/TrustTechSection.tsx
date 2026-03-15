import { ArrowRight } from "lucide-react";
import geminiLogo from "@/assets/gemini-logo.png";

const flowSteps = [
  "User Input",
  "Gemini LLM",
  "Ethical Data Filter",
  "Personalized Output",
];

const TrustTechSection = () => {
  return (
    <section id="tech" className="py-28 md:py-36 section-padding bg-near-black">
      <div className="w-full">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-warm-taupe uppercase mb-4">Technology</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-warm-beige mb-4">
            Trust Through Transparency
          </h2>
          <p className="text-lg text-warm-taupe max-w-xl mx-auto">
            A clear, auditable pipeline from user input to personalised output.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 mb-20">
          {flowSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-2 md:gap-4">
              <div className="px-6 py-4 rounded-2xl bg-white/[0.07] border border-white/[0.06] text-center min-w-[140px]">
                <p className="text-sm font-medium text-warm-beige">{step}</p>
              </div>
              {i < flowSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-warm-taupe hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-warm-taupe uppercase mb-8">Technology Partners</p>
          <div className="flex items-center justify-center gap-8">
            <div className="px-8 py-4 rounded-2xl bg-white/[0.07] border border-white/[0.06] flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold text-warm-beige tracking-wide">Google Cloud</span>
            </div>
            <div className="px-8 py-4 rounded-2xl bg-white/[0.07] border border-white/[0.06] flex items-center gap-3">
              <img src={geminiLogo} alt="Gemini" className="w-6 h-6 object-contain" />
              <span className="text-sm font-semibold text-warm-beige tracking-wide">Gemini</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustTechSection;
