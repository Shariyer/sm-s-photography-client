/** @format */
import React from "react";
import img1 from "../../../../assets/BannerImage/bannerImg1.jpg";
import img2 from "../../../../assets/BannerImage/bannerImg2.jpg";
import img3 from "../../../../assets/BannerImage/bannerImg3.jpg";
import img4 from "../../../../assets/BannerImage/bannerImg4.jpg";
import Slide from "./Slide/Slide";
const bannerData = [
  {
    img: img1,
    previous: 6,
    id: 1,
    next: 2,
  },
  {
    img: img2,
    previous: 1,
    id: 2,
    next: 3,
  },
  {
    img: img3,
    previous: 2,
    id: 3,
    next: 4,
  },
  {
    img: img4,
    previous: 3,
    id: 4,
    next: 1,
  },
];
const Banner = () => {
  return (
    <div className="carousel w-full rounded-2xl mt-1">
      {bannerData.map((slide) => (
        <Slide key={slide.id} slideData={slide}></Slide>
      ))}
    </div>
  );
};

export default Banner;
