import React from "react";

function ExpenseForm({newExpense, handleNewExpenseTitle, handleNewExpenseAmount, handleAddExpense,}) 

{
  return (
    <div className="form mb-5">
      <label>New Item:</label>
      <input
        type="text"
        value={newExpense.title}
        onChange={handleNewExpenseTitle}
        placeholder="Item name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <br></br>
      <label>Item Amount:</label>

      <input
        type="number"
        value={newExpense.amount}
        placeholder="Expense Amount"
        onChange={handleNewExpenseAmount}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <br></br>
      <button onClick={handleAddExpense} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </div>
  );
}

export default ExpenseForm
