import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, updateTransaction } = useContext(GlobalContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(transaction.text);
  const [editAmount, setEditAmount] = useState(transaction.amount);

  const sign = transaction.amount < 0 ? '-' : '+';

  const handleSave = () => {
    const updatedTransaction = {
      ...transaction,
      text: editText,
      amount: +editAmount,
    };

    updateTransaction(updatedTransaction);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex justify-between items-center bg-white p-3 my-2 shadow-md rounded-lg ${
        transaction.amount < 0 ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'
      }`}
    >
      {isEditing ? (
        <div className="flex-1">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border border-gray-300 p-1 rounded mr-2"
            placeholder="Edit text"
          />
          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
            className="border border-gray-300 p-1 rounded mr-2"
            placeholder="Edit amount"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-1 px-3 rounded-lg shadow hover:bg-green-600 focus:outline-none"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <span className="flex-1 text-lg">{transaction.text}</span>
          <span className="flex-1 text-lg">
            {sign}${Math.abs(transaction.amount)}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="bg-red-500 text-white py-1 px-3 rounded-lg shadow hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </button>
          </div>
        </>
      )}
    </li>
  );
};
