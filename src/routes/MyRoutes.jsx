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
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />}></Route>
        <Route path="verify-email" element={<AdminVerify />}></Route>

        <Route path="dashboard" element={<Outlet />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="add-members" element={<AddMembers />} />
          <Route path="total-members" element={<TotalMembers />} />
          <Route path="new-members" element={<NewMember />} />
          <Route path="expiring-soon" element={<ExpiringSoon />} />
        </Route>

        {/* Admin Route */}
        <Route path="admin" element={<Outlet />}>
          <Route index element={<div> Admin Dashboard</div>} />
          <Route path="register" element={<AdminRegister />}></Route>
          <Route path="login" element={<AdminLogin />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
