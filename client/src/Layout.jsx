// src/components/shared/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Layout = () => {
  return (
    <div className="bg-custom-image bg-cover bg-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
