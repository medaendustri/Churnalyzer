import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/types"

interface LatestPostsGridProps {
  posts: Post[]
}

export function LatestPostsGrid({ posts }: LatestPostsGridProps) {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Latest Case Studies</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Fresh insights from recent business failures and strategic missteps
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  className="aspect-[16/9] w-full rounded-2xl bg-slate-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  src={post.imageUrl || "/placeholder.svg?height=400&width=600&query=business case study"}
                  alt={post.title}
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
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
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-slate-600">
                    <Link href={`/posts/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/posts"
            className="inline-flex items-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
