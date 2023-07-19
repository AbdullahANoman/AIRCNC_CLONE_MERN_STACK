import React from "react";
import Calender from "../Rooms/Calender.jsx";
import Button from "../Button/Button.jsx";
const RoomReservation = () => {
  return (
    <div className="border-[1px] rounded-xl">
      <div className="flex flex-row items-center gap-1 ml-4 py-4">
        <p className="text-4xl font-bold">$ 200</p>
        <p className="text-xl text-neutral-400">night</p>
      </div>
      <hr />
      <div className="mx-auto order-first md:order-last">
        <Calender></Calender>
      </div>
      <hr />
      <div>
        <Button label={"Reserve"}></Button>
      </div>
      <hr />
      <div className="flex justify-between px-2 text-2xl font-semibold py-4"> 
        <p>Total</p>
        <p>$ 300</p>
      </div>
    </div>
  );
};

export default RoomReservation;
