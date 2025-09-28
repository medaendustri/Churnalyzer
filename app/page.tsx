export const metadata = {
  title: "Churnalyzer | Business Failure Case Studies",
  description:
    "Learn from the world's biggest business failures. Churnalyzer analyzes corporate and startup disasters to help you avoid common pitfalls.",
  keywords: [
    "business failure",
    "case study",
    "startup",
    "corporate",
    "churn",
    "analysis",
    "lessons learned",
  ],
  openGraph: {
    title: "Churnalyzer | Business Failure Case Studies",
    description:
      "Learn from the world's biggest business failures. Churnalyzer analyzes corporate and startup disasters to help you avoid common pitfalls.",
    url: "https://churnalyzer.com/",
    siteName: "Churnalyzer",
    images: [
      {
        url: "https://churnalyzer.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Churnalyzer - Business Failure Case Studies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Churnalyzer | Business Failure Case Studies",
    description: "Learn from the world's biggest business failures.",
    site: "@churnalyzer",
    images: ["https://churnalyzer.com/og-image.png"],
  },
};
import { HeroSection } from "@/components/hero-section";
import { FeaturedPost } from "@/components/featured-post";
import { LatestPostsGrid } from "@/components/latest-posts-grid";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { StatsSection } from "@/components/stats-section";
import { FailureTicker } from "@/components/failure-ticker";

async function getPosts() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://churnalyzer.com";
    const response = await fetch(`${baseUrl}/api/posts?limit=9`);
    if (!response.ok) {
      console.error(
        "API response not ok:",
        response.status,
        response.statusText
      );
      return {
        posts: [],
        pagination: { page: 1, limit: 9, total: 0, pages: 1 },
      };
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { posts: [], pagination: { page: 1, limit: 9, total: 0, pages: 1 } };
  }
}

export default async function HomePage() {
  const { posts } = await getPosts();
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1, 7);

  return (
    <main className="min-h-screen">
      <FailureTicker />
      <HeroSection />
      <StatsSection />
      {featuredPost && <FeaturedPost post={featuredPost} />}
      {latestPosts.length > 0 && <LatestPostsGrid posts={latestPosts} />}
      <NewsletterSignup />
    </main>
  );
}
