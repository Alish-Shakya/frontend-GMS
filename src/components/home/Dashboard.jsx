import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [totalMember, setTotalMember] = useState([]);
  const [newMember, setNewMember] = useState([]);
  const [expiringMember, setExpiringMember] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [totalRes, newRes, expiringRes, revenueRes] = await Promise.all([
          axios.get("http://localhost:8000/member/all-members", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/member/new-member", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/member/expiring-members", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/member/revenue", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setTotalMember(totalRes.data.data);
        setNewMember(newRes.data.data);
        setExpiringMember(expiringRes.data.data);
        setRevenue(revenueRes.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [token]);

  const lineData = [
    { month: "Jan", members: 40 },
    { month: "Feb", members: 70 },
    { month: "Mar", members: 100 },
    { month: "Apr", members: 120 },
    { month: "May", members: 180 },
    { month: "Jun", members: 150 },
  ];

  const pieData = [
    { name: "Standard", value: 70 },
    { name: "Premium", value: 30 },
  ];

  const COLORS = ["#4F46E5", "#F59E0B"];

  return (
    <div className="w-full bg-gray-100 min-h-screen px-4 md:px-6 lg:px-10 py-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        🏋️‍♂️ Admin Dashboard
      </h1>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <Link to="/dashboard/total-members">
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Total Members</p>
                <h2 className="text-3xl font-bold mt-1">
                  {totalMember.length}
                </h2>
                <p className="text-green-500 text-xs mt-1">
                  +3.5% vs last month
                </p>
              </div>
              <div className="bg-indigo-100 p-3 rounded-full">
                <PeopleAltIcon className="text-indigo-600" />
              </div>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/new-members">
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">New This Month</p>
                <h2 className="text-3xl font-bold mt-1">{newMember.length}</h2>
                <p className="text-green-500 text-xs mt-1">
                  +12% vs last month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <PersonAddIcon className="text-green-600" />
              </div>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/expiring-soon">
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Upcoming Renewal</p>
                <h2 className="text-3xl font-bold mt-1">
                  {expiringMember.length}
                </h2>
                <p className="text-green-500 text-xs mt-1">+5% this month</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <AutorenewIcon className="text-yellow-600" />
              </div>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/add-members">
          <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Add Member</p>
                <h2 className="text-3xl font-bold mt-1">+ New</h2>
                <p className="text-blue-500 text-xs mt-1">Click to add</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <AddCircleOutlineIcon className="text-blue-600" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700 mb-4">
            Revenue & Member Growth
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="members"
                stroke="#4F46E5"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h2 className="text-3xl font-bold mt-1">Rs.{revenue}</h2>
              <p className="text-green-500 text-xs mt-1">+8% vs last month</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">💰</div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="font-semibold text-gray-700 mb-4">
          Recent Member Activity
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="py-3">Member Name</th>
              <th className="py-3">Status</th>
              <th className="py-3">Membership Type</th>
              <th className="py-3 text-right">Last Check-in</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">John Doe</td>
              <td className="py-2 text-green-500 font-medium">Active</td>
              <td className="py-2">Standard</td>
              <td className="py-2 text-right">Today</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="py-2">Sarah Smith</td>
              <td className="py-2 text-red-500 font-medium">Expired</td>
              <td className="py-2">Premium</td>
              <td className="py-2 text-right">2 days ago</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2">Michael Lee</td>
              <td className="py-2 text-green-500 font-medium">Active</td>
              <td className="py-2">Standard</td>
              <td className="py-2 text-right">Yesterday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
