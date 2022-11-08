/** @format */
import React from "react";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="hero min-h-screen  bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900">
      <div className="hero-content flex-col lg:justify-between lg:flex-row">
        <div className="flex mr-5">
          <p className="text-7xl text-blue-600 p-10 mr-5  bg-slate-800 rounded-full shadow-2xl">
            <Link>
              <FaFacebook />
            </Link>
          </p>
          <p className="text-7xl text-success p-10  mr-5  bg-slate-800 rounded-full shadow-2xl">
            <Link>
              <FaWhatsapp />
            </Link>
          </p>
          <p className="text-7xl text-pink-800 p-10 mr-5  bg-slate-800 rounded-full shadow-2xl">
            <Link>
              <FaInstagram />
            </Link>
          </p>
          <p className="text-7xl text-blue-800 p-10 mr-5  bg-slate-800 rounded-full shadow-2xl">
            <Link>
              <FaTwitter />
            </Link>
          </p>
        </div>
        <div className="p-8 rounded-3xl shadow-2xl bg-gradient-to-r from-blue-900 via-purple-700 to-slate-400">
          <h1 className="text-5xl font-bold text-white">Get Connected!</h1>
          <p className="py-6 text-black font-extrabold">
            You can also Email me at{" "}
            <Link className="text-yellow-400 text-xl">
              s.m.shariyer@gmail.com
            </Link>
          </p>
          <button className="btn bg-white text-black"> Instant Chat</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
