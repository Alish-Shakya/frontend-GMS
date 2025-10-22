import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Static data
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
    <div className="p-6 w-full md:w-4/5 mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        🏋️‍♂️ Admin Dashboard
      </h1>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <Link to="/dashboard/total-members" className="block">
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Total Members</p>
                <h2 className="text-3xl font-bold mt-1">1,250</h2>
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
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">New This Month</p>
                <h2 className="text-3xl font-bold mt-1">85</h2>
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
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">Upcoming Renewals</p>
                <h2 className="text-3xl font-bold mt-1">42</h2>
                <p className="text-green-500 text-xs mt-1">+5% this month</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <AutorenewIcon className="text-yellow-600" />
              </div>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/add-members">
          <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
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
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white p-5 rounded-2xl shadow">
          <h3 className="font-semibold text-gray-700 mb-4">
            Revenue & Member Growth
          </h3>
          <ResponsiveContainer width="100%" height={250}>
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

        <div className="bg-white p-5 rounded-2xl shadow">
          <h3 className="font-semibold text-gray-700 mb-4">
            Membership Type Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white p-5 rounded-2xl shadow">
        <h3 className="font-semibold text-gray-700 mb-4">
          Recent Member Activity
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="py-2">Member Name</th>
              <th className="py-2">Status</th>
              <th className="py-2">Membership Type</th>
              <th className="py-2 text-right">Last Check-in</th>
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
