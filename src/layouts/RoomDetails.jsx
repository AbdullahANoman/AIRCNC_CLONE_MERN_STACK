import React from "react";
import Container from "../Components/Shared/Container/Container";
import Header from "../Components/Header/Header";
import RoomInfo from "../Components/Rooms/RoomInfo";

const RoomDetails = () => {
  return (
    <Container>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-6">
          <Header></Header>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <RoomInfo></RoomInfo>
            </div>
            <div>Reservation</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
