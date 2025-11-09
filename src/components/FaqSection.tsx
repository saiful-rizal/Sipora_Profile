import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara menggunakan SIPORA?",
    answer: "Anda dapat langsung membuat akun dan mulai menjelajahi koleksi buku yang tersedia. Sistem kami dirancang untuk mudah digunakan oleh mahasiswa, dosen, dan pustakawan."
  },
  {
    question: "Apakah saya bisa meminjam buku secara online?",
    answer: "Ya, Anda dapat melakukan peminjaman online jika buku tersedia dalam koleksi digital. Untuk koleksi fisik, Anda cukup melakukan reservasi melalui sistem dan mengambilnya di perpustakaan."
  },
  {
    question: "Berapa lama masa peminjaman buku?",
    answer: "Masa peminjaman standar adalah 7 hari untuk mahasiswa dan 14 hari untuk dosen. Anda dapat memperpanjang masa peminjaman jika buku belum dipesan oleh pengguna lain."
  },
  {
    question: "Apakah ada biaya keterlambatan?",
    answer: "Ya, setiap keterlambatan akan dikenakan denda sesuai kebijakan perpustakaan. Pastikan Anda mengembalikan buku tepat waktu untuk menghindari denda."
  },
  {
    question: "Bagaimana jika saya lupa kata sandi?",
    answer: "Klik tombol 'Lupa Kata Sandi' di halaman login SIPORA dan ikuti langkah-langkah untuk mengatur ulang kata sandi Anda melalui email kampus."
  },
  {
    question: "Apakah saya bisa mengusulkan buku baru?",
    answer: "Tentu! Anda dapat mengajukan usulan buku baru melalui menu 'Usulan Buku'. Tim pustakawan akan meninjau dan mempertimbangkannya untuk penambahan koleksi."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-[#0a0f1a] py-16 md:py-24 border-t border-blue-900/60">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pertanyaan yang Sering <span className="text-blue-500">Diajukan</span>
          </h2>
          <p className="text-gray-400">
            Temukan jawaban dari pertanyaan umum seputar penggunaan sistem perpustakaan SIPORA.  
            Jika masih ada hal yang belum jelas, silakan hubungi tim pustakawan kami.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-[#0f172a] rounded-xl p-6 md:p-8 border border-blue-700/60 shadow-lg shadow-blue-900/40">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-blue-900/50 last:border-0"
              >
                <AccordionTrigger className="text-left text-white hover:text-blue-500 py-4 transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
