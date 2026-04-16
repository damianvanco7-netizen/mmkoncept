import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import ShinyText from "@/components/ShinyText";

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);

  const isValid =
    name.trim() &&
    email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    message.trim() &&
    consent;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSending(true);

    try {
      const submissionId = crypto.randomUUID();
      const trimmed = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      };

      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({ id: submissionId, ...trimmed });

      if (dbError) throw dbError;

      await supabase.functions.invoke("send-contact-email", {
        body: trimmed,
      });

      toast({
        title: "Správa bola odoslaná",
        description: "Ďakujeme, ozveme sa vám čo najskôr.",
      });

      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
    } catch {
      toast({
        title: "Chyba",
        description: "Niečo sa pokazilo. Skúste to znova.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-24 md:py-32 section-padding">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — heading */}
        <div className="lg:sticky lg:top-32">
          <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
            <ShinyText speed={4} color="rgba(255,255,255,0.65)" shineColor="rgba(255,255,255,1)">
              Get in touch
            </ShinyText>
          </h2>
          <p className="mt-5 text-base text-white/40 max-w-md leading-relaxed">
            Whether you have a question, a project idea, or just want to connect — we're here to listen.
          </p>
        </div>

        {/* Right — form in glass card */}
        <div className="liquid-glass-dialog rounded-2xl p-8 md:p-12 relative">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <input
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name and surname"
                className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div>
              <textarea
                required
                maxLength={1000}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full bg-transparent border-0 border-b border-white/15 px-0 py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
            </div>

            {/* GDPR */}
            <label className="flex items-start gap-3 cursor-pointer">
              <button
                type="button"
                onClick={() => setConsent(!consent)}
                className={`mt-0.5 h-4 w-4 rounded flex-shrink-0 border transition-all flex items-center justify-center ${
                  consent
                    ? "border-white/50 text-white"
                    : "border-white/20 text-transparent"
                }`}
              >
                {consent && (
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <span className="text-xs text-white/40 leading-relaxed">
                I agree to the processing of my personal data in accordance with
                the{" "}
                <Link
                  to="/gdpr"
                  className="underline text-white/60 hover:text-white/80 transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid || sending}
              className="w-full rounded-full py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 liquid-glass-circle text-white disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
