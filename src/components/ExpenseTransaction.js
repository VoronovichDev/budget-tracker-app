import React from 'react';
import { MdDelete } from 'react-icons/md';

const ExpenseTransaction = ({ transaction }) => {
  return (
    <li className="transaction">
      <div className="transaction-info">
        <span className="transaction-text">{transaction.expenseText}</span>
        <span className="transaction-amount">${transaction.expenseAmount}</span>
      </div>
      <button className="delete-button">
        <MdDelete className="delete-icon" />
      </button>
    </li>
  );
};

export default ExpenseTransaction;
