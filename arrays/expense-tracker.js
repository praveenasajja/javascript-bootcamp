const account = {
  name: "Praveena",
  expenses: [],
  expenseAmt: function (text, amt) {
    this.expenses.push({
      description: text,
      amount: amt,
    });
  },
  income: [],
  incomeAmt: function (text, amt) {
    this.income.push({
      description: text,
      amount: amt,
    });
  },
  accountSummary: function () {
    let totalExpenses = 0;
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    let totalIncome = 0;
    this.income.forEach(function (incomeAmt) {
      totalIncome = totalIncome + incomeAmt.amount;
    });
    let balance = totalIncome - totalExpenses;
    console.log(
      `${this.name} has $${balance} balance in account with $${totalIncome} Income and $${totalExpenses} of expenses`
    );
  },
};

account.incomeAmt("Salary", 4000);
account.incomeAmt("bonus", 500);
account.expenseAmt("Rent", 900);
account.expenseAmt("Coffee", 2);
account.accountSummary();
