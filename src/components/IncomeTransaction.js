import React from 'react';
import { MdDelete } from 'react-icons/md';

const IncomeTransaction = ({ transaction }) => {
  return (
    <li className="transaction">
      <div className="transaction-info">
        <span className="transaction-text">{transaction.incomeText}</span>
        <span className="transaction-amount">${transaction.incomeAmount}</span>
      </div>
      <button className="delete-button">
        <MdDelete className="delete-icon" />
      </button>
    </li>
  );
};

export default IncomeTransaction;
