import React, { useState } from "react";
import { Menu } from "lucide-react";
import Home from "@/components/HeroSection";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", id: "HeroSection" },
    { name: "Unggulan", id: "features" },
    { name: "Fitur Sipora", id: "pricing" },
    { name: "Testimoni", id: "testimonials" },
    { name: "Pertanyaan", id: "faq" },
    { name: "Blog", id: "footer" },
  ];

  // ✅ Scroll ke section dengan offset agar tidak tertutup navbar
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // tinggi navbar (sesuaikan jika beda)
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 80px; /* supaya tidak ketutup navbar */
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>

      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50 border-b border-blue-100 transition-all duration-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 select-none"
            >
              <img
                src="/logo.polije.png"
                alt="Polije Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                SIPORA
              </span>
            </button>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-blue-700 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Tombol Login */}
            <div className="hidden md:flex items-center">
              <a
                href="http://localhost/siporaweb/frontend/auth.php"
                className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-5 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md"
              >
                Login
              </a>
            </div>

            {/* Tombol Mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-blue-600 rounded-md hover:bg-blue-50 transition"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-blue-50 border-t border-blue-100 animate-fadeIn">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-700 hover:bg-blue-100 transition"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-3 border-t border-blue-100">
                <a
                  href="http://localhost/siporaweb/frontend/auth.php"
                  className="block text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-2 rounded-md font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
