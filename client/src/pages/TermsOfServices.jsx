import React, { useEffect } from 'react';

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-black font-bold text-sm uppercase tracking-widest">
            Keeves Steel • Last Updated: March 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="text-black leading-relaxed space-y-12">
          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">1. Acceptance of Terms</h2>
            <p className="text-lg">
              By accessing or using the Keeves Steel website, you agree to these Terms of Service. 
              If you do not agree, please discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">2. Purpose of Website</h2>
            <p className="text-lg">
              This website is intended solely to showcase Keeves Steel's work and steel components. 
              It does not constitute an e-commerce platform, and no direct sales or transactions occur through the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">3. User Responsibilities</h2>
            <p className="text-lg mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-4">
              <li>use the website for lawful purposes only.</li>
              <li>not attempt to disrupt, damage, or gain unauthorized access to the website or its systems.</li>
              <li>provide accurate and not misleading information through the contact option.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">4. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>All content, including text, images, designs, and logos, is the property of Keeves Steel unless otherwise stated.</li>
              <li>You may not copy, reproduce, or distribute content without prior written consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">5. Communication via Contact Option</h2>
            <p className="text-lg mb-4">By submitting your details, you consent to our use of that information solely to respond to your inquiry, in line with our Privacy Policy.</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>The only way to reach us through the website is via the contact option.</li>
              <li>We are not responsible for delays or failures in communication caused by technical issues beyond our control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">6. Limitation of Liability</h2>
            <p className="text-lg mb-4">The website is provided "as is" for informational purposes.</p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Keeves Steel shall not be liable for any direct, indirect, or consequential damages arising from your use of the site.</li>
              <li>External links, if any, are provided for convenience; we are not responsible for their content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">7. Cross-Border Use</h2>
            <p className="text-lg">
              As Keeves Steel serves clients in the USA, users acknowledge that their information may be transferred internationally and processed in India, subject to applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">8. Governing Law</h2>
            <p className="text-lg">
              These Terms of Service are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Mangalore, Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">9. Changes to Terms</h2>
            <p className="text-lg">
              We may update these Terms of Service from time to time. Continued use of the website after changes indicates acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black uppercase tracking-tight mb-6">10. Contact Us</h2>
            <p className="mb-6 text-lg font-bold">For questions regarding these Terms of Service, please contact:</p>
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

export default TermsOfService;
