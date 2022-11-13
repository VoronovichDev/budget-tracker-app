import React from 'react';
import { useSelector } from 'react-redux';
import IncomeTransaction from './IncomeTransaction';

const Incomes = () => {
  const incomeTransactions = useSelector((state) => state.transactionsSlice.incomeTransactions);

  return (
    <div className="transactions transactions-income">
      <h2>Income History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((transaction) => (
          <IncomeTransaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default Incomes;
