import React from 'react';
import Balance from './components/Balance';
import Header from './components/Header';
import NewTransaction from './components/NewTransaction';
import Incomes from './components/Incomes';
import Expenses from './components/Expenses';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Balance />
        <NewTransaction />
        <Incomes />
        <Expenses />
      </div>
    </div>
  );
}

export default App;
