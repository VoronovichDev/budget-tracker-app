import React from 'react';
import Balance from '../components/Balance';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import Incomes from '../components/Incomes';
import NewTransaction from '../components/NewTransaction';

const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <Balance />
      <NewTransaction />
      <Incomes />
      <Expenses />
    </div>
  );
};

export default Main;
