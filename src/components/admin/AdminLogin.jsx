import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all the fields!");
      setTimeout(() => setErrorMessage(""), 5000);
      return;
    }

    let data = { email, password };

    try {
      let result = await axios({
        url: "http://localhost:4000/webUser/login",
        method: "post",
        data: data,
      });

      let token = result.data.token;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setErrorMessage("Invalid email or password");
      setTimeout(() => setErrorMessage(""), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-gray-100 flex flex-col">
      <div className="flex flex-col md:flex-row justify-center items-center flex-1 gap-10 md:gap-[150px] px-4">
        {/* Left Section */}
        <div className="text-center md:text-left text-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Gym Management System
          </h1>
          <p className="text-gray-500 font-medium mt-4 max-w-md">
            Powering your fitness business toward growth and excellence.
          </p>
        </div>

        {/* Right Section - Login Form */}
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg w-full max-w-sm">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {errorMessage && (
              <div className="mb-4 text-red-600 text-sm font-medium">
                {errorMessage}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <button type="button" className="text-blue-600 hover:underline">
                Forgot Password
              </button>

              <button type="button" className="text-blue-600 hover:underline">
                <Link to={"/admin/register"}>Create Account</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
