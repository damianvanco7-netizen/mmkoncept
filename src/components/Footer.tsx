import logo from "@/assets/logo-mmconcept-new.svg";

interface FooterProps {
  variant?: "dark" | "light";
}

const Footer = ({ variant = "dark" }: FooterProps) => {
  const isDark = variant === "dark";
  const headingColor = isDark ? "text-warm-taupe" : "text-foreground/50";
  const nameColor = isDark ? "text-warm-white" : "text-foreground";
  const textColor = isDark ? "text-warm-taupe" : "text-foreground/60";
  const linkHover = isDark ? "hover:text-warm-white" : "hover:text-foreground";
  const borderColor = isDark ? "border-warm-taupe/20" : "border-foreground/15";

  return (
    <footer id="footer" className="py-16 md:py-24 section-padding" style={{ background: 'transparent' }}>
      <div className="w-full">
        {/* Contact Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 border-t ${borderColor} pt-12`}>
          <div>
            <h4 className={`text-xs font-semibold tracking-widest ${headingColor} uppercase mb-6`}>Contact</h4>
            <p className={`${nameColor} font-semibold mb-1`}>Martina Masaryková</p>
            <p className={`${textColor} text-sm mb-1`}>CEO, mm concept</p>
            <p className={`${textColor} text-sm mb-4`}>Vision & Project Lead, Virtual Village</p>
            <div className={`space-y-1 text-sm ${textColor}`}>
              <p>Slovakia <a href="tel:+421908168840" className={`${linkHover} transition-colors`}>+421 908 168 840</a></p>
              <p>Germany <a href="tel:+491728890408" className={`${linkHover} transition-colors`}>+49 172 8890408</a></p>
            </div>
          </div>

          <div>
            <h4 className={`text-xs font-semibold tracking-widest ${headingColor} uppercase mb-6`}>Email</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className={`${textColor} mb-1`}>mm concept</p>
                <a href="mailto:martina.masarykova@mmconcept.sk" className={`${nameColor} hover:underline transition-colors`}>
                  martina.masarykova@mmconcept.sk
                </a>
              </div>
              <div>
                <p className={`${textColor} mb-1`}>Virtual Village</p>
                <a href="mailto:martina@virtualvillage.me" className={`${nameColor} hover:underline transition-colors`}>
                  martina@virtualvillage.me
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`text-xs font-semibold tracking-widest ${headingColor} uppercase mb-6`}>Location</h4>
            <p className={`${nameColor} text-sm mb-2`}>Based in Europe. Working globally.</p>
            <p className={`${textColor} text-sm`}>Slovakia / Germany</p>
          </div>
        </div>

        {/* Bottom */}
        <div className={`border-t ${borderColor} pt-8 flex flex-col md:flex-row items-center justify-between gap-4`}>
          <p className={`text-sm ${textColor}`}>
            © {new Date().getFullYear()} mm concept. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className={`text-sm ${textColor} ${linkHover} transition-colors`}>
              Privacy Policy
            </a>
            <span className={isDark ? "text-warm-taupe/40" : "text-foreground/20"}>|</span>
            <a href="/cookie-policy" className={`text-sm ${textColor} ${linkHover} transition-colors`}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
