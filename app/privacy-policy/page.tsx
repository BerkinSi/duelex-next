"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us, such as when you create an account, send emails to our service, or contact us for support.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to provide, maintain, and improve our services, process your transactions, and communicate with you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to access, correct, or delete your personal information. You may also opt out of certain communications from us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your experience and analyze how our service is used.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this privacy policy, please contact us at support@duelex.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
