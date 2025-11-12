import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Teks utama */}
          <div className="animate-fade-in">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-200">
              Selamat Datang di Sistem Informasi Polije Repository Assets
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
              Jelajahi Dunia Pengetahuan{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ml-2 relative top-2 inline-block">
                Bersama SIPORA
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Sistem Informasi Perpustakaan SIPORA membantu Anda menemukan,
              meminjam, dan mengelola koleksi buku dengan cepat, mudah, dan modern.
            </p>

            {/* Tombol */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md">
                Jelajahi Koleksi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-500 hover:bg-blue-100"
              >
                Tentang SIPORA
              </Button>
            </div>

            {/* Foto user aktif */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {["/gedung.jpg", "/polije.jpg", "/perpus_baca.jpg"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    alt={`User ${i + 1}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-blue-500">500+</span> pembaca aktif di SIPORA
              </p>
            </div>
          </div>

          {/* 3 gambar */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {["/gedung.jpg", "/polije.jpg", "/perpus_baca.jpg"].map((src, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-blue-200 p-2 shadow-md transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-200"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-lg w-full h-[250px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
