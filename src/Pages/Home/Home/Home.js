/** @format */

import React, { useEffect, useState } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <About />
      <Contact />
      <h2 className="text-center text-7xl font-bold bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900 pb-4">
        Top Hot deals
      </h2>
      <div className="grid grid-cols-3 gap-18  bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900">
        {services.map((service) => (
          <HomeServices key={service._id} data={service}></HomeServices>
        ))}
      </div>
    </div>
  );
};

export default Home;
