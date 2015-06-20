var BankAccount = function(balance){
  this.balance = balance;
}

BankAccount.prototype.deposit = function(transaction){
    var that = this;
    var args = Array.prototype.slice.call(arguments, 0);
    args.forEach(function(elem){
      if(elem.description == "deposit")
      return that.balance += elem.ammount;
    });

};

BankAccount.prototype.withdrawl = function(transaction){
  if (transaction.description == "withdrawl"){
    this.balance -= transaction.ammount;
  }
};

BankAccount.prototype.printTotal = function(){
  return this.balance;
}
module.exports = BankAccount;
