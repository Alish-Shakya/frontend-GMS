import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Sidebar = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <div className="w-full md:w-1/4 h-[100vh] bg-white border-r border-gray-200 text-gray-800 p-6 flex flex-col justify-between shadow-md">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <FitnessCenterIcon sx={{ fontSize: 40, color: "" }} />
          <h1 className="ml-3 text-2xl font-bold tracking-wider text-yellow-400">
            Planet Fitness
          </h1>
        </div>

        {/* Profile */}
        <div className="flex gap-4 items-center bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
          <img
            src="/images/profile.png"
            alt="Admin"
            className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{greeting}</h2>
            <p className="text-gray-500 text-sm">Admin</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 border-t border-gray-200 pt-6 space-y-3">
          {[
            { title: "Dashboard", icon: <HomeIcon /> },
            { title: "Members", icon: <PeopleIcon /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 hover:bg-red-100 transition-all duration-200 cursor-pointer px-4 py-3 rounded-lg font-semibold tracking-wide hover:text-red-600"
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </div>
          ))}

          <div className="flex items-center gap-3 text-red-600 hover:bg-red-50 transition-all duration-200 cursor-pointer px-4 py-3 rounded-lg font-semibold tracking-wide mt-6">
            <LogoutIcon />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} Planet Fitness
      </div>
    </div>
  );
};

export default Sidebar;
