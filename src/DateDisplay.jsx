import PropTypes from "prop-types";

function DateDisplay({ date, handleDateChange }) {
  return (
    <div className="date pb-5">
      <label>Date:</label>
      <input
        type="date"
        value={date.toISOString().substr(0, 10)}
        onChange={handleDateChange}
      />
    </div>
  );
}

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  handleDateChange: PropTypes.func.isRequired,
};

export default DateDisplay;
