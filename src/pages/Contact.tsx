
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Clock, User } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact & Support
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're here to help you make the most of DueLex. Reach out with any questions, feedback, or support needs.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Get help with any questions or issues. We typically respond within 4 hours during business days.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <a href="mailto:support@duelex.com">support@duelex.com</a>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Response Times</h3>
              <div className="text-gray-600 space-y-2">
                <p><strong>Free users:</strong> Within 24 hours</p>
                <p><strong>Pro users:</strong> Within 4 hours</p>
                <p><strong>Business hours:</strong> Mon-Fri, 9AM-6PM EST</p>
              </div>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Account Help</h3>
              <p className="text-gray-600 mb-6">
                Need help with your account, billing, or subscription? We're here to assist.
              </p>
              <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                <a href="mailto:accounts@duelex.com">accounts@duelex.com</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Support Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Support Topics
            </h2>
            <p className="text-xl text-gray-600">
              Here are the most common issues our support team helps with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Setting Up Your Account",
                description: "Help with initial setup, email configuration, and getting started with your first deadlines."
              },
              {
                title: "Deadline Management",
                description: "Questions about adding, modifying, or canceling deadlines through email commands."
              },
              {
                title: "Email Integration",
                description: "Issues with email delivery, spam filters, or connecting DueLex to your email client."
              },
              {
                title: "Billing & Subscriptions",
                description: "Questions about pricing, upgrades, downgrades, or billing issues."
              },
              {
                title: "Technical Issues",
                description: "Troubleshooting problems with the service, missing emails, or system errors."
              },
              {
                title: "Feature Requests",
                description: "Suggestions for new features or improvements to the DueLex service."
              }
            ].map((topic, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">
                    {topic.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Critical Deadline Emergency?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            If you have a critical deadline issue that needs immediate attention outside of business hours, 
            please mark your email as "URGENT" in the subject line.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <a href="mailto:support@duelex.com?subject=URGENT">Send Urgent Email</a>
          </Button>
          <p className="text-red-600 mt-4 text-sm">
            Emergency support is available for Pro users only
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
