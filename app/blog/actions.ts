// app/blog/actions.ts
import { createBlogService, createCatalogService } from "@/app/_services";

export async function getBlogData() {
  const catalogService = createCatalogService();
  const blogService = createBlogService();

  try {
    const [categories, posts] = await Promise.all([
      catalogService.getCategories(),
      blogService.queryBlogPosts({
        page: 1,
        limit: 12,
        status: "published",
        order: "desc",
        sortBy: "date",
      }),
    ]);

    return {
      categories,
      posts,
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }
}
