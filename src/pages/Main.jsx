import React from 'react';
import Balance from '../components/Balance';
import Expenses from '../components/Expenses';
import Header from '../components/Header';
import Incomes from '../components/Incomes';
import NavButton from '../components/NavButton';
import NewTransaction from '../components/NewTransaction';

const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <Balance />
      <NewTransaction />
      <Incomes />
      <Expenses />
      <NavButton />
    </div>
  );
};

export default Main;
