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

const ChartExpense = () => {
  const expenseTransactions = useSelector((state) => state.transactionsSlice.expenseTransactions);
  const data = [...expenseTransactions];

  const formattedData = data.map((obj) => {
    return { id: obj.id, expense: obj.expenseAmount, expenseText: obj.expenseText };
  });

  return (
    <ResponsiveContainer width="100%" height="100%" className="chart-ex">
      <LineChart data={formattedData}>
        <Line type="monotone" dataKey="expense" stroke="#ab0000" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="expenseText" tick="as" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartExpense;
