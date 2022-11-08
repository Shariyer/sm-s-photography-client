/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/Home/About/About";
import Blog from "../../Pages/Home/Blog/Blog";
import Contact from "../../Pages/Home/Contact/Contact";
import Services from "../../Pages/Services/Services";
import MyReview from "../../Pages/MyReview/MyReview";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/myReview",
        element: <MyReview />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
