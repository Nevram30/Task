import React from "react";

function BudgetPlanForm({ budgetPlan, handleBudgetPlan }) {
  return (
    <div className="form mb-5">
      <label>Budget Amount:</label>
      <input type="number" value={budgetPlan} onChange={handleBudgetPlan} 
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default BudgetPlanForm;
