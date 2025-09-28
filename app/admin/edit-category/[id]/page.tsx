"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const [category, setCategory] = useState<any>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/admin/categories/${params.id}`);
      setCategory(await res.json());
    }
    fetchData();
  }, [params.id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/admin/categories/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    });
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Failed to update category!");
    }
  }

  async function handleDelete() {
    const res = await fetch(`/api/admin/categories/${params.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      setError("Failed to delete category!");
    }
  }

  if (!category) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-96"
      >
        <h1 className="text-2xl font-bold mb-6">Edit Category</h1>
        <input
          type="text"
          value={category.name}
          onChange={(e) => setCategory({ ...category, name: e.target.value })}
          placeholder="Name"
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="text"
          value={category.slug}
          onChange={(e) => setCategory({ ...category, slug: e.target.value })}
          placeholder="Slug"
          className="w-full p-2 border rounded mb-4"
          required
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded mb-2"
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
