export interface Post {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  imageUrl: string
  published: boolean
  createdAt: Date
  categoryId: number
  category: Category
  interactiveData?: any
}

export interface Category {
  id: number
  slug: string
  name: string
  posts?: Post[]
  _count?: {
    posts: number
  }
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  pagination?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export interface PostsResponse {
  posts: Post[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export interface PostDetailResponse {
  post: Post
  relatedPosts: Partial<Post>[]
}

export interface CategoriesResponse {
  categories: Category[]
}

export interface CategoryPostsResponse {
  category: Category
  posts: Post[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}
