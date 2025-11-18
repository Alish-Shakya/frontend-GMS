import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Music } from "lucide-react"; // TikTok alternative icon (using Music for TikTok)
import FacebookIcon from "./ui/icons/FacebookIcon";
import InstagramIcon from "./ui/icons/InstagramIcon";
import TiktokIcon from "./ui/icons/TiktokIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300 bg-black/70 text-white fixed w-full z-50">
      {/* Logo */}
      <h1 className="text-xl md:text-3xl font-extrabold tracking-wide text-yellow-500 md:ml-12">
        Planet Fitness
      </h1>

      {/* Center Nav */}
      <nav className="hidden md:flex space-x-6 text-xl gap-8 absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) =>
          item.path.startsWith("#") ? (
            <a
              key={item.name}
              href={item.path}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          )
        )}
      </nav>

      {/* Social Media Icons (Right Side) */}
      <div className="hidden md:flex space-x-4 text-yellow-500 gap-8 mr-12">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <TiktokIcon />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-yellow-500"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
          {navItems.map((item) =>
            item.path.startsWith("#") ? (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {item.name}
              </Link>
            )
          )}
          {/* Socials in Mobile Nav */}
          <div className="flex space-x-4 pt-4 text-yellow-500">
            <a
              href="https://www.facebook.com/alish.shakya.982"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokIcon />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
