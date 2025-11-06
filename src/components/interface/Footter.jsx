import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0B0B0B] text-gray-400 py-16 px-6 md:px-16 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* ===== Brand Section ===== */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3 tracking-wide">
            FitManage
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-sm">
            The all-in-one platform built for gyms and fitness centers — manage
            members, trainers, and payments effortlessly.
          </p>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "Features", "Pricing", "Contact"].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Socials ===== */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: <Facebook className="w-5 h-5" />, href: "#" },
              { icon: <Instagram className="w-5 h-5" />, href: "#" },
              { icon: <Linkedin className="w-5 h-5" />, href: "#" },
              { icon: <Mail className="w-5 h-5" />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Bottom Line ===== */}
      <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FitManage. All rights reserved.
      </div>

      {/* ===== Glow Effect ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-red-500/5 blur-3xl rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
