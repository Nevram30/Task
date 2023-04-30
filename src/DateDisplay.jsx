import React from "react";

function DateDisplay({ date, handleDateChange }) {
  return (
    <div className="date pb-5">
      <label>Date:</label>
      <input type="date" value={date.toISOString().substr(0, 10)} onChange={handleDateChange} />
    </div>
  );
}

export default DateDisplay;
