import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const AdminRegister = ({ onSwitch }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [photo, setPhoto] = useState(null);
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("contactNo", contactNo);
    if (photo) formData.append("photo", photo);

    try {
      await axios.post("http://localhost:4000/webUser/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("OTP sent to your email!");
      setOpen(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  };

  // verify otp and auto-login
  const handleVerifyOTP = async () => {
    try {
      const verifyRes = await axios.post(
        "http://localhost:4000/webUser/verify-otp",
        { email, otp }
      );

      if (verifyRes.data.success) {
        const loginRes = await axios.post(
          "http://localhost:4000/webUser/login",
          { email, password }
        );

        if (loginRes.data.success) {
          const token = loginRes.data.token;
          localStorage.setItem("token", token);
          const profileRes = await axios.get(
            "http://localhost:4000/webUser/myProfile",
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
      <ToastContainer />
      <div className="w-full">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />

            <input
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />

            <input
              type="number"
              placeholder="Contact Number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-[#4D69FF] hover:bg-[#435de6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* otp modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
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
            className="w-full px-3 py-2 border rounded mb-3 text-center"
          />
          <button
            onClick={handleVerifyOTP}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Verify & Login
          </button>
          {message && (
            <p className="text-red-500 text-center mt-2 text-sm">{message}</p>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default AdminRegister;
