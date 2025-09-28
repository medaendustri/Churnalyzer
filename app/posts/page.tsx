export const metadata = {
  title: "All Case Studies | Churnalyzer",
  description:
    "Browse all business failure case studies - learn from corporate collapses, startup failures, and strategic missteps.",
  keywords: [
    "case studies",
    "business failure",
    "corporate collapse",
    "startup",
    "churnalyzer",
  ],
  openGraph: {
    title: "All Case Studies | Churnalyzer",
    description:
      "Browse all business failure case studies - learn from corporate collapses, startup failures, and strategic missteps.",
    url: "https://churnalyzer.com/posts",
    siteName: "Churnalyzer",
    images: [
      {
        url: "https://churnalyzer.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "All Case Studies Churnalyzer",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Case Studies | Churnalyzer",
    description: "Browse all business failure case studies.",
    site: "@churnalyzer",
    images: ["https://churnalyzer.com/og-image.png"],
  },
};
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PostsResponse } from "@/lib/types";

async function getPosts(page = 1): Promise<PostsResponse | null> {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/posts?page=${page}&limit=12`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) throw new Error("Failed to fetch posts");
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number.parseInt(searchParams.page || "1");
  const data = await getPosts(page);

  if (!data) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Unable to load case studies
          </h1>
          <p className="mt-2 text-slate-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  const { posts, pagination } = data;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          All Case Studies
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Comprehensive analysis of business failures across industries. Learn
          from the mistakes of others to build stronger, more resilient
          companies.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <Badge variant="outline" className="border-red-200 text-red-700">
            {pagination.total} case studies
          </Badge>
          <Link
            href="/categories"
            className="text-sm text-slate-600 hover:text-slate-900 underline underline-offset-4"
          >
            Browse by category
          </Link>
        </div>
      </div>

      {/* Posts Grid */}
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
              <Link href={`/posts?page=${pagination.page - 1}`}>
                ← Previous
              </Link>
            </Button>
          )}

          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(5, pagination.pages) }, (_, i) => {
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
                  <Link href={`/posts?page=${pageNum}`}>{pageNum}</Link>
                </Button>
              );
            })}
          </div>

          {pagination.page < pagination.pages && (
            <Button asChild variant="outline">
              <Link href={`/posts?page=${pagination.page + 1}`}>Next →</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
