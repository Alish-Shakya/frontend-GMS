import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 mt-3 py-3 flex justify-between items-center">
        {/* Logo / Company Name */}
        <div className="text-4xl font-bold text-red-600 cursor-pointer">
          Sahayog
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 text-xl text-white font-semibold">
          <Link to="/login">
            <li className="hover:text-red-600 transition">Home</li>
          </Link>{" "}
          <li className="hover:text-red-600 transition">About</li>
          <li className="hover:text-red-600 transition">Solution</li>
          <li className="hover:text-red-600 transition">What is Sahayog</li>
          <li className="hover:text-red-600 transition">Blog</li>
          <li className="hover:text-red-600 transition">Contact</li>
        </ul>

        {/* Manage Gym Button */}
        <Link
          to="/login"
          className="hidden md:block bg-red-500 text-white font-bold px-5 py-3 hover:bg-red-700 transition"
        >
          Manage your Gym
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col space-y-1 cursor-pointer">
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
