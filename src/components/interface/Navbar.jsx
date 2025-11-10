import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 mt-3 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold text-red-600 cursor-pointer">
          Sahayog
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-xl text-white font-semibold">
          <li>
            <Link
              to="/"
              className={`transition ${
                isActive("/") ? "text-red-600" : "hover:text-red-600"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`transition ${
                isActive("/about") ? "text-red-600" : "hover:text-red-600"
              }`}
            >
              About
            </Link>
          </li>

          <li>
            <a href="#" className="hover:text-red-600 transition">
              Solution
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-red-600 transition">
              What is Sahayog
            </a>
          </li>

          <li>
            <Link
              to="/blog"
              className={`transition ${
                isActive("/blog") ? "text-red-600" : "hover:text-red-600"
              }`}
            >
              Blog
            </Link>
          </li>

          <li>
            <a href="#" className="hover:text-red-600 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Manage Gym Button (Desktop) */}
        <Link
          to="/login"
          className="hidden md:block bg-red-500 text-white font-bold px-5 py-3 rounded hover:bg-red-700 transition"
        >
          Manage your Gym
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 cursor-pointer focus:outline-none"
        >
          {isOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <>
              <span className="w-6 h-0.5 bg-gray-300"></span>
              <span className="w-6 h-0.5 bg-gray-300"></span>
              <span className="w-6 h-0.5 bg-gray-300"></span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-white transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-6 text-gray-300"
        >
          <X size={28} />
        </button>

        <Link to="/" onClick={toggleMenu} className="hover:text-red-400">
          Home
        </Link>

        <Link to="/about" onClick={toggleMenu} className="hover:text-red-400">
          About
        </Link>

        <a href="#" onClick={toggleMenu} className="hover:text-red-400">
          Solution
        </a>

        <a href="#" onClick={toggleMenu} className="hover:text-red-400">
          What is Sahayog
        </a>

        <Link to="/blog" onClick={toggleMenu} className="hover:text-red-400">
          Blog
        </Link>

        <a href="#" onClick={toggleMenu} className="hover:text-red-400">
          Contact
        </a>

        <Link
          to="/login"
          onClick={toggleMenu}
          className="bg-red-500 px-6 py-3 rounded font-bold hover:bg-red-700 transition"
        >
          Manage your Gym
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
