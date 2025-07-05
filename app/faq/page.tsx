
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link"

const FAQ = () => {
  const faqs = [
    {
      category: "Free Trial & Billing",
      questions: [
        {
          question: "How does the free trial work?",
          answer: "Start your 1-month free trial immediately with full access to all DueLex features. Credit card is required to prevent abuse, but you won't be charged anything for the first 30 days. Before your trial ends, you can choose to continue for $9/month or cancel with no charges."
        },
        {
          question: "Do I need a credit card to start my free trial?",
          answer: "Yes, we require a credit card to start your trial to prevent abuse and ensure a smooth experience. However, you won't be charged anything during your first month. If you cancel before the trial ends, you won't be charged at all."
        },
        {
          question: "What happens when my free trial ends?",
          answer: "A few days before your 1-month trial expires, we'll email you with a reminder. If you don't cancel, your subscription will automatically continue at $9/month. You can cancel anytime before then to avoid any charges."
        },
        {
          question: "Can I cancel anytime?",
          answer: "Absolutely! You can cancel your subscription at any time with no penalties or cancellation fees. Your service continues until the end of your current billing period."
        },
        {
          question: "Is there a long-term contract?",
          answer: "No contracts ever. DueLex uses simple month-to-month billing, so you're never locked in and can cancel whenever you need to."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does DueLex know what I mean in my emails?",
          answer: "DueLex uses advanced AI to understand natural language. You can write emails like you would to a human assistant. Our system recognizes dates, case names, deadline types, and other legal terminology to create accurate reminders."
        },
        {
          question: "What email address do I send my deadlines to?",
          answer: "After starting your trial, you'll receive a unique email address like assistant-[yourname]@duelex.com. All your deadline requests should be sent to this address."
        },
        {
          question: "How quickly does DueLex respond to my emails?",
          answer: "DueLex typically processes and responds to your emails within 30 seconds. You'll receive a confirmation email showing exactly how we understood your deadline request."
        }
      ]
    },
    {
      category: "Managing Deadlines",
      questions: [
        {
          question: "Can I cancel or modify a deadline?",
          answer: "Yes! Simply send another email like 'Cancel the Smith case deadline' or 'Move the Johnson deadline to March 20th'. DueLex will update your deadlines and send a confirmation."
        },
        {
          question: "What if I make a mistake in my deadline request?",
          answer: "No problem! DueLex will show you exactly how it interpreted your request in the confirmation email. If something looks wrong, just send a correction email and we'll fix it immediately."
        },
        {
          question: "Can I see all my upcoming deadlines?",
          answer: "Yes! You'll receive a daily morning email with all your upcoming deadlines for the next 30 days, organized by date and priority."
        },
        {
          question: "How far in advance will DueLex remind me?",
          answer: "By default, you'll get reminders 7 days, 3 days, and 1 day before each deadline. This ensures you never miss anything important."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "Is my data secure?",
          answer: "Absolutely. We use enterprise-grade encryption and security measures designed specifically for legal professionals. Your deadline information is stored securely and never shared with third parties."
        },
        {
          question: "Who can see my deadlines?",
          answer: "Only you can see your deadlines. Each user has a private, secure account. We don't share any information between users or with external parties."
        },
        {
          question: "What happens to my data if I cancel?",
          answer: "Your data is securely stored for 30 days after cancellation in case you want to reactivate. After 30 days, all your data is permanently deleted from our systems."
        }
      ]
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "What email providers work with DueLex?",
          answer: "DueLex works with all email providers including Gmail, Outlook, Apple Mail, and any other email client. As long as you can send emails, you can use DueLex."
        },
        {
          question: "What if DueLex is down?",
          answer: "We maintain 99.9% uptime with redundant systems. In the rare case of downtime, any emails sent during that time are processed as soon as service is restored."
        },
        {
          question: "Do you offer customer support?",
          answer: "Yes! All users get priority email support. We typically respond within a few hours during business days and are here to help you get the most out of DueLex."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Find answers to common questions about DueLex. Can't find what you're looking for? Contact our support team.
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400 max-w-md mx-auto">
            <p className="text-gray-800 font-medium">
              Still have questions? <Link href="/signup" className="text-blue-600 hover:underline">Start your free trial</Link> and experience DueLex risk-free.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Try DueLex free for 1 month and see how it transforms your deadline management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">          
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <Link href="/signup">
                Start Free Trial
                </Link>
              </Button>            
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Contact Support
            </Button>
          </div>
          <p className="text-blue-200 mt-4">1 month free • Credit card required • $9/month after trial</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
