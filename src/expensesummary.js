import React from "react";
import { Link } from "react-router-dom";

const ExpenseSummary = ({ expenses, setExpenses }) => {
  const deleteExpense = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (confirmDelete) {
      const updatedExpenses = [...expenses];
      updatedExpenses.splice(index, 1);
      setExpenses(updatedExpenses);
    }
  };

  const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-semibold">Expense Summary</h2>
      </div>
      <div className="mx-auto border border-gray-300 rounded-lg overflow-hidden max-w-screen-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Amount</th>
                <th className="border border-gray-300 px-4 py-2">Updated At</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {expense.name || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {expense.category || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {expense.date || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ₹{expense.amount || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {expense.updatedAt
                      ? formatDate(expense.updatedAt)
                      : "Edited"}
                  </td>

                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      to={`/edit-expense/${index}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteExpense(index)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end px-4 py-2">
          <Link
            to="/add-expense"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSummary;
