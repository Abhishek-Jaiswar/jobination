import React from "react";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/shared/Hero";

const Layout = () => {
  return (
    <div className=" h-screen bg-customImage bg-cover bg-center backdrop-blur-sm">
      <div>
        <Navbar />
      </div>
      <div className=" mt-24 md:mt-32 w-full flex items-center justify-center">
        <Hero />
      </div>
    </div>
  );
};

export default Layout;
