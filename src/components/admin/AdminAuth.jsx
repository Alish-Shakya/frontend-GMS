import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminLogin from "./AdminLogin";
import AdminRegister from "./AdminRegister";
import AdminForgot from "./ForgotPassword"; // ← new forgot component import
import GymBg from "../../../public/images/Background.jpg";

const AdminAuth = () => {
  const [page, setPage] = useState("login"); // "login", "register", "forgot"
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      position: "absolute",
      width: "100%",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute",
      width: "100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
      position: "absolute",
      width: "100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  const handleSwitch = (newPage) => {
    setDirection(newPage === "login" ? -1 : 1);
    setPage(newPage);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* LEFT SIDE */}
      <div className="w-full md:basis-2/6 flex items-center justify-center bg-gray-100 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="relative w-full max-w-sm h-auto min-h-[500px]">
          <AnimatePresence custom={direction} mode="wait">
            {page === "login" && (
              <motion.div
                key="login"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <AdminLogin
                  onSwitch={() => handleSwitch("register")}
                  onSwitchForgot={() => handleSwitch("forgot")}
                />
              </motion.div>
            )}
            {page === "register" && (
              <motion.div
                key="register"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <AdminRegister onSwitch={() => handleSwitch("login")} />
              </motion.div>
            )}
            {page === "forgot" && (
              <motion.div
                key="forgot"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <AdminForgot onBack={() => handleSwitch("login")} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT SIDE - Image */}
      <div className="hidden md:block md:basis-3/4 relative">
        <img
          src={GymBg}
          alt="Gym background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex h-full w-full items-center justify-center px-10 text-center text-white">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to FitZone Gym
            </h2>
            <p className="max-w-lg text-gray-200 text-lg">
              Train harder. Eat better. Become stronger than yesterday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
