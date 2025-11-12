import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-100 pt-16 pb-8 text-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Sistem Informasi Polije Repository Assets */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                SIPORA
              </span>
            </Link>
            <p className="text-blue-700/80 mb-4">
              Sistem Informasi Polije Repository Assets — platform digital untuk
              pengelolaan, pendataan, dan dokumentasi aset di Politeknik Negeri Jember.
            </p>
            <div className="flex space-x-4">
              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                    0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                    -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                    .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988
                    1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564
                    9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296
                    2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7
                    1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678
                    1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019
                    10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/polijeofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition-colors"
              >
                <i className="fab fa-instagram h-5 w-5"></i>
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Navigasi</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-700 hover:text-blue-500">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/data-aset" className="text-blue-700 hover:text-blue-500">
                  Data Aset
                </Link>
              </li>
              <li>
                <Link to="/dokumentasi" className="text-blue-700 hover:text-blue-500">
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-blue-700 hover:text-blue-500">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Bantuan</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/panduan" className="text-blue-700 hover:text-blue-500">
                  Panduan Pengguna
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-blue-700 hover:text-blue-500">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-900">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-700 hover:text-blue-500">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-700 hover:text-blue-500">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-100 text-center text-blue-600 text-sm">
          <p>
            © {new Date().getFullYear()} Sistem Informasi Polije Repository Assets (SIPORA)
          </p>
          <p>
            Dikembangkan oleh{" "}
            <a
              href="https://www.polije.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              Mahasiswa Politeknik Negeri Jember
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
