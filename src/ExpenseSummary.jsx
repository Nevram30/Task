import React from "react";

function ExpenseSummary({ totalExpenses, remainingBudget }) {
  return (
    <div className="expense-summary">
      <h1 className="font-poppins font-bold mb-5">Expense Summary:</h1>
      <div className="flex gap-10">
      <p className="font-bold">Total Items:</p> ${totalExpenses}
      <p className="font-bold">Remaining Budget:</p> ${remainingBudget}
      </div>
    </div>
  );
}

export default ExpenseSummary;
