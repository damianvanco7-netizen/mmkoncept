import logo from "@/assets/logo-mmconcept-new.svg";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="py-16 md:py-24 section-padding" style={{ background: 'transparent' }}>
      <div className="w-full">
        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 border-t border-warm-taupe/20 pt-12">
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-warm-taupe uppercase mb-6">Contact</h4>
            <p className="text-warm-white font-semibold mb-1">Martina Masaryková</p>
            <p className="text-warm-taupe text-sm mb-1">CEO, mm concept</p>
            <p className="text-warm-taupe text-sm mb-4">Vision & Project Lead, Virtual Village</p>
            <div className="space-y-1 text-sm text-warm-taupe">
              <p>Slovakia <a href="tel:+421908168840" className="hover:text-warm-white transition-colors">+421 908 168 840</a></p>
              <p>Germany <a href="tel:+491728890408" className="hover:text-warm-white transition-colors">+49 172 8890408</a></p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-warm-taupe uppercase mb-6">Email</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-warm-taupe mb-1">mm concept</p>
                <a href="mailto:martina.masarykova@mmconcept.sk" className="text-warm-white hover:underline transition-colors">
                  martina.masarykova@mmconcept.sk
                </a>
              </div>
              <div>
                <p className="text-warm-taupe mb-1">Virtual Village</p>
                <a href="mailto:martina@virtualvillage.me" className="text-warm-white hover:underline transition-colors">
                  martina@virtualvillage.me
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-warm-taupe uppercase mb-6">Location</h4>
            <p className="text-warm-white text-sm mb-2">Based in Europe. Working globally.</p>
            <p className="text-warm-taupe text-sm">Slovakia / Germany</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-taupe/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm-taupe">
            © {new Date().getFullYear()} mm concept. All rights reserved.
          </p>
          <a href="/gdpr" className="text-sm text-warm-taupe hover:text-warm-white transition-colors">
            GDPR
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
