import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/slices/transactionsSlice';

const ExpenseTransaction = ({ transaction }) => {
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
