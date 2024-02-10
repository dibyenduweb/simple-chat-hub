
import {
    createBrowserRouter,
  } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Root from "../root/Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/profile",
            element: <Profile/>
          },
          {
            path: "/messenger",
            element: <Home></Home>,
          },
          {
            path: "/notification",
            element: <Home></Home>,
          },
        
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/register",
            element: <Register></Register>
          },
          {
            path:"/profile",
            element:<Profile></Profile>
          },
         
        ]
      },
    ]);