/** @format */

import React from "react";
import { Link } from "react-router-dom";

const HomeServices = ({ data }) => {
  const { img, title, price, description, _id } = data;

  return (
    <div className="relative flex flex-col items-center py-5  shadow-2xl rounded-2xl w-11/12 mx-auto mb-10">
      <figure>
        <img className="w-56 h-92 rounded-3xl" src={img} alt="" />
      </figure>
      <div className=" my-16 w-9/12 mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-black font-bold">{title}</h2>
          <h2 className="text-2xl text-black font-bold">Price :{price}$</h2>
        </div>
        <p className="text-center">
          {description.slice(0, 100) + "...Read More"}
        </p>
        <div className="flex justify-center ">
          <button className="btn btn-primary absolute bottom-3">
            <Link to={`services/service/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
