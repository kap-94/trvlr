import { ApiError, ApiErrorData, ApiResponse, ApiResult } from "@/app/_types";

export const createApiResponse = <T>(data: T): ApiResponse<T> => ({
  data,
  success: true,
});

export const createApiError = (error: ApiErrorData): ApiError => ({
  error,
  success: false,
});

export const isApiError = <T>(response: ApiResult<T>): response is ApiError => {
  return !response.success;
};

export const isApiSuccess = <T>(
  response: ApiResult<T>
): response is ApiResponse<T> => {
  return response.success;
};
