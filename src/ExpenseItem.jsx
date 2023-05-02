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
                        const updatedExpenseWithDate = {
                          ...updatedExpense,
                          date: currentDate.toISOString().slice(0, 10),
                        } 
                        handleUpdateExpense(updatedExpenseWithDate);
                        setIsEditMode(true);
                      };

                      // const handleSubmit = (e) => {
                      //   e.preventDefault();
                      //   if (editingIndex === null) {
                      //     setTasks([...tasks, currentTask]);
                      //     setCurrentTask('');
                      //   } else {
                      //     const newTasks = [...tasks];
                      //     ntingIndewTasks[ediex] = editingTask;
                      //     setTasks(newTasks);
                      //     setEditingIndex(null);
                      //     setEditingTask('');
                      //   }
                      // }; 
                      // () => handleSubmit} return props in onclick function

                              
                              const handleChange = (event) => {
                                      const { name, value } = event.target;
                                      setUpdatedExpense({
                                        ...updatedExpense,
                                        [name]: value,
                                      });
                                    };

  return (
    <tr>
      {!isEditMode && (
        <>
          <td className="row p-2">{expense.title}</td>
          <td>{expense.amount}</td>
          <td>{expenseDateString}</td>
          <td>
            <button onClick={handleEdit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 mr-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>
            <button onClick={handleDeleteExpense} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
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
            <button onClick={handleSave} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 mr-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
            <button onClick={handleCancel} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 mr-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default ExpenseItem;
