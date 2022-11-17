export const getTransactionsFromLS = () => {
  const incomeTransactions = JSON.parse(localStorage.getItem('incomeTransactions') as string) || [];

  const expenseTransactions =
    JSON.parse(localStorage.getItem('expenseTransactions') as string) || [];

  return {
    incomeTransactions,
    expenseTransactions,
  };
};
