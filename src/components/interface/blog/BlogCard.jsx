import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ image, title, desc, author, date }) => {
  return (
    <motion.div
      className="bg-zinc-900 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-md hover:shadow-red-500/20"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{desc}</p>
        <div className="flex justify-between text-xs text-gray-500">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
