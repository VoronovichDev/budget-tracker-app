import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useSelector(
    (state) => state.transactionsSlice,
  );

  const totalIncome = incomeTransactions
    .reduce((sum, income) => sum + income.incomeAmount, 0)
    .toFixed(2);

  const totalExpense = expenseTransactions
    .reduce((sum, expense) => sum + expense.expenseAmount, 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <h3>${(totalIncome - totalExpense).toFixed(2)}</h3>
      <div className="plus-minus">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
