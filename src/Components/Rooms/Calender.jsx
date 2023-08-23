import { DateRange } from "react-date-range";

const DatePicker = ({ value,handleSelect }) => {
  return (
    <div className="flex justify-center ">
      <DateRange
        ranges={[value]}
        rangeColors={["#F43F5E"]}
        date={new Date()}
        direction="vertical"
        showDateDisplay={false}
        minDate={value.startDate}
        onChange={handleSelect}
        maxDate={value.endDate}
      />
    </div>
  );
};

export default DatePicker;
