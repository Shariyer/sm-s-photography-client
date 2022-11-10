/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/ContextProvider/ContextProvider";
import useTitle from "../../Hooks/useTitle";
import Comment from "./Comment/Comment";
import toast from "react-hot-toast";

const notifyEdit = () => toast.success("Your review has been Edited");
const notifyDelete = () => {
  toast.success("Your review has been Deleted Successfully");
};

const MyReview = () => {
  useTitle("Reviews");
  const navigate = useNavigate();
  const { user } = useContext(authContext);
  const [myReviews, setMyReview] = useState([]);
  // getting given reviews from database for user
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("smDB-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, myReviews?.reviewText]);
  const handleUpdateComment = (id) => {
    const confirmation = window.confirm("Do you want to Edit your comment??");
    if (confirmation) {
      const updatedReviewText = prompt("Write your comment");
      const data = {
        updatedReviewText,
      };

      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("smDB-token")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            notifyEdit();
            // toast.success("Your review has been Edited");
            navigate("/myReview");
          }
        })
        .catch((err) => console.log(err));
      notifyEdit();
    }
  };
  const handleDeleteComment = (id) => {
    const confirmation = window.confirm("Do you want to delete your review");
    if (confirmation) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("smDB-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            notifyDelete();
            // toast.success("Your review has been Deleted Successfully");
            const remaining = myReviews.filter((rw) => rw._id !== id);
            setMyReview(remaining);
          }
        })
        .catch((err) => console.log(err));
      notifyDelete();
    }
  };
  return (
    <div className="bg-gradient-to-r pb-5 from-indigo-500 via-purple-700 to-slate-600">
      <h2 className="text-4xl text-center font-bold mt-5 text-white">
        Your Reviews are:
      </h2>
      <div className="bg-white rounded-xl my-5 ">
        {myReviews.map((comment) => (
          <Comment
            key={comment._id}
            myReview={comment}
            handleUpdateComment={handleUpdateComment}
            handleDeleteComment={handleDeleteComment}
          ></Comment>
        ))}
      </div>
      {myReviews?.length === 0 && (
        <h1 className="text-center text-5xl my-5 font-bold text-red-500">
          You have not Reviewed yet!!
        </h1>
      )}
    </div>
  );
};

export default MyReview;
