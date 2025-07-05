
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using DueLex ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Service Description</h2>
          <p className="text-gray-700 mb-4">
            DueLex is an AI-powered legal deadline management service that helps legal professionals track and manage their deadlines through an email-based interface.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Free Trial and Billing</h2>
          <p className="text-gray-700 mb-4">
            We offer a 1-month free trial period. After the trial period, the service continues at $9 per month unless cancelled. You may cancel at any time during or after the trial period.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            You are responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Providing accurate deadline information</li>
            <li>Maintaining the confidentiality of your account</li>
            <li>Complying with all applicable laws and regulations</li>
            <li>Using the service only for legitimate legal practice purposes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data and Privacy</h2>
          <p className="text-gray-700 mb-4">
            Your data is kept separate and secure. We process your information in accordance with our Privacy Policy. We do not share your deadline information with third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Service Availability</h2>
          <p className="text-gray-700 mb-4">
            While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. You remain responsible for managing your deadlines and should not rely solely on DueLex for critical deadline management.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            DueLex is provided as a tool to assist with deadline management. We are not liable for missed deadlines, legal consequences, or any damages arising from the use or inability to use our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Cancellation</h2>
          <p className="text-gray-700 mb-4">
            You may cancel your subscription at any time. Upon cancellation, your service will continue until the end of your current billing period.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify these terms at any time. We will notify users of significant changes via email.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For questions about these terms, please contact us at support@duelex.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
