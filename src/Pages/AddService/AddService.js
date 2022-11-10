/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import toast, { Toaster } from "react-hot-toast";

const notifyServiceAdd = () => {
  toast.success("Service successfully Added");
};

const AddService = () => {
  useTitle("Add Service");
  const navigate = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const img = form.imgUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const date = new Date();
    const service = {
      title: title,
      img: img,
      price: price,
      description: description,
      date: date,
    };
    fetch(
      "https://b6a11-service-review-server-side-shariyer.vercel.app/services",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(service),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Your service added successfully");
          form.reset();
          navigate("/services");
        }
      })
      .catch((err) => console.log(err));
    notifyServiceAdd();
  };
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900 ">
      <form onSubmit={handleAddService} className="card-body w-9/12 mx-auto">
        <div className="flex justify-between items-center px-5  rounded-2xl bg-base-200 py-3 shadow-lg ">
          <h1 className="text-5xl font-bold text-white">ADD SERVICE </h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Image URL</span>
          </label>
          <input
            type="text"
            name="imgUrl"
            placeholder="Image URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price in $</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="service price"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Type description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn text-xl bg-orange-800 text-white hover:bg-orange-600"
            type="submit"
            value="ADD"
          />
          <Toaster></Toaster>
        </div>
      </form>
    </div>
  );
};

export default AddService;
