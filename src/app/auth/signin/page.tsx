// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Sign In Page
// ═══════════════════════════════════════════════════════════════════════════════

import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to TubePlanner with your Google account",
};

// YouTube icon component
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

// Google icon component
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;
  
  // If already signed in, redirect to callback URL or dashboard
  if (session?.user) {
    redirect(params.callbackUrl || "/video-scheduler");
  }
  
  const errorMessages: Record<string, string> = {
    OAuthSignin: "Error starting the sign-in process. Please try again.",
    OAuthCallback: "Error during sign-in callback. Please try again.",
    OAuthCreateAccount: "Could not create account. Please try again.",
    EmailCreateAccount: "Could not create account. Please try again.",
    Callback: "Error during callback. Please try again.",
    OAuthAccountNotLinked: "This email is already linked to another account.",
    default: "An error occurred. Please try again.",
  };
  
  const error = params.error ? (errorMessages[params.error] || errorMessages.default) : null;
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <YouTubeIcon className="h-10 w-10 text-[#FF0000]" />
            <span className="text-3xl font-bold bg-gradient-to-r from-[#FF0000] to-orange-500 bg-clip-text text-transparent">
              TubePlanner
            </span>
          </div>
          <p className="text-muted-foreground">
            AI-powered YouTube video scheduler
          </p>
        </div>
        
        {/* Sign In Card */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
              Sign in with your Google account to access your YouTube channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Error message */}
            {error && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                {error}
              </div>
            )}
            
            {/* Google Sign In */}
            <form
              action={async () => {
                "use server";
                await signIn("google", {
                  redirectTo: params.callbackUrl || "/video-scheduler",
                });
              }}
            >
              <Button
                type="submit"
                variant="outline"
                className="w-full h-12 text-base gap-3"
              >
                <GoogleIcon className="h-5 w-5" />
                Continue with Google
              </Button>
            </form>
            
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  YouTube access required
                </span>
              </div>
            </div>
            
            {/* Info */}
            <div className="text-center text-sm text-muted-foreground space-y-2">
              <p>
                We&apos;ll request access to manage your YouTube channel, including:
              </p>
              <ul className="text-left list-disc list-inside space-y-1 text-xs">
                <li>Upload and schedule videos</li>
                <li>View channel analytics</li>
                <li>Manage video metadata</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <a href="/terms" className="underline hover:text-foreground">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-foreground">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
