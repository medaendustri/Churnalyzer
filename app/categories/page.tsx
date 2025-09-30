export const dynamic = "force-dynamic";
export const metadata = {
  title: "Categories | Churnalyzer",
  description:
    "Browse categories of business failures and case studies. Learn from tech, startup, product, and platform collapses.",
  keywords: [
    "categories",
    "business failure",
    "case study",
    "churnalyzer",
    "tech",
    "startup",
    "product",
    "platform",
  ],
  openGraph: {
    title: "Categories | Churnalyzer",
    description:
      "Browse categories of business failures and case studies. Learn from tech, startup, product, and platform collapses.",
    url: "https://churnalyzer.com/categories",
    siteName: "Churnalyzer",
    images: [
      {
        url: "https://churnalyzer.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Categories Churnalyzer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Categories | Churnalyzer",
    description: "Browse categories of business failures and case studies.",
    site: "@churnalyzer",
    images: ["https://churnalyzer.com/og-image.png"],
  },
};
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { CategoriesResponse } from "@/lib/types";

async function getCategories(): Promise<CategoriesResponse | null> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://churnalyzer.com";
    const response = await fetch(`${baseUrl}/api/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
}

export default async function CategoriesPage() {
  const data = await getCategories();
  const categories = data?.categories || [];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Browse by Category
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Explore business failures organized by industry and company type to
          find the most relevant lessons for your situation.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 text-2xl">
                  {getCategoryIcon(category.slug)}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {getCategoryDescription(category.slug)}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="border-slate-300 text-slate-600"
                >
                  {category._count?.posts || 0} case studies
                </Badge>
                <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Categories */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Most Popular Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories
            .sort((a, b) => (b._count?.posts || 0) - (a._count?.posts || 0))
            .slice(0, 2)
            .map((category) => (
              <div
                key={category.id}
                className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-slate-900"></div>
                <div className="relative">
                  <div className="mb-4 text-4xl">
                    {getCategoryIcon(category.slug)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-slate-300 mb-4">
                    {getCategoryDescription(category.slug)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                      {category._count?.posts || 0} case studies
                    </span>
                    <Link
                      href={`/categories/${category.slug}`}
                      className="inline-flex items-center text-sm font-medium text-white hover:text-red-300 transition-colors"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function getCategoryIcon(slug: string): string {
  const icons: Record<string, string> = {
    "tech-companies": "💻",
    startups: "🚀",
    products: "📱",
    platforms: "🌐",
  };
  return icons[slug] || "📊";
}

function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    "tech-companies": "Major technology corporations that lost their way",
    startups: "Promising startups that couldn't scale or pivot",
    products: "Revolutionary products that failed to find market fit",
    platforms: "Digital platforms that couldn't sustain their ecosystems",
  };
  return descriptions[slug] || "Business failures and strategic missteps";
}
