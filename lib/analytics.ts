// Analytics configuration and tracking functions
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

// Global type declarations for analytics SDKs
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    fbq: (...args: unknown[]) => void;
    hj: (...args: unknown[]) => void;
  }
}

// Event tracking types
interface AnalyticsEvent {
  name: string;
  parameters?: Record<string, unknown>;
  category?: string;
  label?: string;
  value?: number;
}

interface UserProperties {
  user_id?: string;
  device_type?: 'mobile' | 'tablet' | 'desktop';
  traffic_source?: string;
  page_category?: string;
  session_id?: string;
}

// Analytics providers configuration
const ANALYTICS_CONFIG = {
  googleAnalytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    enabled: process.env.NODE_ENV === 'production',
  },
  hotjar: {
    hjid: process.env.NEXT_PUBLIC_HOTJAR_ID,
    enabled: process.env.NODE_ENV === 'production',
  },
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    enabled: process.env.NODE_ENV === 'production',
  },
  custom: {
    endpoint: '/api/analytics',
    enabled: true,
  },
};

// Analytics manager class
export class AnalyticsManager {
  private static instance: AnalyticsManager;
  private initialized = false;
  private queue: AnalyticsEvent[] = [];
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeProviders();
  }

  static getInstance(): AnalyticsManager {
    if (!AnalyticsManager.instance) {
      AnalyticsManager.instance = new AnalyticsManager();
    }
    return AnalyticsManager.instance;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async initializeProviders() {
    try {
      // Initialize Google Analytics
      if (ANALYTICS_CONFIG.googleAnalytics.enabled && ANALYTICS_CONFIG.googleAnalytics.measurementId) {
        await this.initializeGA();
      }

      // Initialize Hotjar
      if (ANALYTICS_CONFIG.hotjar.enabled && ANALYTICS_CONFIG.hotjar.hjid) {
        this.initializeHotjar();
      }

      // Initialize Facebook Pixel
      if (ANALYTICS_CONFIG.facebook.enabled && ANALYTICS_CONFIG.facebook.pixelId) {
        this.initializeFacebookPixel();
      }

      // Initialize Web Vitals tracking
      this.initializeWebVitals();

      this.initialized = true;
      this.processQueue();
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  private async initializeGA() {
    // Load Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalytics.measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: 'session_id',
      },
    });
  }
  private initializeHotjar() {
    // Type assertion for Hotjar window interface
    const hjWindow = window as typeof window & {
      hj: ((...args: unknown[]) => void) & { q?: unknown[] };
      _hjSettings: { hjid: number; hjsv: number };
    };
    
    hjWindow.hj = hjWindow.hj || function(...args: unknown[]) { 
      (hjWindow.hj.q = hjWindow.hj.q || []).push(args); 
    };
    hjWindow._hjSettings = { 
      hjid: Number(ANALYTICS_CONFIG.hotjar.hjid), 
      hjsv: 6 
    };
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://static.hotjar.com/c/hotjar-${hjWindow._hjSettings.hjid}.js?sv=${hjWindow._hjSettings.hjsv}`;
    document.head.appendChild(script);
  }
  private initializeFacebookPixel() {
    // Type assertion for Facebook Pixel window interface
    const fbWindow = window as typeof window & {
      fbq: ((...args: unknown[]) => void) & { q?: unknown[] };
    };

    if (fbWindow.fbq && typeof fbWindow.fbq !== 'undefined') return;

    fbWindow.fbq = function(...args: unknown[]) {
      (fbWindow.fbq.q = fbWindow.fbq.q || []).push(args);
    } as typeof fbWindow.fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    fbWindow.fbq('init', ANALYTICS_CONFIG.facebook.pixelId);
    fbWindow.fbq('track', 'PageView');
  }

  private initializeWebVitals() {
    // Track Core Web Vitals
    onCLS((metric: Metric) => this.trackWebVital('CLS', metric));
    onFCP((metric: Metric) => this.trackWebVital('FCP', metric));
    onINP((metric: Metric) => this.trackWebVital('INP', metric)); // INP replaces FID
    onLCP((metric: Metric) => this.trackWebVital('LCP', metric));
    onTTFB((metric: Metric) => this.trackWebVital('TTFB', metric));
  }

  private trackWebVital(name: string, metric: Metric) {
    this.track({
      name: `web_vital_${name.toLowerCase()}`,
      category: 'performance',
      parameters: {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_id: metric.id,
        metric_delta: metric.delta,
        session_id: this.sessionId,
      },
    });
  }

  private processQueue() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) {
        this.sendEvent(event);
      }
    }
  }

  setUserId(userId: string) {
    this.userId = userId;
    
    // Set user ID in Google Analytics
    if (window.gtag) {
      window.gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
        user_id: userId,
      });
    }

    // Set user ID in Hotjar
    if (window.hj) {
      window.hj('identify', userId, {});
    }
  }

  setUserProperties(properties: UserProperties) {
    // Set user properties in Google Analytics
    if (window.gtag) {
      window.gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
        custom_parameter_1: this.sessionId,
        ...properties,
      });
    }
  }

  track(event: AnalyticsEvent) {
    if (!this.initialized) {
      this.queue.push(event);
      return;
    }

    this.sendEvent(event);
  }

  private sendEvent(event: AnalyticsEvent) {
    // Enhanced event data
    const enhancedEvent = {
      ...event,
      session_id: this.sessionId,
      user_id: this.userId,
      timestamp: new Date().toISOString(),
    };

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', event.name, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter_1: this.sessionId,
        ...event.parameters,
      });
    }

    // Send to Facebook Pixel for conversion events
    if (window.fbq && event.category === 'conversion') {
      window.fbq('track', event.name, event.parameters);
    }

    // Send to Hotjar
    if (window.hj) {
      window.hj('event', event.name);
    }

    // Send to custom analytics endpoint
    if (ANALYTICS_CONFIG.custom.enabled) {
      fetch(ANALYTICS_CONFIG.custom.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enhancedEvent),
      }).catch((error) => {
        console.error('Failed to send custom analytics event:', error);
      });
    }
  }

  // Convenience methods for common tracking scenarios
  trackPageView(page: string, title?: string) {
    this.track({
      name: 'page_view',
      category: 'navigation',
      parameters: {
        page_path: page,
        page_title: title || document.title,
      },
    });
  }

  trackClick(element: string, location?: string) {
    this.track({
      name: 'click',
      category: 'interaction',
      label: element,
      parameters: {
        element_name: element,
        click_location: location,
      },
    });
  }

  trackFormSubmit(formName: string, success: boolean = true) {
    this.track({
      name: 'form_submit',
      category: 'engagement',
      label: formName,
      parameters: {
        form_name: formName,
        success,
      },
    });
  }

  trackContact(method: string, details?: Record<string, unknown>) {
    this.track({
      name: 'contact',
      category: 'conversion',
      label: method,
      parameters: {
        contact_method: method,
        ...details,
      },
    });
  }

  trackServiceInquiry(service: string, source?: string) {
    this.track({
      name: 'service_inquiry',
      category: 'conversion',
      label: service,
      parameters: {
        service_type: service,
        inquiry_source: source,
      },
    });
  }

  trackDownload(fileName: string, fileType?: string) {
    this.track({
      name: 'file_download',
      category: 'engagement',
      label: fileName,
      parameters: {
        file_name: fileName,
        file_type: fileType,
      },
    });
  }

  trackExternalLink(url: string, linkText?: string) {
    this.track({
      name: 'external_link',
      category: 'navigation',
      label: url,
      parameters: {
        external_url: url,
        link_text: linkText,
      },
    });
  }

  trackError(error: string, page?: string) {
    this.track({
      name: 'error',
      category: 'technical',
      label: error,
      parameters: {
        error_message: error,
        error_page: page || window.location.pathname,
      },
    });
  }

  trackScrollDepth(percentage: number) {
    this.track({
      name: 'scroll_depth',
      category: 'engagement',
      value: percentage,
      parameters: {
        scroll_percentage: percentage,
      },
    });
  }

  trackTimeOnPage(seconds: number) {
    this.track({
      name: 'time_on_page',
      category: 'engagement',
      value: seconds,
      parameters: {
        time_seconds: seconds,
      },
    });
  }
}

