import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Scheduler",
    description:
        "Upload and schedule videos directly to your YouTube channel. Manage drafts, bulk upload, and optimize with AI-powered suggestions.",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
    openGraph: {
        title: "Video Scheduler",
        description:
            "Upload and schedule videos directly to your YouTube channel. Manage drafts, bulk upload, and optimize with AI-powered suggestions.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
