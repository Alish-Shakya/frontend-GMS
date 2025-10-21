import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AdminRegister = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [photo, setPhoto] = useState(null);

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
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success(result.data.message);
      console.log(result.data);

      // Optional: Save user info for Sidebar
      localStorage.setItem("user", JSON.stringify(result.data.result));

      setUserName("");
      setEmail("");
      setPassword("");
      setContactNo("");
      setPhoto(null);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed!");
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
      </div>
    </>
  );
};

export default AdminRegister;
