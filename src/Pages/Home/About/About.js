/** @format */
import React from "react";
import ownerPhoto1 from "../../../assets/OwnerPhoto/ownerPhoto-1.jpg";
import ownerPhoto2 from "../../../assets/OwnerPhoto/ownerPhoto-2.jpeg";

const About = () => {
  return (
    <div className=" bg-gradient-to-r from-indigo-200 via-purple-700 to-slate-600">
      <h3 className="text-7xl text-center font-extrabold text-warning mt-5">
        About US
      </h3>
      <div>
        <div className="hero my-40 rounded-2xl ">
          <div className=" w-1/2 rounded-2xl hero-content flex-col lg:flex-row   bg-gradient-to-r from-indigo-900 via-purple-500 to-base-600  shadow-2xl">
            <div className=" p-2">
              <img
                src={ownerPhoto2}
                alt=""
                className="h-96  rounded-lg shadow-2xl "
              />
            </div>
            <div className="w-1/2 p-2 mx-3">
              <h1 className="text-5xl font-bold text-white mb-5">
                Proffessional <br /> 5 Years of experience <br /> in this field
              </h1>
              <p className="text-xl font-bold text-black">
                I have done tremendous number of Wedding photography coverage in
                past 5 years and more. I have also work with International
                Photographer and super persistent with my team for last 2 years.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-1/2 mx-auto rounded-2xl bg-gradient-to-r from-indigo-900 via-purple-500 to-base-600  shadow-2xl">
        <div className="hero my-40 rounded-2xl ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="  p-2">
              <img src={ownerPhoto1} alt="" className=" h-96 rounded-lg  " />
            </div>
            <div className="w-1/2  mx-3 border p-3 rounded-2xl">
              <h1 className="text-4xl font-extrabold">
                I have a team of superbly talented <br />
                <br /> young fellows who are workaholic <br />
                <br /> Always find a way to complete the work with
                proffessionalism.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-3">
        <button className=" bg-purple-600 hover:bg-purple-800 text-white rounded-full py-4 px-5 text-4xl font-bold mb-10 shadow">
          Get FUll Biography
        </button>
      </div>
    </div>
  );
};

export default About;
