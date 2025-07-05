
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Clock, Shield, CheckCircle, Calendar } from "lucide-react";
import Link from "next/link";


const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Manage Legal Deadlines <span className="text-blue-600">via Email</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                DueLex is your AI-powered legal deadline assistant. Simply send an email 
                like "Add a deadline for the Smith case on July 10" and we'll handle the rest.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400 mb-8">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="text-green-600" size={20} />
                  <span className="font-semibold text-gray-900">1-Month Free Trial</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Full access • Credit card required • Then $9/month
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">                
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    <Link href="/signup">
                    Start Free Trial
                    </Link>
                  </Button>                
                <Link href="/how-it-works">
                  <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Email Demo Visual */}
            <div className="relative">
              <Card className="shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-500">To: assistant@duelex.com</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800">
                      "Add a deadline for the Johnson v. Smith discovery on March 15, 2024"
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle size={16} />
                    <span className="text-sm">Deadline added successfully!</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Legal Professionals Choose DueLex
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplify your deadline management with our intelligent email-based system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email-First Design</h3>
              <p className="text-gray-600">
                No new apps to learn. Just send emails in plain English and we'll understand your deadlines.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Reminders</h3>
              <p className="text-gray-600">
                Get daily morning emails with your upcoming deadlines, formatted for easy scanning.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built for legal professionals with enterprise-grade security and 99.9% uptime.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Conversation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See DueLex in Action
            </h2>
            <p className="text-xl text-gray-600">
              Here's how simple it is to manage your deadlines
            </p>
          </div>

          <div className="space-y-6">
            {/* User Email */}
            <Card className="ml-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">You</span>
                  </div>
                  <span className="text-sm text-gray-500">To: assistant@duelex.com</span>
                </div>
                <p className="text-gray-800">
                  "Add a deadline for the Patterson case motion to dismiss, due February 20th"
                </p>
              </CardContent>
            </Card>

            {/* DueLex Response */}
            <Card className="mr-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">DL</span>
                  </div>
                  <span className="text-sm text-gray-500">From: assistant@duelex.com</span>
                </div>
                <p className="text-gray-800 mb-3">
                  Perfect! I've added your deadline:
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="font-semibold">Patterson Case - Motion to Dismiss</p>
                  <p className="text-gray-600">Due: February 20, 2024</p>
                  <p className="text-sm text-gray-500 mt-2">
                    You'll receive reminders starting 7 days before the deadline.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk vs Solution */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Cost of Missing Just One Deadline
            </h2>
            <p className="text-xl text-gray-600">
              Can be thousands of dollars in damages, lost clients, and reputation harm
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6">Without DueLex:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Manual calendar management prone to errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Risk of missing critical filing deadlines</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Potential malpractice claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Lost client trust and referrals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">With DueLex:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Automated deadline tracking via email</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Multiple reminders ensure you never miss</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Peace of mind for less than $0.30/day</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Enhanced professional reputation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Never Miss a Deadline Again?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your free 1-month trial today.
          </p>          
            <Button asChild  size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Link href="/signup">
              Start Free Trial Now
              </Link>
            </Button>          
          <p className="text-blue-200 mt-4">Free for 1 month • Then $9/month • Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
