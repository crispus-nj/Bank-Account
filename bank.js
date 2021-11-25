let withdrawCash = document.getElementById("withdraw");
let depositCash = document.getElementById("depositAmount");
let namePerson = document.getElementById("name");
let initialDepositCash = document.getElementById("initialDeposit");
let button = document.getElementById("btn-submit");
let form = document.getElementsByClassName("form");
// console.log(form)
button.addEventListener("click", function (e) {
  e.preventDefault();
  let withdrawCashAmount = withdrawCash.value;
  let depositCashAmount = depositCash.value;
  let nameUser = namePerson.value;
  let currentBalance = document.getElementById("balance");
  let named = document.getElementById("name-span");
  let withCash = document.getElementById("withdraw-amount");
  class Bank {
    constructor(name, depositAmount) {
      let initialDepositCashAmount = initialDepositCash.value;
      let initialbalance = parseInt(initialDepositCashAmount);
      this.name = name;
      this.depositAmount = depositAmount;
      this.initialDeposit = initialbalance;
    }
    getBalance() {
      return (this.initialDeposit += this.depositAmount);
    }
    getWithdrawal(amount) {
      let balance = this.getBalance();
      // amount = 2000;
      if (amount > balance) {
        console.log("Insufficient Fund!!");
        currentBalance.innerText = balance;
        return balance;
      }
      if (amount <= 0) {
        console.log("Can not withdraw 0:", amount);
        currentBalance.innerText = balance;
        return balance;
      } else {
        currentBalance.innerText = (balance -= amount);
        return (balance -= amount);
      }
    }
  }
  let newUser = new Bank(nameUser, parseInt(depositCashAmount));
  console.log(`Name: ${newUser.name} 
  Balance: ${newUser.getWithdrawal(parseInt(withdrawCashAmount))}`);
  //   currentBalance.innerText = newUser.getWithdrawal(parseInt(withdrawCashAmount))
  named.innerText = nameUser;
  withCash.innerText = withdrawCashAmount;
});
