import { cache } from "react";
import { Category, Country, ApiResult } from "@/app/_types";

import {
  BaseService,
  ServiceConfig,
  NotFoundError,
  ServiceError,
  ValidationError,
} from "@/app/_services";

import { createApiError, createApiResponse, isApiError } from "@/app/_utils";
import { mockBlogCategories } from "../_data";

interface CatalogServiceConfig extends ServiceConfig {
  cacheTTL?: number;
  maxCacheSize?: number;
}

// Interface for query parameters
interface CatalogQueryParams {
  search?: string;
  sort?: string;
  order?: "asc" | "desc";
  filter?: {
    active?: boolean;
    type?: string;
  };
  page?: number;
  limit?: number;
}

class CatalogService extends BaseService {
  constructor(config: CatalogServiceConfig) {
    super(config);
  }

  /**
   * Implementation of abstract method from BaseService
   * Generates a deterministic cache key for catalog queries
   */
  protected generateQueryCacheKey(params: CatalogQueryParams): string {
    const normalizedParams = {
      search: params.search || "",
      sort: params.sort || "name",
      order: params.order || "asc",
      filter: {
        active: params.filter?.active ?? true,
        type: params.filter?.type || "all",
      },
      page: params.page || 1,
      limit: params.limit || this.defaultPageSize,
    };

    return `catalog_query_${JSON.stringify(normalizedParams)}`;
  }

  /**
   * Rest of the service implementation remains the same...
   */
  async getCategories(): Promise<Category[]> {
    try {
      const cacheKey = "categories";
      const cached = this.cache.get<Category[]>(cacheKey);

      if (cached) {
        return cached;
      }

      const response = await this.simulateApiCall<Category[]>("/categories");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      this.cache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getCategoryBySlug(slug: string): Promise<Category> {
    try {
      if (!slug?.trim()) {
        throw new ValidationError("Valid slug is required");
      }

      const cacheKey = `category_${slug}`;
      const cached = this.cache.get<Category>(cacheKey);

      if (cached) {
        return cached;
      }

      const response = await this.simulateApiCall<Category[]>("/categories");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      const category = response.data.find((c) => c.slug === slug);

      if (!category) {
        throw new NotFoundError("Category", slug);
      }

      this.cache.set(cacheKey, category);
      return category;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getCountries(): Promise<Country[]> {
    try {
      const cacheKey = "countries";
      const cached = this.cache.get<Country[]>(cacheKey);

      if (cached) {
        return cached;
      }

      const response = await this.simulateApiCall<Country[]>("/countries");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      this.cache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getCountryBySlug(slug: string): Promise<Country> {
    try {
      if (!slug?.trim()) {
        throw new ValidationError("Valid slug is required");
      }

      const cacheKey = `country_${slug}`;
      const cached = this.cache.get<Country>(cacheKey);

      if (cached) {
        return cached;
      }

      const response = await this.simulateApiCall<Country[]>("/countries");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      const country = response.data.find((c) => c.slug === slug);

      if (!country) {
        throw new NotFoundError("Country", slug);
      }

      this.cache.set(cacheKey, country);
      return country;
    } catch (error) {
      return this.handleError(error);
    }
  }

  protected override async simulateApiCall<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResult<T>> {
    try {
      // Simulamos latencia de red
      await new Promise((resolve) => setTimeout(resolve, 100));

      switch (endpoint) {
        case "/categories":
          return createApiResponse(mockBlogCategories as T);
        // case "/countries":
        //   return createApiResponse(mockCountries as T);
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
}

/**
 * Factory function con React cache
 * Optimizada para Server Components y Edge Runtime
 */
export const createCatalogService = cache(
  (config?: Partial<CatalogServiceConfig>) => {
    return new CatalogService({
      apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || "/api/catalog",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      cache: {
        ttl: 5 * 60 * 1000, // 5 minutes
        maxSize: 100,
      },
      timeout: 10000,
      ...config,
    });
  }
);

export type { CatalogServiceConfig, CatalogQueryParams };
