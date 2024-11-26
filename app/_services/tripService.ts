/**
 * Trip Service Module
 *
 * Provides functionality for managing and retrieving trip content with caching
 * and optimizations for Next.js 14 Server Components.
 *
 * @module TripService
 */

import { cache } from "react";
import {
  Trip,
  TripCardView,
  TripDetailView,
  TripQueryParams,
  ApiResult,
  PaginatedResponse,
  TravelCategory,
} from "@/app/_types";

import {
  BaseService,
  ServiceConfig,
  NotFoundError,
  ValidationError,
  ServiceError,
} from "@/app/_services";

import { tripsMockup } from "@/app/_data";
import {
  applySorting,
  createApiError,
  createApiResponse,
  isApiError,
} from "@/app/_utils";
import { notFound } from "next/navigation";

// Tipos específicos del servicio
interface TripServiceConfig extends ServiceConfig {
  featuredTripsLimit?: number;
  cacheTTL?: number;
  maxCacheSize?: number;
}

interface SearchOptions {
  boostTitle?: boolean;
  exactMatch?: boolean;
  includeDrafts?: boolean;
}

class TripService extends BaseService {
  private readonly featuredTripsLimit: number;
  private readonly maxSearchResults: number = 100;

  constructor(config: TripServiceConfig) {
    TripService.validateConfig(config);
    super(config);
    this.featuredTripsLimit = config.featuredTripsLimit || 3;
  }

