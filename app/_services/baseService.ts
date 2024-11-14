import {
  ApiError,
  ApiResult,
  CacheConfig,
  ICache,
  PaginationParams,
} from "@/app/_types";
import { Cache, ServiceError, ValidationError } from "@/app/_services";
import { createApiError } from "@/app/_utils/api";

export interface ServiceConfig {
  cache?: CacheConfig;
  apiBaseUrl: string;
  defaultPageSize?: number;
  apiKey?: string;
  timeout?: number;
  headers?: Record<string, string>; // Nuevo: headers personalizados
}

export abstract class BaseService {
  protected readonly cache: ICache; // Cambiado a ICache y readonly
  protected readonly apiBaseUrl: string; // Añadido readonly
  protected readonly defaultPageSize: number;
  protected readonly apiKey?: string;
  protected readonly timeout: number;
  protected readonly headers: Record<string, string>;

  constructor(config: ServiceConfig) {
    // Validación de configuración
    this.validateConfig(config);

    // Inicialización con valores por defecto
    this.cache = new Cache(
      config.cache || { ttl: 5 * 60 * 1000, maxSize: 100 }
    );
    this.apiBaseUrl = config.apiBaseUrl;
    this.defaultPageSize = config.defaultPageSize || 10;
    this.apiKey = config.apiKey;
    this.timeout = config.timeout || 10000;
    this.headers = {
      "Content-Type": "application/json",
      ...(this.apiKey && { Authorization: `Bearer ${this.apiKey}` }),
      ...config.headers,
    };
  }

  /**
   * Simulación de llamada API para desarrollo/testing
   */
  protected async simulateApiCall<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResult<T>> {
    try {
      // Simular latencia de red
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Esta línea debería ser sobrescrita por las clases hijas
      throw new Error("Method not implemented");
    } catch (error) {
      return this.handleFetchError(error);
    }
  }

  /**
   * Validación de parámetros de paginación
   */
  protected validatePaginationParams(params: PaginationParams): void {
    const { page, limit } = params;

    if (page != null && (isNaN(page) || page < 1)) {
      throw new ValidationError("Invalid page number", { page });
    }

    if (limit != null && (isNaN(limit) || limit < 1 || limit > 100)) {
      throw new ValidationError("Invalid limit (must be between 1 and 100)", {
        limit,
      });
    }
  }

  protected handleError(error: unknown): never {
    if (error instanceof ServiceError) {
      throw error;
    }

    if (error instanceof Error) {
      throw new ServiceError(error.message, "UNKNOWN_ERROR", 500, error);
    }

    throw new ServiceError(
      "An unexpected error occurred",
      "UNKNOWN_ERROR",
      500,
      error
    );
  }

  protected handleFetchError(error: unknown): ApiError {
    if (error instanceof ServiceError) {
      return createApiError({
        code: error.code,
        message: error.message,
        details: error.details,
      });
    }

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        return createApiError({
          code: "TIMEOUT",
          message: "Request timeout",
          details: error,
        });
      }

      return createApiError({
        code: "API_ERROR",
        message: error.message,
        details: error,
      });
    }

    return createApiError({
      code: "UNKNOWN_ERROR",
      message: "An unexpected error occurred",
      details: error,
    });
  }

  /**
   * Validación de configuración inicial
   */
  private validateConfig(config: ServiceConfig): void {
    if (!config.apiBaseUrl) {
      throw new ValidationError("API Base URL is required");
    }

    if (config.timeout && config.timeout < 1000) {
      throw new ValidationError("Timeout must be at least 1000ms");
    }

    if (
      config.defaultPageSize &&
      (config.defaultPageSize < 1 || config.defaultPageSize > 100)
    ) {
      throw new ValidationError("Default page size must be between 1 and 100");
    }
  }

  /**
   * Construcción de URL con parámetros
   */
  private buildUrl(endpoint: string): string {
    const url = new URL(
      endpoint.startsWith("http") ? endpoint : `${this.apiBaseUrl}${endpoint}`
    );
    return url.toString();
  }

  /**
   * Método abstracto para generar claves de caché
   */
  protected abstract generateQueryCacheKey(params: unknown): string;
}
