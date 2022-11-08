/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";
import Header from "../Pages/Home/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
