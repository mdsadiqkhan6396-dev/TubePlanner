// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Home Page
// ═══════════════════════════════════════════════════════════════════════════════

import Link from "next/link";
import { auth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Sparkles,
  Upload,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Check
} from "lucide-react";

// YouTube icon
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const features = [
  {
    icon: Upload,
    title: "Smart Upload",
    description: "Upload videos directly to YouTube with optimized settings",
  },
  {
    icon: Calendar,
    title: "Schedule Videos",
    description: "Plan your content calendar and schedule uploads in advance",
  },
  {
    icon: Sparkles,
    title: "AI-Powered SEO",
    description: "Generate titles, descriptions, and tags with Gemini AI",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Track performance with detailed channel analytics",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security with encrypted token storage",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Optimized for speed with Google Cloud infrastructure",
  },
];

const benefits = [
  "No credit card required",
  "Free tier available",
  "Connect multiple channels",
  "24/7 scheduling",
];

export default async function HomePage() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <YouTubeIcon className="h-8 w-8 text-[#FF0000]" />
            <span className="text-xl font-bold">TubePlanner</span>
          </div>
          <div className="flex items-center gap-4">
            {session?.user ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/hashtag">
                    Hashtag
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/video-scheduler">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/signin">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Powered by Gemini AI
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Schedule YouTube Videos with{" "}
            <span className="bg-gradient-to-r from-[#FF0000] to-orange-500 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}
            Optimization
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Upload, schedule, and optimize your YouTube content with AI-generated titles,
            descriptions, and tags. Grow your channel faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" variant="youtube" asChild>
              <Link href="/auth/signin">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Powerful features to help you manage and grow your YouTube channel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join thousands of creators using TubePlanner to grow their YouTube channels.
          </p>
          <Button size="xl" variant="youtube" asChild>
            <Link href="/auth/signin">
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* How We Use Your Data Section - Important for Google Verification */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              TubePlanner uses YouTube API Services. Here's how we handle your data responsibly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Encrypted Storage</h3>
              <p className="text-sm text-muted-foreground">
                All tokens and sensitive data are encrypted with AES-256 encryption
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Minimal Data Access</h3>
              <p className="text-sm text-muted-foreground">
                We only request permissions necessary for uploading and scheduling videos
              </p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">You're In Control</h3>
              <p className="text-sm text-muted-foreground">
                Revoke access anytime via{" "}
                <a href="https://myaccount.google.com/permissions" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Settings
                </a>
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              TubePlanner's use of Google APIs complies with the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <YouTubeIcon className="h-6 w-6 text-[#FF0000]" />
              <span className="font-semibold">TubePlanner</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TubePlanner. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
