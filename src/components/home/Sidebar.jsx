import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AdminLogout from "../admin/AdminLogout";

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
        <div className="flex items-center gap-10 bg-slate-800 p-4 rounded-lg mx-4 mt-6">
          <img
            src={
              user?.photo
                ? `http://localhost:4000${user.photo}` // photo path from backend
                : "/images/profile.png" // default
            }
            alt={user?.userName || "User"}
            className="w-12 h-12 rounded-lg border-2 cursor-pointer border-yellow-400"
            onClick={() => navigate("/admin/myProfile")}
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
          onClick={() => navigate("/logout")}
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

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import PeopleIcon from "@mui/icons-material/People";
// import LogoutIcon from "@mui/icons-material/Logout";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import PaymentIcon from "@mui/icons-material/Payment";
// import SettingsIcon from "@mui/icons-material/Settings";
// import GroupsIcon from "@mui/icons-material/Groups";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import axios from "axios";

// const Sidebar = () => {
//   const [greeting, setGreeting] = useState("");
//   const [user, setUser] = useState(null);
//   const [showProfile, setShowProfile] = useState(false); // <-- modal state
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Greeting
//   useEffect(() => {
//     const hour = new Date().getHours();
//     if (hour < 12) setGreeting("Good Morning");
//     else if (hour < 18) setGreeting("Good Afternoon");
//     else setGreeting("Good Evening");
//   }, []);

//   // Load user info
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const menuItems = [
//     { title: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
//     {
//       title: "Members",
//       icon: <PeopleIcon />,
//       path: "/dashboard/total-members",
//     },
//     {
//       title: "Classes",
//       icon: <CalendarMonthIcon />,
//       path: "/dashboard/classes",
//     },
//     { title: "Payments", icon: <PaymentIcon />, path: "/dashboard/payments" },
//     { title: "Paynorts", icon: <GroupsIcon />, path: "/dashboard/paynorts" },
//     { title: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings" },
//   ];

//   return (
//     <div className="w-1/4 h-screen bg-[#0f172a] text-white flex flex-col justify-between sticky top-0 shadow-xl">
//       {/* Logo */}
//       <div>
//         <div className="flex items-center gap-2 justify-center py-6 border-b border-gray-700">
//           <FitnessCenterIcon sx={{ fontSize: 30, color: "#FACC15" }} />
//           <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
//             SAHAYOG
//           </h1>
//         </div>

//         {/* Greeting / Profile */}
//         <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg mx-4 mt-6">
//           <img
//             src={
//               user?.photo
//                 ? `http://localhost:4000${user.photo}`
//                 : "/images/profile.png"
//             }
//             alt={user?.userName || "User"}
//             className="w-12 h-12 rounded-lg border-2 cursor-pointer border-yellow-400"
//             onClick={() => setShowProfile(true)} // <-- show modal
//           />
//           <div>
//             <h2 className="text-sm font-semibold text-yellow-300">
//               {greeting}
//             </h2>
//             <p className="text-xs text-gray-400">{user?.userName || "Guest"}</p>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="mt-8 space-y-1 px-4">
//           {menuItems.map((item, idx) => {
//             const isActive = location.pathname === item.path;

//             return (
//               <div
//                 key={idx}
//                 onClick={() => navigate(item.path)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm cursor-pointer transition ${
//                   isActive
//                     ? "bg-yellow-400 text-black font-semibold shadow"
//                     : "text-gray-300 hover:bg-slate-700 hover:text-yellow-300"
//                 }`}
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 <span>{item.title}</span>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="border-t border-gray-700 p-4">
//         <div
//           onClick={() => navigate("/logout")}
//           className="flex items-center gap-2 justify-center text-red-400 hover:text-red-300 cursor-pointer transition"
//         >
//           <LogoutIcon />
//           <span>Logout</span>
//         </div>
//         <p className="text-center text-gray-500 text-xs mt-3">
//           © {new Date().getFullYear()} SAHAYOG
//         </p>
//       </div>

//       {/* Profile Modal */}
//       {showProfile && (
//         <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-2xl p-6 w-80 shadow-lg relative">
//             <button
//               className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
//               onClick={() => setShowProfile(false)}
//             >
//               &times;
//             </button>
//             <div className="flex flex-col items-center mb-4">
//               <img
//                 src={
//                   user?.photo
//                     ? `http://localhost:4000${user.photo}`
//                     : "/images/profile.png"
//                 }
//                 alt={user?.userName || "User"}
//                 className="w-24 h-24 rounded-full border-4 border-yellow-400 object-cover mb-3"
//               />
//               <h2 className="text-xl font-bold text-gray-800">
//                 {user?.userName}
//               </h2>
//               <p className="text-gray-500 text-sm">{user?.email}</p>
//             </div>
//             <div className="space-y-2 text-gray-700">
//               <p>
//                 <span className="font-semibold">Contact No:</span>{" "}
//                 {user?.contactNo || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">Gender:</span>{" "}
//                 {user?.gender || "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">DOB:</span>{" "}
//                 {user?.dob ? new Date(user.dob).toLocaleDateString() : "N/A"}
//               </p>
//               <p>
//                 <span className="font-semibold">Married:</span>{" "}
//                 {user?.isMarried ? "Yes" : "No"}
//               </p>
//             </div>
//             <button
//               className="mt-4 w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//               onClick={() => setShowProfile(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
