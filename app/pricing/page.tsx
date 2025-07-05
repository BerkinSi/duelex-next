
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Calendar, Mail, Clock } from "lucide-react";
import Link from "next/link"

const Pricing = () => {
  const features = [
    "Unlimited deadline management",
    "Daily email reminders", 
    "Email-based deadline creation",
    "Priority email support",
    "Secure & reliable service"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            1 month free trial - continue having an assistant for only $9 a month later.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-2xl font-semibold text-blue-600 mb-2">Start Free</div>
              <div className="text-6xl font-bold text-gray-900 mb-2">1 Month</div>
              <div className="text-xl text-gray-600 mb-4">Then $9/month</div>
              <div className="text-sm text-gray-500">No setup fees • Cancel anytime</div>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/signup">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
                Start Your Free Trial
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-3 text-center">
              1 month free trial - continue having an assistant for only $9 a month later
            </p>
          </div>
        </div>
      </section>

      {/* How Billing Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our Billing Works
            </h2>
            <p className="text-xl text-gray-600">
              Designed for legal professionals who value transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Start Free Trial</h3>
              <p className="text-gray-600">
                Begin immediately with full access to all DueLex features for 1 month completely free.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Use DueLex Fully</h3>
              <p className="text-gray-600">
                Manage unlimited deadlines via email during your trial. 
                Experience how DueLex transforms your practice.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Continue Seamlessly</h3>
              <p className="text-gray-600">
                Before your trial ends, choose to continue for $9/month 
                or cancel with no charges. Simple and transparent.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why $9/Month is Worth It
            </h2>
            <p className="text-xl text-gray-600">
              Compare the cost of missing just one deadline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-red-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  Cost of Missing Deadlines
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Malpractice claims and insurance increases</li>
                <li>• Lost cases and client relationships</li>
                <li>• Professional reputation damage</li>
                <li>• Stress and sleepless nights</li>
                <li>• Emergency filing fees and rush work</li>
              </ul>
            </Card>

            <Card className="p-8 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Check className="text-green-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">
                  DueLex Protection
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• Never miss another critical deadline</li>
                <li>• Peace of mind with automated reminders</li>
                <li>• Professional reliability and client trust</li>
                <li>• Simple email-based management</li>
                <li>• Less than $0.30 per day</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Billing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How does the free trial work?",
                answer: "Start your 1-month free trial immediately with full access to all DueLex features. After the trial period ends, you can choose to continue for $9/month or cancel with no charges."
              },
              {
                question: "What happens when my trial ends?",
                answer: "We'll email you a few days before your 1-month trial expires. If you don't cancel, your subscription will automatically continue at $9/month. You can cancel anytime before then with no charges."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. Cancel your subscription at any time with no penalties or cancellation fees. Your service continues until the end of your current billing period."
              },
              {
                question: "Is there a long-term contract?",
                answer: "No contracts ever. DueLex is month-to-month billing, so you're never locked in and can cancel whenever you need to."
              },
              {
                question: "What if I don't like DueLex during the trial?",
                answer: "Simply cancel before your 1-month trial ends and you won't be charged anything. No questions asked, no hassles."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Never Miss Another Deadline?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial today and experience peace of mind.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start 1-Month Free Trial
            </Button>
          </Link>
          <p className="text-blue-200 mt-4">1 month free trial - continue having an assistant for only $9 a month later</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
