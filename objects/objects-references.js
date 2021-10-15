let myAccount = {
  name: "Praveena",
  expense: 0,
  income: 0,
};

let addExpenses = function (account, amount) {
  account.expense = account.expense + amount;
  console.log(account);
};

addExpenses(myAccount, 2.5);
console.log(myAccount);

//Challenge

let accountIncome = {
  name: "Sajja",
  expense: 0,
  income: 0,
};

let addIncome = function (acc, amt) {
  acc.income = acc.expense + amt;
  console.log(acc.income);
};

let addExpense = function (acc, amt) {
  acc.expense = acc.expense + amt;
  console.log(acc.expense);
};

let resetAccount = function (acc) {
  acc.expense = 0;
  acc.income = 0;
};

let accSummary = function (acc) {
  let balance = acc.income - acc.expense;
  return `Account for ${acc.name} has $${balance}. $${acc.income} is income. $${acc.expense} is expenses.`;
};

addIncome(accountIncome, 2000);
addExpense(accountIncome, 160);
addExpense(accountIncome, 2.5);
let stat = accSummary(accountIncome);
console.log(stat);
resetAccount(accountIncome);

console.log(accSummary(accountIncome));
