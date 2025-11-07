import React from "react";
import Navbar from "./Navbar";
import Hero from "./Home/Hero";
import Home from "./Home/Home";
import Footer from "./Footter";
import About from "./about/About";
import { Routes, Route } from "react-router";

const InterfaceRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default InterfaceRoute;
