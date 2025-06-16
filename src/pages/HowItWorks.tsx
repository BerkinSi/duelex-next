
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, User, Bell, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Sign Up",
      description: "Create your free DueLex account in seconds. We'll provide you with a unique email address to send your deadline requests to."
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
      description: "Never miss a critical deadline again. Update, cancel, or modify deadlines just by sending another email."
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
          <p className="text-xl text-gray-600 leading-relaxed">
            Managing legal deadlines has never been easier. Here's how our AI-powered assistant keeps you organized in just 4 simple steps.
          </p>
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

      <Footer />
    </div>
  );
};

export default HowItWorks;
