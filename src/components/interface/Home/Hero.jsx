import React from "react";
import { Play } from "lucide-react";
import Navbar from "../Navbar";
import LandingBg from "../../../../public/images/bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${LandingBg})`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="mt-17 relative z-10 w-full px-5 sm:px-8 md:px-12 text-white flex flex-col justify-center items-start">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Empower Your <br />
            <span className="text-red-500">Fitness Business</span> <br />
            with <span className="text-white">Sahayog</span>
          </h1>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Manage multiple gyms effortlessly — track members, payments,
            trainers, and performance in one powerful system designed to keep
            your fitness empire growing strong.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg shadow-red-900/50 transition-transform transform hover:scale-105">
              Join Now
            </button>

            <button className="flex items-center gap-3 text-gray-100 hover:text-red-400 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-gray-200 hover:border-red-400 transition">
                <Play size={20} className="sm:w-[22px] sm:h-[22px]" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                Watch Demo
              </span>
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="member1"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="member2"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="member3"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white"
              />
            </div>
            <p className="ml-1 sm:ml-2 text-gray-200 text-base sm:text-lg">
              <span className="text-white font-semibold">2300+</span> Gyms Trust
              Sahayog
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
