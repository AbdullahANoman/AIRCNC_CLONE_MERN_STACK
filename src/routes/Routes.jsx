import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categories from "../Components/Categories/Categories";
import Login from "../Components/Login/Login";
import Home from "../layouts/Home";

import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../Components/Rooms/RoomDetails";
import AddRoom from "../Components/Dashboard/AddRoom";
import SignUp from "../Components/Signup/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import { getRoom } from "../api/rooms";
import { EmailAuthCredential } from "firebase/auth";
import Update from "../Components/Update/Update";

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
        path: "/rooms/:id",
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader : ({params}) => getRoom(params.id)
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
  },
  {
    path : '/dashboard',
    element : <DashboardLayout></DashboardLayout>,
    children : [
      {
        path : 'addRoom',
        element : <AddRoom></AddRoom>
      }
    ]
  },
  {
    path:"/update",
    element : <Update></Update>
  }
]);
