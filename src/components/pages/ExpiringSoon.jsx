import axios from "axios";
import React, { useEffect, useState } from "react";

const ExpiringSoon = () => {
  const [expiringMembers, setExpiringMembers] = useState([]);
  const token = localStorage.getItem("token");

  const getExpiringMember = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8000/member/expiring-members",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setExpiringMembers(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExpiringMember();
  }, []);

  // check if expiring within 7 days
  const isExpiringSoon = (endDate) => {
    const today = new Date();
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(today.getDate() + 7);
    return new Date(endDate) <= sevenDaysLater;
  };

  return (
    <div className="p-5 font-sans">
      <h2 className="mb-5 text-xl font-semibold">
        Expiring Members (Next 1 Month)
      </h2>

      {expiringMembers.length === 0 ? (
        <p>No members expiring soon.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-md">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Full Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Membership</th>
                <th className="p-3">End Date</th>
              </tr>
            </thead>
            <tbody>
              {expiringMembers.map((member) => {
                const expiringSoon = isExpiringSoon(member.endDate);
                return (
                  <tr
                    key={member._id}
                    className={`transition-colors ${
                      expiringSoon ? "bg-red-100" : "bg-white"
                    }`}
                  >
                    <td className="p-3">{member.fullName}</td>
                    <td className="p-3">{member.phone}</td>
                    <td className="p-3">{member.membership}</td>
                    <td className="p-3">
                      {new Date(member.endDate).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExpiringSoon;
