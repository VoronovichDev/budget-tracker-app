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

const ChartIncome = () => {
  const incomeTransactions = useSelector(
    (state: RootState) => state.transactionsSlice.incomeTransactions,
  );
  const data = [...incomeTransactions];

  const formattedData = data.map((obj) => {
    return { id: obj.id, income: obj.incomeAmount, incomeText: obj.incomeText };
  });

  return (
    <ResponsiveContainer width="100%" height="100%" className="chart">
      <LineChart data={formattedData}>
        <Line type="monotone" dataKey="income" stroke="#008000" strokeWidth={3} />
        <CartesianGrid stroke="#646664" />
        <XAxis dataKey="incomeText" stroke="#646664" />
        <YAxis stroke="#646664" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartIncome;
