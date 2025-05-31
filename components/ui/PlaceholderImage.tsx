'use client';

import { OptimizedImage } from './OptimizedImage';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
  alt: string;
  backgroundColor?: string;
  textColor?: string;
}

export function PlaceholderImage({
  width,
  height,
  text,
  className,
  alt,
  backgroundColor = '#f3f4f6',
  textColor = '#6b7280'
}: PlaceholderImageProps) {
  // Generate placeholder image URL using a service like placeholder.com or create SVG
  const placeholderUrl = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22${width}%22%20height%3D%22${height}%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22${encodeURIComponent(backgroundColor)}%22/%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-size%3D%2216%22%20fill%3D%22${encodeURIComponent(textColor)}%22%3E${encodeURIComponent(text || `${width}x${height}`)}%3C/text%3E%3C/svg%3E`;

  return (
    <OptimizedImage
      src={placeholderUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      placeholder="empty"
    />
  );
}

// Predefined placeholder components for common use cases
export function BlogImagePlaceholder({ alt, className }: { alt: string; className?: string }) {
  return (
    <PlaceholderImage
      width={400}
      height={240}
      text="Blog Image"
      alt={alt}
      className={className}
    />
  );
}

export function TeamImagePlaceholder({ alt, className }: { alt: string; className?: string }) {
  return (
    <PlaceholderImage
      width={300}
      height={300}
      text="Team Member"
      alt={alt}
      className={className}
    />
  );
}

export function PortfolioImagePlaceholder({ alt, className }: { alt: string; className?: string }) {
  return (
    <PlaceholderImage
      width={600}
      height={400}
      text="Portfolio"
      alt={alt}
      className={className}
    />
  );
}
