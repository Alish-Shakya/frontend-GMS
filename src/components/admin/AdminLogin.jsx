import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Gogogelcon from "../icons/ui/Gogogelcon";
import toast, { Toaster } from "react-hot-toast";

const AdminLogin = ({ onSwitch, onSwitchForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields!");
      setTimeout(() => setErrorMessage(""), 4000);
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await axios.post("http://localhost:4000/webUser/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.result));
      sessionStorage.setItem("isLogin", "true");

      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid email or password");
      setTimeout(() => setErrorMessage(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <AnimatePresence mode="wait">
        <motion.div
          key="login-form"
          initial={{ opacity: 0, x: 80 }}
          animate={
            errorMessage
              ? { x: [0, -10, 10, -10, 10, 0] }
              : { opacity: 1, x: 0 }
          }
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Header */}
          <div className="text-center mt-18 mb-6">
            <h1 className="text-2xl font-bold text-[#2D385E]">
              Login to your account
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Don’t have an account?{" "}
              <button
                onClick={onSwitch}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign Up Free!
              </button>
            </p>
          </div>

          {/* Google Login */}
          <div className="mb-4">
            <button
              aria-label="Login with Google"
              className="w-full flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-md text-white bg-[#db4437] hover:bg-[#c53d2e] hover:scale-[1.02] transition-transform duration-150"
            >
              <Gogogelcon />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-200" />
            <span className="mx-4 text-xs font-medium text-gray-400">or</span>
            <hr className="flex-grow border-gray-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />

            {/* Password Input + Toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm font-medium text-center bg-red-100 p-3 rounded-md">
                {errorMessage}
              </div>
            )}

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"
                />
                Remember me
              </label>
              <p
                onClick={onSwitchForgot}
                className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
              >
                Forgot password?
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white transition-colors ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#4D69FF] hover:bg-[#435de6]"
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
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AdminLogin;
