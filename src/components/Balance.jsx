import React from 'react';

const Balance = () => {
  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <h3>$10000.00</h3>
      <div className="plus-minus">
        <div className="plus">
          <h3>Income</h3>
          <p>+$15000.00</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-$5000.00</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
