import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Search,
  Users,
  Library,
  CalendarDays,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "Pencarian Cepat",
    description:
      "Temukan buku dengan mudah menggunakan sistem pencarian cerdas berdasarkan judul, penulis, atau kategori.",
  },
  {
    icon: <Library className="h-6 w-6 text-blue-600" />,
    title: "Manajemen Koleksi",
    description:
      "Atur dan kelola koleksi buku perpustakaan secara digital, lengkap dengan informasi ketersediaan dan lokasi rak.",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Manajemen Anggota",
    description:
      "Kelola data anggota perpustakaan, riwayat peminjaman, dan aktivitas pengguna dengan mudah dan aman.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    title: "Akses Buku Digital",
    description:
      "Nikmati kemudahan membaca e-book langsung dari sistem SIPORA kapan pun dan di mana pun.",
  },
  {
    icon: <CalendarDays className="h-6 w-6 text-blue-600" />,
    title: "Pengingat Peminjaman",
    description:
      "Sistem akan mengingatkan Anda sebelum batas waktu pengembalian buku agar terhindar dari denda.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
    title: "Pelacakan Aktivitas",
    description:
      "Pantau statistik peminjaman, buku populer, dan aktivitas perpustakaan secara real-time.",
  },
];

const FeaturesSection = () => {
  const [visible, setVisible] = useState(false);

  // Efek muncul (fade-in + slide-up) saat halaman di-scroll
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("features-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="features-section"
      className="bg-white py-20 border-t border-blue-100 transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Fitur Unggulan <span className="text-blue-500">SIPORA</span>
          </h2>
          <p className="text-blue-700/80">
            Sistem Informasi Perpustakaan SIPORA menyediakan berbagai fitur
            cerdas untuk memudahkan pengelolaan dan akses koleksi buku.
          </p>
        </div>

        {/* Grid Fitur */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className="bg-blue-50 hover:bg-blue-100 p-6 rounded-2xl border border-blue-200 transition-all duration-500 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {feature.title}
              </h3>
              <p className="text-blue-700/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
