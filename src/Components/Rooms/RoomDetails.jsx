import React from "react";
import Container from "../Shared/Container/Container";
import Header from "../Header/Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  return (
    <Container >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6">
          <Header></Header>
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-10">
            <div className="col-span-5">
              <RoomInfo></RoomInfo>
            </div>

            <div className="col-span-2 order-first md:order-last w-full">
              <RoomReservation></RoomReservation>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
