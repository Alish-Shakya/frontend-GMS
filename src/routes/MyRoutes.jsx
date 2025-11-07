import React from "react";
import { Routes, Route, Outlet } from "react-router";
import AdminAuth from "../components/admin/AdminAuth";
import AdminVerify from "../components/admin/AdminVerify";
import AdminLogout from "../components/admin/AdminLogout";
import Dashboard from "../components/home/Dashboard";
import AddMembers from "../components/pages/AddMembers";
import TotalMembers from "../components/pages/TotalMembers";
import NewMember from "../components/pages/NewMember";
import ExpiringSoon from "../components/pages/ExpiringSoon";
import AdminProfile from "../components/admin/AdminProfile";
import AdminUpdate from "../components/admin/AdminUpdate";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import DashboardLayout from "../components/home/DashboardLayout";
import InterfaceRoute from "../components/interface/InterfaceRoute";
import Home from "../components/interface/Home/Home";
import About from "../components/interface/about/About";

const MyRoutes = () => {
  return (
    <Routes>
      {/* Public routes (no sidebar) */}
      {/* <Route path="/" element={<InterfaceRoute />} /> */}

      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>

      <Route path="/login" element={<AdminAuth />} />
      <Route path="/verify-email" element={<AdminVerify />} />
      <Route path="/logout" element={<AdminLogout />} />

      {/* Protected routes with sidebar */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Dashboard routes */}
        <Route path="dashboard" element={<Outlet />}>
          <Route index element={<Dashboard />} />
          <Route path="add-members" element={<AddMembers />} />
          <Route path="total-members" element={<TotalMembers />} />
          <Route path="new-members" element={<NewMember />} />
          <Route path="expiring-soon" element={<ExpiringSoon />} />
        </Route>

        {/* Admin routes */}
        <Route path="admin" element={<Outlet />}>
          <Route index element={<div>Admin Dashboard</div>} />
          <Route path="myProfile" element={<AdminProfile />} />
          <Route path="update" element={<AdminUpdate />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
