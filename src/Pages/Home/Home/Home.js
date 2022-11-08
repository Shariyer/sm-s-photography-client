/** @format */

import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About />
      <Contact />
    </div>
  );
};

export default Home;
