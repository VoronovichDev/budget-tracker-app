export const getTransactionsFromLS = () => {
  const incomeTransactions = JSON.parse(localStorage.getItem('incomeTransactions')) || [];
  const expenseTransactions = JSON.parse(localStorage.getItem('expenseTransactions')) || [];

  return {
    incomeTransactions,
    expenseTransactions,
  };
};
