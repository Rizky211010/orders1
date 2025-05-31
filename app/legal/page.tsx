import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import DarkModeToggle from '@/components/DarkModeToggle';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan, Kebijakan Privasi - ORDERS.ID',
  description: 'Baca syarat dan ketentuan penggunaan layanan ORDERS.ID, kebijakan privasi, dan informasi legal lainnya.',
  openGraph: {
    title: 'Legal - ORDERS.ID',
    description: 'Syarat ketentuan dan kebijakan privasi ORDERS.ID',
    type: 'website',
  },
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <DarkModeToggle />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            📋 Legal & Privacy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Informasi legal, syarat ketentuan, dan kebijakan privasi ORDERS.ID
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Table of Contents */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Daftar Isi
          </h2>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <a href="#terms" className="text-blue-600 dark:text-blue-400 hover:underline">
              1. Syarat dan Ketentuan Umum
            </a>
            <a href="#services" className="text-blue-600 dark:text-blue-400 hover:underline">
              2. Ketentuan Layanan
            </a>
            <a href="#payment" className="text-blue-600 dark:text-blue-400 hover:underline">
              3. Ketentuan Pembayaran
            </a>
            <a href="#intellectual" className="text-blue-600 dark:text-blue-400 hover:underline">
              4. Hak Kekayaan Intelektual
            </a>
            <a href="#privacy" className="text-blue-600 dark:text-blue-400 hover:underline">
              5. Kebijakan Privasi
            </a>
            <a href="#cookies" className="text-blue-600 dark:text-blue-400 hover:underline">
              6. Kebijakan Cookie
            </a>
            <a href="#liability" className="text-blue-600 dark:text-blue-400 hover:underline">
              7. Pembatasan Tanggung Jawab
            </a>
            <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              8. Kontak
            </a>
          </div>
        </Card>

        {/* Last Updated */}
        <div className="text-center mb-8 text-gray-500 dark:text-gray-400">
          <p>Terakhir diperbarui: 31 Mei 2025</p>
        </div>

        {/* Terms and Conditions */}
        <section id="terms" className="mb-12">
          <SectionHeader
            title="1. Syarat dan Ketentuan Umum"
            subtitle="Ketentuan dasar penggunaan layanan ORDERS.ID"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Selamat datang di ORDERS.ID. Dengan mengakses dan menggunakan layanan kami, 
                Anda setuju untuk terikat dengan syarat dan ketentuan berikut ini.
              </p>
              
              <h3>1.1 Definisi</h3>
              <ul>                <li><strong>&ldquo;Kami&rdquo;, &ldquo;ORDERS.ID&rdquo;</strong> mengacu pada PT. Digital Orders Indonesia</li>
                <li><strong>&ldquo;Anda&rdquo;, &ldquo;Klien&rdquo;</strong> mengacu pada individu atau entitas yang menggunakan layanan kami</li>
                <li><strong>&ldquo;Layanan&rdquo;</strong> mengacu pada semua produk dan jasa yang disediakan oleh ORDERS.ID</li>
                <li><strong>&ldquo;Website&rdquo;</strong> mengacu pada orders.id dan subdomain terkait</li>
              </ul>

              <h3>1.2 Penerimaan Ketentuan</h3>
              <p>
                Dengan menggunakan layanan kami, Anda menyatakan bahwa:
              </p>
              <ul>
                <li>Anda berusia minimal 18 tahun atau memiliki izin dari wali yang sah</li>
                <li>Anda memiliki kapasitas hukum untuk mengikat kontrak</li>
                <li>Informasi yang Anda berikan adalah akurat dan terkini</li>
                <li>Anda akan mematuhi semua hukum dan regulasi yang berlaku</li>
              </ul>

              <h3>1.3 Perubahan Ketentuan</h3>
              <p>
                ORDERS.ID berhak mengubah syarat dan ketentuan ini sewaktu-waktu. 
                Perubahan akan berlaku efektif setelah dipublikasikan di website ini. 
                Penggunaan layanan yang berkelanjutan setelah perubahan dianggap sebagai penerimaan terhadap ketentuan yang baru.
              </p>
            </div>
          </Card>
        </section>

        {/* Service Terms */}
        <section id="services" className="mb-12">
          <SectionHeader
            title="2. Ketentuan Layanan"
            subtitle="Aturan spesifik untuk setiap jenis layanan yang kami sediakan"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>2.1 Layanan Pengembangan Website</h3>
              <ul>
                <li>Timeline proyek akan disepakati dalam kontrak terpisah</li>
                <li>Revisi unlimited selama fase development (dalam scope yang disepakati)</li>
                <li>Source code akan diserahkan setelah pelunasan 100%</li>
                <li>Garansi bug fixing selama 6 bulan setelah launching</li>
                <li>Training penggunaan CMS/admin panel disediakan</li>
              </ul>

              <h3>2.2 Layanan Pengembangan Aplikasi Mobile</h3>
              <ul>
                <li>Pengembangan native atau cross-platform sesuai kebutuhan</li>
                <li>Testing pada berbagai device dan OS version</li>
                <li>Bantuan publishing ke App Store dan Google Play Store</li>
                <li>Update compatibility dengan OS terbaru selama 1 tahun</li>
                <li>Maintenance dan support berkelanjutan tersedia</li>
              </ul>

              <h3>2.3 Layanan Digital Design</h3>
              <ul>
                <li>Konsep design hingga 3 iterasi mayor</li>
                <li>File design dalam format editable (Figma, AI, PSD)</li>
                <li>Asset export untuk berbagai kebutuhan (web, print, mobile)</li>
                <li>Brand guideline untuk konsistensi visual</li>
                <li>Konsultasi design selama 3 bulan setelah selesai</li>
              </ul>

              <h3>2.4 Ketentuan Umum Layanan</h3>
              <ul>
                <li>Klien wajib menyediakan konten dan material yang diperlukan</li>
                <li>Perubahan scope akan dikenakan biaya tambahan</li>
                <li>Komunikasi utama melalui WhatsApp dan email</li>
                <li>Progress report mingguan untuk proyek jangka panjang</li>
                <li>NDA tersedia untuk proyek yang memerlukan kerahasiaan</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Payment Terms */}
        <section id="payment" className="mb-12">
          <SectionHeader
            title="3. Ketentuan Pembayaran"
            subtitle="Sistem pembayaran, refund policy, dan ketentuan finansial"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>3.1 Struktur Pembayaran</h3>
              <ul>
                <li><strong>Proyek Small (&lt; Rp 10 juta):</strong> 50% di awal, 50% setelah selesai</li>
                <li><strong>Proyek Medium (Rp 10-50 juta):</strong> 30% di awal, 40% progress, 30% selesai</li>
                <li><strong>Proyek Large (&gt; Rp 50 juta):</strong> 25% di awal, 25% analisis, 25% development, 25% selesai</li>
              </ul>

              <h3>3.2 Metode Pembayaran</h3>
              <ul>
                <li>Transfer bank (BCA, Mandiri, BNI, BRI)</li>
                <li>E-wallet (GoPay, OVO, DANA)</li>
                <li>Virtual account</li>
                <li>Cryptocurrency (untuk klien internasional)</li>
              </ul>

              <h3>3.3 Keterlambatan Pembayaran</h3>
              <ul>
                <li>Grace period 7 hari tanpa penalty</li>
                <li>Denda 2% per bulan untuk keterlambatan &gt; 7 hari</li>
                <li>Suspend pengerjaan jika keterlambatan &gt; 30 hari</li>
                <li>Hak untuk menghentikan kontrak jika keterlambatan &gt; 60 hari</li>
              </ul>

              <h3>3.4 Refund Policy</h3>
              <ul>
                <li>100% refund jika cancel sebelum pengerjaan dimulai</li>
                <li>50% refund jika cancel dalam 7 hari pertama pengerjaan</li>
                <li>No refund jika sudah melewati milestone pertama</li>
                <li>Refund akan diproses dalam 14 hari kerja</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Intellectual Property */}
        <section id="intellectual" className="mb-12">
          <SectionHeader
            title="4. Hak Kekayaan Intelektual"
            subtitle="Kepemilikan dan penggunaan karya yang dihasilkan"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>4.1 Kepemilikan Hasil Karya</h3>
              <ul>
                <li>Hak cipta hasil karya sepenuhnya milik klien setelah pelunasan</li>
                <li>Source code, design files, dan asset menjadi milik klien</li>
                <li>ORDERS.ID berhak menggunakan project sebagai portfolio</li>
                <li>Klien dapat meminta non-disclosure untuk project tertentu</li>
              </ul>

              <h3>4.2 Penggunaan Third-Party</h3>
              <ul>
                <li>Framework dan library open source tidak termasuk dalam transfer hak cipta</li>
                <li>Plugin atau template premium akan diinformasikan terpisah</li>
                <li>License third-party menjadi tanggung jawab klien</li>
                <li>ORDERS.ID akan membantu dokumentasi semua dependencies</li>
              </ul>

              <h3>4.3 Trademark dan Brand</h3>
              <ul>
                <li>Klien bertanggung jawab atas clearance trademark</li>
                <li>ORDERS.ID tidak bertanggung jawab atas pelanggaran IP pihak ketiga</li>
                <li>Konten dan material yang disediakan klien harus bebas dari pelanggaran hak cipta</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Privacy Policy */}
        <section id="privacy" className="mb-12">
          <SectionHeader
            title="5. Kebijakan Privasi"
            subtitle="Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>5.1 Informasi yang Kami Kumpulkan</h3>
              <ul>
                <li><strong>Data Pribadi:</strong> Nama, email, nomor telepon, alamat</li>
                <li><strong>Data Bisnis:</strong> Nama perusahaan, industri, kebutuhan project</li>
                <li><strong>Data Teknis:</strong> IP address, browser type, device information</li>
                <li><strong>Data Komunikasi:</strong> Riwayat chat, email, dan panggilan</li>
              </ul>

              <h3>5.2 Penggunaan Data</h3>
              <ul>
                <li>Memberikan layanan dan support yang diminta</li>
                <li>Komunikasi terkait project dan update</li>
                <li>Analisis untuk meningkatkan kualitas layanan</li>
                <li>Marketing yang relevan (dengan consent)</li>
                <li>Compliance dengan regulasi yang berlaku</li>
              </ul>

              <h3>5.3 Perlindungan Data</h3>
              <ul>
                <li>Enkripsi data sensitif dengan standard industri</li>
                <li>Access control yang ketat untuk data klien</li>
                <li>Regular security audit dan monitoring</li>
                <li>Backup data dengan encryption</li>
                <li>Secure disposal data sesuai retention policy</li>
              </ul>

              <h3>5.4 Hak Data Subject</h3>
              <ul>
                <li>Hak akses: melihat data yang kami miliki</li>
                <li>Hak koreksi: memperbaiki data yang tidak akurat</li>
                <li>Hak penghapusan: menghapus data personal</li>
                <li>Hak portabilitas: mendapatkan copy data dalam format yang dapat dibaca</li>
                <li>Hak objection: menolak penggunaan data untuk tujuan tertentu</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Cookie Policy */}
        <section id="cookies" className="mb-12">
          <SectionHeader
            title="6. Kebijakan Cookie"
            subtitle="Penggunaan cookie dan teknologi tracking lainnya"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>6.1 Jenis Cookie yang Digunakan</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Performance Cookies:</strong> Mengumpulkan data anonim untuk analisis</li>
                <li><strong>Functional Cookies:</strong> Mengingat preferensi dan settings</li>
                <li><strong>Marketing Cookies:</strong> Tracking untuk iklan yang relevan</li>
              </ul>

              <h3>6.2 Third-Party Cookies</h3>
              <ul>
                <li>Google Analytics untuk website analytics</li>
                <li>Facebook Pixel untuk remarketing</li>
                <li>Google Ads untuk tracking konversi</li>
                <li>Hotjar untuk user behavior analysis</li>
              </ul>

              <h3>6.3 Mengelola Cookie</h3>
              <ul>
                <li>Browser settings untuk disable cookies</li>
                <li>Opt-out tools dari third-party providers</li>
                <li>Cookie preference center di website kami</li>
                <li>Regular review dan cleanup cookies</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Liability */}
        <section id="liability" className="mb-12">
          <SectionHeader
            title="7. Pembatasan Tanggung Jawab"
            subtitle="Batasan tanggung jawab dan force majeure"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>7.1 Pembatasan Umum</h3>
              <ul>
                <li>Tanggung jawab maksimal sebesar nilai kontrak</li>
                <li>Tidak bertanggung jawab atas kerugian tidak langsung</li>
                <li>Tidak menjamin keuntungan atau hasil bisnis tertentu</li>
                <li>Force majeure: bencana alam, pandemi, perang, dll.</li>
              </ul>

              <h3>7.2 Disclaimer</h3>
              <ul>
                <li>Layanan diberikan &ldquo;as is&rdquo; tanpa warranty tersirat</li>
                <li>Tidak menjamin kompatibilitas dengan semua sistem</li>
                <li>Performa dapat bervariasi tergantung hosting dan infrastruktur</li>
                <li>Third-party services di luar kontrol kami</li>
              </ul>

              <h3>7.3 Indemnifikasi</h3>
              <ul>
                <li>Klien melindungi ORDERS.ID dari klaim pihak ketiga</li>
                <li>Berlaku untuk konten yang disediakan klien</li>
                <li>Berlaku untuk pelanggaran hak cipta atau trademark</li>
                <li>Berlaku untuk penggunaan layanan yang melanggar hukum</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-12">
          <SectionHeader
            title="8. Informasi Kontak"
            subtitle="Hubungi kami untuk pertanyaan terkait legal dan privacy"
          />
          <Card className="p-6 mt-6">
            <div className="prose dark:prose-invert max-w-none">
              <h3>Data Protection Officer</h3>
              <p>
                Untuk pertanyaan terkait privacy dan perlindungan data personal:
              </p>
              <ul>
                <li><strong>Email:</strong> privacy@orders.id</li>
                <li><strong>WhatsApp:</strong> +62 812-3456-7890</li>
                <li><strong>Alamat:</strong> Jl. Sudirman No. 123, Jakarta Selatan 12190</li>
              </ul>

              <h3>Legal Department</h3>
              <p>
                Untuk pertanyaan terkait kontrak dan legal lainnya:
              </p>
              <ul>
                <li><strong>Email:</strong> legal@orders.id</li>
                <li><strong>Phone:</strong> +62 21-8765-4321</li>
                <li><strong>Response Time:</strong> Maksimal 48 jam pada hari kerja</li>
              </ul>

              <h3>Penyelesaian Sengketa</h3>
              <p>
                Sengketa akan diselesaikan melalui:
              </p>
              <ol>
                <li>Negosiasi langsung antara para pihak</li>
                <li>Mediasi melalui lembaga mediasi yang disepakati</li>
                <li>Arbitrase di Badan Arbitrase Nasional Indonesia (BANI)</li>
                <li>Pengadilan Negeri Jakarta Selatan (sebagai upaya terakhir)</li>
              </ol>
            </div>
          </Card>
        </section>

        {/* Effective Date */}
        <Card className="p-6 text-center bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Dokumen ini berlaku efektif sejak tanggal: <strong>1 Januari 2023</strong>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Untuk pertanyaan lebih lanjut, hubungi tim legal kami di legal@orders.id
          </p>
        </Card>
      </div>

      <Footer />
    </main>
  );
}
