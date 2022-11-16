import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addExpense, addIncome } from '../redux/slices/transactionsSlice';

const NewTransaction = () => {
  const dispatch = useDispatch();

  const [income, setIncome] = useState({
    incomeText: '',
    incomeAmount: '',
  });
  const [expense, setExpense] = useState({
    expenseText: '',
    expenseAmount: '',
  });

  const { incomeText, incomeAmount } = income;
  const { expenseText, expenseAmount } = expense;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
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
        incomeAmount: '',
      });
    }
    return;
  };

  const onSubmitExpense = (e) => {
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
        expenseAmount: '',
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
