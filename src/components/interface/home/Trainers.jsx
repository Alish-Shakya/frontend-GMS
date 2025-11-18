import React from "react";
import { motion } from "framer-motion";
import GymTrainer from "../../../assets/images/trainer/GymTrainer.png";
import ZumbaTrainer from "../../../assets/images/trainer/ZumbaTrainer.png";
import Traning from "../../../assets/images/trainer/Traning.png";

const trainersData = [
  {
    name: "Alex Johnson",
    title: "Cardio and Gym Coach",
    description:
      "Alex brings the energy with dynamic Zumba sessions that make fitness feel like a party.",
    image: GymTrainer,
  },
  {
    type: "banner", // decorative card
    image: Traning,
  },
  {
    name: "Samantha Lee",
    title: "Zumba Expert",
    description:
      "Samantha specializes in high-energy cardio workouts and strength training designed to boost stamina, build muscle, and improve overall fitness.",
    image: ZumbaTrainer,
  },
];

const Trainers = () => {
  return (
    <section className="px-6 md:px-20 py-14 bg-white relative">
      {/* Section Heading */}
      <div className="text-center mb-15">
        <h2 className="text-2sxl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          Meet Our <span className="text-yellow-600">Trainers</span>
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Our certified trainers are here to guide, motivate, and push you to
          your best.
        </p>
      </div>

      {/* Trainer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {trainersData.map((trainer, i) =>
          trainer.type === "banner" ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15 + Math.random() * 0.1,
              }}
              className="rounded-2xl overflow-hidden border border-gray-200 h-100
                         hover:border-yellow-500/80 
                         hover:shadow-lg hover:shadow-yellow-500/30 
                         transition duration-300 flex items-center justify-center"
            >
              <img
                src={trainer.image}
                alt="Fitness Motivation"
                className="object-cover w-full h-full"
              />
            </motion.div>
          ) : (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15 + Math.random() * 0.1,
              }}
              className={`rounded-2xl overflow-hidden border border-gray-200 
                       hover:border-yellow-500/80 
                       hover:shadow-lg hover:shadow-yellow-500/30 
                       transition duration-300 
                       hover:scale-105 hover:-translate-y-2 hover:z-10
                       flex flex-col items-center text-center p-6`}
            >
              <div className="mb-4 overflow-hidden rounded-lg w-full h-56">
                <img
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {trainer.name}
              </h3>
              <p className="text-yellow-600 font-medium mb-2">
                {trainer.title}
              </p>
              <p className="text-gray-600 text-sm">{trainer.description}</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Trainers;
