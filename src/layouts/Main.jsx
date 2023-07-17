import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28 " >
        <Outlet></Outlet>
      </div>
      <Footer className=""></Footer>
    </div>
  );
};

export default Main;
