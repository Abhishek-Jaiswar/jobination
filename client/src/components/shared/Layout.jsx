// src/components/shared/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { Toaster } from "../ui/sonner.jsx";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <div className=" h-screen bg-customImage bg-cover bg-center backdrop-blur-sm">
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
