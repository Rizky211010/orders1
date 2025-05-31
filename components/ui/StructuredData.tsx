'use client';

import { useEffect } from 'react';
import { generateStructuredData, type StructuredDataProps } from '@/lib/structured-data';

interface StructuredDataComponentProps extends StructuredDataProps {
  id?: string;
}

export const StructuredData: React.FC<StructuredDataComponentProps> = ({ id = 'structured-data', ...props }) => {
  useEffect(() => {
    const structuredData = generateStructuredData(props);
    
    if (structuredData) {
      // Remove existing script if it exists
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      // Create and insert new script
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const script = document.getElementById(id);
      if (script) {
        script.remove();
      }
    };
  }, [id, props]);

  return null; // This component doesn't render anything visible
};

// Hook for adding structured data programmatically
export const useStructuredData = (data: StructuredDataProps, id?: string) => {
  useEffect(() => {
    const scriptId = id || `structured-data-${data.type}`;
    const structuredData = generateStructuredData(data);
    
    if (structuredData) {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        const script = document.getElementById(scriptId);
        if (script) {
          script.remove();
        }
      };
    }
  }, [data, id]);
};

// Breadcrumb component with structured data
interface BreadcrumbProps {
  items: Array<{ name: string; url: string }>;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={items}
        id="breadcrumb-structured-data"
      />
      <nav className={`flex ${className}`} aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.url}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

// FAQ component with structured data
interface FAQProps {
  faqs: Array<{ question: string; answer: string }>;
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ faqs, className = '' }) => {
  return (
    <>
      <StructuredData
        type="FAQPage"
        faqs={faqs}
        id="faq-structured-data"
      />
      <div className={`space-y-4 ${className}`}>
        {faqs.map((faq, index) => (
          <details key={index} className="group border border-gray-200 rounded-lg">
            <summary className="flex justify-between items-center w-full px-4 py-3 text-left bg-gray-50 rounded-lg cursor-pointer group-open:rounded-b-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span className="font-medium text-gray-900">{faq.question}</span>
              <svg
                className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 py-3 text-gray-700 bg-white">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </>
  );
};