  async queryTrips(
    params: TripQueryParams = {}
  ): Promise<PaginatedResponse<TripCardView>> {
    try {
      this.validatePaginationParams(params);
      const cacheKey = this.generateQueryCacheKey(params);

      const cached = this.cache.get<PaginatedResponse<TripCardView>>(cacheKey);
      if (cached) return cached;

      const response = await this.simulateApiCall<Trip[]>("/trips");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      const {
        page = 1,
        limit = this.defaultPageSize,
        sortBy = "rating",
        order = "desc",
        status = "published",
        search,
        ...filterParams
      } = params;

      const validatedPage = Math.max(1, page);
      const validatedLimit = Math.min(Math.max(1, limit), 100);

      let trips = response.data;
      trips = trips.filter((trip) => trip.status === status);

      // Añadir lógica de búsqueda
      if (search) {
        const searchLower = search.toLowerCase();
        trips = trips
          .map((trip) => {
            // Calcular puntuación de relevancia
            let score = 0;

            // Coincidencia en título (mayor peso)
            if (trip.title.toLowerCase().includes(searchLower)) {
              score += 10;
            }

            // Coincidencia en subtítulo
            if (trip.subtitle.toLowerCase().includes(searchLower)) {
              score += 5;
            }

            // Coincidencia en descripción
            if (trip.description.toLowerCase().includes(searchLower)) {
              score += 3;
            }

            // Coincidencia en países
            if (
              trip.countries.some((country) =>
                country.name.toLowerCase().includes(searchLower)
              )
            ) {
              score += 4;
            }

            // Coincidencia en categorías
            if (
              trip.category.some((cat) =>
                cat.toLowerCase().includes(searchLower)
              )
            ) {
              score += 4;
            }

            return { ...trip, _score: score };
          })
          .filter((trip) => trip._score > 0)
          .sort((a, b) => b._score - a._score);
      }

      // Resto de la lógica de filtrado si es necesario
      // if (Object.keys(filterParams).length > 0) {
      //   trips = this.applyFilters(trips, filterParams);
      // }

      const total = trips.length;

      if (!search && (sortBy !== "rating" || order !== "desc")) {
        trips = applySorting(trips, {
          field: sortBy as keyof Trip,
          direction: order,
        });
      }

      const startIndex = (validatedPage - 1) * validatedLimit;
      const endIndex = startIndex + validatedLimit;

      const paginatedTrips = trips
        .slice(startIndex, endIndex)
        .map(this.toCardView);

      const totalPages = Math.ceil(total / validatedLimit);

      const result: PaginatedResponse<TripCardView> = {
        items: paginatedTrips,
        metadata: {
          total,
          currentPage: validatedPage,
          totalPages,
          hasNextPage: validatedPage < totalPages,
          hasPreviousPage: validatedPage > 1,
          itemsPerPage: validatedLimit,
        },
      };

      this.cache.set(cacheKey, result);
      return result;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Obtiene un trip por slug con contenido relacionado
   */
  async getTripBySlug(slug: string): Promise<any> {
    try {
      if (!slug?.trim()) {
        throw new ValidationError("Valid slug is required");
      }

      const cacheKey = `trip_${slug}`;
      const cached = this.cache.get<TripDetailView>(cacheKey);
      if (cached) return cached;

      const response = await this.simulateApiCall<Trip[]>("/trips");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }
      const trip = response.data.find((t) => t.slug === slug);

      if (!trip) {
        // En lugar de usar NotFoundError, usamos notFound() directamente
        notFound();
      }

      const detailViewTrip = this.toDetailView(trip);

      const [relatedTrips, suggestedTrips] = await Promise.all([
        this.getRelatedTrips(trip.id, trip.category),
        this.getSuggestedTrips(trip.id),
      ]);

      const enrichedTrip: TripDetailView = {
        ...detailViewTrip,
        relatedTrips,
        suggestedTrips,
      };

      this.cache.set(cacheKey, enrichedTrip);
      return enrichedTrip;
    } catch (error) {
      // Si el error es de validación o un error de servicio, lo propagamos
      if (error instanceof ValidationError || error instanceof ServiceError) {
        throw error;
      }

      // Para cualquier otro tipo de error, asumimos que es un not found
      notFound();
    }
  }

  /**
   * Obtiene trips destacados
   */
  async getFeaturedTrips(
    limit: number = this.featuredTripsLimit
  ): Promise<TripCardView[]> {
    try {
      const validLimit = Math.min(Math.max(1, limit), this.featuredTripsLimit);
      const cacheKey = `featured_${validLimit}`;

      const cached = this.cache.get<TripCardView[]>(cacheKey);
      if (cached) return cached;

      const response = await this.simulateApiCall<Trip[]>("/trips");

      if (isApiError(response)) {
        throw new ServiceError(
          response.error.message,
          response.error.code,
          500,
          response.error.details
        );
      }

      const trips = response.data
        .filter(
          (trip) => trip.rating.average >= 4.8 && trip.status === "published"
        )
        .sort((a, b) => b.rating.average - a.rating.average)
        .slice(0, validLimit)
        .map(this.toCardView);

      this.cache.set(cacheKey, trips);
      return trips;
    } catch (error) {
      return this.handleError(error);
    }
  }

  // Métodos protegidos y privados

  protected generateQueryCacheKey(params: TripQueryParams): string {
    const normalizedParams = {
      page: params.page || 1,
      limit: params.limit || this.defaultPageSize,
      sortBy: params.sortBy || "rating",
      order: params.order || "desc",
      status: params.status || "published",
      category: params.category || "",
      location: params.location || "",
    };

    return `trips_query_${JSON.stringify(normalizedParams)}`;
  }

  protected override async simulateApiCall<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResult<T>> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      switch (endpoint) {
        case "/trips":
          return createApiResponse(tripsMockup as T);
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

  private async getRelatedTrips(
    currentTripId: string,
    categories: TravelCategory[],
    limit: number = 3
  ): Promise<TripCardView[]> {
    const response = await this.simulateApiCall<Trip[]>("/trips");

    if (isApiError(response)) {
      throw new ServiceError(
        response.error.message,
        response.error.code,
        500,
        response.error.details
      );
    }

    return response.data
      .filter(
        (trip) =>
          trip.id !== currentTripId &&
          trip.status === "published" &&
          trip.category.some((c) => categories.includes(c))
      )
      .sort(() => Math.random() - 0.5)
      .slice(0, limit)
      .map(this.toCardView);
  }

  private async getSuggestedTrips(
    currentTripId: string,
    limit: number = 3
  ): Promise<TripCardView[]> {
    const response = await this.simulateApiCall<Trip[]>("/trips");

    if (isApiError(response)) {
      throw new ServiceError(
        response.error.message,
        response.error.code,
        500,
        response.error.details
      );
    }

    return response.data
      .filter(
        (trip) => trip.id !== currentTripId && trip.status === "published"
      )
      .sort((a, b) => b.rating.average - a.rating.average)
      .slice(0, limit)
      .map(this.toCardView);
  }

  // private applyFilters(
  //   trips: Trip[],
  //   params: Partial<TripQueryParams>
  // ): Trip[] {
  //   return trips.filter((trip) => {
  //     if (params.category) {
  //       const categories = Array.isArray(params.category)
  //         ? params.category
  //         : [params.category];
  //       const categoryMatch = trip.category.some((c) => categories.includes(c));
  //       if (!categoryMatch) return false;
  //     }

  //     if (params.location) {
  //       const locations = Array.isArray(params.location)
  //         ? params.location
  //         : [params.location];
  //       const locationMatch = trip.additionalLocations.some((loc) =>
  //         locations.includes(loc.name)
  //       );
  //       if (!locationMatch) return false;
  //     }

  //     if (params.minPrice && trip.pricing.basePrice.amount < params.minPrice) {
  //       return false;
  //     }

  //     if (params.maxPrice && trip.price > params.maxPrice) {
  //       return false;
  //     }

  //     return true;
  //   });
  // }

  private toCardView(trip: Trip): TripCardView {
    return {
      id: trip.id,
      title: trip.title,
      subtitle: trip.subtitle,
      description: trip.description,
      coverImage: trip.media.coverImage,
      pricing: trip.pricing,
      rating: trip.rating,
      category: trip.category,
      countries: trip.countries.map((country) => ({
        name: country.name,
      })),
      slug: trip.slug,
      duration: trip.duration,
    };
  }

  // Helper function to transform Trip to TripDetailView
  private toDetailView(trip: Trip): TripDetailView {
    return {
      averageCost: trip.pricing?.basePrice.amount,
      bestTimeToVisit: trip.highlights?.join(", ") ?? "",
      coordinates: trip.mainLocation?.coordinates ?? {},
      coverImage: trip.media?.coverImage ?? {},
      culture: trip.culturalNotes?.customs.join(", ") ?? "",
      currency: trip.countries[0]?.currency!.name ?? "",
      description: trip.description,
      foodHighlights: trip.highlights?.join(", ") ?? "",
      id: trip.id,
      images: trip.media?.gallery ?? [],
      largeInspirationalText: trip.largeInspirationalText,
      locations: [trip.mainLocation, ...trip.additionalLocations],
      mapZoom: trip.mapZoom ?? 5,
      price: trip.pricing?.basePrice.amount ?? "",
      rating: trip.rating.average,
      safetyTips: trip.culturalNotes?.etiquette.join(", ") ?? "",
      subtitle: trip.subtitle,
      title: trip.title,
      visaInfo: trip.requirements?.visa.join(", ") ?? "",
      relatedTrips: trip.relatedTrips ?? [],
      suggestedTrips: trip.suggestedTrips ?? [],
    };
  }

  private static validateConfig(config: TripServiceConfig): void {
    if (config.featuredTripsLimit && config.featuredTripsLimit < 1) {
      throw new ValidationError("Featured trips limit must be greater than 0");
    }

    if (config.defaultPageSize && config.defaultPageSize < 1) {
      throw new ValidationError("Default page size must be greater than 0");
    }

    if (config.timeout && config.timeout < 1000) {
      throw new ValidationError("Timeout must be at least 1000ms");
    }
  }
}

/**
 * Factory function con React cache
 */
export const createTripService = cache(
  (config?: Partial<TripServiceConfig>) => {
    return new TripService({
      apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || "/api/trips",
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      cache: {
        ttl: 5 * 60 * 1000,
        maxSize: 100,
      },
      defaultPageSize: 10,
      timeout: 10000,
      featuredTripsLimit: 6,
      ...config,
    });
  }
);

// export type { TripServiceConfig, SearchOptions };
