import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addExpense, addIncome } from '../redux/slices/transactionsSlice';

interface icnomeData {
  incomeText: string;
  incomeAmount: number;
}
interface expenseData {
  expenseText: string;
  expenseAmount: number;
}

const NewTransaction = () => {
  const dispatch = useDispatch();

  const onFocusIputAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (+e.target.value === 0) {
      e.target.value = '';
    }
  };

  const [income, setIncome] = useState<icnomeData>({
    incomeText: '',
    incomeAmount: 0,
  });
  const [expense, setExpense] = useState<expenseData>({
    expenseText: '',
    expenseAmount: 0,
  });

  const { incomeText, incomeAmount } = income;
  const { expenseText, expenseAmount } = expense;

  const onChangeIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  const onChangeExpense = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e: React.FormEvent) => {
    e.preventDefault();
    if (incomeText !== '' && +incomeAmount > 0) {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: +incomeAmount,
      };
      dispatch(addIncome(newIncomeTransaction));
      setIncome({
        incomeText: '',
        incomeAmount: 0,
      });
    }
    return;
  };

  const onSubmitExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (expenseText !== '' && +expenseAmount > 0) {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: +expenseAmount,
      };
      dispatch(addExpense(newExpenseTransaction));
      setExpense({
        expenseText: '',
        expenseAmount: 0,
      });
    }
    return;
  };

  return (
    <div className="new-transaction">
      <form onSubmit={onSubmitIncome}>
        <div className="transaction-form income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}
            placeholder="income transaction"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            onFocus={onFocusIputAmount}
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="Create" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="transaction-form expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="expense transaction"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            onFocus={onFocusIputAmount}
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

export default NewTransaction;
