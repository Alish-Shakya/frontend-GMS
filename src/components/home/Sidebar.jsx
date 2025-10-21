import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Sidebar = () => {
  const [greeting, setGreeting] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Set greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  // Load user info from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    { title: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
    {
      title: "Members",
      icon: <PeopleIcon />,
      path: "/dashboard/total-members",
    },
    {
      title: "Classes",
      icon: <CalendarMonthIcon />,
      path: "/dashboard/classes",
    },
    { title: "Payments", icon: <PaymentIcon />, path: "/dashboard/payments" },
    { title: "Paynorts", icon: <GroupsIcon />, path: "/dashboard/paynorts" },
    { title: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings" },
  ];

  return (
    <div className="w-1/4 h-screen bg-[#0f172a] text-white flex flex-col justify-between sticky top-0 shadow-xl">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-2 justify-center py-6 border-b border-gray-700">
          <FitnessCenterIcon sx={{ fontSize: 30, color: "#FACC15" }} />
          <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
            SAHAYOG
          </h1>
        </div>

        {/* Greeting / Profile */}
        <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg mx-4 mt-6">
          <img
            src={
              user?.photo
                ? `http://localhost:4000${user.photo}` // photo path from backend
                : "/images/profile.png" // default
            }
            alt={user?.userName || "User"}
            className="w-12 h-12 rounded-full border-2 border-yellow-400 object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold text-yellow-300">
              {greeting}
            </h2>
            <p className="text-xs text-gray-400">{user?.userName || "Guest"}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 space-y-1 px-4">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={idx}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm cursor-pointer transition ${
                  isActive
                    ? "bg-yellow-400 text-black font-semibold shadow"
                    : "text-gray-300 hover:bg-slate-700 hover:text-yellow-300"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 p-4">
        <div
          onClick={handleLogout}
          className="flex items-center gap-2 justify-center text-red-400 hover:text-red-300 cursor-pointer transition"
        >
          <LogoutIcon />
          <span>Logout</span>
        </div>
        <p className="text-center text-gray-500 text-xs mt-3">
          © {new Date().getFullYear()} SAHAYOG
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
