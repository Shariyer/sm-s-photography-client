/** @format */

import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { authContext } from "../../Context/ContextProvider/ContextProvider";

const ServiceDetailsAndReview = () => {
  const service = useLoaderData();
  const { user } = useContext(authContext);
  // console.log(user);
  const { _id, img, title, description, price } = service[0];
  // handle Review form
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewText = form.review.value;
    console.log(reviewText);
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center py-5 shadow-2xl rounded-2xl w-1/2 ">
        <figure>
          <img className="w-56 h-92 rounded-3xl" src={img} alt="" />
        </figure>
        <div className=" my-16 w-11/12 ">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl text-black font-bold">
              Service Name :{title}
            </h2>
            <h2 className="text-2xl text-black font-bold">Price :{price}</h2>
          </div>
          <p className="text-start">{description}</p>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-center">
          Review of this Service{" "}
        </h2>
        {/* {
                  
              } */}

        <div className="flex justify-center items-center mt-10">
          <form
            onSubmit={handleReview}
            className="form-control rounded-2xl bg-slate-800"
          >
            <label className="label">
              <span className="label-text font-bold text-xl">
                ADD Your Review
              </span>
            </label>
            <label className="input-group input-group-vertical">
              <input
                type="text"
                name="review"
                placeholder="Type Your Review"
                className="input input-bordered  py-10 px-20"
              />
            </label>
            <input
              type="submit"
              className="btn btn-outline btn-purple-900 font-bold text-xl text-black"
              value="ADD"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsAndReview;