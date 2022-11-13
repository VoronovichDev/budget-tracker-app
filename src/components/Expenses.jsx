import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseTransaction from './ExpenseTransaction';

const Expenses = () => {
  const expenseTransactions = useSelector((state) => state.transactionsSlice.expenseTransactions);
  const dispatch = useDispatch();

  return (
    <div className="transactions transactions-expense">
      <h2>Expense History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((transaction) => (
          <ExpenseTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
