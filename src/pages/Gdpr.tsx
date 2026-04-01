import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Grainient from "@/components/Grainient";

const Gdpr = () => {
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
          <h1 className="heading-h2 text-white mb-4">Privacy Policy</h1>
          <p className="text-white/50 text-sm mb-16">Active since January 2026</p>

          <div className="space-y-10 text-white/70 leading-relaxed text-sm">
            <p>mmconcept.sk</p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
              <p className="mb-3">
                This Privacy Policy explains how <strong className="text-white/90">[COMPANY FULL NAME]</strong>, registered at:
              </p>
              <ul className="space-y-1 ml-4 list-none">
                <li>Registered address: <strong className="text-white/90">[COMPANY ADDRESS]</strong></li>
                <li>Company registration number: <strong className="text-white/90">[IČO]</strong></li>
                <li>VAT number (if applicable): <strong className="text-white/90">[IČ DPH]</strong></li>
                <li>Contact email: <strong className="text-white/90">[EMAIL ADDRESS]</strong></li>
              </ul>
              <p className="mt-3">
                (hereinafter referred to as "we", "us", or "the Company") collects, uses, and protects personal data obtained through our website mmconcept.sk in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and applicable Slovak law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">2. Data Controller</h2>
              <p>
                The data controller responsible for your personal data is <strong className="text-white/90">[COMPANY FULL NAME]</strong>, with its registered office at <strong className="text-white/90">[COMPANY ADDRESS]</strong>.
              </p>
              <p className="mt-3">
                If you have any questions regarding the processing of your personal data, please contact us at: <strong className="text-white/90">[EMAIL ADDRESS]</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">3. What Personal Data We Collect</h2>
              <p className="mb-3">We collect personal data through two channels on this website:</p>

              <h3 className="text-base font-semibold text-white/90 mb-2">a) Contact form</h3>
              <p className="mb-2">When you submit an enquiry through our contact form, we collect the following information:</p>
              <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                <li>Full name</li>
                <li>Email address</li>
                <li>Message content (and any other information you voluntarily provide)</li>
              </ul>

              <h3 className="text-base font-semibold text-white/90 mt-4 mb-2">b) Cookies and analytics</h3>
              <p className="mb-2">Our website uses cookies and similar tracking technologies to collect anonymised data about how visitors use the site. This may include:</p>
              <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                <li>IP address (anonymised)</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring URL</li>
                <li>Device type and operating system</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">4. Legal Basis for Processing</h2>
              <p className="mb-2">We process your personal data on the following legal grounds under Article 6 GDPR:</p>
              <ul className="space-y-2 ml-6 list-disc marker:text-white/30">
                <li><strong className="text-white/90">Legitimate interest</strong> (Article 6(1)(f) GDPR) — for responding to enquiries submitted via the contact form.</li>
                <li><strong className="text-white/90">Consent</strong> (Article 6(1)(a) GDPR) — for the use of non-essential cookies and analytics. You may withdraw your consent at any time by adjusting your browser settings or cookie preferences.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">5. Purpose of Processing</h2>
              <p className="mb-2">We use the personal data we collect for the following purposes:</p>
              <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                <li>To respond to your enquiries and communicate with you.</li>
                <li>To improve the performance and user experience of our website through anonymised analytics.</li>
                <li>To fulfil any legal obligations applicable to our business.</li>
              </ul>
              <p className="mt-3">We do not use your data for automated decision-making or profiling.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">6. Cookies</h2>
              <p className="mb-3">
                Cookies are small text files stored on your device when you visit a website. We use the following types of cookies:
              </p>
              <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                <li><strong className="text-white/90">Essential cookies</strong> — necessary for the website to function properly. These cannot be disabled.</li>
                <li><strong className="text-white/90">Analytics cookies</strong> — help us understand how visitors interact with the website (e.g. Google Analytics). These are only set with your consent.</li>
              </ul>
              <p className="mt-3">
                You can control and delete cookies at any time through your browser settings. Disabling cookies may affect the functionality of the website.
              </p>
              <p className="mt-3">
                For more information about the specific cookies we use, please see our Cookie Policy at: <strong className="text-white/90">[LINK TO COOKIE POLICY or "available on request"]</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">7. Data Retention</h2>
              <p className="mb-2">We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:</p>
              <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                <li><strong className="text-white/90">Contact form data</strong> — retained for a maximum of 3 years from the date of last contact, unless a longer retention period is required by law.</li>
                <li><strong className="text-white/90">Analytics data</strong> — retained in anonymised form in accordance with the terms of the analytics provider (typically up to 26 months).</li>
              </ul>
              <p className="mt-3">Once the retention period expires, your data is securely deleted or anonymised.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">8. Sharing of Personal Data</h2>
              <p className="mb-3">
                We do not sell, rent, or trade your personal data to third parties. We may share your data with trusted third-party service providers who assist us in operating our website and running our business, including:
              </p>
              <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                <li>Web hosting provider</li>
                <li>Email service provider</li>
                <li>Analytics provider (e.g. Google Analytics — data is processed in accordance with Google's privacy policy and standard contractual clauses)</li>
              </ul>
              <p className="mt-3">
                All third parties are contractually required to handle your data securely and in compliance with GDPR. Where data is transferred outside the European Economic Area (EEA), we ensure appropriate safeguards are in place.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">9. Your Rights</h2>
              <p className="mb-2">Under the GDPR, you have the following rights regarding your personal data:</p>
              <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                <li><strong className="text-white/90">Right of access</strong> — you may request a copy of the personal data we hold about you.</li>
                <li><strong className="text-white/90">Right to rectification</strong> — you may ask us to correct inaccurate or incomplete data.</li>
                <li><strong className="text-white/90">Right to erasure</strong> — you may request that we delete your personal data, subject to certain conditions.</li>
                <li><strong className="text-white/90">Right to restriction of processing</strong> — you may ask us to restrict how we use your data in certain circumstances.</li>
                <li><strong className="text-white/90">Right to data portability</strong> — you may request your data in a structured, machine-readable format.</li>
                <li><strong className="text-white/90">Right to object</strong> — you may object to processing based on legitimate interests.</li>
                <li><strong className="text-white/90">Right to withdraw consent</strong> — where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at: <strong className="text-white/90">[EMAIL ADDRESS]</strong>. We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">10. Right to Lodge a Complaint</h2>
              <p className="mb-3">
                If you believe we have not handled your personal data in accordance with applicable law, you have the right to lodge a complaint with the Slovak supervisory authority:
              </p>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="font-semibold text-white/90">Úrad na ochranu osobných údajov Slovenskej republiky</p>
                <p>Hraničná 12, 820 07 Bratislava, Slovak Republic</p>
                <p>Web: www.dataprotection.gov.sk</p>
                <p>Email: statny.dozor@pdp.gov.sk</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">11. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, or damage. Access to personal data is restricted to authorised personnel only.
              </p>
              <p className="mt-3">
                However, please be aware that no method of transmission over the internet is completely secure. While we strive to protect your data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">12. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated policy will be published on this page with a revised effective date. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">14. Effective Date</h2>
              <p>
                This Privacy Policy is effective as of <strong className="text-white/90">[DATE]</strong>.
              </p>
            </div>

            <p className="text-white/40 text-xs mt-8">mmconcept.sk — Privacy Policy</p>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default Gdpr;
