import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] overflow-hidden min-h-[90vh] flex items-center">
      {/* Efek background blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600 opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500 opacity-15 rounded-full blur-[80px]" />
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-blue-400 opacity-10 rounded-full blur-[70px]" />

      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Teks utama */}
          <div className="animate-fade-in">
            <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-400/20">
              Selamat Datang di SIPORA
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-white">
              Jelajahi Dunia Pengetahuan{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2 relative top-2 inline-block">
                Bersama SIPORA
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-300 max-w-2xl mx-auto">
              Sistem Informasi Perpustakaan SIPORA membantu Anda menemukan,
              meminjam, dan mengelola koleksi buku dengan cepat, mudah, dan modern.
            </p>

            {/* Tombol */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Jelajahi Koleksi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white"
              >
                Tentang SIPORA
              </Button>
            </div>

            {/* Foto user aktif */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                {["/polije.jpg", "/polije.jpg", "/polije.jpg"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-10 h-10 rounded-full border-2 border-[#0a0f1a]"
                    alt={`User ${i + 1}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-blue-400">500+</span> pembaca aktif di SIPORA
              </p>
            </div>
          </div>

          {/* 3 gambar tanpa teks atau overlay */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {["/polije.jpg", "/polije.jpg", "/polije.jpg"].map((src, i) => (
              <div
                key={i}
                className="bg-[#0f172a] rounded-xl border border-blue-800/30 p-2 shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/20"
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

      {/* Dekorasi tambahan */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-blue-700/30 rounded-full" />
      <div className="absolute top-20 right-10 w-10 h-10 border border-blue-700/30 rounded-full" />
      <div className="absolute top-40 left-20 w-5 h-5 bg-blue-500/20 rounded-full" />
    </div>
  );
};

export default HeroSection;
