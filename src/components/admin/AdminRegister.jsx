import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const AdminRegister = ({ onSwitch }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [photo, setPhoto] = useState(null);
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return; // prevent double submit
    setIsLoading(true);

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("contactNo", contactNo);
    if (photo) formData.append("photo", photo);

    try {
      await axios.post("http://localhost:8000/webUser/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("📩 OTP sent to your email!");
      setOpen(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };

  // verify otp and auto-login
  const handleVerifyOTP = async () => {
    try {
      const verifyRes = await axios.post(
        "http://localhost:8000/webUser/verify-otp",
        { email, otp }
      );

      if (verifyRes.data.success) {
        const loginRes = await axios.post(
          "http://localhost:8000/webUser/login",
          { email, password }
        );

        if (loginRes.data.success) {
          const token = loginRes.data.token;
          localStorage.setItem("token", token);
          const profileRes = await axios.get(
            "http://localhost:8000/webUser/myProfile",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (profileRes.data.success) {
            localStorage.setItem(
              "user",
              JSON.stringify(profileRes.data.result)
            );
          }
          toast.success("🎉 Registered & logged in successfully!");
          setOpen(false);
          window.location.href = "/dashboard";
        }
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full mt-18 max-w-sm">
          {/* header */}
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-[#2D385E]">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={onSwitch}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Login here
              </button>
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              autoFocus
              autoComplete="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 sm:text-sm"
            />

            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 sm:text-sm"
            />

            {/* Password field with toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <input
              type="number"
              placeholder="Contact Number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 sm:text-sm"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
            />

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white transition-all duration-200 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4D69FF] hover:bg-[#435de6] hover:scale-[1.02]"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    ></path>
                  </svg>
                  Registering...
                </span>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </motion.div>

      {/* OTP Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 320,
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <h3 className="text-lg font-semibold mb-2">Enter OTP</h3>
            <p className="mb-3 text-sm text-gray-600">
              We sent an OTP to <strong>{email}</strong>
            </p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-3 py-2 border rounded mb-3 text-center focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
            <button
              onClick={handleVerifyOTP}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 hover:scale-[1.02] transition-all"
            >
              Verify & Login
            </button>
            {message && (
              <p className="text-red-500 text-center mt-2 text-sm animate-pulse">
                {message}
              </p>
            )}
          </Box>
        </motion.div>
      </Modal>
    </>
  );
};

export default AdminRegister;
