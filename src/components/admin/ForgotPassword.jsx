import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let resutl = await axios.post(
        "http:localhost://4000/webUser/forgot-password",
        { email }
      );

      toast.success(result.data.message);
      setIsSent(true);
      setEmail("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg"
    >
      <ToastContainer />

      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-[#2D385E]">Forgot Password?</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email address and we’ll send you a reset link.
        </p>
      </div>

      {!isSent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#4D69FF] hover:bg-[#435de6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Send Reset Link
          </button>
        </form>
      ) : (
        <div className="text-center space-y-3">
          <p className="text-green-600 font-medium">
            ✅ Check your inbox for the reset link!
          </p>
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          ← Back to Login
        </button>
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
