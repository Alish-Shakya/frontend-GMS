import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AdminProfile = () => {
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      const result = await axios({
        url: "http://localhost:4000/webUser/myProfile",
        method: "get",
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(result);
      setProfile(result.data.result);
    } catch (error) {
      console.log(
        "Error fetching profile:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="min-h-screen  w-3/4 flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-md">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          {profile.photo ? (
            <img
              src={`http://localhost:4000${profile.photo}`}
              alt="Profile"
              className="w-50 h-32 border-4 border-gray-300 object-cover shadow mb-4"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mb-4">
              No Photo
            </div>
          )}
          <h1 className="text-2xl font-bold text-gray-800">
            {profile.userName}
          </h1>
          <p className="text-gray-500">{profile.email}</p>
          <p className="text-gray-500">{profile.contactNo}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/admin/update")}
            className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Update Profile
          </button>
          <button className="w-full py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-300">
            Delete Profile
          </button>
        </div>

        <button
          onClick={() => navigate(-1)} // go to previous page
          className="mt-4 w-25 ml-33 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
