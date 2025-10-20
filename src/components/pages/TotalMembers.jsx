import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PeopleIcon from "@mui/icons-material/People";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";

const TotalMembers = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;

  const fetchMembers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/member/all-members");
      setMembers(res.data.data);
      setFilteredMembers(res.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load members");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  useEffect(() => {
    const filtered = members.filter(
      (m) =>
        m.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.phone.includes(searchTerm) ||
        m.membership.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
    setCurrentPage(1);
  }, [searchTerm, members]);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(
    indexOfFirstMember,
    indexOfLastMember
  );

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <div className="w-full md:w-3/4 h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 p-6 rounded-tl-3xl shadow-inner">
      <ToastContainer />

      {/* Header */}
      <div className="flex-shrink-0 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center gap-3">
          <PeopleIcon className="text-yellow-400 text-3xl" />
          <h2 className="text-xl font-bold tracking-wide text-yellow-400">
            Total Members
          </h2>
        </div>
        <img
          src="/images/profile.png"
          alt="Admin"
          className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-shrink-0 max-w-4xl mx-auto mt-5 flex items-center bg-white border border-gray-200 rounded-full shadow-sm px-4 py-2 focus-within:ring-2 focus-within:ring-yellow-400 transition">
        <SearchIcon className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search by name, phone, or plan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Members Grid */}
      <div className="flex-1 overflow-y-auto mt-5 pb-4">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <CircularProgress style={{ color: "#facc15" }} />
          </div>
        ) : currentMembers.length === 0 ? (
          <p className="text-center text-gray-500 mt-8 text-lg">
            No members found 😕
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
            {currentMembers.map((m) => (
              <div
                key={m._id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-2 rounded-t-xl bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                <div className="flex flex-col items-center p-5">
                  <img
                    src={`http://localhost:4000${m.photo}`}
                    alt={m.fullName}
                    className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 shadow-md"
                  />
                  <h3 className="mt-3 text-base font-semibold text-gray-800">
                    {m.fullName}
                  </h3>
                  <p className="text-sm text-gray-500">{m.address}</p>
                  <p className="text-sm text-gray-500">📞 {m.phone}</p>
                </div>
                <div className="border-t border-gray-100 p-3 text-center bg-gray-50 rounded-b-xl">
                  <p className="text-sm font-medium text-gray-700">
                    Plan:{" "}
                    <span className="text-yellow-500 font-semibold">
                      {m.membership}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Paid: Rs. {m.amountPaid}
                  </p>
                  <div className="text-xs text-gray-400 mt-2">
                    <p>Start: {new Date(m.startDate).toLocaleDateString()}</p>
                    <p>End: {new Date(m.endDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex-shrink-0 flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 16 }} /> Prev
        </button>

        <span className="text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-yellow-50 hover:text-yellow-600 transition ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </button>
      </div>

      {/* Footer */}
      <div className="text-center mt-3 text-gray-500 italic flex-shrink-0">
        <FitnessCenterIcon sx={{ color: "#facc15", fontSize: 20 }} /> Manage
        Smart. Train Hard 💪
      </div>
    </div>
  );
};

export default TotalMembers;
