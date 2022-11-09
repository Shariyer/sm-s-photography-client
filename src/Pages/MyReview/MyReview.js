/** @format */

import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/ContextProvider/ContextProvider";
import Comment from "./Comment/Comment";

const MyReview = () => {
  const { user } = useContext(authContext);
  const [myReviews, setMyReview] = useState([]);
  // getting given reviews from database for user
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);
  const handleUpdateComment = (id) => {};
  const handleDeleteComment = (id) => {};
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-5">
        Your Comments are:
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
    </div>
  );
};

export default MyReview;
