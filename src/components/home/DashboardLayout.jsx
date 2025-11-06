import React from "react";
import Sidebar from "../home/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
