import React from "react";
import { Play } from "lucide-react";
import Navbar from "../Navbar";
import LandingBg from "../../../../public/images/bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-screen h-screen flex items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${LandingBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Navbar inside the image */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="mt-15 relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Empower Your <br />
            <span className="text-red-500">Fitness Business</span> <br />
            with <span className="text-white">Sahayog</span>
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            Manage multiple gyms effortlessly — track members, payments,
            trainers, and performance in one powerful system designed to keep
            your fitness empire growing strong.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-red-900/50 transition-transform transform hover:scale-105">
              Join Now
            </button>

            <button className="flex items-center gap-3 text-gray-100 hover:text-red-400 transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 hover:border-red-400 transition">
                <Play size={22} />
              </div>
              <span className="font-medium">Watch Demo</span>
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="member1"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="member2"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="member3"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            </div>
            <p className="ml-2 text-gray-200 text-lg">
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
