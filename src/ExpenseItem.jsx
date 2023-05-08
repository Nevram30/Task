import { useState } from "react";
import PropTypes from "prop-types";

function ExpenseItem({ expense, handleDeleteExpense, handleUpdateExpense }) {
  const [isEditMode, setIsEditMode] = useState();
  const [updatedExpense, setUpdatedExpense] = useState(expense);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  const handleSave = () => {
    setIsEditMode(false);
    handleUpdateExpense(expense);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedExpense({
      ...updatedExpense,
      [name]: value,
    });
  };

  return (
    <tr>
      {!isEditMode && (
        <>
          <td>{updatedExpense.title}</td>
          <td>{updatedExpense.amount}</td>
          <td>
            {updatedExpense.date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </td>
          <td>
            <button
              onClick={handleEdit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 mr-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-poppins"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteExpense}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-poppins"
            >
              Delete
            </button>
          </td>
        </>
      )}

      {isEditMode && (
        <>
          <td>
            <input
              type="text"
              name="title"
              value={updatedExpense.title}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="amount"
              value={updatedExpense.amount}
              onChange={handleChange}
            />
          </td>
          <td>
            <input type="date" name="date" value={updatedExpense.date} />
          </td>
          <td>
            <button
              onClick={handleSave}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 mr-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-poppins"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 mr-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-poppins"
            >
              Cancel
            </button>
          </td>
        </>
      )}
    </tr>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
  handleDeleteExpense: PropTypes.func.isRequired,
  handleUpdateExpense: PropTypes.func.isRequired,
};

export default ExpenseItem;
