import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const urls = [
    { loc: "https://churnalyzer.com/", priority: 1.0 },
    { loc: "https://churnalyzer.com/categories", priority: 0.8 },
    { loc: "https://churnalyzer.com/posts", priority: 0.8 },
  ];

  // Kategoriler
  const categories = await prisma.category.findMany({});
  categories.forEach((cat) => {
    urls.push({
      loc: `https://churnalyzer.com/categories/${cat.slug}`,
      priority: 0.7,
    });
  });

  // Postlar
  const posts = await prisma.post.findMany({ where: { published: true } });
  posts.forEach((post) => {
    urls.push({
      loc: `https://churnalyzer.com/posts/${post.slug}`,
      priority: 0.6,
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url><loc>${u.loc}</loc><priority>${u.priority}</priority></url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
