import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: 'Car sale', incomeAmount: 40000 },
    { id: 2, incomeText: 'Salary', incomeAmount: 3000 },
    { id: 3, incomeText: 'Сash bonus', incomeAmount: 10000 },
  ],
  expenseTransactions: [
    { id: 4, expenseText: 'Flat rent', expenseAmount: 700 },
    { id: 5, expenseText: 'Restraunt', expenseAmount: 100 },
    { id: 6, expenseText: 'New PC', expenseAmount: 2000 },
  ],
};
const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addIncome(state, action) {
      state.incomeTransactions = [action.payload, ...state.incomeTransactions];
    },
    addExpense(state, action) {
      state.expenseTransactions = [action.payload, ...state.expenseTransactions];
    },
  },
});

export const { addIncome, addExpense } = transactionsSlice.actions;

export default transactionsSlice.reducer;
