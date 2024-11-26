/**
 * Blog Service Module
 *
 * Provides functionality for managing and retrieving blog content with caching
 * and optimizations for Next.js 14 Server Components.
 *
 * @module BlogService
 */

import { cache } from "react";
import {
  BlogPost,
  BlogCardView,
  BlogDetailView,
  BlogQueryParams,
  ApiResult,
  PaginatedResponse,
  Category,
} from "@/app/_types";

import {
  BaseService,
  ServiceConfig,
  NotFoundError,
  ValidationError,
  ServiceError,
} from "@/app/_services";

import { mockBlogPosts } from "@/app/_data";
import {
  applySorting,
  createApiError,
  createApiResponse,
  isApiError,
} from "@/app/_utils";

// Tipos específicos del servicio
interface BlogServiceConfig extends ServiceConfig {
  featuredPostsLimit?: number;
  cacheTTL?: number;
  maxCacheSize?: number;
}

interface SearchOptions {
  boostTitle?: boolean;
  exactMatch?: boolean;
  includeDrafts?: boolean;
}

class BlogService extends BaseService {
  private readonly featuredPostsLimit: number;
  private readonly maxSearchResults: number = 100;

  constructor(config: BlogServiceConfig) {
    // Validamos configuración antes de inicializar
    BlogService.validateConfig(config);

    super(config);
    this.featuredPostsLimit = config.featuredPostsLimit || 2;
  }

