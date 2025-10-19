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
  const [preview, setPreview] = useState("/images/default-avatar.png"); // for showing selected image

  // 🔹 Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle photo input change
  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file)); // generate live preview
    }
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (photo) data.append("photo", photo);

      const res = await axios.post(
        "http://localhost:4000/member/add-member",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Member added successfully!", {
        position: "top-right",
        autoClose: 5000,
      });

      // Reset form
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
      console.error(error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="w-3/4 min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 p-6 flex justify-center items-center">
      <ToastContainer />
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <PlusIcon />
          <h2 className="text-2xl font-bold ml-2 text-yellow-500">
            Add New Member
          </h2>
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-28 h-28 rounded-full border-4 border-yellow-400 object-cover shadow-md"
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
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <input
                name="address"
                type="text"
                placeholder="Enter address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                name="phone"
                type="number"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Membership Type
              </label>
              <select
                name="membership"
                value={formData.membership}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              >
                <option value="">Select Type</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Amount Paid (Rs.)
              </label>
              <input
                name="amountPaid"
                type="number"
                placeholder="Enter amount"
                value={formData.amountPaid}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-500 to-yellow-400 text-white font-bold rounded-lg hover:opacity-90 transition duration-300"
          >
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMembers;
