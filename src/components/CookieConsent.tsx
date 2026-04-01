import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent";

export const getCookieConsent = (): "accepted" | "rejected" | null => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as "accepted" | "rejected" | null;
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-500"
    >
      <div
        className="mx-auto max-w-4xl rounded-2xl p-6 md:p-8 liquid-glass-nav"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <p className="text-sm text-foreground/80 leading-relaxed">
              We use cookies to enhance your experience. Necessary cookies ensure the site works properly.
              Analytics cookies help us improve.{" "}
              <Link to="/gdpr" className="underline underline-offset-2 text-foreground hover:text-foreground/60 transition-colors">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleReject}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-full text-sm font-medium text-foreground transition-colors"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
