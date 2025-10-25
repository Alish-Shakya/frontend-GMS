import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Box } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";

const AdminRegister = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [photo, setPhoto] = useState(null);

  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // Submit registration form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("contactNo", contactNo);
    if (photo) formData.append("photo", photo);

    try {
      const result = await axios.post(
        "http://localhost:4000/webUser/register",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("OTP sent to your email!");
      setMessage("OTP sent to your email!");
      setOpen(true); // show OTP modal
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  };

  // Verify OTP and auto-login
  const handleVerifyOTP = async () => {
    try {
      const verifyRes = await axios.post(
        "http://localhost:4000/webUser/verify-otp",
        { email, otp }
      );

      if (verifyRes.data.success) {
        setMessage("OTP verified successfully!");

        // ✅ Auto-login
        const loginRes = await axios.post(
          "http://localhost:4000/webUser/login",
          {
            email,
            password,
          }
        );

        if (loginRes.data.success) {
          const token = loginRes.data.token;

          // ✅ Save token
          localStorage.setItem("token", token);

          // ✅ Immediately fetch updated profile
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

          toast.success("🎉 Admin logged in successfully!");
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
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Register Your Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
          encType="multipart/form-data"
        >
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter your contact number"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* OTP Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
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
            {message && <p className="text-red-500 mt-2">{message}</p>}
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AdminRegister;
