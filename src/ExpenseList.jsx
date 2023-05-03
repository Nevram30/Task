import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";

function ExpenseList({
  expenses,
  handleDeleteExpense,
  handleUpdateExpense,
  date,
}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="mt-5 font-bold mb-5">Item List</h2>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 p-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-10">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 p-10">
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white p-2"
            >
              Items
            </th>
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Amount
            </th>
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Date
            </th>
            <th
              scope="row"
              className="font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              expense={expense}
              handleDeleteExpense={() => handleDeleteExpense(index)}
              handleUpdateExpense={(updatedExpense) => handleUpdateExpense(index, updatedExpense)}
              date={date}
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
  date: PropTypes.string.isRequired,
};

export default ExpenseList;
