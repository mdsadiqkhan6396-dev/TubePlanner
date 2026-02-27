import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TubePlanner - Support, feedback, and inquiries",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="TubePlanner" className="h-8 w-8" />
            <span className="font-bold text-xl text-gray-900">TubePlanner</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-12">
          We're here to help! Reach out to us with any questions, feedback, or concerns.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </h2>
              <p className="text-gray-600 mb-4">
                For general inquiries and support, email us at:
              </p>
              <a 
                href="mailto:support@tubeplanner.app" 
                className="text-red-600 hover:underline font-medium text-lg"
              >
                support@tubeplanner.app
              </a>
              <p className="text-sm text-gray-500 mt-2">
                We typically respond within 24-48 hours
              </p>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Privacy & Legal
              </h2>
              <p className="text-gray-600 mb-4">
                For privacy-related requests, data deletion, or legal inquiries:
              </p>
              <a 
                href="mailto:privacy@tubeplanner.app" 
                className="text-red-600 hover:underline font-medium text-lg"
              >
                privacy@tubeplanner.app
              </a>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Report Issues
              </h2>
              <p className="text-gray-600 mb-4">
                Found a bug or have a feature request? Let us know:
              </p>
              <a 
                href="mailto:bugs@tubeplanner.app" 
                className="text-red-600 hover:underline font-medium text-lg"
              >
                bugs@tubeplanner.app
              </a>
            </section>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">How do I revoke TubePlanner's access to my YouTube account?</h3>
                <p className="text-gray-600 text-sm">
                  Visit <a href="https://myaccount.google.com/permissions" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Security Settings</a>, 
                  find TubePlanner in the list of connected apps, and click "Remove Access".
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">How do I delete my data?</h3>
                <p className="text-gray-600 text-sm">
                  Email <a href="mailto:privacy@tubeplanner.app" className="text-red-600 hover:underline">privacy@tubeplanner.app</a> with 
                  the subject line "Data Deletion Request" and we'll process your request within 30 days.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Is my YouTube channel data secure?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! We use industry-standard encryption (AES-256) to protect your data. 
                  Read our <Link href="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link> for complete details.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">What YouTube permissions does TubePlanner need?</h3>
                <p className="text-gray-600 text-sm">
                  We request permissions to upload videos, manage your channel, and view analytics. 
                  These are required for our core features to function properly.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Can I use TubePlanner with multiple YouTube channels?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! TubePlanner supports multi-channel management. You can connect and manage 
                  multiple YouTube channels from a single account.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">How does the AI title/description generator work?</h3>
                <p className="text-gray-600 text-sm">
                  We use Google Gemini AI to analyze your video content and generate optimized 
                  titles, descriptions, and tags. All suggestions can be edited before publishing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <section className="mt-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="mb-6 text-red-100">
            Check out our documentation and resources for more information about using TubePlanner.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/privacy" 
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors"
            >
              Terms of Service
            </Link>
            <a 
              href="https://www.youtube.com/t/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              YouTube Terms
            </a>
          </div>
        </section>

        {/* Response Time Info */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">24-48h</div>
              <p className="text-gray-600">Average Response Time</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-600">Privacy Focused</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <p className="text-gray-600">Service Availability</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2026 TubePlanner. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
