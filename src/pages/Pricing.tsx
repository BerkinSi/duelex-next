
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, CreditCard, Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const features = [
    "Unlimited deadlines",
    "Daily email reminders",
    "Priority email support",
    "Advanced deadline management",
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
            Try DueLex free for 14 days, then continue for just $9/month. 
            No credit card required to start.
          </p>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-gray-900 mb-2">$9</div>
              <div className="text-xl text-gray-600">per month after trial</div>
              <div className="text-sm text-gray-500 mt-2">14-day free trial • No setup fees</div>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/signup">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
                Start Your Free Trial
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-3 text-center">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our Pricing Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple and straightforward - exactly how legal professionals like it
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Start Free Trial</h3>
              <p className="text-gray-600">
                Sign up with just your email and start using DueLex immediately. 
                Full access to all features for 14 days.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Use DueLex</h3>
              <p className="text-gray-600">
                Manage unlimited deadlines via email during your trial. 
                Experience how DueLex can transform your practice.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Continue for $9/month</h3>
              <p className="text-gray-600">
                After your trial, we'll ask for payment details. 
                Continue seamlessly or cancel anytime with no fees.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need to provide a credit card for the free trial?",
                answer: "No! Just sign up with your email and start using DueLex immediately. We'll only ask for payment details when your 14-day trial is about to end."
              },
              {
                question: "What happens after my free trial ends?",
                answer: "We'll send you an email a few days before your trial ends. If you want to continue, simply add your payment details and you'll be charged $9/month. If not, your account will be paused with no charges."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. Cancel your subscription at any time with no cancellation fees. Your service will continue until the end of your current billing period."
              },
              {
                question: "Is there a discount for annual billing?",
                answer: "Yes! Pay annually and save 20% on the monthly rate. That's just $86.40 per year instead of $108."
              },
              {
                question: "What if I need to manage more than expected during my trial?",
                answer: "No worries! Your trial includes unlimited deadlines and full access to all features. There are no restrictions during your 14-day trial period."
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
            Ready to Transform Your Deadline Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join legal professionals who never miss deadlines with DueLex.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Your Free Trial
            </Button>
          </Link>
          <p className="text-blue-200 mt-4">14 days free • No credit card required • $9/month after trial</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
