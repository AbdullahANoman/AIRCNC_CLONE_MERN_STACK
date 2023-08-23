import React from "react";
import Heading from "../Shared/Heading/Heading";

const Header = ({room}) => {
  const {title,location,imageUrl}  = room
  return (
    <>
      <Heading
        title={title}
        subtitle={location}
      ></Heading>
      <div className="flex w-full md:h-[40vh] rounded-2xl mt-5 overflow-hidden">
        <img
          className="w-full object-cover"
          src={imageUrl}
          alt="hotel image"
        />
      </div>
    </>
  );
};

export default Header;
