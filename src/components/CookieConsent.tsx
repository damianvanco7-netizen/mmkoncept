import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const COOKIE_CONSENT_KEY = "cookie-consent";

export const getCookieConsent = (): "accepted" | "rejected" | null => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) as "accepted" | "rejected" | null;
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Detect if we're on a light background page
  const isLightBg = pathname === "/virtual-village";

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

  const glassBg = isLightBg
    ? "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.35) 100%)"
    : "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)";

  const glassBorder = isLightBg
    ? "1px solid rgba(0,0,0,0.1)"
    : "1px solid rgba(255,255,255,0.18)";

  const glassShadow = isLightBg
    ? "0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)"
    : "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)";

  const textColor = isLightBg ? "text-foreground/80" : "text-white/80";
  const linkColor = isLightBg ? "text-foreground hover:text-foreground/60" : "text-white hover:text-white/60";
  const rejectTextColor = isLightBg ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white";
  const acceptTextColor = isLightBg ? "text-foreground" : "text-white";

  const rejectBtnStyle = isLightBg
    ? { border: "1px solid rgba(0,0,0,0.12)", background: "rgba(0,0,0,0.03)" }
    : { border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" };

  const acceptBtnStyle = isLightBg
    ? {
        background: "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 100%)",
        border: "1px solid rgba(0,0,0,0.15)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)",
      }
    : {
        background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
      };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-in slide-in-from-bottom-4 duration-500"
      style={{
        paddingBottom: "calc(1rem + env(safe-area-inset-bottom))",
        paddingLeft: "calc(1rem + env(safe-area-inset-left))",
        paddingRight: "calc(1rem + env(safe-area-inset-right))",
      }}
    >
      <div
        className="mx-auto max-w-4xl rounded-full p-6 md:p-8"
        style={{
          background: glassBg,
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          border: glassBorder,
          boxShadow: glassShadow,
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="flex-1">
            <p className={`text-sm ${textColor} leading-relaxed`}>
              We use cookies to enhance your experience. Necessary cookies ensure the site works properly.
              Analytics cookies help us improve.{" "}
              <Link to="/privacy-policy" className={`underline underline-offset-2 ${linkColor} transition-colors`}>
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleReject}
              className={`px-5 py-2.5 rounded-full text-sm font-medium ${rejectTextColor} transition-colors`}
              style={rejectBtnStyle}
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className={`px-5 py-2.5 rounded-full text-sm font-medium ${acceptTextColor} transition-colors`}
              style={acceptBtnStyle}
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
