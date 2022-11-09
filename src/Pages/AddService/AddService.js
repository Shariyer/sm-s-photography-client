/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const img = form.imgUrl.value;
    const price = form.price.value;
    const description = form.description.value;
    const service = {
      title: title,
      img: img,
      price: price,
      description: description,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("service added");
          form.reset();
          navigate("/services");
        }
      })
      .catch((err) => console.log(err));
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
        </div>
      </form>
    </div>
  );
};

export default AddService;
