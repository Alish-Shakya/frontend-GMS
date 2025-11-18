import React from "react";
import Slider from "react-slick";
import TrainerImg from "../../../assets/images/trainer.jpg";

const OurClients = () => {
  const clients = [
    { name: "Sarada Munikar", role: "Civil Engineer", img: TrainerImg },
    {
      name: "Riyaz Munikar",
      role: "Student",
      img: "/images/clients/client2.jpg",
    },
    {
      name: "Shresha Munikar",
      role: "Powerlifter",
      img: "/images/clients/client3.jpg",
    },
    { name: "Sayujya Sharma", role: "Financial Advisor", img: TrainerImg },
    {
      name: "Astha Karki",
      role: "Data Scientist",
      img: "/images/clients/client5.jpg",
    },
    {
      name: "Rohit Shahi",
      role: "Entrepreneur",
      img: "/images/clients/client6.jpg",
    },
  ];

  // Slider settings for mobile only
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
  };

  return (
    <section className="py-6 px-8 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Side - Text */}
        <div className="md:w-[35%] flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-1">
            Our <span className="text-yellow-600">Clients </span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 ml-10 mb-6"></div>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At IFit Nepal, we are proud to support a diverse range of clients.
            From students to professionals, entrepreneurs to athletes — our
            personalized approach helps each client achieve their unique fitness
            goals in a supportive environment.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Here are some of our amazing clients who continue to inspire and
            motivate others on their fitness journeys.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-[65%]">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="group cursor-pointer transition">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-full h-55 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <p className="mt-3 text-center text-gray-800 font-medium">
                  {client.name}{" "}
                  <span className="text-gray-500">- {client.role}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <Slider {...mobileSettings}>
              {clients.map((client, index) => (
                <div key={index} className="p-2">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="w-full h-55 object-cover transform hover:scale-105 transition duration-500"
                    />
                  </div>
                  <p className="mt-3 text-center text-gray-800 font-medium">
                    {client.name}{" "}
                    <span className="text-gray-500">- {client.role}</span>
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
