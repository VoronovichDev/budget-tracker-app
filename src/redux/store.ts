import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import transactionsSlice from './slices/transactionsSlice';

export const store = configureStore({
  reducer: { transactionsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
