'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from './Button';
import Card from './Card';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <Card className="p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-6xl mb-4"
          >
            😵
          </motion.div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Something went wrong
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We encountered an unexpected error. Don&apos;t worry, our team has been notified and we&apos;re working on a fix.
          </p>

          <div className="space-y-4">
            <Button 
              onClick={reset}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Try Again
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="w-full"
            >
              Back to Home
            </Button>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-gray-500 dark:text-gray-400 text-sm">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto text-red-600 dark:text-red-400">
                {error.message}
                {error.stack}
              </pre>
            </details>
          )}
        </Card>
      </motion.div>
    </div>
  );
}

interface NotFoundPageProps {
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
}

export function NotFoundPage({ 
  title = '404 - Page Not Found',
  subtitle = 'The page you are looking for does not exist.',
  showBackButton = true
}: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="text-8xl mb-6"
        >
          🔍
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          {title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {subtitle}
        </p>

        <div className="space-y-4">
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-blue-600 to-purple-600"
          >
            🏠 Back to Home
          </Button>
          
          {showBackButton && (
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
            >
              ← Go Back
            </Button>
          )}
        </div>

        {/* Popular links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="/layanan" 
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Services
            </a>
            <a 
              href="/portfolio" 
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Portfolio
            </a>            <Link 
              href="/blog" 
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Blog
            </Link>
            <a 
              href="/kontak" 
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface ErrorCardProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorCard({ 
  title = 'Error',
  message = 'Something went wrong. Please try again.',
  onRetry,
  className = ''
}: ErrorCardProps) {
  return (
    <Card className={`p-6 text-center ${className}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className="text-4xl mb-4"
      >
        ⚠️
      </motion.div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {message}
      </p>

      {onRetry && (
        <Button 
          onClick={onRetry}
          variant="outline"
          size="sm"
        >
          Try Again
        </Button>
      )}
    </Card>
  );
}

interface NetworkErrorProps {
  onRetry?: () => void;
}

export function NetworkError({ onRetry }: NetworkErrorProps) {
  return (
    <ErrorCard
      title="Connection Error"
      message="Unable to connect to the server. Please check your internet connection and try again."
      onRetry={onRetry}
    />
  );
}

interface TimeoutErrorProps {
  onRetry?: () => void;
}

export function TimeoutError({ onRetry }: TimeoutErrorProps) {
  return (
    <ErrorCard
      title="Request Timeout"
      message="The request took too long to complete. Please try again."
      onRetry={onRetry}
    />
  );
}
