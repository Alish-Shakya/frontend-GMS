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

import ResetPassword from "../components/admin/ResetPassword";
import GymLandingPage from "../components/interface/home/GymLandingPage";
import PricingDuration from "../components/interface/price/Pricing";

const MyRoutes = () => {
  return (
    <Routes>
      {/* Public routes (no sidebar) */}

      {/* <Navbar /> */}

      <Route path="/" element={<Outlet />}>
        <Route index element={<GymLandingPage />}></Route>
        <Route path="/pricing" element={<PricingDuration />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>

      <Route path="/login" element={<AdminAuth />} />
      <Route path="/verify-email" element={<AdminVerify />} />
      <Route path="/logout" element={<AdminLogout />} />
      {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      <Route path="/reset-password" element={<ResetPassword />} />

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
