import React from "react";
import { Dumbbell, HeartPulse, Music } from "lucide-react";
import { motion } from "framer-motion";

import Gym from "../../../assets/images/program/Gym.png";
import Cardio from "../../../assets/images/program/Cardio.png";
import Zumba from "../../../assets/images/program/Zumba.png";

const Programs = () => {
  const programs = [
    {
      icon: <Dumbbell size={38} />,
      title: "Gym",
      text: "Dance your way to fitness with energetic and fun Zumba classes that burn calories while you enjoy.",
      img: Gym,
    },
    {
      icon: <HeartPulse size={38} />,
      title: "Cardio",
      text: "Boost your endurance and heart health with high-energy cardio workouts tailored to all fitness levels.",
      img: Cardio,
    },
    {
      icon: <Music size={38} />,
      title: "Zumba",
      text: "Access top-of-the-line gym equipment and professional trainers to help you achieve your fitness goals.",
      img: Zumba,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-6 bg-white relative">
      {/* Section Heading */}
      <div className="text-center mb-15">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          Our <span className="text-yellow-600">Programs</span>
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Choose from a variety of programs designed to keep you fit and
          motivated.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.15 + Math.random() * 0.1,
            }}
            className={`rounded-2xl border border-gray-200 
                       hover:border-yellow-500/80 
                       hover:shadow-lg hover:shadow-yellow-500/30 
                       transition duration-300 
                       hover:scale-105 hover:-translate-y-2 hover:z-10
                       flex flex-col items-center text-center p-6`}
          >
            <div className="mb-4 overflow-hidden rounded-lg w-full h-56">
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text + Icon */}
            <div className="text-yellow-600 mb-4 flex justify-center">
              {program.icon}
            </div>
            <h3 className="font-semibold text-xl text-gray-900 mb-2 leading-snug">
              {program.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{program.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
