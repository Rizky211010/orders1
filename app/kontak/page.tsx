import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontak Kami - ORDERS.ID | Hubungi Digital Agency Terpercaya',
  description: 'Hubungi tim ORDERS.ID untuk konsultasi gratis seputar kebutuhan digital bisnis Anda. Website, mobile app, UI/UX design, dan layanan digital lainnya.',
  keywords: ['kontak orders.id', 'konsultasi digital', 'hubungi digital agency', 'contact orders'],
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Telepon',
    details: ['+62 812-3456-7890', '+62 21-1234-5678'],
    description: 'Senin - Jumat: 09:00 - 18:00 WIB'
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@orders.id', 'support@orders.id'],
    description: 'Respon dalam 24 jam'
  },
  {
    icon: MapPin,
    title: 'Alamat',
    details: ['Jl. Sudirman No. 123', 'Jakarta Pusat 10220'],
    description: 'Kantor pusat kami'
  },
  {
    icon: Clock,
    title: 'Jam Operasional',
    details: ['Senin - Jumat: 09:00 - 18:00', 'Sabtu: 09:00 - 15:00'],
    description: 'Minggu libur'
  }
]

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan website?',
    answer: 'Waktu pengerjaan website bervariasi tergantung kompleksitas, biasanya 2-8 minggu untuk website standar.'
  },
  {
    question: 'Apakah ada garansi untuk project yang dikerjakan?',
    answer: 'Ya, kami memberikan garansi 1 tahun untuk maintenance dan bug fixing setelah project selesai.'
  },
  {
    question: 'Bagaimana sistem pembayaran project?',
    answer: 'Pembayaran dilakukan secara bertahap: 50% di awal, 30% saat progress 70%, dan 20% saat selesai.'
  },
  {
    question: 'Apakah bisa konsultasi gratis terlebih dahulu?',
    answer: 'Tentu! Kami menyediakan konsultasi gratis untuk memahami kebutuhan project Anda.'
  }
]

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Siap membantu mewujudkan visi digital Anda. Mari diskusikan project impian Anda bersama tim expert kami
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                📞 Konsultasi Gratis
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                💬 Respon Cepat 24 Jam
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                🎯 Solusi Tepat Sasaran
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Kirim Pesan
                  </h2>
                  <p className="text-gray-600">
                    Ceritakan kebutuhan project Anda, dan kami akan memberikan solusi terbaik
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        No. Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Nama perusahaan"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Pilih layanan</option>
                      <option value="website">Website Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="consultation">Konsultasi</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Ceritakan kebutuhan project Anda secara detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Kirim Pesan
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Dengan mengirim pesan, Anda menyetujui <a href="#" className="text-blue-600 hover:underline">kebijakan privasi</a> kami
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Butuh Bantuan Segera?
                </h3>
                <p className="opacity-90 mb-6">
                  Tim customer service kami siap membantu Anda 24/7 melalui WhatsApp
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Chat WhatsApp
                  </a>
                  <a 
                    href="tel:+6281234567890"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Telepon Sekarang
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Peta Lokasi</p>
                  <p className="text-sm text-gray-500">Jl. Sudirman No. 123, Jakarta Pusat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum seputar layanan kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Masih ada pertanyaan lain?
            </p>
            <a 
              href="#contact-form"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >              Hubungi kami langsung
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
