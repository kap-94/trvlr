import { Author, Category, Location, Image, Video } from "@/app/_types";

// Core Types
interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: Image;
  canonicalUrl?: string;
  noIndex?: boolean;
}

interface Analytics {
  views: number;
  likes: number;
  shares: number;
  timeOnPage?: number;
  bounceRate?: number;
}

interface Engagement {
  likes: number;
  comments: Comment[];
  shares: number;
  savedCount: number;
}

// Secciones de contenido
interface ContentSection {
  order: number;
  title: string;
  body: string;
  image?: Image;
  link?: {
    href: string;
    label: string;
  };
}

interface RelatedPost {
  id: number;
  title: string;
  slug: string;
  image?: Image;
}

// Enhanced BlogPost Model
interface BlogPost extends BaseEntity {
  // Identity & URLs
  slug: string;
  locale: string; // For internationalization

  // Content Classification
  type: "featured" | "list" | "regular";
  status: "draft" | "review" | "scheduled" | "published" | "archived";
  visibility: "public" | "private" | "password-protected";

  // Core Content
  title: string;
  subtitle?: string;
  excerpt: string;
  introduction?: string;
  content: ContentSection[];

  // Rich Metadata
  author: Author;
  coAuthors?: Author[]; // Supporting multiple authors
  publishDate: string;
  scheduledDate?: string;
  lastModified?: string;
  readTime: number;
  wordCount: number;

  // Media
  coverImage: Image;
  gallery?: Image[];
  featuredVideo?: Video;

  // Categorization & Discovery
  categories: Category[];
  primaryCategory: Category; // Main category for better organization
  locations?: Location[];
  tags: string[];

  // Featured Elements
  highlights?: string[];
  featured: boolean;
  eyebrow?: string;

  // Related Content & Series
  series?: {
    id: string;
    name: string;
    order: number;
  };
  relatedPosts?: RelatedPost[];

  // Technical Metadata
  seo: SEOMetadata;
  analytics?: Analytics;
  engagement?: Engagement;

  // Versioning & History
  version: number;
  revision?: {
    id: string;
    changes: string;
    editor: Author;
    timestamp: string;
  }[];
}

// Enhanced View Types
interface BlogCardView {
  id: number;
  type: BlogPost["type"];
  status: BlogPost["status"];
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  coverImage: Image;
  publishDate: string;
  author: Pick<Author, "id" | "name" | "avatar">;
  categories: Pick<Category, "id" | "name" | "slug">[];
  readTime: number;
  analytics?: Pick<Analytics, "views" | "likes">;
}

interface BlogGridView extends BlogCardView {
  introduction?: string;
  highlights?: string[];
}

interface BlogDetailView extends BlogPost {
  previousPost?: BlogCardView;
  nextPost?: BlogCardView;
  recommendedPosts?: BlogCardView[];
}

// Enhanced Query Parameters
interface BlogQueryParams {
  page?: number;
  limit?: number;
  category?: string | string[];
  location?: string | string[];
  tag?: string | string[];
  author?: string;
  search?: string;
  status?: BlogPost["status"];
  sortBy?: "date" | "views" | "likes" | "comments" | "trending";
  order?: "asc" | "desc";
  locale?: string;
  fromDate?: string;
  toDate?: string;
}

export type {
  Analytics,
  BlogPost,
  BlogCardView,
  BlogDetailView,
  BlogGridView,
  BlogQueryParams,
  ContentSection,
  RelatedPost,
};
