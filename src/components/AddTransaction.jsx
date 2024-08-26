import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText(''); // Clear text input after submission
    setAmount(0); // Reset amount after submission
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="block text-gray-600 mb-2">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600 mb-2">
            Amount <br />
            <span className="text-sm text-gray-500">(negative - expense, positive - income)</span>
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};
