'use client';

import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  onLoad?: () => void;
  once?: boolean;
  height?: string | number;
}

export const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  fallback,
  rootMargin = '50px',
  threshold = 0.1,
  className = '',
  onLoad,
  once = true,
  height = 'auto'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) {
          setHasLoaded(true);
        }
        onLoad?.();
      } else if (!once) {
        setIsVisible(false);
      }
    },
    [once, onLoad]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin,
      threshold,
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [handleIntersection, rootMargin, threshold]);

  const shouldRender = once ? hasLoaded || isVisible : isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}
    >
      {shouldRender ? children : fallback}
    </div>
  );
};

// Enhanced lazy loading hook
export const useLazyLoad = (
  rootMargin = '50px',
  threshold = 0.1,
  preload = false
) => {
  const [isVisible, setIsVisible] = useState(preload);
  const [hasLoaded, setHasLoaded] = useState(preload);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || preload) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [rootMargin, threshold, preload]);

  return { ref, isVisible, hasLoaded };
};

export default LazyLoad;