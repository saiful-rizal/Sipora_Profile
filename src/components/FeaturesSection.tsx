import React from 'react';
import { BookOpen, Search, Users, Library, CalendarDays, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-blue-400" />,
    title: 'Pencarian Cepat',
    description: 'Temukan buku dengan mudah menggunakan sistem pencarian cerdas berdasarkan judul, penulis, atau kategori.'
  },
  {
    icon: <Library className="h-6 w-6 text-blue-400" />,
    title: 'Manajemen Koleksi',
    description: 'Atur dan kelola koleksi buku perpustakaan secara digital, lengkap dengan informasi ketersediaan dan lokasi rak.'
  },
  {
    icon: <Users className="h-6 w-6 text-blue-400" />,
    title: 'Manajemen Anggota',
    description: 'Kelola data anggota perpustakaan, riwayat peminjaman, dan aktivitas pengguna dengan mudah dan aman.'
  },
  {
    icon: <BookOpen className="h-6 w-6 text-blue-400" />,
    title: 'Akses Buku Digital',
    description: 'Nikmati kemudahan membaca e-book langsung dari sistem SIPORA kapan pun dan di mana pun.'
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-blue-400" />,
    title: 'Pengingat Peminjaman',
    description: 'Sistem akan mengingatkan Anda sebelum batas waktu pengembalian buku agar terhindar dari denda.'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
    title: 'Pelacakan Aktivitas',
    description: 'Pantau statistik peminjaman, buku populer, dan aktivitas perpustakaan secara real-time.'
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#0a0f1a] py-16 md:py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Fitur Unggulan <span className="text-blue-400">SIPORA</span>
          </h2>
          <p className="text-gray-400">
            Sistem Informasi Perpustakaan SIPORA menyediakan berbagai fitur cerdas untuk memudahkan pengelolaan dan akses koleksi buku.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0f172a] p-6 rounded-xl border border-blue-900/40 hover:border-blue-500/60 transition-all duration-300 shadow-lg"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-blue-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
