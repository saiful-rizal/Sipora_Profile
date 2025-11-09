import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="bg-[#0a0f1a] py-16 md:py-20">
      <div className="section-container">
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-600/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
                Siap meningkatkan pengalaman membaca Anda?
              </h2>
              <p className="text-blue-300 mb-6 max-w-xl">
                Bergabunglah dengan ribuan pengguna yang sudah menggunakan SIPORA untuk mengelola dan menemukan koleksi buku terbaik dengan mudah dan cepat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Mulai Sekarang
                </Button>
                <Button variant="outline" className="border-gray-300 text-blue-500 hover:bg-white hover:text-blue-900 hover:border-white">
                  Lihat Koleksi
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&h=300&q=80"
                alt="Library Preview"
                className="rounded-lg w-full card-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
