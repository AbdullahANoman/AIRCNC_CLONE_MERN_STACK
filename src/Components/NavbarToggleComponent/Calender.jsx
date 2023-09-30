import React from "react";
import { Calendar } from "react-date-range";

const CheckInCalendar = ({
  checkOutDate,
  handleCheckOutDate,
  checkInDate,
  handleCheckInDates,
}) => {
  //   console.log(checkInDate, checkOutDate);

  // console.log(checkInDate, checkOutDate);
  return (
    <div className="flex justify-center gap-5">
      <div>
      <p className="text-gray-600 text-sm  text-center font-semibold">Check In Date</p>
        <Calendar
          dateDisplayFormat={"MMM d"}
          date={checkInDate}
          onChange={handleCheckInDates}
        />
      </div>

      <div>
        <p className="text-gray-600 text-sm   text-center font-semibold">Check Out Date</p>
        <Calendar date={checkOutDate} onChange={handleCheckOutDate} />
      </div>
    </div>
  );
};

export default CheckInCalendar;
