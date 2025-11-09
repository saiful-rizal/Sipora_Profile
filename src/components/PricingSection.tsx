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
    <section className="bg-gray-900 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Fitur <span className="text-blue-400">Keunggulan</span> Sipora Perpus Takaan
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
          Solusi lengkap untuk pengelolaan peminjaman buku yang efisien dan modern bagi perpustakaan Anda.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-3xl mx-auto text-gray-300 text-lg">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Hubungi Kami untuk Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
