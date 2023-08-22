import React from "react";
import Container from "../Container/Container";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Search from "./Search";
import MenuDropdown from "./MenuDropdown";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center">
            <div>
              <Link to="/">
                <img
                  width={100}
                  height={100}
                  className="cursor-pointer hidden md:block"
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Search></Search>
            </div>
            <div>
              <MenuDropdown></MenuDropdown>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
