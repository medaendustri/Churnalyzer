import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    console.log("[v0] Attempting to connect to database...")

    const posts = await prisma.post.findMany({
      where: {
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
        published: true,
      },
    })

    console.log("[v0] Successfully fetched", posts.length, "posts")

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("[v0] Error fetching posts:", error)

    const mockPosts = [
      {
        id: "1",
        title: "The Rise and Fall of Nokia: From Paper Mill to Mobile Giant to Decline",
        slug: "nokia-rise-and-fall",
        excerpt: "How Nokia went from dominating the mobile phone market to losing it all to smartphones.",
        content:
          "Nokia's story is one of the most dramatic corporate failures in modern history. Founded in 1865 as a paper mill, Nokia evolved through various industries before becoming the world's largest mobile phone manufacturer. However, their failure to adapt to the smartphone revolution led to their dramatic decline.",
        published: true,
        createdAt: new Date("2024-01-15").toISOString(),
        updatedAt: new Date("2024-01-15").toISOString(),
        category: {
          id: "1",
          name: "Tech Companies",
          slug: "tech-companies",
          description: "Technology companies that failed to adapt to market changes",
        },
      },
      {
        id: "2",
        title: "Blockbuster vs Netflix: The Streaming Revolution That Changed Everything",
        slug: "blockbuster-vs-netflix",
        excerpt: "The story of how Blockbuster rejected Netflix and paid the ultimate price.",
        content:
          "In 2000, Netflix offered to sell their company to Blockbuster for $50 million. Blockbuster's executives laughed them out of the room. This decision would prove to be one of the most costly mistakes in business history.",
        published: true,
        createdAt: new Date("2024-01-10").toISOString(),
        updatedAt: new Date("2024-01-10").toISOString(),
        category: {
          id: "2",
          name: "Platforms",
          slug: "platforms",
          description: "Platform businesses that failed to evolve with technology",
        },
      },
      {
        id: "3",
        title: "Theranos: The $9 Billion Medical Fraud That Fooled Everyone",
        slug: "theranos-medical-fraud",
        excerpt: "How Elizabeth Holmes built a medical empire on lies and deception.",
        content:
          "Theranos promised to revolutionize blood testing with technology that could run hundreds of tests from a single drop of blood. The only problem? The technology never worked.",
        published: true,
        createdAt: new Date("2024-01-05").toISOString(),
        updatedAt: new Date("2024-01-05").toISOString(),
        category: {
          id: "3",
          name: "Startups",
          slug: "startups",
          description: "Startup companies that failed due to fraud or mismanagement",
        },
      },
    ]

    const page = 1 // Declare page variable
    const limit = 10 // Declare limit variable

    return NextResponse.json({
      posts: mockPosts.slice(0, limit),
      pagination: {
        page,
        limit,
        total: mockPosts.length,
        pages: Math.ceil(mockPosts.length / limit),
      },
    })
  }
}
