import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Add Members", color: "red", path: "add-members" },
    { title: "Total Members", color: "orange", path: "total-members" },
    { title: "New This Month", color: "yellow", path: "new-members" },
    { title: "Expiring Soon", color: "purple", path: "expiring-soon" },
    { title: "Expired", color: "green", path: "expired" },
    { title: "Revenue Report", color: "blue", path: "" },
  ];

  return (
    <div className="w-full md:w-3/4 min-h-[100vh] bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 p-6 rounded-tl-3xl overflow-y-auto shadow-inner">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-3">
          <MenuIcon className="cursor-pointer text-gray-700 hover:text-red-500 transition duration-200" />
          <h2 className="text-xl font-bold tracking-wide text-yellow-400">
            Admin Dashboard
          </h2>
        </div>
        <img
          src="/images/profile.png"
          alt="Admin"
          className="w-10 h-10 rounded-full border-2 border-red-500 object-cover"
        />
      </div>

      {/* Dashboard Cards */}
      <div className="grid mt-8 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            onClick={() => navigate("/addMembers")}
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <div
              className={`h-2 rounded-t-xl bg-gradient-to-r from-${card.color}-400 to-${card.color}-600`}
            ></div>
            <div className="flex flex-col justify-center items-center py-8 px-4">
              <div className="mb-3">
                {index % 2 === 0 ? (
                  <PeopleIcon sx={{ color: card.color, fontSize: 50 }} />
                ) : (
                  <BarChartIcon sx={{ color: card.color, fontSize: 50 }} />
                )}
              </div>
              <p className="text-lg font-semibold tracking-wide text-gray-700">
                {card.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Tagline */}
      <div className="text-center mt-10 text-gray-500 italic">
        <FitnessCenterIcon sx={{ color: "red", fontSize: 20 }} /> Train Hard,
        Manage Smart.
      </div>
    </div>
  );
};

export default Dashboard;
