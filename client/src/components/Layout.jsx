// src/components/shared/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar.jsx";
import background from '../../public/bits-back.svg'

const Layout = () => {
  const mainPageStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Adjust this as needed
    width: "100%",
  };
  return (
    <div style={mainPageStyle} className="h-screen bg-customImage bg-cover bg-center backdrop-blur-sm">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
