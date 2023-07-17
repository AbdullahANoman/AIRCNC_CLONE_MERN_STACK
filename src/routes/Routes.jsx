import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categories from "../Components/Categories/Categories";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/Signup";
import Home from "../layouts/Home";
import RoomDetails from "../layouts/RoomDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/room/:id",
        element: <RoomDetails></RoomDetails>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element:<SignUp></SignUp>
  }
]);
