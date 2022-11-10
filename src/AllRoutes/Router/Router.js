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
import ServiceDetailsAndReview from "../../Pages/ServiceDetailsAndReview/ServiceDetailsAndReview";
import AddService from "../../Pages/AddService/AddService";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
        element: (
          <PrivateRouter>
            <MyReview />
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add/service",
        element: (
          <PrivateRouter>
            <AddService />
          </PrivateRouter>
        ),
      },
      {
        path: "/services/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/service/${params.id}`),
        element: (
          <PrivateRouter>
            <ServiceDetailsAndReview />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
