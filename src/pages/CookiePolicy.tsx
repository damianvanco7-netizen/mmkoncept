import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Grainient from "@/components/Grainient";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen relative">
      <Grainient
        color1="#868380"
        color2="#575451"
        color3="#282828"
        timeSpeed={0.55}
        warpFrequency={4.0}
        warpSpeed={2.5}
        grainAmount={0.06}
        contrast={1.3}
        saturation={0.8}
      />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />

        <section className="pt-32 pb-20 section-padding">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="heading-h2 text-white mb-4">Cookie Policy</h1>
            <p className="text-white/50 text-sm mb-16">Effective as of: 1 January 2026</p>

            <div className="space-y-10 text-white/70 leading-relaxed text-sm">
              <p>This website, mmconcept.sk, uses cookies only to the extent necessary for the basic functionality, security and proper operation of the website.</p>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">What are cookies?</h2>
                <p>Cookies are small text files stored on your device when you visit a website. They help websites function properly and may also be used to remember preferences or improve user experience.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">What cookies we use</h2>
                <p className="mb-3">At this time, mmconcept.sk does not intentionally use analytics, marketing or profiling cookies.</p>
                <p className="mb-2">We may use only essential cookies that are necessary for:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>website security</li>
                  <li>proper page loading and functionality</li>
                  <li>technical operation of the website</li>
                </ul>
                <p className="mt-3">These cookies do not require consent under applicable law where they are strictly necessary for the operation of the website.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">Third-party cookies</h2>
                <p>We do not intentionally use third-party analytics or advertising cookies on this website.</p>
                <p className="mt-3">If this changes in the future, this Cookie Policy will be updated accordingly and, where required, a cookie consent mechanism will be implemented.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">Managing cookies</h2>
                <p>Most web browsers allow you to control or delete cookies through their settings. Please note that disabling essential cookies may affect the functionality of the website.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
                <p className="mb-3">If you have any questions about this Cookie Policy, you may contact us at:</p>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white/90">mm concept s. r. o.</p>
                  <p>Ulica Jána Bottu 8995/29F</p>
                  <p>917 01 Trnava</p>
                  <p>Slovak Republic</p>
                  <p className="mt-2">Email: <a href="mailto:martina.masarykova@mmconcept.sk" className="text-white underline underline-offset-2 hover:text-white/60 transition-colors">martina.masarykova@mmconcept.sk</a></p>
                </div>
              </div>

              <p className="text-white/40 text-xs mt-8">mmconcept.sk — Cookie Policy</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default CookiePolicy;
