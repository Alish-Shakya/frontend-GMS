import React from "react";
import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

const AdminRegister = () => {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [contactNo, setContactNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      userName: userName,
      email: email,
      password: password,
      contactNo: contactNo,
    };

    try {
      let result = await axios({
        url: "http://localhost:4000/webUser/register",
        method: "post",
        data: data,
      });

      setUserName("");
      setEmail("");
      setPassword("");
      setContactNo("");
      console.log(result);
      toast.success(result.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <>
      <ToastContainer />
      {/* Fullscreen Container */}
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Register Your Account
        </h1>

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
        >
          {/* Username */}
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number
            </label>
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="Enter your contact number"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminRegister;
