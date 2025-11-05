import React, { useState } from "react";
import { Link } from "react-router";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-6 mt-3 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold text-red-600 cursor-pointer">
          Sahayog
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-xl text-white font-semibold">
          <Link to="/"><li className="hover:text-red-600 transition">Home</li></Link>
          <li className="hover:text-red-600 transition cursor-pointer">About</li>
          <li className="hover:text-red-600 transition cursor-pointer">Solution</li>
          <li className="hover:text-red-600 transition cursor-pointer">What is Sahayog</li>
          <li className="hover:text-red-600 transition cursor-pointer">Blog</li>
          <li className="hover:text-red-600 transition cursor-pointer">Contact</li>
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
        <a href="#" onClick={toggleMenu} className="hover:text-red-400">
          About
        </a>
        <a href="#" onClick={toggleMenu} className="hover:text-red-400">
          Solution
        </a>
        <a href="#" onClick={toggleMenu} className="hover:text-red-400">
          What is Sahayog
        </a>
        <a href="#" onClick={toggleMenu} className="hover:text-red-400">
          Blog
        </a>
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
 