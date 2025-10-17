import React from "react";
import { Routes, Route, Outlet } from "react-router";
import AdminLogin from "../components/admin/AdminLogin";
import AdminRegister from "../components/admin/AdminRegister";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />}></Route>

        {/* Admin Route */}
        <Route path="admin" element={<Outlet />}>
          <Route index element={<div> Admin Dashboard</div>} />
          <Route path="register" element={<AdminRegister />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
