import React from "react";

function ExpenseSummary({ totalExpenses, remainingBudget }) {
  return (
    <div className="expense-summary ">
      <h2 className="font-poppins font-bold mb-5">Expense Summary:</h2>
      <p>Total Items: ${totalExpenses}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
    </div>
  );
}

export default ExpenseSummary;
