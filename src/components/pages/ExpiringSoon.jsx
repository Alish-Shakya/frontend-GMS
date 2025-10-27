import axios from "axios";
import React, { useEffect, useState } from "react";

const ExpiringSoon = () => {
  const [expiringMembers, setExpiringMembers] = useState([]);
  const token = localStorage.getItem("token");

  const getExpiringMember = async () => {
    try {
      const result = await axios.get(
        "http://localhost:4000/member/expiring-members",
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

  // Helper: check if a member expires in 7 days
  const isExpiringSoon = (endDate) => {
    const today = new Date();
    const sevenDaysLater = new Date();
    sevenDaysLater.setDate(today.getDate() + 7);
    const memberEnd = new Date(endDate);
    return memberEnd <= sevenDaysLater;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "20px" }}>Expiring Members (Next 1 Month)</h2>

      {expiringMembers.length === 0 ? (
        <p>No members expiring soon.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                <th style={{ padding: "12px" }}>Full Name</th>
                <th style={{ padding: "12px" }}>Phone</th>
                <th style={{ padding: "12px" }}>Membership</th>
                <th style={{ padding: "12px" }}>End Date</th>
              </tr>
            </thead>
            <tbody>
              {expiringMembers.map((member) => {
                const expiringSoon = isExpiringSoon(member.endDate);

                return (
                  <tr
                    key={member._id}
                    style={{
                      backgroundColor: expiringSoon ? "#ffebee" : "#fff",
                      transition: "background-color 0.3s",
                    }}
                  >
                    <td style={{ padding: "12px" }}>{member.fullName}</td>
                    <td style={{ padding: "12px" }}>{member.phone}</td>
                    <td style={{ padding: "12px" }}>{member.membership}</td>
                    <td style={{ padding: "12px" }}>
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
