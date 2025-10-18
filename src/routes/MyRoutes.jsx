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
import Expired from "../components/pages/Expired";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />}></Route>
        <Route path="verify-email" element={<AdminVerify />}></Route>

        <Route path="dashboard" element={<Dashboard />}></Route>

        <Route path="addMembers" element={<AddMembers />}></Route>
        <Route path="totalMembers" element={<TotalMembers />}></Route>
        <Route path="newMembers" element={<NewMember />}></Route>
        <Route path="expiringSoon" element={<ExpiringSoon />}></Route>
        <Route path="expired" element={<Expired />}></Route>

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
