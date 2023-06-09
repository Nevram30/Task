import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";

function ExpenseList({ expenses, handleDeleteExpense, handleUpdateExpense }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="mt-5 font-bold mb-5 font-poppins">Item List</h2>
      {/* This is the Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-10">
          {/* This is the Heading Row */}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-10">
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white p-2 font-poppins"
            >
              Items
            </th>
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white font-poppins"
            >
              Amount
            </th>
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white font-poppins"
            >
              Date
            </th>
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white font-poppins"
            >
              Action
            </th>
          </tr>
        </thead>
        {/* Body of The Table */}
        <tbody>
          {expenses.map((expense, index) => (
            // ExpenseItem Components
            <ExpenseItem
              key={index}
              expense={expense}
              handleDeleteExpense={() => handleDeleteExpense(index)}
              handleUpdateExpense={(updatedExpense) =>
                handleUpdateExpense(index, updatedExpense)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.object.isRequired,
  handleDeleteExpense: PropTypes.func.isRequired,
  handleUpdateExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
