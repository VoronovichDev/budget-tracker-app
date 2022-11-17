import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../redux/slices/transactionsSlice';

type TransactionPropIncome = {
  id: string;
  incomeAmount: number;
  incomeText: string;
};

interface IncomeTransactionProps {
  transaction: TransactionPropIncome;
}

const IncomeTransaction: React.FC<IncomeTransactionProps> = ({ transaction }) => {
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
