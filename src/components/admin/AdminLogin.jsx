import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields!");
      setTimeout(() => setErrorMessage(""), 4000);
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:4000/webUser/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid email or password");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[url('/images/gym-bg.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6">
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[120px] w-full max-w-6xl">
        {/* Left Section */}
        <div className="text-center md:text-left text-white space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            <span className="text-red-600">GYM</span> <br />
            MANAGEMENT SYSTEM
          </h1>
          <p className="text-gray-300 font-medium max-w-md leading-relaxed">
            Manage your fitness business with power, precision, and performance.
          </p>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            Train Hard. Manage Smart.
          </p>
        </div>

        {/* Right Section - Login Form */}
        <div className="bg-gray-900/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-sm border border-red-600/40">
          <h2 className="text-center text-2xl font-bold text-white mb-6 tracking-wide">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm font-medium text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg transition duration-300 tracking-wide shadow-md"
            >
              LOGIN
            </button>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
              <button
                type="button"
                className="hover:text-red-500 transition duration-200"
              >
                Forgot Password?
              </button>

              <Link
                to={"/admin/register"}
                className="hover:text-red-500 transition duration-200"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
