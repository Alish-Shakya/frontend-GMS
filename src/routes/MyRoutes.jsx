import React from "react";
import { Routes, Route, Outlet } from "react-router";
import AdminLogin from "../components/admin/AdminLogin";
import AdminRegister from "../components/admin/AdminRegister";
import AdminVerify from "../components/admin/AdminVerify";
import Dashboard from "../components/home/Dashboard";
import AddMembers from "../components/pages/AddMembers";
import TotalMembers from "../components/pages/TotalMembers";
import NewMember from "../components/pages/NewMember";
import ExpiringSoon from "../components/pages/ExpiringSoon";
import AdminLogout from "../components/admin/AdminLogout";
import AdminProfile from "../components/admin/AdminProfile";
import AdminUpdate from "../components/admin/AdminUpdate";
import AdminAuth from "../components/admin/AdminAuth";
import ProtectedRoute from "../components/admin/ProtectedRoute"; // ✅ add this

const MyRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AdminAuth />} />
        <Route path="verify-email" element={<AdminVerify />} />
        <Route path="logout" element={<AdminLogout />} />

        {/* ✅ Protected Dashboard Routes */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add-members" element={<AddMembers />} />
          <Route path="total-members" element={<TotalMembers />} />
          <Route path="new-members" element={<NewMember />} />
          <Route path="expiring-soon" element={<ExpiringSoon />} />
        </Route>

        {/* ✅ Protected Admin Routes */}
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route index element={<div>Admin Dashboard</div>} />
          <Route path="myProfile" element={<AdminProfile />} />
          <Route path="update" element={<AdminUpdate />} />
        </Route>

        {/* If you still want to keep admin/login open */}
        <Route path="admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
