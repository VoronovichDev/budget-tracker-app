import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsFromLS } from '../../utils/getTransactionsFromLS';

const { incomeTransactions, expenseTransactions } = getTransactionsFromLS();
const initialState = {
  incomeTransactions,
  expenseTransactions,
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
    deleteTransaction(state, action) {
      state.incomeTransactions = state.incomeTransactions.filter(
        (incomeTransaction) => incomeTransaction.id !== action.payload.id,
      );
      state.expenseTransactions = state.expenseTransactions.filter(
        (expenseTransaction) => expenseTransaction.id !== action.payload.id,
      );
    },
  },
});

export const { addIncome, addExpense, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
