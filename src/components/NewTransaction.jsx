import React from 'react';

const NewTransaction = () => {
  return (
    <div className="new-transaction">
      <form>
        <div className="transaction-form income">
          <input type="text" placeholder="income transaction" autoComplete="off" />
          <input type="number" placeholder="amount" autoComplete="off" />
          <input type="submit" value="Create" />
        </div>
      </form>
      <form>
        <div className="transaction-form expense">
          <input type="text" placeholder="expense transaction" autoComplete="off" />
          <input type="number" placeholder="amount" autoComplete="off" />
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
};

export default NewTransaction;
