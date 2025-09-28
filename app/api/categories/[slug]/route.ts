import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    const category = await prisma.category.findUnique({
      where: {
        slug: params.slug,
      },
    })

    if (!category) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 })
    }

    const posts = await prisma.post.findMany({
      where: {
        categoryId: category.id,
        published: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    })

    const total = await prisma.post.count({
      where: {
        categoryId: category.id,
        published: true,
      },
    })

    return NextResponse.json({
      category,
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching category posts:", error)
    return NextResponse.json({ error: "Failed to fetch category posts" }, { status: 500 })
  }
}
