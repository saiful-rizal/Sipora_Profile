import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-saas-black/90 backdrop-blur-md sticky top-0 z-50 border-b border-saas-gray transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.polije.png"
              alt="Polije Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent select-none">
              Sipora
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="ml-6 inline-block bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-200 shadow-md"
            >
              Hubungi Kami
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-200 rounded-md hover:bg-saas-gray/60 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-saas-darkGray border-t border-saas-gray animate-fadeIn">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition ${
                  isActive(item.path)
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-blue-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-700">
              <Link
                to="/contact"
                className="block text-center bg-blue-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-500 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
