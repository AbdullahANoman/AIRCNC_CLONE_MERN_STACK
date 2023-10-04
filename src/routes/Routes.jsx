import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Categories from "../Components/Categories/Categories";
import Login from "../Components/Login/Login";
import Home from "../layouts/Home";

import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../Components/Rooms/RoomDetails";
import AddRoom from "../Components/Dashboard/pages/AddRoom";
import SignUp from "../Components/Signup/SignUp";
import DashboardLayout from "../layouts/DashboardLayout";
import { getRoom } from "../api/rooms";
import { EmailAuthCredential } from "firebase/auth";
import Update from "../Components/Update/Update";
import MyBookings from "../Components/Dashboard/pages/MyBookings";
import MyListings from "../Components/Dashboard/pages/MyListings";
import ManageBookings from "../Components/Dashboard/pages/ManageBookings";

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
        path : 'add-room',
        element : <AddRoom></AddRoom>
      },
      {
        path: 'my-bookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: 'my-listings',
        element : <MyListings/>
      },
      {
        path:'manage-bookings',
        element:<ManageBookings/>
      }
    ]
  },
  {
    path:"/update",
    element : <Update></Update>
  }
]);
