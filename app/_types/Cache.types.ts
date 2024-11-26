// src/lib/core/cache/cache.ts

export interface CacheConfig {
  ttl: number; // Time to live in milliseconds
  maxSize: number; // Maximum number of items in cache
}

export interface ICache {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): void;
  clear(): void;
  has(key: string): boolean;
}
