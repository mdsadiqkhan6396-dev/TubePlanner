import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hashtag",
    description:
        "Find trending and relevant hashtags for your YouTube videos. Search by keyword, category, and time period.",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
    openGraph: {
        title: "Hashtag",
        description:
            "Find trending and relevant hashtags for your YouTube videos.",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
