import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  // Scrolls to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-times bg-white min-h-screen pt-56 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="pb-8 mb-12">
          <h1 className="text-4xl font-serif text-black uppercase tracking-tighter mb-4">
            Privacy Policy
          </h1>
          <p className="text-black font-bold text-sm uppercase tracking-widest">
            Keeves Steel • Last Updated: March 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="text-black leading-relaxed space-y-12">
          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">1. Introduction</h2>
            <p className="text-lg">
              Keeves Steel, based in Mangalore, India, showcases our work, steel detailing of steel components. 
              This Privacy Policy explains how we handle personal data in compliance with India's 
              <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, and for transparency with 
              international clients, including those in the USA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <strong className="block">Contact Information:</strong> 
                Name, email address, phone number, and any details you provide when reaching us through the contact option.
              </li>
              <li>
                <strong className="block">Technical Information:</strong> 
                Basic usage data such as IP address, browser type, and device information (collected automatically for site functionality).
              </li>
              <li>
                <strong className="block">Cookies:</strong> 
                Limited use of cookies to improve browsing experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">3. Purpose of Processing</h2>
            <p className="mb-4 font-bold text-lg">We use your information only to:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Respond to inquiries and provide requested information</li>
              <li>Communicate about our services and projects</li>
              <li>Maintain records for compliance and business correspondence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">4. Consent & Withdrawal</h2>
            <p className="text-lg">
              By submitting your details through the contact option, you consent to our use of that information. 
              You may withdraw consent at any time by contacting us, after which we will delete your data unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">5. Data Sharing & Transfers</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>We do not sell or rent personal data.</li>
              <li>Data may be shared with trusted service providers (e.g., hosting, email services).</li>
              <li>Since we serve clients in the USA, data may be transferred internationally with safeguards in place.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">6. Data Retention</h2>
            <p className="text-lg">
              We retain personal data only as long as necessary to respond to inquiries or comply with legal obligations, 
              after which it is securely deleted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">7. Your Rights (DPDP Act)</h2>
            <p className="mb-4 text-lg">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Access and correct your personal data</li>
              <li>Request deletion of your data</li>
              <li>Nominate another person to exercise rights in case of incapacity</li>
              <li>Lodge grievances with the Data Protection Board of India</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">8. Security Measures</h2>
            <p className="text-lg">We take reasonable steps to protect your information from unauthorized access or misuse.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">9. Children's Data</h2>
            <p className="text-lg">Our website is not intended for children under 18. We do not knowingly collect their personal data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">10. Updates to Policy</h2>
            <p className="text-lg">This Privacy Policy may be updated periodically. Changes will be posted here with a revised "Last Updated" date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">11. Contact Us</h2>
            <p className="mb-6 text-lg font-bold">For questions or to exercise your rights, please contact:</p>
            <div className="text-lg space-y-2">
              <p><strong>Keeves Steel</strong></p>
              <p>Mangalore, India</p>
              <p><strong>Email:</strong> keeves@keevessteel.com</p>
              <p><strong>Phone:</strong> +91 8884837002</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
