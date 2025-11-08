import React from "react";
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <motion.section
      className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg.jpg')", // ✅ or your own image path
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-wide">
          About Us
        </h1>
        <p className="text-gray-300 text-base">
          Home <span className="text-red-500">/</span> About
        </p>
      </div>
    </motion.section>
  );
};

export default AboutHeader;
