/** @format */

import { comment } from "postcss";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Comment = ({ myReview, handleDeleteComment, handleUpdateComment }) => {
  const { _id, title, reviewText } = myReview;
  return (
    <div className="flex justify-between py-7 items-center  px-4">
      <h3 className="text-2xl font-bold text-black ">Service Name :{title}</h3>

      <p className="text-2xl font-bold text-black text-center ">
        comment : {reviewText}
      </p>
      <div className="flex">
        <button
          className="flex justify-center items-center text-xl bg-green-800 px-10 mr-3 rounded-xl py-2 font-bold text-white shadow-xl "
          onClick={() => handleUpdateComment(_id)}
        >
          <h3>
            <FaEdit />
          </h3>
          <h2>Edit</h2>
        </button>
        <button
          className="flex justify-center items-center text-xl bg-red-700 px-5 rounded-xl py-2 font-bold text-white shadow-xl "
          onClick={() => handleDeleteComment(_id)}
        >
          <h3>
            <RiDeleteBin6Line />
          </h3>
          <h2>Delete</h2>
        </button>
      </div>
    </div>
  );
};

export default Comment;
