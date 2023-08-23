import React, { useContext, useState } from "react";
import Calender from "../Rooms/Calender.jsx";
import Button from "../Button/Button.jsx";
import { AuthContext } from "../../providers/AuthProvider.jsx";
import BookingModal from "../Modal/BookingModal.jsx";
import { formatDistance } from "date-fns";
const RoomReservation = ({ room }) => {
  const { user, role } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { price, host, from, to, location,title } = room || {};
  const { email, name } = host || {};
  const [value, setValue] = useState({
    startDate: new Date(from),
    endDate: new Date(to),
    key: "selection",
  });
  const totalPrice =
    parseFloat(formatDistance(new Date(to), new Date(from)).split(" ")[0]) *
    price;
  const [bookingInfo, setBookingInfo] = useState({
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    host: email,
    location: location,
    price: totalPrice,
    to: value?.endDate,
    from: value?.startDate,
    title
  });

  const modalHandler = () => {
    console.log("I am Modal handler");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSelect = (ranges) =>{
    setValue({...value})
  }


  return (
    <>
      <div className="border-[1px] rounded-xl">
        <div className="flex flex-row items-center gap-1 ml-4 py-4">
          <p className="text-4xl font-bold">$ {price}</p>
          <p className="text-xl text-neutral-400">night</p>
        </div>
        <hr />
        <div className="mx-auto order-first md:order-last">
          <Calender value={value} handleSelect={handleSelect}></Calender>
        </div>
        <hr />
        <div>
          <Button
            onClick={() => setIsOpen(true)}
            disabled={user?.email == email}
            label={"Reserve"}
          ></Button>
        </div>
        <hr />
        <div className="flex justify-between px-2 text-2xl font-semibold py-4">
          <p>Total</p>
          <p>$ {totalPrice}</p>
        </div>
      </div>
      <BookingModal
        bookingInfo={bookingInfo}
        closeModal={closeModal}
        modalHandler={modalHandler}
        isOpen={isOpen}
      ></BookingModal>
    </>
  );
};

export default RoomReservation;
