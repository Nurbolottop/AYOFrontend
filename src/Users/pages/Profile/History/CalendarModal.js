import React from "react";
import Calendar from "react-calendar";
import arrowPrev from "../../../../img/icons/arrowCalendar.svg";
// import "react-calendar/dist/Calendar.css";
const CalendarModal = ({ isOpen, onClose, value, onChange }) => {
  if (!isOpen) return null;
  return (
    <div className="history__modal-calendar" modals="calendar">
      <Calendar
        prevLabel={<img src={arrowPrev} alt="" />}
        nextLabel={
          <img className="history__modal-rotate" src={arrowPrev} alt="" />
        }
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CalendarModal;
