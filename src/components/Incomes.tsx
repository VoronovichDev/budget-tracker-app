import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import IncomeTransaction from './IncomeTransaction';

const Incomes = () => {
  const incomeTransactions = useSelector(
    (state: RootState) => state.transactionsSlice.incomeTransactions,
  );

  console.log('111', incomeTransactions);

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
