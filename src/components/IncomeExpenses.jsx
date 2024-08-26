import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mt-6 space-x-6">
      <div className="flex-1 text-center">
        <h4 className="text-gray-600 text-sm">Income</h4>
        <p className="text-2xl font-semibold text-green-500">${income}</p>
      </div>
      <div className="w-px h-12 bg-gray-300"></div> {/* Divider */}
      <div className="flex-1 text-center">
        <h4 className="text-gray-600 text-sm">Expense</h4>
        <p className="text-2xl font-semibold text-red-500">${expense}</p>
      </div>
    </div>
  );
};
