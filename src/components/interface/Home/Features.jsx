import React from "react";
import { Dumbbell, Users, Wallet } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="text-red-500 w-8 h-8" />,
      title: "Workout Management",
      description:
        "Create personalized workout plans, assign trainers, and track progress with advanced analytics and performance insights.",
      bgImage:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Users className="text-red-500 w-8 h-8" />,
      title: "Member Management",
      description:
        "Manage memberships, attendance, and renewals effortlessly with smart automation and digital profiles.",
      bgImage:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Wallet className="text-red-500 w-8 h-8" />,
      title: "Billing & Payments",
      description:
        "Automate invoices, handle secure online payments, and access real-time revenue reports in one dashboard.",
      bgImage:
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const billingFeature = features.find((f) => f.title === "Billing & Payments");
  const otherFeatures = features.filter(
    (f) => f.title !== "Billing & Payments"
  );

  return (
    <section className="relative bg-[#0B0B0B] text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Layout with Billing Card on Left */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Billing Card */}
          <div className="mt-20 h-90 relative group rounded-2xl overflow-hidden border border-transparent hover:border-red-500/20 transition-all duration-500 hover:-translate-y-2">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundImage: `url(${billingFeature.bgImage})` }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/80 to-[#0B0B0B]"></div>
            {/* Content */}
            <div className="relative p-10 text-center flex flex-col justify-center items-center h-full">
              <div className="w-16 h-16 flex items-center justify-center bg-red-500/10 rounded-full mb-6">
                {billingFeature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                {billingFeature.title}
              </h3>
              <p className="text-gray-300">{billingFeature.description}</p>
            </div>
          </div>

          {/* Right side - Text + 2 Cards Below */}
          <div className="flex flex-col gap-10">
            {/* Text Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                A Complete Solution for Modern Fitness Businesses
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Simplify your daily operations with real-time automation and
                insights that help you grow. Every tool you need, built into one
                streamlined SaaS dashboard.
              </p>
            </div>

            {/* Two Cards Below */}
            <div className="grid sm:grid-cols-2 gap-8 mt-4">
              {otherFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="relative group rounded-2xl overflow-hidden border border-transparent hover:border-red-500/20 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${feature.bgImage})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/80 to-[#0B0B0B]"></div>

                  <div className="relative p-8 text-center flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-500/10 rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-[#0b0b0b] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Features;
