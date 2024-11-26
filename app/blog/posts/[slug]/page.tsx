// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import BlogPost from "@/app/_components/BlogPost";
import { createBlogService } from "@/app/_services";
import { notFound } from "next/navigation";
import { BlogDetailView, BlogPost as BlogPostType } from "@/app/_types";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogService = createBlogService();
  try {
    const { items: posts } = await blogService.queryBlogPosts({
      limit: 100,
      status: "published",
      sortBy: "date",
      order: "desc",
    });

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for blog posts:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blogService = createBlogService();
  try {
    const post = await blogService.getBlogPostBySlug(params.slug);

    const description =
      post.excerpt ||
      (typeof post.content[0]?.body === "string"
        ? post.content[0].body.substring(0, 160)
        : "Read our latest blog post");

    return {
      title: `${post.title} | Blog`,
      description,
      openGraph: {
        title: post.title,
        description,
        type: "article",
        publishedTime: post.publishDate,
        authors: post.author ? [post.author.name] : undefined,
        images: post.coverImage
          ? [
              {
                url: post.coverImage.src, // Asumiendo que Image tiene una propiedad 'src'
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description,
        images: post.coverImage ? [post.coverImage.src] : [], // Asumiendo que Image tiene una propiedad 'src'
      },
    };
  } catch (error) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
}

// Opcional: Configurar el tiempo de revalidación
export const revalidate = 3600; // revalidar cada hora

export default async function BlogPostPage({ params }: PageProps) {
  const blogService = createBlogService();

  try {
    const blogPost: BlogDetailView = await blogService.getBlogPostBySlug(
      params.slug
    );

    if (!blogPost) {
      notFound();
    }

    return (
      <BlogPost
        {...blogPost}
        // Aquí puedes mapear específicamente las props que necesita el componente BlogPost
        // para asegurarte de que coincidan exactamente con lo que espera
      />
    );
  } catch (error) {
    notFound();
  }
}
