import React from 'react';
import { MdDelete } from 'react-icons/md';

const Expenses = () => {
  return (
    <div className="transactions transactions-expense">
      <h2>Expense History</h2>
      <ul className="transaction-list">
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Expense transaction</span>
            <span className="transaction-amount">$10000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Expense</span>
            <span className="transaction-amount">$10000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Expense</span>
            <span className="transaction-amount">$10000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Expense</span>
            <span className="transaction-amount">$10000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Expenses;
