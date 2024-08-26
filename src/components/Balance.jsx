import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md mt-6">
      <h4 className="text-gray-600 text-sm">Your Balance</h4>
      <h1 className="text-3xl font-bold text-indigo-600">${total}</h1>
    </div>
  );
};
