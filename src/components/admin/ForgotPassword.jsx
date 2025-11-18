import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1=email, 2=otp, 3=reset
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Step 1: Send Code
  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/webUser/forgot-password",
        { email }
      );
      if (res.data.success) {
        toast.success("Code sent to your email!");
        setStep(2); // go to OTP entry screen
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // ✅ Step 2: Verify Code
  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/webUser/verify-code-reset",
        {
          email,
          code: otp,
        }
      );

      if (res.data.success) {
        toast.success("Code verified!");
        setStep(3); // proceed to reset password form
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid or expired code");
    }
  };

  // ✅ Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        "http://localhost:4000/webUser/reset-password",
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success("Password reset successfully!");
        setTimeout(() => {
          window.location.href = "/login"; // redirect to login page
        }, 2000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Error resetting password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        {step === 1 && (
          <form onSubmit={handleSendCode}>
            <h2 className="text-xl font-bold mb-3">Forgot Password</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700"
            >
              Send Code
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyCode}>
            <h2 className="text-xl font-bold mb-3">Enter Verification Code</h2>
            <input
              type="text"
              placeholder="Enter 6-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border p-2 w-full rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700"
            >
              Verify Code
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <h2 className="text-xl font-bold mb-3">Reset Password</h2>
            <input
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white w-full p-2 rounded hover:bg-purple-700"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
