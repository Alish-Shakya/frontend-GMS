import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "../Footter";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