  /**
   * Consulta posts con filtrado, ordenamiento y paginación
   * Optimizado para Server Components con manejo de caché
   */
  async queryBlogPosts(
    params: BlogQueryParams = {}
  ): Promise<PaginatedResponse<BlogCardView>> {
    try {
      this.validatePaginationParams(params);
      const cacheKey = this.generateQueryCacheKey(params);

      // Intentamos obtener del caché primero
      const cached = this.cache.get<PaginatedResponse<BlogCardView>>(cacheKey);
      if (cached) {
        return cached;
      }

      const response = await this.simulateApiCall<BlogPost[]>("/posts");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      // Procesamos los parámetros con valores por defecto
      const {
        page = 1,
        limit = this.defaultPageSize,
        sortBy = "date",
        order = "desc",
        status = "published",
        ...filterParams
      } = params;

      // Validación y normalización de parámetros
      const validatedPage = Math.max(1, page);
      const validatedLimit = Math.min(Math.max(1, limit), 100);

      // Aplicamos filtros en orden optimizado
      let posts = response.data;

      // Filtro de status primero (más restrictivo)
      posts = posts.filter((post) => post.status === status);

      // Aplicamos filtros adicionales si existen
      if (Object.keys(filterParams).length > 0) {
        posts = this.applyFilters(posts, filterParams);
      }

      const total = posts.length;

      // Optimización: solo ordenamos si es necesario
      if (sortBy !== "date" || order !== "desc") {
        posts = applySorting(posts, {
          field: sortBy as keyof BlogPost,
          direction: order,
        });
      }

      // Aplicamos paginación
      const startIndex = (validatedPage - 1) * validatedLimit;
      const endIndex = startIndex + validatedLimit;

      // Optimización: transformamos solo los posts necesarios
      const paginatedPosts = posts
        .slice(startIndex, endIndex)
        .map(this.toCardView);

      const totalPages = Math.ceil(total / validatedLimit);

      const result: PaginatedResponse<BlogCardView> = {
        items: paginatedPosts,
        metadata: {
          total,
          currentPage: validatedPage,
          totalPages,
          hasNextPage: validatedPage < totalPages,
          hasPreviousPage: validatedPage > 1,
          itemsPerPage: validatedLimit,
        },
      };

      // Guardamos en caché
      this.cache.set(cacheKey, result);
      return result;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene un post por slug con contenido relacionado
   * Optimizado para renderizado incremental
   */
  async getBlogPostBySlug(slug: string): Promise<BlogDetailView> {
    try {
      if (!slug?.trim()) {
        throw new ValidationError("Valid slug is required");
      }

      const cacheKey = `post_${slug}`;
      const cached = this.cache.get<BlogDetailView>(cacheKey);
      if (cached) {
        return cached;
      }

      const response = await this.simulateApiCall<BlogPost[]>("/posts");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      const post = response.data.find((p) => p.slug === slug);
      if (!post) {
        throw new NotFoundError("Blog post", slug);
      }

      // Optimización: Paralelizamos las llamadas relacionadas
      const [previousPost, nextPost, recommendedPosts] = await Promise.all([
        this.getAdjacentPost(post.publishDate, "previous"),
        this.getAdjacentPost(post.publishDate, "next"),
        this.getRecommendedPosts(post.id, post.categories),
      ]);

      const enrichedPost: BlogDetailView = {
        ...post,
        previousPost,
        nextPost,
        recommendedPosts,
      };

      this.cache.set(cacheKey, enrichedPost);
      return enrichedPost;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene posts destacados
   * Optimizado para revalidación estática
   */
  async getFeaturedPosts(
    limit: number = this.featuredPostsLimit
  ): Promise<BlogCardView[]> {
    try {
      const validLimit = Math.min(Math.max(1, limit), this.featuredPostsLimit);
      const cacheKey = `featured_${validLimit}`;

      const cached = this.cache.get<BlogCardView[]>(cacheKey);
      if (cached) {
        return cached;
      }

      const response = await this.simulateApiCall<BlogPost[]>("/posts");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      const posts = response.data
        .filter(
          (post) => post.type === "featured" && post.status === "published"
        )
        .sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        )
        .slice(0, validLimit)
        .map(this.toCardView);

      this.cache.set(cacheKey, posts);
      return posts;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene los posts más recientes
   */
  async getLatestPosts(limit: number = 10): Promise<BlogCardView[]> {
    try {
      const validLimit = Math.min(Math.max(1, limit), 20); // Limitamos a 20 máximo
      const cacheKey = `latest_${validLimit}`;

      const cached = this.cache.get<BlogCardView[]>(cacheKey);
      if (cached) return cached;

      const response = await this.simulateApiCall<BlogPost[]>("/posts");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      const posts = response.data
        .filter((post) => post.status === "published")
        .sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        )
        .slice(0, validLimit)
        .map(this.toCardView);

      this.cache.set(cacheKey, posts);
      return posts;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Busca posts por término de búsqueda
   * Implementa búsqueda optimizada con índice de texto
   */
  async searchPosts(
    query: string,
    options: SearchOptions = {}
  ): Promise<BlogCardView[]> {
    try {
      if (!query?.trim()) {
        throw new ValidationError("Search query is required");
      }

      const cacheKey = `search_${query.toLowerCase()}_${JSON.stringify(
        options
      )}`;
      const cached = this.cache.get<BlogCardView[]>(cacheKey);
      if (cached) return cached;

      const posts = await this.performSearch(query, options);

      this.cache.set(cacheKey, posts);
      return posts;
    } catch (error) {
      return this.handleError(error);
    }
  }

  // Métodos protegidos y privados

  /**
   * Genera una clave de caché determinista
   */
  protected generateQueryCacheKey(params: BlogQueryParams): string {
    const normalizedParams = {
      page: params.page || 1,
      limit: params.limit || this.defaultPageSize,
      sortBy: params.sortBy || "date",
      order: params.order || "desc",
      status: params.status || "published",
      category: params.category || "",
      tag: params.tag || "",
      search: params.search || "",
    };

    return `posts_query_${JSON.stringify(normalizedParams)}`;
  }

  protected override async simulateApiCall<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResult<T>> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      switch (endpoint) {
        case "/posts":
          return createApiResponse(mockBlogPosts as T);
        default:
          return createApiError({
            code: "NOT_FOUND",
            message: "Endpoint not found",
            details: { endpoint },
          });
      }
    } catch (error) {
      return this.handleFetchError(error);
    }
  }

  private async performSearch(
    query: string,
    options: SearchOptions
  ): Promise<BlogCardView[]> {
    const response = await this.simulateApiCall<BlogPost[]>("/posts");

    if (isApiError(response)) {
      throw new ServiceError(
        response.error.message,
        response.error.code,
        500,
        response.error.details
      );
    }

    const searchTerms = query.toLowerCase().split(" ").filter(Boolean);

    return response.data
      .filter((post) => {
        if (!options.includeDrafts && post.status !== "published") {
          return false;
        }

        const searchableText = this.generateSearchableText(post);

        if (options.exactMatch) {
          return searchableText.includes(query.toLowerCase());
        }

        return searchTerms.every((term) => searchableText.includes(term));
      })
      .sort((a, b) => {
        // Boost posts with title matches if option is enabled
        if (options.boostTitle) {
          const aTitle = a.title.toLowerCase();
          const bTitle = b.title.toLowerCase();
          const queryLower = query.toLowerCase();

          if (aTitle.includes(queryLower) && !bTitle.includes(queryLower)) {
            return -1;
          }
          if (!aTitle.includes(queryLower) && bTitle.includes(queryLower)) {
            return 1;
          }
        }

        // Default to date sorting
        return (
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        );
      })
      .slice(0, this.maxSearchResults)
      .map(this.toCardView);
  }

  private generateSearchableText(post: BlogPost): string {
    return `
    ${post.title}
    ${post.subtitle || ""}
    ${post.excerpt}
    ${post.tags.join(" ")}
    ${post.categories.map((c) => c.name).join(" ")}
  `.toLowerCase();
  }

  /**
   * Valida la configuración inicial
   */
  private static validateConfig(config: BlogServiceConfig): void {
    if (config.featuredPostsLimit && config.featuredPostsLimit < 1) {
      throw new ValidationError("Featured posts limit must be greater than 0");
    }

    if (config.defaultPageSize && config.defaultPageSize < 1) {
      throw new ValidationError("Default page size must be greater than 0");
    }

    if (config.timeout && config.timeout < 1000) {
      throw new ValidationError("Timeout must be at least 1000ms");
    }
  }

  /**
   * Obtiene el post adyacente (anterior o siguiente)
   */
  private async getAdjacentPost(
    currentDate: string,
    direction: "previous" | "next"
  ): Promise<BlogCardView | undefined> {
    // Cambiado de null a undefined
    const response = await this.simulateApiCall<BlogPost[]>("/posts");

    if (isApiError(response)) {
      throw new ServiceError(
        response.error.message,
        response.error.code,
        500,
        response.error.details
      );
    }

    const sortedPosts = response.data
      .filter((post) => post.status === "published")
      .sort(
        (a, b) =>
          new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
      );

    const currentIndex = sortedPosts.findIndex(
      (post) => post.publishDate === currentDate
    );

    if (currentIndex === -1) return undefined;

    const adjacentPost =
      direction === "previous"
        ? sortedPosts[currentIndex - 1]
        : sortedPosts[currentIndex + 1];

    return adjacentPost ? this.toCardView(adjacentPost) : undefined;
  }

  /**
   * Obtiene posts recomendados basados en categorías
   */
  private async getRecommendedPosts(
    currentPostId: number,
    categories: Category[],
    limit: number = 3
  ): Promise<BlogCardView[]> {
    const response = await this.simulateApiCall<BlogPost[]>("/posts");

    if (isApiError(response)) {
      throw new ServiceError(
        response.error.message,
        response.error.code,
        500,
        response.error.details
      );
    }

    const categoryIds = categories.map((c) => c.id);

    return response.data
      .filter(
        (post) =>
          post.id !== currentPostId &&
          post.status === "published" &&
          post.categories.some((c) => categoryIds.includes(c.id))
      )
      .sort(() => Math.random() - 0.5) // Randomize results
      .slice(0, limit)
      .map((post) => this.toCardView(post));
  }

  /**
   * Aplica filtros a la lista de posts con todos los parámetros posibles
   */
  private applyFilters(
    posts: BlogPost[],
    params: Partial<BlogQueryParams>
  ): BlogPost[] {
    return posts.filter((post) => {
      // Filtro por categoría(s)
      if (params.category) {
        const categories = Array.isArray(params.category)
          ? params.category
          : [params.category];

        const categoryMatch = post.categories.some((c) =>
          categories.includes(c.slug)
        );
        if (!categoryMatch) return false;
      }

      // Filtro por ubicación(es)
      // if (params.location) {
      //   const locations = Array.isArray(params.location)
      //     ? params.location
      //     : [params.location];

      //   const locationMatch = post.locations?.some((loc) =>
      //     locations.includes(loc)
      //   );
      //   if (!locationMatch) return false;
      // }

      // Filtro por tag(s)
      if (params.tag) {
        const tags = Array.isArray(params.tag) ? params.tag : [params.tag];
        const tagMatch = tags.some((tag) => post.tags.includes(tag));
        if (!tagMatch) return false;
      }

      // Filtro por autor
      if (params.author && post.author.slug !== params.author) {
        return false;
      }

      // Filtro por status
      if (params.status && post.status !== params.status) {
        return false;
      }

      // Filtro por locale
      if (params.locale && post.locale !== params.locale) {
        return false;
      }

      // Filtro por rango de fechas
      if (params.fromDate || params.toDate) {
        const postDate = new Date(post.publishDate).getTime();

        if (params.fromDate) {
          const fromDate = new Date(params.fromDate).getTime();
          if (postDate < fromDate) return false;
        }

        if (params.toDate) {
          const toDate = new Date(params.toDate).getTime();
          if (postDate > toDate) return false;
        }
      }

      // Filtro por búsqueda
      if (params.search) {
        const searchableText = this.generateSearchableText(post);
        const searchTerms = params.search
          .toLowerCase()
          .split(" ")
          .filter(Boolean);

        // Debe coincidir con todos los términos de búsqueda
        const searchMatch = searchTerms.every((term) =>
          searchableText.includes(term)
        );

        if (!searchMatch) return false;
      }

      return true;
    });
  }

  /**
   * Convierte un BlogPost a su vista de tarjeta
   */
  private toCardView(post: BlogPost): BlogCardView {
    return {
      id: post.id,
      type: post.type,
      status: post.status,
      slug: post.slug,
      title: post.title,
      subtitle: post.subtitle,
      excerpt: post.excerpt,
      coverImage: post.coverImage,
      publishDate: post.publishDate,
      author: {
        id: post.author.id,
        name: post.author.name,
        avatar: post.author.avatar,
      },
      categories: post.categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
      })),
      readTime: post.readTime,
      analytics: post.analytics
        ? {
            views: post.analytics.views,
            likes: post.analytics.likes,
          }
        : undefined,
    };
  }
}

/**
 * Factory function con React cache
 * Optimizada para Server Components y Edge Runtime
 */
export const createBlogService = cache(
  (config?: Partial<BlogServiceConfig>) => {
    return new BlogService({
      apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || "/api/blog",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      cache: {
        ttl: 5 * 60 * 1000, // 5 minutes
        maxSize: 100,
      },
      defaultPageSize: 10,
      timeout: 10000,
      featuredPostsLimit: 3,
      ...config,
    });
  }
);

// No exportamos la clase BlogService directamente
export type { BlogServiceConfig, SearchOptions };
