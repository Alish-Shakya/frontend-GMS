import React from "react";
import { Routes, Route, Outlet } from "react-router";
import AdminLogin from "../components/admin/AdminLogin";
import AdminRegister from "../components/admin/AdminRegister";
import AdminVerify from "../components/admin/AdminVerify";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />}></Route>
        <Route path="verify-email" element={<AdminVerify />}></Route>

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
