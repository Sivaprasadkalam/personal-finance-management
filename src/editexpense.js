// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const EditExpense = ({ expenses, setExpenses }) => {
//   const { index } = useParams();
//   const expenseToEdit = expenses[index];

//   const [formData, setFormData] = useState({
//     name: expenseToEdit.name || "",
//     category: expenseToEdit.category || "",
//     date: expenseToEdit.date || "",
//     amount: expenseToEdit.amount || "",
//     updateDate: expenseToEdit.updateDate || "",
//   });

//   useEffect(() => {
//     setFormData({
//       name: expenseToEdit.name || "",
//       category: expenseToEdit.category || "",
//       date: expenseToEdit.date || "",
//       amount: expenseToEdit.amount || "",
//       updateDate: expenseToEdit.updateDate || "",
//     });
//   }, [index, expenseToEdit]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//       // updateDate: "Edited",
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedExpenses = [...expenses];
//     updatedExpenses[index] = {
//       ...formData,
//     };
//     setExpenses(updatedExpenses);
//     alert("Updated value is saved. Go back and visit the summary table");
//   };

//   const categories = [
//     "Health",
//     "Education",
//     "Electronics",
//     "Travel",
//     "Books",
//     "Recharge",
//     "Rent",
//     "EMI",
//     "Other",
//   ];

//   return (
//     <div className="container mx-auto py-8">
//       <div className="flex justify-center mb-4">
//         <h2 className="text-2xl font-semibold mb-4">Edit Expense</h2>
//       </div>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label className="block mb-2">Name:</label>
//           <input
//             type="text"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Category:</label>
//           <select
//             name="category"
//             required
//             value={formData.category}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           >
//             <option value="">Select a category</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2">Date:</label>
//           <input
//             type="date"
//             name="date"
//             required
//             value={formData.date}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Amount:</label>
//           <input
//             type="number"
//             name="amount"
//             required
//             value={formData.amount}
//             onChange={handleInputChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Updated date:</label>
//           <input
//             type="text"
//             name="update-date"
//             value={formData.updateDate}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="flex justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
//           >
//             Save
//           </button>
//           <Link
//             to="/expense-summary"
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Go Back
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditExpense;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditExpense = ({ expenses, setExpenses }) => {
  const { index } = useParams();
  const expenseToEdit = expenses[index];

  const [formData, setFormData] = useState({
    name: expenseToEdit.name || "",
    category: expenseToEdit.category || "",
    date: expenseToEdit.date || "",
    amount: expenseToEdit.amount || "",
    updateDate: "Default Value", // Set a default value here
  });

  useEffect(() => {
    setFormData({
      name: expenseToEdit.name || "",
      category: expenseToEdit.category || "",
      date: expenseToEdit.date || "",
      amount: expenseToEdit.amount || "",
      updateDate: "Default Value", // Set a default value here
    });
  }, [index, expenseToEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const updatedExpenses = [...expenses];
  //   updatedExpenses[index] = {
  //     ...formData,
  //   };
  //   setExpenses(updatedExpenses);
  //   alert("Updated value is saved. Go back and visit the summary table");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = {
      ...formData,
      updateDate: new Date().toISOString(), // Setting the current date and time as the default value
    };
    setExpenses(updatedExpenses);
    alert("Updated value is saved. Go back and visit the summary table");
  };
  

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

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-semibold mb-4">Edit Expense</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Category:</label>
          <select
            name="category"
            required
            value={formData.category}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Date:</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Amount:</label>
          <input
            type="number"
            name="amount"
            required
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Updated date:</label>
          <input
            type="text"
            name="update-date"
            value={formData.updateDate}
            readOnly // Make it readOnly so the user cannot edit
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
          >
            Save
          </button>
          <Link
            to="/expense-summary"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditExpense;
