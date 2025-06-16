
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does DueLex know what I mean in my emails?",
          answer: "DueLex uses advanced AI to understand natural language. You can write emails like you would to a human assistant. Our system recognizes dates, case names, deadline types, and other legal terminology to create accurate reminders."
        },
        {
          question: "What email address do I send my deadlines to?",
          answer: "After signing up, you'll receive a unique email address like assistant-[yourname]@duelex.com. All your deadline requests should be sent to this address."
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
          answer: "By default, you'll get reminders 7 days, 3 days, and 1 day before each deadline. Pro users can customize these reminder schedules."
        }
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "Is my data secure?",
          answer: "Absolutely. We use enterprise-grade encryption and security measures. Your deadline information is stored securely and never shared with third parties."
        },
        {
          question: "Who can see my deadlines?",
          answer: "Only you can see your deadlines. Each user has a private, secure account. We don't share any information between users or with external parties."
        },
        {
          question: "What happens to my data if I cancel?",
          answer: "Your data is permanently deleted 30 days after cancellation. During those 30 days, you can reactivate your account and restore all your deadlines."
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
          question: "Can I integrate DueLex with my calendar?",
          answer: "Pro users can enable calendar integration to automatically add deadlines to Google Calendar, Outlook, or Apple Calendar."
        },
        {
          question: "What if DueLex is down?",
          answer: "We maintain 99.9% uptime with redundant systems. In the rare case of downtime, any emails sent during that time are processed as soon as service is restored."
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
          <p className="text-xl text-gray-600 leading-relaxed">
            Find answers to common questions about DueLex. Can't find what you're looking for? Contact our support team.
          </p>
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help you get the most out of DueLex.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Contact Support
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
