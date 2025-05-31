import { Metadata } from 'next'
import { Users, Target, Award, TrendingUp, Heart, Lightbulb } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tentang Kami - ORDERS.ID | Digital Agency Terpercaya',
  description: 'Pelajari lebih lanjut tentang ORDERS.ID, tim expert, visi misi, dan dedikasi kami dalam memberikan solusi digital terbaik untuk bisnis Anda.',
  keywords: ['tentang orders.id', 'digital agency', 'tim developer', 'company profile'],
}

const stats = [
  { number: '150+', label: 'Projects Completed', icon: Award },
  { number: '85+', label: 'Happy Clients', icon: Heart },
  { number: '5+', label: 'Years Experience', icon: TrendingUp },
  { number: '24/7', label: 'Support Available', icon: Users }
]

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'Kami selalu mengutamakan kualitas dalam setiap project yang kami kerjakan dengan standar industri terbaik.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Kami membangun hubungan jangka panjang dengan klien sebagai partner dalam mencapai tujuan bisnis.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'Kami terus berinovasi dan mengadopsi teknologi terbaru untuk memberikan solusi yang tepat sasaran.'
  },
  {
    icon: Heart,
    title: 'Passion & Dedication',
    description: 'Tim kami bekerja dengan passion dan dedikasi tinggi untuk menghasilkan karya yang membanggakan.'
  }
]

const team = [
  {
    name: 'Ahmad Rizki',
    role: 'CEO & Founder',
    expertise: 'Business Strategy & Product Management',
    image: '/images/team/ceo.jpg',
    description: 'Expert dalam business strategy dengan pengalaman 8+ tahun di industri teknologi.'
  },
  {
    name: 'Sarah Wijaya',
    role: 'Lead Developer', 
    expertise: 'Full-Stack Development & Architecture',
    image: '/images/team/lead-dev.jpg',
    description: 'Full-stack developer berpengalaman dengan expertise di React, Node.js, dan cloud infrastructure.'
  },
  {
    name: 'Budi Santoso',
    role: 'UI/UX Designer',
    expertise: 'User Experience & Visual Design',
    image: '/images/team/designer.jpg',
    description: 'Passionate designer yang fokus pada user experience dan modern design principles.'
  },
  {
    name: 'Lisa Chen',
    role: 'Mobile Developer',
    expertise: 'iOS & Android Development',
    image: '/images/team/mobile-dev.jpg',
    description: 'Mobile development specialist dengan expertise di React Native dan Flutter.'
  }
]

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tentang ORDERS.ID
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Kami adalah digital agency yang berdedikasi untuk membantu bisnis berkembang di era digital dengan solusi teknologi terdepan
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block">
              <p className="text-lg font-semibold">
                "Membangun masa depan digital Indonesia, satu project pada satu waktu"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  ORDERS.ID didirikan pada tahun 2019 dengan visi sederhana namun ambisius: 
                  membantu bisnis Indonesia berkembang melalui solusi digital yang inovatif dan terjangkau.
                </p>
                <p>
                  Berawal dari sebuah tim kecil yang terdiri dari 3 orang developer passionate, 
                  kami kini telah berkembang menjadi digital agency yang dipercaya oleh 85+ klien 
                  dari berbagai industri.
                </p>
                <p>
                  Pengalaman kami mencakup startup rintisan hingga perusahaan enterprise, 
                  dengan total 150+ project yang telah berhasil diselesaikan dengan kepuasan klien 95%.
                </p>
                <p>
                  Kami bangga menjadi bagian dari transformasi digital Indonesia dan terus 
                  berkomitmen untuk memberikan solusi terbaik bagi setiap klien.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tim Berpengalaman</h3>
                  <p className="text-gray-600">
                    Dipimpin oleh professionals dengan pengalaman 5+ tahun di industri teknologi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah kami dalam memberikan layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim Expert Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bertemu dengan para ahli yang akan membantu mewujudkan visi digital Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mx-auto overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <Users className="w-16 h-16 text-blue-500" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.expertise}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visi Kami</h2>
              <p className="text-xl opacity-90 mb-8">
                Menjadi digital agency terdepan di Indonesia yang membantu bisnis lokal 
                berkompetisi di pasar global melalui solusi teknologi inovatif.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <p className="font-semibold">
                  "Membangun ekosistem digital yang sustainable untuk kemajuan bisnis Indonesia"
                </p>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Misi Kami</h2>
              <ul className="space-y-4 text-lg opacity-90">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <span>Memberikan solusi digital yang berkualitas tinggi dan terjangkau</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <span>Membangun partnership jangka panjang dengan setiap klien</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <span>Terus berinovasi dan mengadopsi teknologi terbaru</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <span>Berkontribusi pada kemajuan ekosistem digital Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Siap Berkolaborasi dengan Kami?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Mari wujudkan visi digital Anda bersama tim expert ORDERS.ID
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/kontak"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Hubungi Kami
            </a>
            <a 
              href="/portfolio"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
