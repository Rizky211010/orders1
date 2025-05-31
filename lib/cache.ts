'use client';

import { useState, useEffect, useCallback } from 'react';

// Cache configuration interface
interface CacheConfig {
  maxAge: number;
  staleWhileRevalidate?: number;
  maxItems?: number;
  version?: string;
}

// Default cache configurations
export const CACHE_CONFIGS = {
  SHORT: { maxAge: 5 * 60 * 1000 }, // 5 minutes
  MEDIUM: { maxAge: 30 * 60 * 1000 }, // 30 minutes
  LONG: { maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
  PERSISTENT: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 7 days
} as const;

// Cache item interface
interface CacheItem<T> {
  data: T;
  timestamp: number;
  maxAge: number;
  staleWhileRevalidate?: number;
  version?: string;
}

// Memory cache class
class MemoryCache {
  private cache = new Map<string, CacheItem<unknown>>();
  private maxItems: number;

  constructor(maxItems = 100) {
    this.maxItems = maxItems;
  }
  set<T>(key: string, data: T, config: CacheConfig): void {
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxItems) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey) {
        this.cache.delete(oldestKey);
      }
    }

    const item: CacheItem<T> = {
      data,
      timestamp: Date.now(),
      maxAge: config.maxAge,
      staleWhileRevalidate: config.staleWhileRevalidate,
      version: config.version,
    };

    this.cache.set(key, item);
  }

  get<T>(key: string): { data: T; isStale: boolean } | null {
    const item = this.cache.get(key) as CacheItem<T> | undefined;
    
    if (!item) return null;

    const now = Date.now();
    const age = now - item.timestamp;
    
    // Check if expired
    if (age > item.maxAge) {
      this.cache.delete(key);
      return null;
    }

    // Check if stale but still usable
    const isStale = item.staleWhileRevalidate 
      ? age > (item.maxAge - item.staleWhileRevalidate)
      : false;

    return { data: item.data, isStale };
  }

  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }

  has(key: string): boolean {
    const result = this.get(key);
    return result !== null;
  }

  size(): number {
    return this.cache.size;
  }
}

// Local storage cache with compression
class LocalStorageCache {
  private prefix: string;

