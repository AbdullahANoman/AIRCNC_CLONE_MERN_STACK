import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
