import { CacheConfig, ICache } from "@/app/_types";

export class Cache implements ICache {
    private cache: Map<string, { data: unknown; timestamp: number }>;
    private config: CacheConfig;
  
    constructor(config: CacheConfig) {
      this.cache = new Map();
      this.config = config;
    }
  
    public get<T>(key: string): T | null {
      const cached = this.cache.get(key);
      if (!cached) return null;
  
      if (Date.now() - cached.timestamp > this.config.ttl) {
        this.cache.delete(key);
        return null;
      }
  
      return cached.data as T;
    }
  
    public set<T>(key: string, data: T): void {
      if (this.cache.size >= this.config.maxSize) {
        const oldestKey = Array.from(this.cache.entries())
          .sort(([, a], [, b]) => a.timestamp - b.timestamp)[0][0];
        this.cache.delete(oldestKey);
      }
      this.cache.set(key, { data, timestamp: Date.now() });
    }
  
    public clear(): void {
      this.cache.clear();
    }
  
    public has(key: string): boolean {
      return this.cache.has(key);
    }
  }