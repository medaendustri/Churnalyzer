import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls: MetadataRoute.Sitemap = [
    {
      url: "https://churnalyzer.com/",
      lastModified: new Date(),
    },
    {
      url: "https://churnalyzer.com/categories",
      lastModified: new Date(),
    },
    {
      url: "https://churnalyzer.com/posts",
      lastModified: new Date(),
    },
    {
      url: "https://churnalyzer.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://churnalyzer.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://churnalyzer.com/privacy",
      lastModified: new Date(),
    },
  ];

  // Kategoriler
  const categories = await prisma.category.findMany({});
  categories.forEach((cat) => {
    urls.push({
      url: `https://churnalyzer.com/categories/${cat.slug}`,
      lastModified: new Date(),
    });
  });

  // Postlar
  const posts = await prisma.post.findMany({ where: { published: true } });
  posts.forEach((post) => {
    urls.push({
      url: `https://churnalyzer.com/posts/${post.slug}`,
      lastModified: new Date(post.createdAt),
    });
  });

  return urls;
}
