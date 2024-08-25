// src/components/shared/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Toaster } from "../ui/sonner.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
};

// h-screen bg-customImage bg-cover bg-center backdrop-blur-sm

export default Layout;
