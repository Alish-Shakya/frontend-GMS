import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

const blogs = [
  {
    image: "/images/blog1.jpg",
    title: "5 Effective Ways to Stay Fit",
    desc: "Discover practical tips to maintain consistency and motivation in your fitness journey.",
    author: "Coach Alex",
    date: "Nov 10, 2025",
  },
  {
    image: "/images/blog2.jpg",
    title: "The Importance of Rest Days",
    desc: "Learn why rest is as important as training for long-term fitness growth.",
    author: "Trainer Maya",
    date: "Nov 5, 2025",
  },
  {
    image: "/images/blog3.jpg",
    title: "How to Build a Strong Core",
    desc: "Core training improves posture, balance, and overall athletic performance.",
    author: "Fitness Pro Sam",
    date: "Oct 28, 2025",
  },
];

const BlogList = () => {
  return (
    <motion.section
      className="py-20 bg-black text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Latest Articles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogList;
