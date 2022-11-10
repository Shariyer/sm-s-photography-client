/** @format */

import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import Service from "./Service/Service";

const Services = () => {
  useTitle("Services");
  // state for services
  const [services, setServices] = useState([]);

  // fetching services from api
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-shariyer.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [services]);
  return (
    <div className=" py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-1 gap-y-10  bg-gradient-to-r from-indigo-400 via-purple-900 to-slate-500">
      {services.map((service) => (
        <Service key={service._id} data={service}></Service>
      ))}
    </div>
  );
};

export default Services;
