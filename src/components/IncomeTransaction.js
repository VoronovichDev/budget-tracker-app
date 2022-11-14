import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/slices/transactionsSlice';

const IncomeTransaction = ({ transaction }) => {
  const dispatch = useDispatch();

  const onIncomeDelete = () => {
    dispatch(deleteTransaction(transaction));
  };

  return (
    <li className="transaction">
      <div className="transaction-info">
        <span className="transaction-text">{transaction.incomeText}</span>
        <span className="transaction-amount">${transaction.incomeAmount}</span>
      </div>
      <button className="delete-button" onClick={onIncomeDelete}>
        <MdDelete className="delete-icon" />
      </button>
    </li>
  );
};

export default IncomeTransaction;
