import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "TubePlanner Terms of Service - Rules and guidelines for using our platform",
};

export default function TermsOfServicePage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: February 20, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using TubePlanner ("Service"), you agree to be bound by these Terms of 
              Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service. 
              By using the Service, you also agree to our <Link href="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p>TubePlanner is a platform that provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>YouTube video scheduling and upload management</li>
              <li>AI-powered video title, description, and tag generation</li>
              <li>YouTube channel analytics and performance tracking</li>
              <li>Multi-channel account management</li>
              <li>Video content optimization recommendations</li>
            </ul>
            <p className="mt-4">
              Our Service integrates with YouTube API Services to provide these features. You acknowledge 
              that you are also bound by the <a href="https://www.youtube.com/t/terms" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a> when using our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.1 Account Creation</h3>
            <p>
              To use TubePlanner, you must sign in with a valid Google account. You are responsible 
              for maintaining the confidentiality of your account and for all activities that occur 
              under your account.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.2 Account Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 13 years old to use this Service</li>
              <li>You must provide accurate and complete information</li>
              <li>You must have a valid YouTube channel to use video management features</li>
              <li>You must comply with YouTube's Community Guidelines and Terms of Service</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account at any time for violations 
              of these Terms or YouTube's policies, without prior notice or liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only upload content that you own or have the right to distribute</li>
              <li>Not upload content that violates copyright, trademark, or other intellectual property rights</li>
              <li>Not upload content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
              <li>Not use the Service to spam, mislead, or deceive viewers</li>
              <li>Not attempt to circumvent any security features of the Service</li>
              <li>Not use the Service in any way that could damage, disable, or impair the Service</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Content Ownership</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.1 Your Content</h3>
            <p>
              You retain all ownership rights to the videos and content you upload through TubePlanner. 
              By using our Service, you grant us a limited license to process, store temporarily, and 
              transfer your content solely for the purpose of uploading it to YouTube on your behalf.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.2 AI-Generated Content</h3>
            <p>
              Titles, descriptions, tags, and other content generated by our AI features are provided 
              as suggestions. You are responsible for reviewing and editing AI-generated content before 
              use. We do not claim ownership of AI-generated suggestions, but we also make no guarantees 
              about their accuracy, appropriateness, or effectiveness.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.3 Our Content</h3>
            <p>
              The Service, including its original content, features, and functionality, is owned by 
              TubePlanner and protected by international copyright, trademark, and other intellectual 
              property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. YouTube API Services</h2>
            <p>
              TubePlanner uses YouTube API Services to provide its functionality. By using our Service, 
              you acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are bound by the <a href="https://www.youtube.com/t/terms" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a></li>
              <li>You can revoke TubePlanner's access to your YouTube data at any time via <a href="https://myaccount.google.com/permissions" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Security Settings</a></li>
              <li>Our use of YouTube APIs complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Availability</h2>
            <p>
              We strive to provide reliable service, but we do not guarantee that the Service will be 
              available at all times. The Service may be subject to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scheduled maintenance and updates</li>
              <li>Unscheduled downtime due to technical issues</li>
              <li>Changes to features and functionality</li>
              <li>Temporary or permanent discontinuation</li>
            </ul>
            <p className="mt-4">
              We are not liable for any loss or damage resulting from service interruptions or changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, TUBEPLANNER SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Loss of profits, revenue, or data</li>
              <li>Failure to upload videos at scheduled times</li>
              <li>YouTube account suspension or termination</li>
              <li>Inaccurate AI-generated content</li>
              <li>Any damages arising from your use or inability to use the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service will meet your specific requirements</li>
              <li>The Service will be uninterrupted, timely, secure, or error-free</li>
              <li>AI-generated content will be accurate or suitable for your needs</li>
              <li>Videos will be uploaded successfully at all scheduled times</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless TubePlanner and its officers, directors, 
              employees, and agents from and against any claims, damages, losses, liabilities, and 
              expenses arising out of or related to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including YouTube's Terms of Service</li>
              <li>Content you upload through the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles. Any disputes arising from these Terms 
              or your use of the Service shall be resolved through appropriate legal channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is 
              material, we will provide at least 30 days' notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mt-4">
              By continuing to access or use our Service after revisions become effective, you agree 
              to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:legal@tubeplanner.app" className="text-red-600 hover:underline">legal@tubeplanner.app</a></li>
              <li><strong>Support:</strong> <a href="mailto:support@tubeplanner.app" className="text-red-600 hover:underline">support@tubeplanner.app</a></li>
              <li><strong>Website:</strong> <a href="https://tubeplanner.vercel.app/contact" className="text-red-600 hover:underline">https://tubeplanner.vercel.app/contact</a></li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acknowledgment</h2>
            <p>
              By using TubePlanner, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms of Service and our <Link href="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
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
