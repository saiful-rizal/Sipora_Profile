import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="bg-white pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="section-container">
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Teks Kiri */}
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
                Siap meningkatkan pengalaman membaca Anda?
              </h2>
              <p className="text-blue-700 mb-6 max-w-xl">
                Temukan koleksi terbaik dan kelola bacaan Anda dengan mudah bersama SIPORA. 
                Akses cepat, tampilan bersih, dan kenyamanan dalam satu platform.
              </p>
              <div className="flex gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
                  Lihat Koleksi
                </Button>
              </div>
            </div>

            {/* Gambar Kanan */}
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&h=300&q=80"
                alt="Library Preview"
                className="rounded-lg w-full shadow-md"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
