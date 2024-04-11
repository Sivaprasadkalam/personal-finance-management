import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import "./style.css";
import "tailwindcss/tailwind.css";
import AddExpenseForm from "./addexpense";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import ExpenseSummary from "./expensesummary";
import { useEffect } from "react";
import EditExpense from "./editexpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);


  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, expense];
      return updatedExpenses;
    });
    console.log("updateExpenses", addExpense);
  };

  const navigateToFinance = () => {
    window.location.href = "/expense-summary"; 
  };


  useEffect(() => {
    console.log("Expenses updated HELLO:", expenses);
  }, [expenses]); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/expense-summary"
          element={
            <ExpenseSummary expenses={expenses} setExpenses={setExpenses} />
          }
        />
        <Route
          path="/add-expense"
          element={
            <AddExpenseForm
              navigateToFinance={navigateToFinance}
              addExpense={addExpense}
            />
          }
        />
       <Route
  path="/edit-expense/:index"
  element={<EditExpense expenses={expenses} setExpenses={setExpenses} />}
/>

      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);
