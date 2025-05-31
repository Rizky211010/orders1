import { Metadata } from 'next'
import { Globe, Smartphone, Palette, Code, Monitor, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Layanan - ORDERS.ID | Web Development, Mobile App, UI/UX Design',
  description: 'Layanan lengkap digital agency ORDERS.ID: Website Development, Mobile App Development, UI/UX Design, E-commerce, dan solusi digital terbaik untuk bisnis Anda.',
  keywords: ['layanan web development', 'mobile app development', 'UI/UX design', 'e-commerce', 'digital agency'],
}

const services = [
  {
    id: 'website-development',
    icon: Globe,
    title: 'Website Development',
    description: 'Kami membantu Anda membangun website profesional untuk mendukung bisnis Anda secara digital dengan teknologi terdepan dan desain modern.',
    features: [
      'Desain profesional dan modern',
      'Responsive di semua perangkat', 
      'SEO optimized',
      'Content management system',
      'Contact form terintegrasi'
    ],
    packages: [
      { name: 'Company Profile', price: 'Mulai 5 Juta', description: 'Website profesional untuk perusahaan' },
      { name: 'E-commerce', price: 'Mulai 15 Juta', description: 'Toko online lengkap dengan payment gateway' },
      { name: 'Enterprise', price: 'Mulai 50 Juta', description: 'Solusi enterprise dengan fitur custom' }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Solusi aplikasi mobile yang powerful dan user-friendly untuk semua kebutuhan bisnis Anda dengan teknologi cross-platform.',
    features: [
      'Cross-platform compatibility',
      'Native performance',
      'Smooth animations & transitions', 
      'Push notifications',
      'Offline functionality'
    ],
    packages: [
      { name: 'MVP App', price: 'Mulai 25 Juta', description: 'Aplikasi MVP dengan fitur dasar' },
      { name: 'Business App', price: 'Mulai 75 Juta', description: 'Aplikasi bisnis dengan fitur lengkap' },
      { name: 'Enterprise App', price: 'Mulai 200 Juta', description: 'Aplikasi enterprise skala besar' }
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js']
  },
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Wujudkan visi kreatif Anda dengan layanan desain digital yang comprehensive dan professional untuk meningkatkan user experience.',
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Visual design system',
      'Interactive prototypes',
      'Usability testing'
    ],
    packages: [
      { name: 'Landing Page Design', price: 'Mulai 3 Juta', description: 'Desain landing page yang menarik' },
      { name: 'Website Design', price: 'Mulai 10 Juta', description: 'Desain website lengkap dengan sistem' },
      { name: 'App Design', price: 'Mulai 30 Juta', description: 'Desain aplikasi mobile yang user-friendly' }
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle']
  }
]

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Layanan Digital Terbaik
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Solusi lengkap untuk kebutuhan digital bisnis Anda dengan teknologi terdepan dan tim berpengalaman
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💻 Web Development
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📱 Mobile App
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🎨 UI/UX Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilih Layanan Yang Anda Butuhkan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda berkembang di era digital
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Teknologi yang Digunakan:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/layanan/${service.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Pelajari Lebih Lanjut
                    <Code className="w-4 h-4" />
                  </Link>
                </div>

                {/* Packages */}
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Paket Layanan</h4>
                    <div className="space-y-4">
                      {service.packages.map((pkg, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="text-lg font-semibold text-gray-900">{pkg.name}</h5>
                            <span className="text-blue-600 font-bold">{pkg.price}</span>
                          </div>
                          <p className="text-gray-600">{pkg.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
            Siap Memulai Project Anda?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan digital Anda dengan tim expert kami secara gratis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontak"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Konsultasi Gratis
            </Link>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Lihat Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
