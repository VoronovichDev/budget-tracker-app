import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/slices/transactionsSlice';

type TransactionPropExpense = {
  id: string;
  expenseAmount: number;
  expenseText: string;
};

interface ExpenseTransactionProps {
  transaction: TransactionPropExpense;
}

const ExpenseTransaction: React.FC<ExpenseTransactionProps> = ({ transaction }) => {
  const dispatch = useDispatch();

  const onExpenseDelete = () => {
    dispatch(deleteTransaction(transaction));
  };

  return (
    <li className="transaction">
      <div className="transaction-info">
        <span className="transaction-text">{transaction.expenseText}</span>
        <span className="transaction-amount">${transaction.expenseAmount}</span>
      </div>
      <button className="delete-button" onClick={onExpenseDelete}>
        <MdDelete className="delete-icon" />
      </button>
    </li>
  );
};

export default ExpenseTransaction;
