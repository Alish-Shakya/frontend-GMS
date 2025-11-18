import React, { useState } from "react";
import Image from "../../../assets/images/trainer.jpg";
import Me from "../../../assets/images/testominals/me.jpg";

const testimonials = [
  {
    images: [Me, Image],
    text: "s gym, there is a great , trainers are so friendly and always on hand to give support or advice to their clients whenever they need regarding diet and exercises. Thanks to tpw family for providing us homely environment",
    name: "- Alish Shakya",
  },
  {
    images: [Image, Image],
    text: "Joining this gym changed my lifestyle. Trainers here guide step by step and motivate me daily.",
    name: "Sarada Munikar - Civil Engineer",
  },
  {
    images: [Image, Image],
    text: "From being unfit to lifting confidently, I gained both strength and confidence.",
    name: "Riyaz Munikar - Student",
  },
  {
    images: [Image, Image],
    text: "The supportive environment and modern equipment helped me achieve my goals.",
    name: "Astha Karki - Designer",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold uppercase mb-1">
          Client <span className="text-yellow-600"> Testimonials </span>
        </h2>
        <div className="w-20 h-1 bg-yellow-600 mx-auto mb-12"></div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 items-center text-left">
          {/* Left Side - Images */}
          <div className="flex gap-2 w-full md:w-1/2 justify-center">
            {testimonials[active].images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Before After"
                className="w-1/2 object-cover border border-gray-300 hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2">
            <p className="italic leading-relaxed mb-6">
              {testimonials[active].text}
            </p>
            <p className="font-semibold text-yellow-600">
              {testimonials[active].name}
            </p>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-8 h-8 flex items-center justify-center rounded-md font-bold transition ${
                active === index
                  ? "bg-yellow-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
