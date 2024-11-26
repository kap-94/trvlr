/**
 * Static Content Service Module
 *
 * Provides functionality for retrieving static content with caching
 * optimized for Next.js 14 Server Components.
 */

import { cache } from "react";
import { BaseService, ServiceConfig } from "@/app/_services";
import {
  headerData,
  footerData,
  layoutItems,
  heroSlides,
  blogHeroSlide,
} from "@/app/_data";
import type {
  HeaderProps,
  FooterProps,
  LayoutVariantsGridItem,
} from "@/app/_types";
import { Slide } from "../_modules/HeroVideo/HeroServer";

interface StaticContentServiceConfig extends ServiceConfig {
  cacheTTL?: number;
}

// Interfaz para los parámetros de consulta del contenido estático
interface StaticContentQueryParams {
  section?: string;
  language?: string;
  version?: string;
}

class StaticContentService extends BaseService {
  constructor(config: StaticContentServiceConfig) {
    super(config);
  }

  /**
   * Implementación del método abstracto generateQueryCacheKey
   */
  protected generateQueryCacheKey(params: StaticContentQueryParams): string {
    const normalizedParams = {
      section: params.section || "default",
      language: params.language || "en",
      version: params.version || "latest",
    };

    return `static_content_${JSON.stringify(normalizedParams)}`;
  }

  /**
   * Obtiene la configuración del header
   */
  async getHeaderContent(): Promise<HeaderProps> {
    try {
      const cacheKey = "header_content";
      const cached = this.cache.get<HeaderProps>(cacheKey);
      if (cached) return cached;

      const data = await this.simulateApiCall<HeaderProps>("/header");
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene la configuración del footer
   */
  async getFooterContent(): Promise<FooterProps> {
    try {
      const cacheKey = "footer_content";
      const cached = this.cache.get<FooterProps>(cacheKey);
      if (cached) return cached;

      const data = await this.simulateApiCall<FooterProps>("/footer");
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene los items del layout grid
   */
  async getLayoutItems(): Promise<LayoutVariantsGridItem[]> {
    try {
      const cacheKey = "layout_items";
      const cached = this.cache.get<LayoutVariantsGridItem[]>(cacheKey);
      if (cached) return cached;

      const data = await this.simulateApiCall<LayoutVariantsGridItem[]>(
        "/layout"
      );
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene las slides del hero
   */
  async getHeroSlides(): Promise<Slide[]> {
    try {
      const cacheKey = "hero_slides";
      const cached = this.cache.get<Slide[]>(cacheKey);
      if (cached) return cached;

      const data = await this.simulateApiCall<Slide[]>("/hero-slides");
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene las slides del hero del blog
   */
  async getBlogHeroSlides(): Promise<Slide[]> {
    try {
      const cacheKey = "blog_hero_slides";
      const cached = this.cache.get<Slide[]>(cacheKey);
      if (cached) return cached;

      const data = await this.simulateApiCall<Slide[]>("/blog-hero-slides");
      this.cache.set(cacheKey, data);
      return data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  protected override async simulateApiCall<T>(endpoint: string): Promise<T> {
    await new Promise((resolve) => setTimeout(resolve, 100));

    switch (endpoint) {
      case "/header":
        return headerData as T;
      case "/footer":
        return footerData as T;
      case "/layout":
        return layoutItems as T;
      case "/hero-slides":
        return heroSlides as T;
      case "/blog-hero-slides":
        return blogHeroSlide as T;
      default:
        throw new Error("Endpoint not found");
    }
  }
}

/**
 * Factory function con React cache
 */
export const createStaticContentService = cache(
  (config?: Partial<StaticContentServiceConfig>) => {
    return new StaticContentService({
      apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      cache: {
        ttl: 24 * 60 * 60 * 1000, // 24 horas para contenido estático
        maxSize: 100,
      },
      defaultPageSize: 10,
      timeout: 5000,
      ...config,
    });
  }
);

export type { StaticContentServiceConfig, StaticContentQueryParams };