  constructor(prefix = 'orders-cache-') {
    this.prefix = prefix;
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`;
  }
  private compress(data: unknown): string {
    try {
      return JSON.stringify(data);
    } catch {
      return '';
    }
  }

  private decompress(data: string): unknown {
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  set<T>(key: string, data: T, config: CacheConfig): boolean {
    if (typeof window === 'undefined') return false;

    try {
      const item: CacheItem<T> = {
        data,
        timestamp: Date.now(),
        maxAge: config.maxAge,
        staleWhileRevalidate: config.staleWhileRevalidate,
        version: config.version,
      };

      const compressed = this.compress(item);
      localStorage.setItem(this.getKey(key), compressed);
      return true;
    } catch {
      return false;
    }
  }

  get<T>(key: string): { data: T; isStale: boolean } | null {
    if (typeof window === 'undefined') return null;

    try {
      const stored = localStorage.getItem(this.getKey(key));
      if (!stored) return null;

      const item = this.decompress(stored) as CacheItem<T>;
      if (!item) return null;

      const now = Date.now();
      const age = now - item.timestamp;

      // Check if expired
      if (age > item.maxAge) {
        this.delete(key);
        return null;
      }

      // Check if stale but still usable
      const isStale = item.staleWhileRevalidate 
        ? age > (item.maxAge - item.staleWhileRevalidate)
        : false;

      return { data: item.data, isStale };
    } catch {
      return null;
    }
  }

  delete(key: string): boolean {
    if (typeof window === 'undefined') return false;

    try {
      localStorage.removeItem(this.getKey(key));
      return true;
    } catch {
      return false;
    }
  }

  clear(): void {
    if (typeof window === 'undefined') return;

    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(this.prefix)) {
          localStorage.removeItem(key);
        }
      });
    } catch {
      // Silently fail
    }
  }
}

// Main cache manager
class CacheManager {
  private memoryCache: MemoryCache;
  private localStorageCache: LocalStorageCache;

  constructor() {
    this.memoryCache = new MemoryCache(200);
    this.localStorageCache = new LocalStorageCache();
  }

  async set<T>(
    key: string, 
    data: T, 
    config: CacheConfig = CACHE_CONFIGS.MEDIUM,
    persistent = false
  ): Promise<void> {
    // Always store in memory
    this.memoryCache.set(key, data, config);

    // Store in localStorage if persistent
    if (persistent) {
      this.localStorageCache.set(key, data, config);
    }
  }

  async get<T>(key: string): Promise<{ data: T; isStale: boolean } | null> {
    // Try memory cache first
    const memoryResult = this.memoryCache.get<T>(key);
    if (memoryResult) {
      return memoryResult;
    }

    // Try localStorage cache
    const localResult = this.localStorageCache.get<T>(key);
    if (localResult) {
      // Restore to memory cache
      this.memoryCache.set(key, localResult.data, CACHE_CONFIGS.MEDIUM);
      return localResult;
    }

    return null;
  }

  async delete(key: string): Promise<void> {
    this.memoryCache.delete(key);
    this.localStorageCache.delete(key);
  }

  async clear(): Promise<void> {
    this.memoryCache.clear();
    this.localStorageCache.clear();
  }

  // Get cache statistics
  getStats() {
    return {
      memorySize: this.memoryCache.size(),
      localStorageUsed: typeof window !== 'undefined' 
        ? Object.keys(localStorage).filter(key => key.startsWith('orders-cache-')).length
        : 0,
    };
  }
}

// Create singleton instance
export const cacheManager = new CacheManager();

// Cache with automatic revalidation
export async function cachedFetch<T>(
  url: string,
  options: RequestInit = {},
  cacheConfig: CacheConfig = CACHE_CONFIGS.MEDIUM,
  persistent = false
): Promise<T> {
  const cacheKey = `fetch-${url}-${JSON.stringify(options)}`;
  
  // Try to get from cache
  const cached = await cacheManager.get<T>(cacheKey);
  
  if (cached && !cached.isStale) {
    return cached.data;
  }

  // Fetch fresh data
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json() as T;
    
    // Cache the fresh data
    await cacheManager.set(cacheKey, data, cacheConfig, persistent);
    
    return data;
  } catch (error) {
    // If we have stale data, return it as fallback
    if (cached) {
      console.warn('Using stale cache data due to fetch error:', error);
      return cached.data;
    }
    
    throw error;
  }
}

// React hook for cached data
export function useCachedData<T>(
  key: string,
  fetcher: () => Promise<T>,
  config: CacheConfig = CACHE_CONFIGS.MEDIUM,
  persistent = false
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Try cache first
      const cached = await cacheManager.get<T>(key);
      
      if (cached && !cached.isStale) {
        setData(cached.data);
        setLoading(false);
        return;
      }

      // Fetch fresh data
      const freshData = await fetcher();
      setData(freshData);
      setLoading(false);

      // Cache the fresh data
      await cacheManager.set(key, freshData, config, persistent);

    } catch (err) {
      setError(err as Error);
      setLoading(false);
    }
  }, [key, fetcher, config, persistent]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, loading, error, refetch: loadData };
}

// Cache invalidation utilities
export const cacheInvalidation = {
  invalidateByPattern: async () => {
    // This would require implementing pattern matching for cache keys
    // For now, we'll clear all cache
    await cacheManager.clear();
  },
  
  invalidateByTags: async () => {
    // Implementation would depend on adding tag support to cache items
    // For now, we'll clear all cache
    await cacheManager.clear();
  },
  
  preload: async <T>(key: string, fetcher: () => Promise<T>, config?: CacheConfig) => {
    try {
      const data = await fetcher();
      await cacheManager.set(key, data, config || CACHE_CONFIGS.MEDIUM);
    } catch (error) {
      console.warn('Preload failed:', error);
    }
  },
};
