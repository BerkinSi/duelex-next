
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
            We collect information you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Email address and contact information</li>
            <li>Deadline information you submit via email</li>
            <li>Payment information (processed securely through our payment processor)</li>
            <li>Usage data and service interactions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide and maintain our deadline management service</li>
            <li>Send you deadline reminders and notifications</li>
            <li>Process payments and manage your subscription</li>
            <li>Improve our service and develop new features</li>
            <li>Communicate with you about your account and our service</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security and Separation</h2>
          <p className="text-gray-700 mb-4">
            Your data is kept completely separate from other users. We implement industry-standard security measures to protect your information, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Secure database storage with access controls</li>
            <li>Regular security audits and updates</li>
            <li>Limited employee access on a need-to-know basis</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Information Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties, except:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>To process payments through our secure payment processor</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your information for as long as your account is active or as needed to provide services. After account cancellation, we may retain certain information for legal compliance and legitimate business purposes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Email Communications</h2>
          <p className="text-gray-700 mb-4">
            By using our service, you consent to receive:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Deadline reminder emails</li>
            <li>Service notifications and updates</li>
            <li>Account and billing information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Export your deadline data</li>
            <li>Opt out of non-essential communications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">
            We use essential cookies to provide our service and may use analytics cookies to improve user experience. You can control cookie settings through your browser.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this privacy policy from time to time. We will notify you of any significant changes via email or through our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this privacy policy or our data practices, please contact us at privacy@duelex.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
