import React from "react";
import Footer from "./Footter";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const InterfaceLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default InterfaceLayout;
