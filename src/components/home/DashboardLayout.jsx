import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex w-full min-h-screen overflow-hidden">
      {/* Sidebar Section */}
      <div className="fixed top-0 left-0 h-screen w-72 z-50">
        <Sidebar />
      </div>

      {/* Main Dashboard Content */}
      <div className="ml-72 flex-1 bg-gray-100 min-h-screen overflow-y-auto">
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
