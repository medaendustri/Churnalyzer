"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const postsRes = await fetch("/api/admin/posts");
      const categoriesRes = await fetch("/api/admin/categories");
      setPosts(await postsRes.json());
      setCategories(await categoriesRes.json());
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
      <div className="mb-8">
        <Link
          href="/admin/new-post"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          New Post
        </Link>
        <Link
          href="/admin/new-category"
          className="ml-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          New Category
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul className="mb-8">
        {posts.map((post: any) => (
          <li
            key={post.id}
            className="mb-2 flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <span>{post.title}</span>
            <Link
              href={`/admin/edit-post/${post.id}`}
              className="text-blue-600"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((cat: any) => (
          <li
            key={cat.id}
            className="mb-2 flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <span>{cat.name}</span>
            <Link
              href={`/admin/edit-category/${cat.id}`}
              className="text-green-600"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
