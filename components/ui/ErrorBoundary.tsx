'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import Button from './Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetOnPropsChange?: boolean;
  level?: 'page' | 'section' | 'component';
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  eventId: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  private resetTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      eventId: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to monitoring service
    this.reportError(error, errorInfo);
  }

  componentDidUpdate(prevProps: Props) {
    const { resetOnPropsChange } = this.props;
    const { hasError } = this.state;

    if (hasError && resetOnPropsChange && prevProps.children !== this.props.children) {
      this.resetErrorBoundary();
    }
  }

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
  }

  reportError = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Create error report
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        level: this.props.level || 'component',
      };

      // Send to error reporting service (could be Sentry, LogRocket, etc.)
      if (process.env.NODE_ENV === 'production') {
        await fetch('/api/errors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(errorReport),
        });
      }
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      eventId: null,
    });
  };

  handleRetry = () => {
    this.resetErrorBoundary();
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback, level = 'component' } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Different error UIs based on level
      switch (level) {
        case 'page':
          return <PageErrorFallback error={error} onRetry={this.handleRetry} onReload={this.handleReload} />;
        case 'section':
          return <SectionErrorFallback error={error} onRetry={this.handleRetry} />;
        default:
          return <ComponentErrorFallback error={error} onRetry={this.handleRetry} />;
      }
    }

    return children;
  }
}

// Page-level error fallback
const PageErrorFallback: React.FC<{
  error: Error | null;
  onRetry: () => void;
  onReload: () => void;
}> = ({ error, onRetry, onReload }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div className="max-w-md mx-auto text-center p-8">
      <div className="w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Oops! Something went wrong
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        We encountered an unexpected error. Our team has been notified and is working on a fix.
      </p>
      
      {process.env.NODE_ENV === 'development' && error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-left">
          <p className="text-sm font-mono text-red-800 dark:text-red-300 break-all">
            {error.message}
          </p>
        </div>
      )}
      
      <div className="space-y-3">
        <Button onClick={onRetry} className="w-full">
          Try Again
        </Button>
        <Button onClick={onReload} variant="outline" className="w-full">
          Reload Page
        </Button>
        <Button 
          onClick={() => window.location.href = '/'} 
          variant="ghost" 
          className="w-full"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  </div>
);

// Section-level error fallback
const SectionErrorFallback: React.FC<{
  error: Error | null;
  onRetry: () => void;
}> = ({ error, onRetry }) => (
  <div className="p-8 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
    <div className="text-center">
      <div className="w-12 h-12 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Section Error
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        This section failed to load properly.
      </p>
      
      {process.env.NODE_ENV === 'development' && error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 rounded text-left">
          <p className="text-xs font-mono text-red-800 dark:text-red-300 break-all">
            {error.message}
          </p>
        </div>
      )}
      
      <Button onClick={onRetry} size="sm">
        Retry Section
      </Button>
    </div>
  </div>
);

// Component-level error fallback
const ComponentErrorFallback: React.FC<{
  error: Error | null;
  onRetry: () => void;
}> = ({ error, onRetry }) => (
  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">
        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
          Component Error
        </p>
        <p className="text-sm text-yellow-600 dark:text-yellow-400">
          Failed to render this component.
        </p>
      </div>
      
      <Button onClick={onRetry} size="sm" variant="outline">
        Retry
      </Button>
    </div>
    
    {process.env.NODE_ENV === 'development' && error && (
      <div className="mt-3 p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded">
        <p className="text-xs font-mono text-yellow-800 dark:text-yellow-300 break-all">
          {error.message}
        </p>
      </div>
    )}
  </div>
);

// Hook for error boundary usage
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Manual error report:', error, errorInfo);
    
    // Report to error monitoring service
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          manual: true,
        }),
      }).catch(console.error);
    }
  };
};

// Higher-order component for error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

export default ErrorBoundary;
