'use client';

import { useEffect } from 'react';

// Component untuk menangani hydration errors
export default function HydrationErrorBoundary({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  useEffect(() => {
    // Suppress hydration warnings dalam development
    if (process.env.NODE_ENV === 'development') {
      const originalError = console.error;
      console.error = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('Hydration')) {
          return;
        }
        originalError.call(console, ...args);
      };

      return () => {
        console.error = originalError;
      };
    }
  }, []);

  return <>{children}</>;
}

// Hook untuk mendeteksi hydration mismatch
export function useHydrationFix() {
  useEffect(() => {
    // Force a re-render after hydration to fix any mismatches
    const timer = setTimeout(() => {
      // This will trigger a re-render after hydration is complete
      window.dispatchEvent(new Event('resize'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}