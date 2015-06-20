var BankAccount = function(balance){
  this.balance = balance;
}

BankAccount.prototype.deposit = function (money) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]["description"] === "deposit") {
      this.balance += arguments[i]["ammount"];
    }
  }
};

BankAccount.prototype.withdrawl = function (money) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]["description"] === "withdrawl") {
      this.balance -= arguments[i]["ammount"];
    }
  }
};

BankAccount.prototype.printTotal = function () {
  return this.balance;
};
module.exports = BankAccount;
