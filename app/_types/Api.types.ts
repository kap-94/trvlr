// src/lib/core/types/api-types.ts

export interface ApiErrorData {
  code: string;
  message: string;
  details?: unknown;
}

export interface ApiResponse<T> {
  data: T;
  error?: never;
  success: true;
}

export interface ApiError {
  data?: never;
  error: ApiErrorData;
  success: false;
}

export type ApiResult<T> = ApiResponse<T> | ApiError;

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  items: T[];
  metadata: PaginationMetadata;
}

export interface PaginationMetadata {
  total: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemsPerPage: number;
}
