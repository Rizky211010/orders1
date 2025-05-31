'use client';

import { useEffect } from 'react';
import { ErrorBoundary } from '@/components/ui/ErrorHandling';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return <ErrorBoundary error={error} reset={reset} />;
}
