import React from "react";
import PersonalTraining from "./Personal";

const PricingDuration = () => {
  const plans = [
    {
      duration: "1 Month",
      prices: [
        { name: "Gym", price: "Rs. 1500" },
        { name: "Cardio + Gym", price: "Rs. 2000" },
        { name: "Gym + Cardio + Zumba", price: "Rs. 2500" },
      ],
    },
    {
      duration: "3 Months",
      prices: [
        { name: "Gym", price: "Rs. 4500" },
        { name: "Cardio + Gym", price: "Rs. 6000" },
        { name: "Gym + Cardio + Zumba", price: "Rs. 7000" },
      ],
    },
    {
      duration: "6 Months",
      prices: [
        { name: "Gym", price: "Rs. 8000" },
        { name: "Cardio + Gym", price: "Rs. 10000" },
        { name: "Gym + Cardio + Zumba", price: "Rs. 12000" },
      ],
    },
    {
      duration: "1 Year",
      prices: [
        { name: "Gym", price: "Rs. 14000" },
        { name: "Cardio + Gym", price: "Rs. 18000" },
        { name: "Gym + Cardio + Zumba", price: "Rs. 22000" },
      ],
    },
  ];

  // Replace with your actual WhatsApp number including country code
  const whatsappNumber = "9779844346422";

  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Admission Fee Text */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Fee</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            The admission fee is{" "}
            <span className="font-semibold text-yellow-600">Rs. 500</span> for
            <span className="text-yellow-600 font-semibold">1 Month plans</span>
            . For
            <span className="text-yellow-600 font-semibold">
              3 Months, 6 Months, and 1 Year plans
            </span>
            , admission is
            <span className="font-semibold text-yellow-600">Free</span>.
          </p>
        </div>

        {/* Membership Plans */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Membership Plans by Duration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center 
                         hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              {/* Plan Title */}
              <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
                {plan.duration}
              </h3>

              {/* Prices List */}
              <ul className="text-gray-700 mb-6 space-y-3 w-full">
                {plan.prices.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b py-2"
                  >
                    <span>{item.name}</span>
                    <span className="text-gray-900">{item.price}</span>
                  </li>
                ))}
              </ul>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hi! I’m interested in the ${plan.duration} plan.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
      <PersonalTraining />
    </section>
  );
};

export default PricingDuration;
