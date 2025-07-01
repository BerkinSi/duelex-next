
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Mail, Clock } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "for 14 days",
      description: "Try DueLex risk-free for 2 weeks",
      features: [
        "Unlimited deadlines",
        "Daily email reminders",
        "Email support",
        "Full deadline management"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "For busy legal professionals",
      features: [
        "Unlimited deadlines",
        "Daily email reminders",
        "Priority email support",
        "Advanced deadline management"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true
    }
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
          <p className="text-xl text-gray-600 leading-relaxed">
            Start with a 2-week free trial, then just $9/month. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <Card key={plan.name} className={`relative p-8 ${plan.popular ? 'border-blue-500 border-2 shadow-xl' : 'hover:shadow-lg'} transition-shadow`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      After Free Trial
                    </span>
                  </div>
                )}
                
                <CardContent className="p-0">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="text-green-600 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={plan.buttonVariant}
                    className={`w-full py-3 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                question: "What happens after my free trial ends?",
                answer: "After your 14-day free trial, you'll be automatically enrolled in our Pro plan at $9/month. You can cancel anytime during or after the trial with no fees."
              },
              {
                question: "Do I need to provide a credit card for the free trial?",
                answer: "No credit card required! Just sign up with your email and start using DueLex immediately. We'll only ask for payment details when your trial is about to end."
              },
              {
                question: "Is there a discount for annual billing?",
                answer: "Yes! Pay annually and save 20% on the Pro plan. That's just $86.40 per year instead of $108."
              },
              {
                question: "Can I cancel anytime?",
                answer: "Absolutely. Cancel your subscription at any time with no cancellation fees. Your service will continue until the end of your current billing period."
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

      <Footer />
    </div>
  );
};

export default Pricing;
