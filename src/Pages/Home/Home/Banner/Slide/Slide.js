/** @format */
import React from "react";
import "./slide.css";

const Slide = ({ slideData }) => {
  const { id, previous, next, img } = slideData;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="gradient-img">
        <img src={img} alt="" className="w-full rounded-2xl" />
      </div>
      <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${previous}`}
          className="btn btn-circle bg-warning text-black border-none mr-5"
        >
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <h1 className=" text-6xl font-bold text-white absolute flex justify-start transform -translate-y-1/2 left-12 top-1/4">
        Proffestional <br /> Best Price <br /> Premium service
      </h1>
      <p className="text-5xl font-bold text-white w-1/2 absolute flex justify-start transform -translate-y-1/2 left-12 top-1/2">
        Special Offer Available only if you are marrying without job. If you
        have financial problem. We care for every people . Each and everyone
        deserves to be happy in their special day. And I promise to Capture the
        happiest moment.
      </p>
      <div className=" text-6xl font-bold text-white absolute flex justify-start transform -translate-y-1/2 left-12 top-3/4">
        <button className="font-extrabold btn btn-outline btn-warning">
          Latest work
        </button>
      </div>
    </div>
  );
};

export default Slide;
