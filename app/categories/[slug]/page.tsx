import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { CategoryPostsResponse } from "@/lib/types";

async function getCategoryPosts(
  slug: string,
  page = 1
): Promise<CategoryPostsResponse | null> {
  try {
    // Next.js app router'da server component'ta çalıştığı için window yok
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://churnalyzer.com";
    const response = await fetch(
      `${baseUrl}/api/categories/${slug}?page=${page}&limit=12`
    );
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Error fetching category posts:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getCategoryPosts(params.slug);
  if (!data) return { title: "Category Not Found" };

  const { category } = data;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://churnalyzer.com";
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(
    category.name + " Case Studies"
  )}&category=${encodeURIComponent(category.name)}&date=${encodeURIComponent(
    new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })
  )}`;
  return {
    title: `${category.name} Case Studies | Churnalyzer`,
    description: `Explore business failures in ${category.name.toLowerCase()} - learn from strategic missteps and corporate collapses.`,
    openGraph: {
      title: `${category.name} Case Studies`,
      description: `Explore business failures in ${category.name.toLowerCase()} - learn from strategic missteps and corporate collapses.`,
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Case Studies`,
      description: `Explore business failures in ${category.name.toLowerCase()} - learn from strategic missteps and corporate collapses.`,
      images: [ogImageUrl],
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page?: string };
}) {
  const page = Number.parseInt(searchParams.page || "1");
  const data = await getCategoryPosts(params.slug, page);

  if (!data) {
    notFound();
  }

  const { category, posts, pagination } = data;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Category Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/categories"
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Categories
          </Link>
          <span className="text-slate-300">→</span>
          <span className="text-sm font-medium text-slate-900">
            {category.name}
          </span>
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              {getCategoryDescription(category.slug)} Discover what went wrong
              and how to avoid similar pitfalls.
            </p>
          </div>
          <div className="hidden sm:block">
            <div className="text-6xl opacity-20">
              {getCategoryIcon(category.slug)}
            </div>
          </div>
        </div>

        {/* Category Stats */}
        <div className="mt-8 flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-red-200 text-red-700">
              {pagination.total} case studies
            </Badge>
          </div>
          <div className="text-sm text-slate-500">
            Page {pagination.page} of {pagination.pages}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <Image
                    className="aspect-[16/9] w-full rounded-2xl bg-slate-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    src={
                      post.imageUrl ||
                      "/placeholder.svg?height=400&width=600&query=business failure case study"
                    }
                    alt={post.title}
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={post.createdAt.toString()}
                      className="text-slate-500"
                    >
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Badge
                      variant="outline"
                      className="border-red-200 text-red-700"
                    >
                      {post.category.name}
                    </Badge>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                      <Link href={`/posts/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              {pagination.page > 1 && (
                <Button asChild variant="outline">
                  <Link
                    href={`/categories/${category.slug}?page=${
                      pagination.page - 1
                    }`}
                  >
                    ← Previous
                  </Link>
                </Button>
              )}

              <div className="flex items-center gap-2">
                {Array.from(
                  { length: Math.min(5, pagination.pages) },
                  (_, i) => {
                    const pageNum = i + 1;
                    const isActive = pageNum === pagination.page;
                    return (
                      <Button
                        key={pageNum}
                        asChild
                        variant={isActive ? "default" : "outline"}
                        size="sm"
                        className={isActive ? "bg-slate-900" : ""}
                      >
                        <Link
                          href={`/categories/${category.slug}?page=${pageNum}`}
                        >
                          {pageNum}
                        </Link>
                      </Button>
                    );
                  }
                )}
              </div>

              {pagination.page < pagination.pages && (
                <Button asChild variant="outline">
                  <Link
                    href={`/categories/${category.slug}?page=${
                      pagination.page + 1
                    }`}
                  >
                    Next →
                  </Link>
                </Button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4 opacity-20">
            {getCategoryIcon(category.slug)}
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            No case studies yet
          </h3>
          <p className="text-slate-600 mb-6">
            We're working on adding more content to this category.
          </p>
          <Button asChild variant="outline">
            <Link href="/categories">Browse Other Categories</Link>
          </Button>
        </div>
      )}

      {/* Related Categories */}
      <div className="mt-24 border-t border-slate-200 pt-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Explore Other Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {getRelatedCategories(category.slug).map((relatedCategory) => (
            <Link
              key={relatedCategory.slug}
              href={`/categories/${relatedCategory.slug}`}
              className="group flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-all"
            >
              <div className="text-2xl">
                {getCategoryIcon(relatedCategory.slug)}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-red-600">
                  {relatedCategory.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {relatedCategory.count} case studies
                </p>
              </div>
            </Link>
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
    "tech-companies":
      "Major technology corporations that dominated their markets before spectacular collapses.",
    startups:
      "Promising startups with innovative ideas that couldn't execute or scale effectively.",
    products:
      "Revolutionary products that seemed destined for success but failed to find sustainable market fit.",
    platforms:
      "Digital platforms that built massive user bases but couldn't maintain their ecosystems.",
  };
  return (
    descriptions[slug] ||
    "Business failures and strategic missteps in this category."
  );
}

function getRelatedCategories(currentSlug: string) {
  const allCategories = [
    { slug: "tech-companies", name: "Tech Companies", count: 15 },
    { slug: "startups", name: "Startups", count: 23 },
    { slug: "products", name: "Products", count: 18 },
    { slug: "platforms", name: "Platforms", count: 12 },
  ];

  return allCategories.filter((cat) => cat.slug !== currentSlug).slice(0, 3);
}
