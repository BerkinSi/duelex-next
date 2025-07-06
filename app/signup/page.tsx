import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SignupTrialButton from "@/components/SignupTrialButton";
import { CheckCircle, Mail, CreditCard } from "lucide-react";
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="w-full max-w-md mx-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                Start Your Free Trial
              </CardTitle>
              <p className="text-gray-600">
                Join legal professionals who never miss deadlines
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">1 Month Free</div>
                <div className="text-lg text-gray-600 mb-1">Then $9/month</div>
                <div className="text-sm text-gray-500">Cancel anytime • No setup fees</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Unlimited deadline management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Daily email reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Email-based deadline creation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Priority support</span>
                </div>
              </div>

              <SignupTrialButton />

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <CreditCard className="text-blue-600 mt-0.5" size={20} />
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      How it works:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Start your free 1-month trial immediately</li>
                      <li>• Continue having an assistant for only $9/month later</li>
                      <li>• We'll notify you before your trial ends</li>
                      <li>• Cancel anytime with no penalties</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By starting your trial, you agree to our{" "}
                <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
