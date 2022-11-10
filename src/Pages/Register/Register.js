/** @format */
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import registerCover from "../../assets/RegisterImage/registerCover.jpg";
import loginImg from "../../assets/LoginImage/loginPic.jpeg";
import { authContext } from "../../Context/ContextProvider/ContextProvider";
import useTitle from "../../Hooks/useTitle";
import { setAuthToken } from "../../JWTapi/auth";

const Register = () => {
  useTitle("Register");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const { EPSignUp, UpdateUserProfile } = useContext(authContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.imgUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log("given" + name, email, password, url);

    //Sign up with email and password
    EPSignUp(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        handleUpdateUserProfile(name, url);
        navigate("/services");
        console.log("User created EP:", user);
        setAuthToken(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err.message));

    // updating user profile name and photoUrl
    const handleUpdateUserProfile = (name, url) => {
      const profile = {
        displayName: name,
        photoURL: url,
      };

      UpdateUserProfile(profile).catch((error) => {
        console.log(error);
      });
    };
  };
  return (
    <div className="hero py-20 bg-gradient-to-r from-base-200 via-purple-700 to-slate-00">
      <div className="hero-content flex-col  lg:flex-row  bg-gradient-to-r from-indigo-200 via-purple-700 to-slate-600 rounded-2xl">
        <div>
          <img className="rounded-2xl" src={registerCover} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="flex justify-between items-center px-5  rounded-2xl bg-base-200 py-3 shadow-lg ">
              <img className="w-16 rounded-3xl" src={loginImg} alt="" />
              <h1 className="text-5xl font-bold text-white">Register </h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="imgUrl"
                placeholder="Image URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-orange-800 text-white hover:bg-orange-600"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center py-2">
            Already have an Account??{" "}
            <Link className="underline text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
