import React from "react";

const PersonalTraining = () => {
  const personalTraining = [
    { name: "1 Session", price: "Rs. 1000" },
    { name: "10 Sessions", price: "Rs. 9000" },
    { name: "Monthly Personal Training", price: "Rs. 20000" },
  ];

  const whatsappNumber = "97798XXXXXXXX"; // replace with your WhatsApp number

  return (
    <section className="py-16 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Personal Training Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalTraining.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center 
                         hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                {pt.name}
              </h3>
              <p className="text-lg text-gray-900 mb-6">{pt.price}</p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi! I’m interested in the Personal Training option: ${pt.name} (${pt.price}).`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalTraining;
