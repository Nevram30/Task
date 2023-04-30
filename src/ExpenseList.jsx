import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, handleDeleteExpense, handleUpdateExpense, date }) {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="mt-5 font-bold mb-5">Item List</h2>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Items</th>
            <th scope="row" class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Amount</th>
            <th scope="row" class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Date</th>
            <th scope="row" class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Action</th>
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

export default ExpenseList;
