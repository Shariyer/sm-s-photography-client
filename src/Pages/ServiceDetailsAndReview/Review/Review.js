/** @format */

import React from "react";

const Review = ({ review }) => {
  const { photoURL, reviewText, name } = review;
  console.log("inside review", review);
  return (
    <div className="flex items-center bg-purple-500 rounded-xl my-5 mx-10">
      <div>
        <img className="w-full" src={photoURL} alt="" />
      </div>
      <div className=" px-20">
        <h3 className="text-start text-black">Name:{name}</h3>
        <p className="text-start text-black">comment:{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
