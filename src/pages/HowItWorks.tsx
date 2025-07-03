
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, User, Bell, CheckCircle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Start Free Trial",
      description: "Click to begin your 1-month free trial. Credit card required but no charges for 30 days - you'll get immediate access to all DueLex features and your unique email address."
    },
    {
      icon: Mail,
      title: "Send Email Instructions",
      description: "Email us your deadlines in plain English. Try \"Add deadline for Johnson case discovery on March 15\" or \"Remind me about the Smith deposition next Friday.\""
    },
    {
      icon: Bell,
      title: "Get Smart Reminders",
      description: "Receive daily morning emails with your upcoming deadlines. We'll remind you 7 days, 3 days, and 1 day before each deadline."
    },
    {
      icon: CheckCircle,
      title: "Stay Organized",
      description: "Never miss a critical deadline again. Update, cancel, or modify deadlines just by sending another email. Continue for $9/month after your trial."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            How DueLex Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Managing legal deadlines has never been easier. Here's how our AI-powered assistant keeps you organized in just 4 simple steps.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400 max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <CreditCard className="text-green-600" size={20} />
              <span className="font-semibold text-gray-900">1-Month Free Trial</span>
            </div>
            <p className="text-gray-600 text-sm">
              Try everything free • Credit card required but no charges for 30 days
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Example Commands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Example Commands
            </h2>
            <p className="text-xl text-gray-600">
              DueLex understands natural language. Here are some examples of how you can interact with it:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Add a deadline for Smith case motion due March 15",
              "Remind me about Johnson deposition next Friday",
              "Discovery deadline for Peterson case in 30 days",
              "Cancel the deadline for Williams case",
              "Move the Davis case deadline to next Tuesday",
              "Add brief filing deadline for Thompson case on April 3rd"
            ].map((command, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-500">To: assistant@duelex.com</span>
                  </div>
                  <p className="text-gray-800 bg-gray-50 p-3 rounded-lg">
                    "{command}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Benefits */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Get During Your Free Trial
            </h2>
            <p className="text-xl text-gray-600">
              Full access to all features for 1 month
            </p>
          </div>

          <Card className="p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">✨ Complete Access</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Unlimited deadline management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Daily email reminders
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Natural language processing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Priority email support
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">🔒 Trial Terms</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Credit card required to start
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      No charges for first 30 days
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Cancel anytime during trial
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={16} />
                      Continue for just $9/month
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience DueLex?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free trial now and see how easy deadline management can be.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start 1-Month Free Trial
            </Button>
          </Link>
          <p className="text-blue-200 mt-4">Credit card required • Full access • $9/month after trial</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
