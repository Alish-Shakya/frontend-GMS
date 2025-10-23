import React, { useEffect, useState } from "react";
import axios from "axios";

const NewMembers = () => {
  const [newMembers, setNewMembers] = useState([]);
  const token = localStorage.getItem("token");

  const getNewMembers = async () => {
    try {
      const result = await axios.get(
        "http://localhost:4000/member/new-member",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setNewMembers(result.data.data);
    } catch (error) {
      console.error("Error fetching new members:", error);
    }
  };

  useEffect(() => {
    getNewMembers();
  }, []);

  return (
    <div className="p-6 w-full md:w-4/5 mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        🆕 New Members
      </h1>

      <div className="bg-white p-5 rounded-2xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="py-2">S.N.</th>
              <th className="py-2">Member Name</th>
              <th className="py-2">Phone</th>
              <th className="py-2">Address</th>
              <th className="py-2">Membership Type</th>
              <th className="py-2 text-right">Join Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {newMembers.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-4 text-center text-gray-500">
                  No new members this month.
                </td>
              </tr>
            ) : (
              newMembers.map((member, index) => (
                <tr key={member._id} className="border-b hover:bg-gray-50">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{member.fullName}</td>
                  <td className="py-2">{member.phone}</td>
                  <td className="py-2">{member.address}</td>
                  <td className="py-2">{member.membershipType}</td>
                  <td className="py-2 text-right">
                    {new Date(member.startDate).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewMembers;
