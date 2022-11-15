import React from 'react';
import BackButton from '../components/BackButton';
import ChartIncome from '../components/ChartIncome';
import ChartExpense from '../components/ChartExpense';

const Charts = () => {
  return (
    <div className="wrapper wrapper-charts">
      <ChartIncome />
      <ChartExpense />
      <BackButton />
    </div>
  );
};

export default Charts;
