import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/types"

interface RelatedPostsProps {
  posts: Partial<Post>[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="border-t border-slate-200 pt-16">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Case Studies</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="relative">
              <Image
                className="aspect-[16/9] w-full rounded-lg bg-slate-100 object-cover group-hover:opacity-75 transition-opacity"
                src={post.imageUrl || "/placeholder.svg?height=300&width=400&query=business case study"}
                alt={post.title || ""}
                width={400}
                height={300}
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-x-2 text-xs mb-2">
                <time dateTime={post.createdAt?.toString()} className="text-slate-500">
                  {post.createdAt &&
                    new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                </time>
                {post.category && (
                  <Badge variant="outline" className="border-red-200 text-red-700">
                    {post.category.name}
                  </Badge>
                )}
              </div>
              <h4 className="text-lg font-semibold text-slate-900 group-hover:text-slate-600">
                <Link href={`/posts/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h4>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
