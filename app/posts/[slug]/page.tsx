import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArticleBody } from "@/components/article-body";
import { InteractiveSection } from "@/components/interactive-section";
import { RelatedPosts } from "@/components/related-posts";
import type { PostDetailResponse } from "@/lib/types";

async function getPost(slug: string): Promise<PostDetailResponse | null> {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/posts/${slug}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPost(params.slug);
  if (!data) return { title: "Post Not Found" };

  const { post } = data;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://churnalyzer.com";
  const ogImageUrl = `${baseUrl}/api/og?title=${encodeURIComponent(
    post.title
  )}&category=${encodeURIComponent(
    post.category.name
  )}&date=${encodeURIComponent(
    new Date(post.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  )}`;
  return {
    title: `${post.title} | Churnalyzer`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPost(params.slug);

  if (!data) {
    notFound();
  }

  const { post, relatedPosts } = data;

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
      {/* Article Header */}
      <header className="mb-16">
        <div className="flex items-center gap-x-4 text-xs mb-6">
          <time dateTime={post.createdAt.toString()} className="text-slate-500">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <Badge variant="outline" className="border-red-200 text-red-700">
            {post.category.name}
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl text-balance">
          {post.title}
        </h1>

        <p className="mt-6 text-xl leading-8 text-slate-600 text-pretty">
          {post.excerpt}
        </p>

        <div className="mt-8 flex items-center gap-4">
          <Button size="sm" variant="outline">
            <span className="mr-2">📊</span>
            Save for Later
          </Button>
          <Button size="sm" variant="outline">
            <span className="mr-2">📤</span>
            Share
          </Button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-16">
        <Image
          className="aspect-[16/9] w-full rounded-2xl bg-slate-100 object-cover"
          src={
            post.imageUrl ||
            "/placeholder.svg?height=600&width=1200&query=business failure case study"
          }
          alt={post.title}
          width={1200}
          height={600}
          priority
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg prose-slate max-w-none">
        <ArticleBody content={post.content} />
      </div>

      {/* Interactive Section */}
      {post.interactiveData && (
        <div className="my-16">
          <InteractiveSection data={post.interactiveData} />
        </div>
      )}

      {/* Article Footer */}
      <footer className="mt-16 border-t border-slate-200 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-600">
              Found this case study helpful?
            </p>
            <div className="mt-2 flex gap-2">
              <Button size="sm" variant="outline">
                👍 Helpful
              </Button>
              <Button size="sm" variant="outline">
                💡 Insightful
              </Button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-600">Share this analysis</p>
            <div className="mt-2 flex gap-2">
              <Button size="sm" variant="outline">
                Twitter
              </Button>
              <Button size="sm" variant="outline">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-24">
          <RelatedPosts posts={relatedPosts} />
        </div>
      )}

      {/* Back to Posts */}
      <div className="mt-16 text-center">
        <Button asChild variant="outline">
          <Link href="/posts">← Back to All Case Studies</Link>
        </Button>
      </div>
    </article>
  );
}
