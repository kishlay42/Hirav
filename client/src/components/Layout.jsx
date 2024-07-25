import React from "react";
import { Footer } from "./index";
import { Outlet } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate"; // Import the GoogleTranslate component

const Layout = () => {
  return (
    <div>
      <div className="bottom-4 right-0  fixed ">
        <GoogleTranslate />{" "}
        {/* Place the GoogleTranslate component where you want the widget to appear */}
      </div>{" "}
      <div className="bg-gradient-to-b from-white from-15% via-emerald-200 via-40% to-teal-400 to-90% ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
