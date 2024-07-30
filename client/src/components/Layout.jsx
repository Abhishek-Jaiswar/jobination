// src/components/shared/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar.jsx";

const Layout = () => {
  return (
    <div className="h-screen bg-customImage bg-cover bg-center backdrop-blur-sm">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
