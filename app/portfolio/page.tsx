import { Metadata } from 'next'
import { ExternalLink, Code, Smartphone, Globe, Palette } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio - ORDERS.ID | Showcase Karya Terbaik Kami',
  description: 'Lihat portfolio karya terbaik ORDERS.ID dalam web development, mobile app, dan UI/UX design. Dari startup hingga enterprise, kami telah membantu 150+ klien.',
  keywords: ['portfolio web development', 'portfolio mobile app', 'portfolio UI/UX', 'karya digital agency'],
}

const portfolioCategories = [
  { id: 'all', name: 'Semua', icon: Code },
  { id: 'web-app', name: 'Web App', icon: Globe },
  { id: 'mobile-app', name: 'Mobile App', icon: Smartphone },
  { id: 'ui-ux', name: 'UI/UX Design', icon: Palette }
]

const portfolioItems = [
  {
    id: '1',
    title: 'EduCourse Mobile App',
    category: 'mobile-app',
    description: 'Aplikasi pembelajaran online dengan fitur live streaming dan interactive quiz untuk meningkatkan engagement siswa.',
    image: '/images/portfolio/educourse-mobile.jpg',
    technologies: ['React Native', 'Node.js', 'Firebase', 'WebRTC'],
    client: 'EduTech Startup',
    year: '2024',
    featured: true,
    results: {
      userGrowth: '300%',
      engagement: '85%',
      rating: '4.8/5'
    }
  },
  {
    id: '2', 
    title: 'FreshMart E-commerce',
    category: 'web-app',
    description: 'Platform e-commerce dengan sistem inventory real-time dan payment gateway terintegrasi untuk toko retail modern.',
    image: '/images/portfolio/freshmart-ecommerce.jpg',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Redis'],
    client: 'FreshMart Retail',
    year: '2024',
    featured: true,
    results: {
      salesIncrease: '250%',
      orderVolume: '500+ daily',
      customerSatisfaction: '94%'
    }
  },
  {
    id: '3',
    title: 'HealthCare Dashboard',
    category: 'ui-ux',
    description: 'Dashboard admin untuk manajemen pasien dan jadwal dokter dengan interface yang user-friendly.',
    image: '/images/portfolio/healthcare-dashboard.jpg',
    technologies: ['Figma', 'React', 'Chart.js', 'Material-UI'],
    client: 'Healthcare Clinic',
    year: '2024',
    featured: false,
    results: {
      efficiency: '60%',
      userSatisfaction: '92%',
      timeReduction: '40%'
    }
  },
  {
    id: '4',
    title: 'RestoBite Mobile App',
    category: 'mobile-app',
    description: 'Aplikasi food delivery dengan fitur real-time tracking dan loyalty program terintegrasi.',
    image: '/images/portfolio/restobite-mobile.jpg',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
    client: 'Restaurant Chain',
    year: '2023',
    featured: true,
    results: {
      orders: '10k+ monthly',
      retention: '78%',
      rating: '4.7/5'
    }
  },
  {
    id: '5',
    title: 'TechStart Brand Identity',
    category: 'ui-ux',
    description: 'Rebranding complete untuk startup teknologi dengan fokus pada identitas modern dan memorable.',
    image: '/images/portfolio/techstart-branding.jpg',
    technologies: ['Adobe Illustrator', 'Figma', 'After Effects'],
    client: 'TechStart Inc.',
    year: '2023',
    featured: false,
    results: {
      brandRecognition: '180%',
      marketPresence: 'Increased',
      clientSatisfaction: '100%'
    }
  },
  {
    id: '6',
    title: 'FinanceFlow Dashboard',
    category: 'web-app',
    description: 'Dashboard keuangan untuk monitoring investasi dan portfolio dengan real-time data visualization.',
    image: '/images/portfolio/financeflow-dashboard.jpg',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    client: 'Investment Firm',
    year: '2023',
    featured: false,
    results: {
      userAdoption: '95%',
      efficiency: '70%',
      accuracy: '99.9%'
    }
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Portfolio Karya Kami
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Jelajahi koleksi karya terbaik yang telah membantu 150+ klien mencapai tujuan digital mereka
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">85+</div>
                <div className="text-sm opacity-80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm opacity-80">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4">
                        {item.category === 'mobile-app' && <Smartphone className="w-8 h-8 text-white" />}
                        {item.category === 'web-app' && <Globe className="w-8 h-8 text-white" />}
                        {item.category === 'ui-ux' && <Palette className="w-8 h-8 text-white" />}
                      </div>
                      <div className="text-white/80 text-sm font-medium">
                        {item.category === 'mobile-app' && 'Mobile App'}
                        {item.category === 'web-app' && 'Web App'}
                        {item.category === 'ui-ux' && 'UI/UX Design'}
                      </div>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(item.results).slice(0, 2).map(([key, value], idx) => (
                        <div key={idx} className="text-center bg-gray-50 rounded-lg p-2">
                          <div className="font-semibold text-blue-600">{value}</div>
                          <div className="text-gray-600 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    Lihat Detail
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tertarik dengan Karya Kami?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Mari wujudkan visi digital Anda bersama tim expert ORDERS.ID
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontak"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Mulai Project
            </Link>
            <Link 
              href="/layanan"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
