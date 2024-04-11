import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddExpenseForm = ({ addExpense, navigateToFinance }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [updatedAt, setUpdatedAt] = useState(new Date().toISOString());
  const [submittedExpense, setSubmittedExpense] = useState(null);

  const categories = [
    "Health",
    "Education",
    "Electronics",
    "Travel",
    "Books",
    "Recharge",
    "Rent",
    "EMI",
    "Other",
  ];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      name: name || "",
      category: category || "",
      date: date || "",
      amount: amount || "",
      updatedAt: new Date().toISOString(),
    };
    alert("Your data is stored successfully, To check 'Click' Finance Table");
    addExpense(expense);

    setName("");
    setCategory("");
    setDate("");
    setAmount("");
    setUpdatedAt(new Date().toISOString());
    setSubmittedExpense(expense);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex justify-center mb-4">
          <h2 className="text-2xl font-semibold">Add Your Expenses</h2>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category:
          </label>
          <select
            id="category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Date of Expense:
          </label>
          <input
            type="date"
            required
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Amount:
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700">
              ₹
            </span>
            <input
              type="number"
              id="amount"
              required
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="appearance-none border rounded pl-8 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="updatedAt"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Updated At:
          </label>
          <input
            type="text"
            id="updatedAt"
            required
            value={formatDate(updatedAt)}
            disabled
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
        <div className="flex justify-end mb-4">
          <div className="flex justify-center mt-4">
            <Link
              to="/expense-summary"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Finance Table
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
