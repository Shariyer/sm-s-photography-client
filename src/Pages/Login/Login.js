/** @format */

import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import loginImg from "../../assets/LoginImage/loginPic.jpeg";
import loginCover from "../../assets/LoginImage/loginCover.jpg";
import { authContext } from "../../Context/ContextProvider/ContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { EPLogin, SignInWithG } = useContext(authContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("given login info:", email, password);

    // Login with email and pass
    EPLogin(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log("Logged in user EP" + user);
      })
      .catch((err) => console.log(err.massage));
  };
  const handleGoogleLogin = () => {
    // google login
    SignInWithG()
      .then((result) => {
        const user = result.user;
        console.log("Logged in with google", user);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="hero mt-4 bg-gradient-to-r from-indigo-200 via-purple-700 to-slate-600">
      <div className="hero-content flex-col  lg:flex-row  bg-gradient-to-r from-indigo-200 via-purple-700 to-slate-600 rounded-2xl">
        <div>
          <img className="rounded-2xl" src={loginCover} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-gradient-to-r from-indigo-900 via-purple-700 to-slate-900">
          <form onSubmit={handleLogin} className="card-body">
            <div className="flex justify-between items-center px-5  rounded-2xl bg-base-200 py-3 shadow-lg ">
              <img className="w-16 rounded-3xl" src={loginImg} alt="" />
              <h1 className="text-5xl font-bold text-white">Login</h1>
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
            New to S.M.'s Snap??{" "}
            <Link
              className="underline text-orange-600 font-bold"
              to="/register"
            >
              Sign Up
            </Link>
          </p>
          <div>
            <h1 className="text-2xl text-center">Sign Up with Google</h1>
            <Link
              onClick={handleGoogleLogin}
              className="btn-outline flex flex-col justify-center items-center rounded-lg"
            >
              <p className="text-7xl">
                <FcGoogle />
              </p>
              <h3 className="hover:text-orange-700">Google</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
