import React from 'react';
import { MdDelete } from 'react-icons/md';

const Incomes = () => {
  return (
    <div className="transactions transactions-income">
      <h2>Income History</h2>
      <ul className="transaction-list">
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Income transaction</span>
            <span className="transaction-amount">$15000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Income</span>
            <span className="transaction-amount">$15000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Income</span>
            <span className="transaction-amount">$15000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
        <li className="transaction">
          <div className="transaction-info">
            <span className="transaction-text">Income</span>
            <span className="transaction-amount">$15000</span>
          </div>
          <button className="delete-button">
            <MdDelete className="delete-icon" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Incomes;
