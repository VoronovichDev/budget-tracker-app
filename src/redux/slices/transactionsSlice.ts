import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTransactionsFromLS } from '../../utils/getTransactionsFromLS';

type incomeTransactionType = {
  id: string;
  incomeAmount: number;
  incomeText: string;
};
type expenseTransactionsType = {
  id: string;
  expenseAmount: number;
  expenseText: string;
};

interface transactionsState {
  incomeTransactions: incomeTransactionType[];
  expenseTransactions: expenseTransactionsType[];
}

const { incomeTransactions, expenseTransactions } = getTransactionsFromLS();

const initialState: transactionsState = {
  incomeTransactions,
  expenseTransactions,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addIncome(state, action: PayloadAction<incomeTransactionType>) {
      state.incomeTransactions = [action.payload, ...state.incomeTransactions];
    },
    addExpense(state, action) {
      state.expenseTransactions = [action.payload, ...state.expenseTransactions];
    },
    deleteTransaction(state, action) {
      state.incomeTransactions = state.incomeTransactions.filter(
        (incomeTransaction: incomeTransactionType) => incomeTransaction.id !== action.payload.id,
      );
      state.expenseTransactions = state.expenseTransactions.filter(
        (expenseTransaction: expenseTransactionsType) =>
          expenseTransaction.id !== action.payload.id,
      );
    },
  },
});

export const { addIncome, addExpense, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
