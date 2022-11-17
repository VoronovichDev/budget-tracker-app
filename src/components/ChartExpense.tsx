import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { RootState } from '../redux/store';

const ChartExpense = () => {
  const expenseTransactions = useSelector(
    (state: RootState) => state.transactionsSlice.expenseTransactions,
  );
  const data = [...expenseTransactions];

  const formattedData = data.map((obj) => {
    return { id: obj.id, expense: obj.expenseAmount, expenseText: obj.expenseText };
  });

  return (
    <ResponsiveContainer width="100%" height="100%" className="chart-ex">
      <LineChart data={formattedData}>
        <Line type="monotone" dataKey="expense" stroke="#ab0000" strokeWidth={3} />
        <CartesianGrid stroke="#646664" />
        <XAxis dataKey="expenseText" stroke="#646664" />
        <YAxis stroke="#646664" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartExpense;
