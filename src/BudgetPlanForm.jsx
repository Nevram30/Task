import PropTypes from "prop-types";

function BudgetPlanForm({ newbudgetPlan, handleNewBudgetPlan }) {
  return (
    <div className="form mb-5">
      <label className="font-poppins">Budget Amount:</label>
      <input
        type="number"
        value={newbudgetPlan.amount}
        placeholder="Enter Budget Amount"
        onChange={handleNewBudgetPlan}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppins"
      />
    </div>
  );
}

BudgetPlanForm.propTypes = {
  newbudgetPlan: PropTypes.shape({
    amount: PropTypes.number,
  }),
  handleNewBudgetPlan: PropTypes.func,
};

export default BudgetPlanForm;
