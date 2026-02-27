import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TubePlanner Privacy Policy - How we collect, use, and protect your data",
};

export default function PrivacyPolicyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-sm text-gray-500 mb-8">Last updated: February 20, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to TubePlanner ("we," "our," or "us"). We are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you use our YouTube video 
              scheduling and management platform.
            </p>
            <p>
              By using TubePlanner, you agree to the collection and use of information in accordance 
              with this policy. If you do not agree with our policies and practices, please do not use 
              our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> When you sign in with Google, we receive your name, email address, and profile picture.</li>
              <li><strong>YouTube Channel Data:</strong> With your permission, we access your YouTube channel information including channel name, subscriber count, video statistics, and analytics data.</li>
              <li><strong>Video Content:</strong> When you use our upload feature, we temporarily process your video files to upload them to YouTube on your behalf.</li>
              <li><strong>Video Metadata:</strong> Titles, descriptions, tags, thumbnails, and scheduling preferences you create using our service.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Data:</strong> How you interact with our service, features you use, and time spent on the platform.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device identifiers.</li>
              <li><strong>Log Data:</strong> IP address, access times, and pages viewed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our YouTube video scheduling services</li>
              <li>Upload videos and manage content on your YouTube channel on your behalf</li>
              <li>Display your YouTube channel analytics and performance metrics</li>
              <li>Generate AI-powered video titles, descriptions, and tags using Google Gemini</li>
              <li>Schedule video uploads at your specified times</li>
              <li>Send you service-related notifications and updates</li>
              <li>Respond to your comments, questions, and support requests</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. YouTube API Services</h2>
            <p>
              TubePlanner uses YouTube API Services. By using our service, you are also agreeing to be 
              bound by the <a href="https://www.youtube.com/t/terms" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube Terms of Service</a>.
            </p>
            <p>We access the following YouTube data with your explicit permission:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>YouTube Account:</strong> To identify your channel and manage videos</li>
              <li><strong>YouTube Upload:</strong> To upload videos on your behalf</li>
              <li><strong>YouTube Analytics:</strong> To display channel performance metrics</li>
              <li><strong>YouTube Force-SSL:</strong> To manage video settings securely</li>
            </ul>
            <p className="mt-4">
              You can revoke TubePlanner's access to your YouTube account at any time through your 
              <a href="https://myaccount.google.com/permissions" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer"> Google Account Permissions</a> page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Storage and Security</h2>
            <p>We implement industry-standard security measures to protect your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption:</strong> All data is encrypted in transit (TLS/SSL) and at rest (AES-256)</li>
              <li><strong>OAuth Tokens:</strong> Your YouTube access tokens are encrypted before storage</li>
              <li><strong>Video Files:</strong> Uploaded videos are temporarily stored only during the upload process and immediately deleted after successful upload to YouTube</li>
              <li><strong>Secure Infrastructure:</strong> We use industry-leading cloud providers with SOC 2 compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information. We may share your data only in these circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With YouTube/Google:</strong> To perform requested actions like uploading videos</li>
              <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our service (hosting, analytics), bound by confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Data:</strong> Retained while your account is active, deleted within 30 days of account deletion</li>
              <li><strong>Video Files:</strong> Deleted immediately after successful upload to YouTube</li>
              <li><strong>Analytics Data:</strong> Retained for up to 2 years for historical reporting</li>
              <li><strong>OAuth Tokens:</strong> Retained until you disconnect your YouTube account or revoke access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Revoke Access:</strong> Disconnect your YouTube account at any time</li>
              <li><strong>Data Portability:</strong> Export your data in a machine-readable format</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@tubeplanner.app" className="text-red-600 hover:underline">privacy@tubeplanner.app</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p>
              TubePlanner is not intended for users under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe 
              your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your data in accordance with 
              this Privacy Policy and applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date. 
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:privacy@tubeplanner.app" className="text-red-600 hover:underline">privacy@tubeplanner.app</a></li>
              <li><strong>Support:</strong> <a href="mailto:support@tubeplanner.app" className="text-red-600 hover:underline">support@tubeplanner.app</a></li>
              <li><strong>Website:</strong> <a href="https://tubeplanner.vercel.app/contact" className="text-red-600 hover:underline">https://tubeplanner.vercel.app/contact</a></li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Google API Services User Data Policy</h2>
            <p>
              TubePlanner's use and transfer of information received from Google APIs adheres to the 
              <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer"> Google API Services User Data Policy</a>, 
              including the Limited Use requirements.
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
