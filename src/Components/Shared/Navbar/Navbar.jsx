import React, { useState } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchDestination from "./NavForms";
// import { getRooms } from "../../api/roomApi";
import logo from "../../../assets/images/logo.png";
import MenuDropdown from "./MenuDropdown";
const Navbar = ({ setRooms }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div
      className={`py-4 w-full bg-white  shadow-sm ${
        isOpen
          ? "h-[200px]  duration-500  z-20 relative  drop-shadow-2xl "
          : " duration-500 h-[100px]  "
      }`}
    >
      <div>
        <Container>
          <div className="flex flex-row justify-between ">
            <div onClick={() => setIsOpen(false)}>
              <Link to="/">
                <img
                  width={100}
                  height={100}
                  className="cursor-pointer hidden md:block pt-5"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div>
              {isOpen ? (
                <SearchDestination
                  setRooms={setRooms}
                  setIsOpen={setIsOpen}
                ></SearchDestination>
              ) : (
                <Search isOpen={isOpen} setIsOpen={setIsOpen}></Search>
              )}
            </div>
            <div onClick={() => setIsOpen(false)}>
              <MenuDropdown />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
