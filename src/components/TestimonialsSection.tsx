import React from "react";

const testimonials = [
  {
    text: "Sipora Perpus Takaan telah membantu kami mengelola koleksi buku dengan lebih efisien dan meningkatkan layanan kepada pengunjung.",
    author: "Sarah Johnson",
    position: "Kepala Perpustakaan, Universitas Takaan",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  {
    text: "Fitur pencarian dan peminjaman di Sipora sangat user-friendly, membuat pengunjung mudah menemukan buku yang mereka butuhkan.",
    author: "Michael Chen",
    position: "Staff IT, Perpustakaan Kota",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  {
    text: "Dengan Sipora, kami dapat memantau koleksi buku dan aktivitas peminjaman secara real-time, sangat membantu pengelolaan perpustakaan.",
    author: "Emily Rodriguez",
    position: "Manajer Operasional, Perpustakaan Sekolah",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
  },
];

const StarRating = () => (
  <div className="flex mb-4">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Testimoni <span className="text-blue-400">Pengguna Sipora</span>
          </h2>
          <p className="text-gray-400">
            Berikut pendapat pengguna kami tentang layanan dan fitur Sipora
            Perpus Takaan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg"
            >
              <StarRating />

              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`Foto dari ${testimonial.author}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
