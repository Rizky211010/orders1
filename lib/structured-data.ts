export interface StructuredDataProps {
  type: 'WebSite' | 'WebPage' | 'Service' | 'Article' | 'BreadcrumbList' | 'FAQPage';
  name?: string;
  description?: string;
  url?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  services?: Array<{ name: string; description: string; price?: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export const generateStructuredData = (props: StructuredDataProps) => {
  const baseContext = "https://schema.org";
  
  switch (props.type) {
    case 'WebSite':
      return {
        "@context": baseContext,
        "@type": "WebSite",
        "name": props.name || "ORDERS.ID",
        "url": props.url || "https://orders.id",
        "description": props.description,
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://orders.id/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      };

    case 'WebPage':
      return {
        "@context": baseContext,
        "@type": "WebPage",
        "name": props.name,
        "description": props.description,
        "url": props.url,
        "mainEntity": {
          "@type": "Organization",
          "name": "ORDERS.ID"
        }
      };

    case 'Service':
      return {
        "@context": baseContext,
        "@type": "Service",
        "name": props.name,
        "description": props.description,
        "provider": {
          "@type": "Organization",
          "name": "ORDERS.ID",
          "url": "https://orders.id"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Indonesia"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Services",
          "itemListElement": props.services?.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.name,
              "description": service.description
            },
            "position": index + 1
          }))
        }
      };

    case 'Article':
      return {
        "@context": baseContext,
        "@type": "Article",
        "headline": props.name,
        "description": props.description,
        "image": props.image,
        "datePublished": props.datePublished,
        "dateModified": props.dateModified,
        "author": {
          "@type": "Organization",
          "name": props.author || "ORDERS.ID"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ORDERS.ID",
          "logo": {
            "@type": "ImageObject",
            "url": "https://orders.id/images/logo.png"
          }
        }
      };

    case 'BreadcrumbList':
      return {
        "@context": baseContext,
        "@type": "BreadcrumbList",
        "itemListElement": props.breadcrumbs?.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };

    case 'FAQPage':
      return {
        "@context": baseContext,
        "@type": "FAQPage",
        "mainEntity": props.faqs?.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

    default:
      return null;
  }
};

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ORDERS.ID",
  "image": "https://orders.id/images/logo.png",
  "description": "Solusi digital profesional untuk website, aplikasi, dan desain digital",
  "url": "https://orders.id",
  "telephone": "+62-xxx-xxxx-xxxx",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.2088,
    "longitude": 106.8456
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://instagram.com/orders.id",
    "https://linkedin.com/company/orders-id"
  ]
};

export const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Digital Services by ORDERS.ID",
  "itemListElement": [
    {
      "@type": "Service",
      "name": "Website Development",
      "description": "Pembuatan website profesional, responsif, dan SEO-optimized",
      "provider": {
        "@type": "Organization",
        "name": "ORDERS.ID"
      }
    },
    {
      "@type": "Service", 
      "name": "Mobile App Development",
      "description": "Pengembangan aplikasi mobile iOS dan Android native maupun cross-platform",
      "provider": {
        "@type": "Organization",
        "name": "ORDERS.ID"
      }
    },
    {
      "@type": "Service",
      "name": "UI/UX Design",
      "description": "Desain antarmuka dan pengalaman pengguna yang menarik dan user-friendly",
      "provider": {
        "@type": "Organization",
        "name": "ORDERS.ID"
      }
    }
  ]
};