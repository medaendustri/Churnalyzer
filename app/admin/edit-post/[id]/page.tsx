"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const postRes = await fetch(`/api/admin/posts/${params.id}`);
      const catRes = await fetch("/api/admin/categories");
      setPost(await postRes.json());
      setCategories(await catRes.json());
    }
    fetchData();
  }, [params.id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/admin/posts/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Failed to update post!");
    }
  }

  async function handleDelete() {
    const res = await fetch(`/api/admin/posts/${params.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Failed to delete post!");
    }
  }

  if (!post) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-96"
      >
        <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="text"
          value={post.slug}
          onChange={(e) => setPost({ ...post, slug: e.target.value })}
          placeholder="Slug"
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="text"
          value={post.excerpt}
          onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
          placeholder="Excerpt"
          className="w-full p-2 border rounded mb-4"
          required
        />
        <textarea
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          placeholder="Content"
          className="w-full p-2 border rounded mb-4"
          rows={6}
          required
        />
        <input
          type="text"
          value={post.imageUrl}
          onChange={(e) => setPost({ ...post, imageUrl: e.target.value })}
          placeholder="Image URL"
          className="w-full p-2 border rounded mb-4"
        />
        <select
          value={post.categoryId}
          onChange={(e) =>
            setPost({ ...post, categoryId: Number(e.target.value) })
          }
          className="w-full p-2 border rounded mb-4"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat: any) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded mb-2"
        >
          Update
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Delete
        </button>
      </form>
    </div>
  );
}
