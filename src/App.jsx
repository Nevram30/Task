import { useState, useEffect } from "react";
import BudgetPlanForm from "./BudgetPlanForm";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import DateDisplay from "./DateDisplay";

function App() {
  const [budgetPlan, setbudgetPlan] = useState([]);
  const [newbudgetPlan, setnewBudgetPlan] = useState({ amount: "" });
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: " ",
    date: " ",
  });
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState();

  const handleNewBudgetPlan = (event) => {
    setnewBudgetPlan({
      ...newbudgetPlan,
      amount: Number(event.target.value),
    });
  };

  const handleNewExpenseTitle = (event) => {
    setNewExpense({ ...newExpense, title: event.target.value });
  };
  const handleNewExpenseAmount = (event) => {
    setNewExpense({ ...newExpense, amount: Number(event.target.value) });
  };
  const handleNewExpenseDate = (event) => {
    setNewExpense({ ...newExpense, date: event.target.value });
  };
  const handleNewDate = () => {
    setDate([...date, newDate]);
    setNewDate({ date: "" });
  };

  // handleAddBudget
  const handleAddBudget = (event) => {
    event.preventDefault();
    if (newbudgetPlan.amount > 0) {
      setbudgetPlan([...budgetPlan, newbudgetPlan]);
      setnewBudgetPlan({ amount: " " });
    } else {
      alert("Please enter a valid amount");
    }
  };

  // Add expense
  const handleAddExpense = () => {
    if (newExpense.title !== "" && newExpense.amount > 0) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ title: " ", amount: " " });
    }
  };
  // for deleting data items from the list
  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };
  // Calculate the total expenses
  const calculateTotalExpenses = () => {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i].amount;
    }
    return total;
  };
  // Calculate the remaining budget
  const calculateRemainingBudget = () => {
    const totalExpenses = calculateTotalExpenses();
    return newbudgetPlan.amount - totalExpenses;
  };
  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };

  useEffect(() => {
    // reset expenses to zero on the first day of each month
    const resetExpenses = () => {
      if (date.getDate() === 0) {
        setExpenses([]);
      }
    };
    resetExpenses();
  }, [date]);

  return (
    <div className="w-full h-screen">
      <div className="text-center font-black text-lg mt-5">
        <h1 className="mb-10 font-poppins">BUDGET TRACKING APP</h1>
      </div>
      <div className="grid gap-10 grid-cols-2 grid-rows-1">
        <div className="border-2 ml-20 p-5 rounded-lg">
          <h2 className="font-bold mb-5 font-poppins">Budget Saving Tracker</h2>
          <DateDisplay
            date={date}
            handleNewExpenseDate={handleNewExpenseDate}
            handleDateChange={handleDateChange}
          />
          <BudgetPlanForm
            newbudgetPlan={newbudgetPlan}
            handleNewBudgetPlan={handleNewBudgetPlan}
            handleAddBudget={handleAddBudget}
          />
          <ExpenseForm
            newExpense={newExpense}
            handleNewExpenseTitle={handleNewExpenseTitle}
            handleNewExpenseAmount={handleNewExpenseAmount}
            handleAddExpense={handleAddExpense}
          />
        </div>
        <div className="border-2 mr-20 p-5 rounded-lg">
          <ExpenseSummary
            totalExpenses={calculateTotalExpenses()}
            remainingBudget={calculateRemainingBudget()}
          />
          <ExpenseList
            expenses={expenses}
            handleDeleteExpense={handleDeleteExpense}
            date={date}
            handleNewDate={handleNewDate}
            handleDateChange={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
