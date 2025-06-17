function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be greater than 0";
      }
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= 0) {
        return "withdraw amount must be greater than 0";
      }
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120
