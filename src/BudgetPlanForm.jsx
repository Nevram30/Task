import PropTypes from "prop-types";

function BudgetPlanForm({ budgetPlan, handleBudgetPlan }) {
  return (
    <div className="form mb-5">
      <label>Budget Amount:</label>
      <input
        type="number"
        value={budgetPlan}
        onChange={handleBudgetPlan}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

BudgetPlanForm.propTypes = {
  budgetPlan: PropTypes.number.isRequired,
  handleBudgetPlan: PropTypes.func.isRequired,
};

export default BudgetPlanForm;

