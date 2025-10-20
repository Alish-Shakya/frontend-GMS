import React, { useState } from "react";
import PlusIcon from "../icons/addMembers/PlusIcon";
import SelectPhoto from "../icons/addMembers/SelectPhoto";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddMembers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    membership: "",
    amountPaid: "",
  });

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("/images/default-avatar.png");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (photo) data.append("photo", photo);

      await axios.post("http://localhost:4000/member/add-member", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Member added successfully!", {
        position: "top-right",
        autoClose: 5000,
      });

      setFormData({
        fullName: "",
        address: "",
        phone: "",
        membership: "",
        amountPaid: "",
      });
      setPhoto(null);
      setPreview("/images/default-avatar.png");
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div
      id="add"
      className="min-h-screen w-3/4 bg-gradient-to-br from-white via-gray-100 to-gray-200 flex justify-center items-center px-4"
    >
      <ToastContainer />
      <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-8 w-full max-w-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800">
            Add New Member
          </h2>
          <button className="bg-green-100 p-2 rounded-full">
            <PlusIcon />
          </button>
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-28 h-28 rounded-full border-4 border-gray-300 object-cover shadow"
            />
            <label className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full cursor-pointer hover:bg-red-600 transition">
              <SelectPhoto />
              <input type="file" className="hidden" onChange={handlePhoto} />
            </label>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Upload member photo (optional)
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <input
                name="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div>
              <select
                name="membership"
                value={formData.membership}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                <option value="">Select Membership</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <input
                name="amountPaid"
                type="number"
                placeholder="Amount Paid (Rs.)"
                value={formData.amountPaid}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-gradient-to-r from-green-400 via-teal-400 to-red-400 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMembers;
