import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/blog-banner.jpg')",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-wide">
          Our Blog
        </h1>
        <p className="text-gray-300 text-base">
          Home <span className="text-red-500">/</span> Blog
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
