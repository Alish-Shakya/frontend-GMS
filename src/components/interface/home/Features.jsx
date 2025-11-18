import React from "react";
import { Dumbbell, HeartPulse, Apple, Users } from "lucide-react";
import { motion } from "framer-motion";
import TrainerImg from "../../../assets/images/trainer.jpg";
import Planet from "../../../assets/images/planet.png";

const Features = () => {
  const features = [
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      text: "Latest machines for maximum results",
    },
    {
      icon: HeartPulse,
      title: "Health Tracking",
      text: "Track your health and performance with ease",
    },
    {
      icon: Apple,
      title: "Nutrition Plans",
      text: "Personalized meal plans tailored for you",
    },
    {
      icon: Users,
      title: "Expert Trainers",
      text: "Certified pros to guide and motivate you",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-12 bg-white text-black overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
          Why <span className="text-yellow-500">Choose Us?</span>
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          We focus on your body, mind, and lifestyle — not just the reps.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 lg:gap-10 items-center">
        {/* Top 2 cards (mobile) / Left 2 cards (desktop) */}
        <div className="col-span-2 lg:col-span-2 grid grid-cols-2 gap-6 order-1">
          {features.slice(0, 2).map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl p-5 flex flex-col items-center text-center 
                        border border-gray-200 bg-white shadow-sm
                        hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-200/50 
                        transition duration-300 w-full"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 mb-3">
                <feature.icon size={24} className="text-yellow-600" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>
        {/* Middle image */}
        <div className="col-span-2 lg:col-span-1 flex justify-center order-2 lg:order-none my-4 lg:my-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative w-40 sm:w-56 lg:w-64 bg-black rounded-2xl shadow-lg border-4 border-yellow-400 overflow-hidden"
          >
            <img
              src={Planet}
              alt="Planet Fitness"
              className="w-full h-full object-contain bg-black"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-yellow-300/40 animate-pulse pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Bottom 2 cards (mobile) / Right 2 cards (desktop) */}
        <div className="col-span-2 lg:col-span-2 grid grid-cols-2 gap-6 order-3">
          {features.slice(2, 4).map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl p-5 flex flex-col items-center text-center 
                        border border-gray-200 bg-white shadow-sm
                        hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-200/50 
                        transition duration-300 w-full"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 mb-3">
                <feature.icon size={24} className="text-yellow-600" />
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
