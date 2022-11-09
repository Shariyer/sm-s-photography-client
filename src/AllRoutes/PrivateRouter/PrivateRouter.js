/** @format */

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../Context/ContextProvider/ContextProvider";

const PrivateRouter = ({ children }) => {
  const { loading, user } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return <button className="btn btn-square loading p-10"></button>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
