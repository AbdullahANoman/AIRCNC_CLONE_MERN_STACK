import React from "react";
import Heading from "../Shared/Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title={"Floating Mountain Villa"}
        subtitle={"Sideman , Indonesia"}
      ></Heading>
      <div className="flex w-full md:h-[40vh] rounded-2xl mt-5 overflow-hidden">
        <img
          className="w-full object-cover"
          src="https://a0.muscache.com/im/pictures/a71562ca-bb0e-425d-b33f-e397617159e8.jpg?im_w=1200"
          alt="hotel image"
        />
      </div>
    </>
  );
};

export default Header;
