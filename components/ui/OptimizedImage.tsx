'use client';

import Image from 'next/image';
import { useState, useCallback, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  unoptimized?: boolean;
  webpFallback?: boolean;
  retryCount?: number;
  aspectRatio?: number;
}

// Generate a simple base64 blur placeholder
const generateBlurPlaceholder = (width: number, height: number): string => {
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect width="100%" height="100%" fill="url(#gradient)" opacity="0.3"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#e5e7eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#d1d5db;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>`
  ).toString('base64')}`;
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  placeholder = 'blur',
  blurDataURL,
  quality = 85,
  onLoad,
  onError,
  loading = 'lazy',
  unoptimized = false,
  webpFallback = true,
  retryCount = 3,
  aspectRatio,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempts, setAttempts] = useState(0);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isVisible]);

  // Generate WebP source with fallback
  const getOptimizedSrc = useCallback((originalSrc: string) => {
    if (unoptimized) return originalSrc;
    
    // Check if browser supports WebP
    if (webpFallback && typeof window !== 'undefined') {
      const canvas = document.createElement('canvas');
      const webpSupported = canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      
      if (webpSupported && !originalSrc.includes('.webp')) {
        // Try to get WebP version first
        return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      }
    }
    
    return originalSrc;
  }, [unoptimized, webpFallback]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    
    // Retry with original format if WebP fails
    if (attempts < retryCount && currentSrc !== src) {
      setAttempts(prev => prev + 1);
      setCurrentSrc(src);
      setIsLoading(true);
      return;
    }
    
    setHasError(true);
    onError?.();
  }, [attempts, retryCount, currentSrc, src, onError]);

  // Update source when src prop changes
  useEffect(() => {
    setCurrentSrc(getOptimizedSrc(src));
    setHasError(false);
    setIsLoading(true);
    setAttempts(0);
  }, [src, getOptimizedSrc]);

  // Generate dimensions and placeholder
  const finalBlurDataURL = blurDataURL || 
    (width && height ? generateBlurPlaceholder(width, height) : undefined);

  const containerStyle = aspectRatio 
    ? { aspectRatio: aspectRatio.toString() }
    : undefined;

  if (hasError) {
    return (
      <div 
        ref={imgRef}
        className={cn(
          "flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 border border-gray-200 dark:border-gray-700",
          className
        )}
        style={{ width, height, ...containerStyle }}
      >
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <span className="text-xs">Image not available</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={imgRef}
      className={cn("relative overflow-hidden", className)}
      style={containerStyle}
    >
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700">
          {placeholder === 'blur' && finalBlurDataURL && (
            <img
              src={finalBlurDataURL}
              alt=""
              className="w-full h-full object-cover opacity-60"
              aria-hidden="true"
            />
          )}
        </div>
      )}
      
      {(isVisible || priority) && (
        <Image
          src={currentSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          priority={priority}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={finalBlurDataURL}
          quality={quality}
          onLoad={handleLoad}
          onError={handleError}
          unoptimized={unoptimized}
          loading={loading}
          className={cn(
            "transition-all duration-500 ease-out",
            isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100",
            fill ? "object-cover" : ""
          )}
        />
      )}
    </div>
  );
}

// Utility function to generate blur data URL for placeholder
export function generateBlurDataURL(width: number = 8, height: number = 8): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
}

// Common image sizes for responsive design
export const imageSizes = {
  thumbnail: "120px",
  small: "240px", 
  medium: "480px",
  large: "720px",
  xlarge: "1200px",
  responsive: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  hero: "(max-width: 768px) 100vw, 80vw",
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
};
