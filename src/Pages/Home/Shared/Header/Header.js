/** @format */

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../../Context/ContextProvider/ContextProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, SignOUT } = useContext(authContext);
  // handle sign out
  const handleSignOut = () => {
    SignOUT()
      .then(() => {
        console.log(" user Logged OUT");
      })
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <li>
        <Link
          className="font-semibold text-xl text-black hover:bg-white rounded"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="font-semibold text-xl text-black hover:bg-white rounded"
          to="/services"
        >
          Services
        </Link>
      </li>

      <li>
        <Link
          className="font-semibold text-xl text-black hover:bg-white rounded "
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className="font-semibold text-xl text-black hover:bg-white rounded "
          to="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="font-semibold text-xl text-black hover:bg-white rounded"
          to="/blog"
        >
          Blog
        </Link>
      </li>

      <li>
        <Link
          className="font-semibold text-xl text-black hover:bg-white rounded"
          to="/register"
        >
          SignUp
        </Link>
      </li>
      <li>
        {user?.uid ? (
          <>
            <Link
              className="font-semibold text-xl text-black hover:bg-white rounded"
              to="/myReview"
            >
              MyReview
            </Link>
            <Link
              className="font-semibold text-xl text-black hover:bg-white rounded"
              to="/add/service"
            >
              Add Service
            </Link>
            <p
              onClick={handleSignOut}
              className=" btn btn-outline font-semibold ml-5"
            >
              LogOut
            </p>
          </>
        ) : (
          <Link className="btn btn-outline font-semibold" to="/login">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar  h-32 p-5 bg-gradient-to-r from-indigo-200 via-purple-700 to-slate-600 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <figure className="flex justify-center items-center border rounded-2xl shadow-lg pr-4 bg-slate-200">
          <img className="w-28 rounded-2xl " src="logo.png" alt="" />
          <h1 className="text-4xl ml-2 font-extrabold text-black text-opacity-70">
            S.M.'s SnaP
          </h1>
        </figure>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full">
          {user?.photoURL ? (
            <img className="rounded-full" src={user?.photoURL} alt="" />
          ) : (
            <p className="text-4xl   ">{user?.email && <FaUser />}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
