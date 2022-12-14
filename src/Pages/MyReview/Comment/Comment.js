/** @format */

import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Comment = ({ myReview, handleDeleteComment, handleUpdateComment }) => {
  const { _id, title, reviewText } = myReview;
  return (
    <div className="flex justify-between py-7 items-center shadow-2xl rounded-2xl  px-4 bg-gradient-to-r from-indigo-800 via-purple-700 to-slate-200 mb-2">
      <h3 className="text-2xl font-bold text-black ">Service Name :{title}</h3>

      <p className="text-2xl font-bold text-black text-center ">
        comment : {reviewText}
      </p>
      <div className="flex">
        <Link>
          <button
            className="flex justify-center items-center text-xl bg-green-800 px-10 mr-3 rounded-xl py-2 font-bold text-white shadow-xl "
            onClick={() => handleUpdateComment(_id)}
          >
            <h3>
              <FaEdit />
            </h3>
            <h2>Edit</h2>
          </button>
        </Link>

        <button
          className="flex justify-center items-center text-xl bg-red-700 px-5 rounded-xl py-2 font-bold text-white shadow-xl "
          onClick={() => handleDeleteComment(_id)}
        >
          <h3>
            <RiDeleteBin6Line />
          </h3>
          <h2>Delete</h2>
        </button>

        <Toaster />
      </div>
    </div>
  );
};

export default Comment;
