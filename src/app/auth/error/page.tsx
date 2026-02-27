// ═══════════════════════════════════════════════════════════════════════════════
// TubePlanner - Auth Error Page
// ═══════════════════════════════════════════════════════════════════════════════

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Authentication Error",
  description: "An error occurred during authentication",
};

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  
  const errorMessages: Record<string, { title: string; description: string }> = {
    Configuration: {
      title: "Server Configuration Error",
      description: "There is a problem with the server configuration. Please contact support.",
    },
    AccessDenied: {
      title: "Access Denied",
      description: "You do not have permission to sign in. Please ensure you grant the required permissions.",
    },
    Verification: {
      title: "Verification Error",
      description: "The verification link may have expired or already been used.",
    },
    OAuthSignin: {
      title: "Sign In Error",
      description: "Could not start the sign-in process. Please try again.",
    },
    OAuthCallback: {
      title: "Callback Error",
      description: "An error occurred during the authentication callback.",
    },
    OAuthCreateAccount: {
      title: "Account Creation Error",
      description: "Could not create your account. Please try again.",
    },
    OAuthAccountNotLinked: {
      title: "Account Not Linked",
      description: "This email is already associated with another account. Please sign in with the original provider.",
    },
    default: {
      title: "Authentication Error",
      description: "An unexpected error occurred during authentication.",
    },
  };
  
  const errorInfo = errorMessages[params.error || "default"] || errorMessages.default;
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted p-4">
      <Card className="w-full max-w-md border-destructive/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-6 w-6 text-destructive" />
          </div>
          <CardTitle className="text-xl text-destructive">{errorInfo.title}</CardTitle>
          <CardDescription>{errorInfo.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button asChild variant="default" className="w-full">
            <Link href="/auth/signin">Try Again</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Go Home</Link>
          </Button>
          
          {/* Debug info in development */}
          {process.env.NODE_ENV === "development" && params.error && (
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">
                Error code: <code className="font-mono">{params.error}</code>
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
