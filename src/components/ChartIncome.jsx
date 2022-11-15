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

const ChartIncome = () => {
  const incomeTransactions = useSelector((state) => state.transactionsSlice.incomeTransactions);
  const data = [...incomeTransactions];

  const formattedData = data.map((obj) => {
    return { id: obj.id, income: obj.incomeAmount, incomeText: obj.incomeText };
  });

  return (
    <ResponsiveContainer width="100%" height="100%" className="chart">
      <LineChart data={formattedData}>
        <Line type="monotone" dataKey="income" stroke="#00c267" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="incomeText" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartIncome;
