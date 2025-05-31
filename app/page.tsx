import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import DarkModeToggle from '@/components/DarkModeToggle';
import HeroSection from '@/components/HeroSection';
import WebDevelopmentSection from '@/components/WebDevelopmentSection';
import AppDevelopmentSection from '@/components/AppDevelopmentSection';
import DigitalDesignSection from '@/components/DigitalDesignSection';
import ValueAddedSectionWrapper from '@/components/ValueAddedSectionWrapper';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import { Newsletter } from '@/components/Newsletter';
import StickyCTABar from '@/components/StickyCTABar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Beranda - ORDERS.ID | Solusi Digital Terbaik untuk Bisnis Anda',
  description: 'ORDERS.ID menyediakan layanan pembuatan website, aplikasi mobile, dan design digital profesional. Solusi terbaik untuk mengembangkan bisnis Anda di era digital.',
  openGraph: {
    title: 'ORDERS.ID - Solusi Digital Terbaik',
    description: 'Layanan website, aplikasi mobile, dan desain digital profesional',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <Navbar />
      
      {/* Dark Mode Toggle - Fixed Position */}
      <DarkModeToggle />
      
      {/* Hero Section */}
      <HeroSection />
        {/* Services Sections */}
      <WebDevelopmentSection />
      <AppDevelopmentSection />
      <DigitalDesignSection />
      <ValueAddedSectionWrapper />
        {/* Portfolio */}
      <PortfolioShowcase />
      
      {/* Newsletter */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>
      
      {/* Sticky CTA Bar */}
      <StickyCTABar />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
