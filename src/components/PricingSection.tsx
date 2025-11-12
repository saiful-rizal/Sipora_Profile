import React from "react";
import { Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    "Pengelolaan anggota perpustakaan yang mudah dan efisien",
    "Sistem peminjaman dan pengembalian buku otomatis",
    "Notifikasi pengingat jatuh tempo peminjaman via email/SMS",
    "Laporan lengkap dan dashboard statistik aktivitas perpustakaan",
    "Manajemen koleksi buku lengkap dengan katalog digital",
    "Dukungan multi-user dengan hak akses berbeda (pustakawan, admin)",
    "Otomatisasi perhitungan denda keterlambatan dan pelaporan",
    "Integrasi dengan sistem keamanan seperti SSO dan LDAP",
    "Layanan dukungan teknis cepat dan pelatihan staf perpustakaan",
  ];

  return (
    <section className="bg-white py-20 md:py-28 border-t border-blue-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Judul */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
          Fitur <span className="text-blue-500">Keunggulan</span> SIPORA Repository Assets
        </h2>
        <p className="text-blue-700/80 max-w-3xl mx-auto mb-12 text-lg">
          Solusi lengkap untuk pengelolaan peminjaman buku yang efisien dan modern bagi perpustakaan Anda.
        </p>

        {/* Daftar fitur */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto text-blue-800">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start bg-blue-50 hover:bg-blue-100 p-4 rounded-xl border border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Check className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tombol */}
        <div className="mt-16">
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition-all duration-300 hover:shadow-lg"
          >
            Hubungi Kami untuk Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