// Global analytics instance
const analytics = AnalyticsManager.getInstance();

// Export default analytics instance and convenience functions
export default {
  analytics,
  track: analytics.track.bind(analytics),
  trackPageView: analytics.trackPageView.bind(analytics),
  trackClick: analytics.trackClick.bind(analytics),
  trackFormSubmit: analytics.trackFormSubmit.bind(analytics),
  trackContact: analytics.trackContact.bind(analytics),
  trackServiceInquiry: analytics.trackServiceInquiry.bind(analytics),
  trackDownload: analytics.trackDownload.bind(analytics),
  trackExternalLink: analytics.trackExternalLink.bind(analytics),
  trackError: analytics.trackError.bind(analytics),
  setUserId: analytics.setUserId.bind(analytics),
  setUserProperties: analytics.setUserProperties.bind(analytics),
};

// React hook for automatic page tracking
export function usePageTracking() {
  if (typeof window === 'undefined') return;

  // Track page view on mount
  analytics.trackPageView(window.location.pathname);

  // Track scroll depth milestones
  let maxScrollDepth = 0;
  const scrollHandler = () => {
    const scrollDepth = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
      maxScrollDepth = scrollDepth;
      if ([25, 50, 75, 100].includes(scrollDepth)) {
        const milestone = scrollDepth;
        analytics.trackScrollDepth(milestone);
      }
    }
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });

  // Track time on page when leaving
  const startTime = Date.now();
  const beforeUnloadHandler = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    analytics.trackTimeOnPage(timeSpent);
  };

  window.addEventListener('beforeunload', beforeUnloadHandler);

  // Cleanup function
  return () => {
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('beforeunload', beforeUnloadHandler);
    
    // Track final time on page
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    if (timeSpent > 5) { // Only track if user stayed more than 5 seconds
      analytics.trackTimeOnPage(timeSpent);
    }
  };
}
