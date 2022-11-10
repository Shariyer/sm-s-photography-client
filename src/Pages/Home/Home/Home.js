/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-shariyer.vercel.app/home/services"
    )
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
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-18  bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900">
        {services.map((service) => (
          <HomeServices key={service._id} data={service}></HomeServices>
        ))}
      </div>
      <div className="flex justify-center items-center bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900 pb-5">
        <Link to="/services">
          <button className="btn btn-outline text-white hover:text-white hover:bg-purple-900 text-xl font-bold px-8 ">
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
