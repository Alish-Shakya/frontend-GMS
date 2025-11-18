import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen text-white flex items-center overflow-x-hidden"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1558611848-73f7eb4001a1")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center flex flex-col items-center justify-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight mb-6"
        >
          Transform Your <span className="text-yellow-500">Body</span>,{" "}
          <br className="hidden sm:block" />
          Transform Your <span className="text-yellow-500">Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-lg mb-8 max-w-xl text-gray-200"
        >
          Join our state-of-the-art fitness center and achieve your goals with
          expert guidance and world-class equipment.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <button className="bg-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition text-sm sm:text-base w-full sm:w-auto">
            Get Started
          </button>
          <button className="border border-yellow-500 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-white transition text-sm sm:text-base w-full sm:w-auto">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
