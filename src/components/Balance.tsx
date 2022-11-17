import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import NavButton from './NavButton';

const Balance: React.FC = () => {
  const { incomeTransactions, expenseTransactions } = useSelector(
    (state: RootState) => state.transactionsSlice,
  );

  const totalIncome: number = incomeTransactions.reduce(
    (sum: number, income: any) => sum + income.incomeAmount,
    0,
  );

  const totalExpense: number = expenseTransactions.reduce(
    (sum: number, expense: any) => sum + expense.expenseAmount,
    0,
  );

  useEffect(() => {
    localStorage.setItem('incomeTransactions', JSON.stringify(incomeTransactions));
    localStorage.setItem('expenseTransactions', JSON.stringify(expenseTransactions));
  }, [incomeTransactions, expenseTransactions]);

  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <h3>${(totalIncome - totalExpense).toFixed(2)}</h3>
      <div className="plus-minus">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome.toFixed(2)}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${totalExpense.toFixed(2)}</p>
        </div>
      </div>
      <NavButton />
    </div>
  );
};

export default Balance;
