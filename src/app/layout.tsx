// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Root Layout
// ═══════════════════════════════════════════════════════════════════════════════

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

// ─────────────────────────────────────────────────────────────────────────────────
// Fonts
// ─────────────────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// ─────────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "TubePlanner - AI-Powered YouTube Scheduler",
    template: "%s | TubePlanner",
  },
  description:
    "Schedule and upload videos to YouTube with AI-powered optimization. Generate titles, descriptions, and tags with Gemini AI.",
  keywords: [
    "YouTube",
    "video scheduler",
    "YouTube upload",
    "AI video",
    "content planning",
    "video marketing",
    "YouTube analytics",
  ],
  authors: [{ name: "TubePlanner" }],
  creator: "TubePlanner",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TubePlanner",
    title: "TubePlanner - AI-Powered YouTube Scheduler",
    description:
      "Schedule and upload videos to YouTube with AI-powered optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TubePlanner - AI-Powered YouTube Scheduler",
    description:
      "Schedule and upload videos to YouTube with AI-powered optimization.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
  verification: {
    google: "WTYZw0JXc-IlMaos-SeYdvVBCVoAIiAthm1-y8tJvAo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Security meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background`}
      >
        {/* Main content */}
        {children}
        
        {/* Toast notifications */}
        <Toaster
          position="top-right"
          expand={false}
          richColors
          closeButton
          theme="system"
        />
      </body>
    </html>
  );
}
