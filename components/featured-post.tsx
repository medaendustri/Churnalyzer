import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/types"

interface FeaturedPostProps {
  post: Post
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Case Study</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Deep dive into the most impactful business failure of our time
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-20 shadow-2xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <Image
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              src={post.imageUrl || "/placeholder.svg?height=600&width=1200&query=business failure"}
              alt={post.title}
              width={1200}
              height={600}
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
                {post.category.name}
              </Badge>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">{post.title}</h3>
              <p className="mt-6 text-lg leading-8 text-slate-300 text-pretty">{post.excerpt}</p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  <Link href={`/posts/${post.slug}`}>Read Full Analysis</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
