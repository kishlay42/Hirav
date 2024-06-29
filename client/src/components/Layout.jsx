import React from "react";
import { NavBar, Footer } from "./index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div >
      <NavBar />
      <div className="bg-gradient-to-b from-white from-15% via-emerald-200 via-40% to-teal-400 to-90% pb-24 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
