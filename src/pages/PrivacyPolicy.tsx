import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Grainient from "@/components/Grainient";

const PrivacyPolicy = () => {
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
            <p className="text-white/50 text-sm mb-16">Effective as of: 1 January 2026</p>

            <div className="space-y-10 text-white/70 leading-relaxed text-sm">

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">1. Introduction</h2>
                <p>
                  This Privacy Policy explains how mm concept s. r. o., with its registered office at Ulica Jána Bottu 8995/29F, 917 01 Trnava, Slovak Republic, Company ID No. (IČO): 55644121, Tax ID No. (DIČ): 2122051448 (hereinafter referred to as "we", "us" or "the Company"), collects, uses and protects personal data obtained through the website mmconcept.sk in accordance with Regulation (EU) 2016/679 (GDPR) and applicable Slovak legislation.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">2. Data Controller</h2>
                <p className="mb-3">The controller responsible for the processing of your personal data is:</p>
                <div className="space-y-1">
                  <p className="text-white/90 font-semibold">mm concept s. r. o.</p>
                  <p>Ulica Jána Bottu 8995/29F</p>
                  <p>917 01 Trnava</p>
                  <p>Slovak Republic</p>
                  <p>IČO: 55644121</p>
                  <p>DIČ: 2122051448</p>
                  <p>Email: martina.masarykova@mmconcept.sk</p>
                </div>
                <p className="mt-3">The Company has not appointed a Data Protection Officer.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">3. What Personal Data We Collect</h2>
                <p className="mb-3">We may collect and process personal data through the following channels:</p>

                <h3 className="text-base font-semibold text-white/90 mb-2">a) Contact form</h3>
                <p className="mb-2">When you contact us through the website contact form, we may process:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>full name</li>
                  <li>email address</li>
                  <li>message content</li>
                  <li>any other information you voluntarily provide in your enquiry</li>
                </ul>

                <h3 className="text-base font-semibold text-white/90 mt-4 mb-2">b) Cookies and website analytics</h3>
                <p className="mb-2">Subject to your cookie preferences, we may process certain technical and usage data, such as:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>IP address or truncated/anonymised IP address</li>
                  <li>browser type and version</li>
                  <li>device type and operating system</li>
                  <li>pages visited and time spent on the website</li>
                  <li>date and time of access</li>
                  <li>referring URL</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">4. Legal Basis for Processing</h2>
                <p className="mb-2">We process personal data on the following legal bases under Article 6 GDPR:</p>
                <ul className="space-y-2 ml-6 list-disc marker:text-white/30">
                  <li><strong className="text-white/90">Legitimate interest</strong> – for handling and responding to enquiries submitted through the contact form and for basic protection of our website and communication records</li>
                  <li><strong className="text-white/90">Consent</strong> – for non-essential cookies and analytics tools, where such tools are used</li>
                  <li><strong className="text-white/90">Legal obligation</strong> – where processing is necessary to comply with applicable legal obligations</li>
                  <li><strong className="text-white/90">Pre-contractual relations</strong> – where you contact us with a request that may lead to contractual discussions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">5. Purposes of Processing</h2>
                <p className="mb-2">We use personal data for the following purposes:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>to respond to your enquiries and communicate with you</li>
                  <li>to manage and protect our website</li>
                  <li>to improve website functionality, performance and user experience</li>
                  <li>to maintain basic records of communication</li>
                  <li>to comply with legal and regulatory obligations</li>
                </ul>
                <p className="mt-3">We do not use your personal data for automated individual decision-making or profiling.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">6. Cookies</h2>
                <p className="mb-3">Cookies are small text files stored on your device when you visit a website.</p>
                <p className="mb-2">We may use the following categories of cookies:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li><strong className="text-white/90">Essential cookies</strong> – necessary for the proper functioning and security of the website</li>
                  <li><strong className="text-white/90">Analytics cookies</strong> – used to understand how visitors use the website and improve performance; these are used only on the basis of your consent</li>
                </ul>
                <p className="mt-3">You can withdraw or change your cookie preferences at any time through the cookie settings tool, if implemented, or via your browser settings.</p>
                <p className="mt-3">
                  For more information, please see our{" "}
                  <Link to="/cookie-policy" className="text-white underline underline-offset-2 hover:text-white/60 transition-colors">
                    Cookie Policy
                  </Link>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">7. Data Retention</h2>
                <p className="mb-2">We retain personal data only for as long as necessary for the purposes for which it was collected, unless a longer period is required by law.</p>
                <p className="mb-2">In particular:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li><strong className="text-white/90">Contact form data</strong>: for up to 3 years from the last communication, unless further retention is necessary for legal claims, contractual follow-up or statutory obligations</li>
                  <li><strong className="text-white/90">Analytics data</strong>: for the period configured in the analytics tool, typically up to 26 months, or in anonymised or aggregated form where applicable</li>
                  <li><strong className="text-white/90">Cookie consent records</strong>: for as long as necessary to demonstrate compliance with consent requirements</li>
                </ul>
                <p className="mt-3">After the relevant retention period, personal data is deleted, anonymised or otherwise securely disposed of.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">8. Recipients and Sharing of Personal Data</h2>
                <p className="mb-3">We do not sell or rent your personal data.</p>
                <p className="mb-2">We may share personal data with trusted service providers acting on our behalf, in particular:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>website hosting provider</li>
                  <li>IT and technical support providers</li>
                  <li>email or contact form service providers</li>
                  <li>analytics or cookie tool providers, where enabled by consent</li>
                  <li>legal, accounting or regulatory advisers where necessary</li>
                </ul>
                <p className="mt-3">Such recipients process personal data only on the basis of our instructions, under appropriate contractual arrangements, and in accordance with GDPR requirements.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">9. International Transfers</h2>
                <p className="mb-3">As a rule, we seek to process personal data within the European Union / European Economic Area.</p>
                <p className="mb-2">If some of our service providers process data outside the EEA, we ensure that appropriate safeguards are in place, for example:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>an adequacy decision of the European Commission, where applicable</li>
                  <li>Standard Contractual Clauses adopted by the European Commission</li>
                  <li>additional supplementary measures where required</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">10. Your Rights</h2>
                <p className="mb-2">Under the GDPR, you have the following rights in relation to your personal data:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>right of access</li>
                  <li>right to rectification</li>
                  <li>right to erasure</li>
                  <li>right to restriction of processing</li>
                  <li>right to data portability</li>
                  <li>right to object to processing based on legitimate interests</li>
                  <li>right to withdraw consent at any time, where processing is based on consent</li>
                  <li>right not to be subject to a decision based solely on automated processing, where applicable</li>
                </ul>
                <p className="mt-3">To exercise your rights, contact us at: <a href="mailto:martina.masarykova@mmconcept.sk" className="text-white underline underline-offset-2 hover:text-white/60 transition-colors">martina.masarykova@mmconcept.sk</a></p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">11. Right to Lodge a Complaint</h2>
                <p className="mb-3">If you believe that your personal data is being processed unlawfully, you have the right to lodge a complaint with the competent supervisory authority in the Slovak Republic:</p>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white/90">Úrad na ochranu osobných údajov Slovenskej republiky</p>
                  <p>Námestie 1. mája 18</p>
                  <p>811 06 Bratislava</p>
                  <p>Slovak Republic</p>
                  <p>Email: statny.dozor@pdp.gov.sk</p>
                  <p>Website: dataprotection.gov.sk</p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">12. Data Security</h2>
                <p>We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, destruction or damage.</p>
                <p className="mt-3 mb-2">These measures may include, in particular:</p>
                <ul className="space-y-1 ml-6 list-disc marker:text-white/30">
                  <li>restricted access to data</li>
                  <li>password protection and access controls</li>
                  <li>secure hosting environment</li>
                  <li>regular software and security updates</li>
                  <li>contractual confidentiality obligations where relevant</li>
                </ul>
                <p className="mt-3">Despite these measures, no internet transmission or storage system can be guaranteed to be completely secure.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">13. Provision of Data</h2>
                <p>Providing personal data via the contact form is voluntary. However, if you do not provide the required contact information, we may not be able to respond to your enquiry.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">14. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third-party websites. We recommend that you review their privacy notices separately.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">15. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in legal requirements, our processing practices or website functionality.</p>
                <p className="mt-3">The current version will always be published on this page together with its effective date.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">16. Effective Date</h2>
                <p>This Privacy Policy is effective as of 1 January 2026.</p>
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

export default PrivacyPolicy;
