import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600 opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-blue-400 opacity-10 rounded-full blur-[70px]"></div>
      
      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-blue-400/20">
              Selamat Datang di SIPORA
            </span>
            
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-white">
          Jelajahi Dunia Pengetahuan{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2 relative top-2 inline-block">
            Bersama SIPORA
          </span>
        </h1>

            
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-300 max-w-2xl mx-auto">
              Sistem Informasi Perpustakaan SIPORA membantu Anda menemukan, meminjam, dan mengelola koleksi buku dengan cepat, mudah, dan modern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Jelajahi Koleksi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white">
                Tentang SIPORA
              </Button>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=64&h=64"
                  className="w-10 h-10 rounded-full border-2 border-[#0a0f1a]" alt="User" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&h=64"
                  className="w-10 h-10 rounded-full border-2 border-[#0a0f1a]" alt="User" />
                <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=64&h=64"
                  className="w-10 h-10 rounded-full border-2 border-[#0a0f1a]" alt="User" />
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-blue-400">500+</span> pembaca aktif di SIPORA
              </p>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-xl opacity-20 rounded-xl"></div>
              <div className="relative bg-[#0f172a] rounded-xl border border-blue-800/30 p-2 shadow-lg transform transition-all duration-500 hover:scale-[1.01] hover:shadow-blue-500/20 hover:shadow-xl">
                <img 
                  src="public/assets/polije.jpg"
                  alt="Library Preview"
                  className="rounded-lg w-full"
                />
                <div className="absolute bottom-4 left-4 bg-blue-600/80 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
                  Tampilan Sistem SIPORA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-blue-700/30 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-blue-700/30 rounded-full"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-blue-500/20 rounded-full"></div>
    </div>
  );
};

export default HeroSection;
