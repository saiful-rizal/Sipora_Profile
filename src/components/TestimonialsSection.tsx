import React from "react";

const testimonials = [
  {
    text: "Sipora Perpus Takaan sangat membantu saya dalam mencari dan meminjam buku. Tidak perlu lagi antre di perpustakaan, semuanya bisa dilakukan secara online.",
    author: "Saiful Rizal",
    position: "Mahasiswa Politeknik Negeri Jember",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Tampilannya sederhana dan mudah dipahami. Saya bisa menemukan buku yang saya butuhkan dengan cepat dan praktis.",
    author: "Ratu",
    position: "Mahasiswi Politeknik Negeri Jember",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    text: "Sebagai mahasiswa yang sering meminjam buku, Sipora benar-benar mempermudah proses peminjaman dan pengembalian. Sangat efisien!",
    author: "Robit",
    position: "Mahasiswa Politeknik Negeri Jember",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    text: "Dengan adanya Sipora, saya tidak perlu datang langsung ke perpustakaan hanya untuk mengecek ketersediaan buku. Cukup lewat HP saja.",
    author: "Talitha",
    position: "Mahasiswi Politeknik Negeri Jember",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    text: "Desain Sipora keren dan responsif. Membuat saya semakin semangat membaca dan memanfaatkan koleksi buku digital kampus.",
    author: "Hilda",
    position: "Mahasiswi Politeknik Negeri Jember",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    text: "Sipora benar-benar membantu saya dalam mencari referensi tugas kuliah. Semua data buku bisa diakses dengan cepat dan mudah.",
    author: "Anang",
    position: "Mahasiswa Politeknik Negeri Jember",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
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
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Testimoni <span className="text-blue-500">Pengguna Sipora</span>
          </h2>
          <p className="text-gray-600">
            Berikut adalah pengalaman para mahasiswa yang telah menggunakan
            Sipora Perpus Takaan untuk membantu kegiatan belajar mereka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-md"
            >
              <StarRating />
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`Foto dari ${testimonial.author}`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-blue-800">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
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
