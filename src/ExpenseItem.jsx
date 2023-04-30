import React, { useState } from "react";

function ExpenseItem({ expense, handleDeleteExpense, handleUpdateExpense, date }) {
  const expenseDate = new Date(date);
  const expenseDateString = expenseDate.toLocaleDateString("en-US");

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedExpense, setUpdatedExpense] = useState(expense);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setUpdatedExpense(expense);
  };

  const handleSave = () => {
    const currentDate = new Date();
    const updatedExpenseWithDate = {
      ...updatedExpense,
      date: currentDate.toISOString().slice(0, 10),
    }

    handleUpdateExpense(updatedExpenseWithDate);
    setIsEditMode(false);
  };


  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedExpense({
      ...updatedExpense,
      [name]: value,
    });
  };

  return (
    <tr >
      {!isEditMode && (
        <>
          <td>{expense.title}</td>
          <td>{expense.amount}</td>
          <td>{expenseDateString}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDeleteExpense}>Delete</button>
          </td>
        </>
      )}
      {isEditMode && (
        <>
          <td>
            <input
              type="text"
              name="title"
              value={updatedExpense.title}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              name="amount"
              value={updatedExpense.amount}
              onChange={handleChange}
            />
          </td>
          <td>{expenseDateString}</td>
          <td>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default ExpenseItem;
