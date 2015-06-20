var BankAccount = require('../bankAccount');
var Transaction = require('../transaction')

describe('BankAccount', function() {

  it('gets initialized with a balance', function() {
    var account = new BankAccount(1000);
    expect(account.balance).toEqual(1000);
  });

  it('allows for a deposit to be added to the balance', function() {
    var account = new BankAccount(1000);
    var money1 = new Transaction(500, "deposit")
    account.deposit(money1);

    expect(account.balance).toEqual(1500);
  });

  it('does not add withdrawls to the balance', function() {
    var account = new BankAccount(1000);
    var money1 = new Transaction(500, "deposit");
    var money2 = new Transaction(500, "withdrawl");
    account.deposit(money1);
    account.deposit(money2);

    expect(account.balance).toEqual(1500);
  });

  it('deducts withdrawls from the balance', function() {
    var account = new BankAccount(1000);
    var money1 = new Transaction(500, "withdrawl");
    account.withdrawl(money1);

    expect(account.balance).toEqual(500);
  });

  it('does not withdrawl a deposit', function() {
    var account = new BankAccount(1000);
    var money1 = new Transaction(500, "deposit");
    var money2 = new Transaction(500, "withdrawl");
    account.withdrawl(money1);
    account.withdrawl(money2);

    expect(account.balance).toEqual(500);
  });

  it('prints the total balance', function() {
    var account = new BankAccount(1000);
    var money1 = new Transaction(600, "deposit");
    var money2 = new Transaction(100, "withdrawl");
    var money3 = new Transaction(500, "deposit");
    account.withdrawl(money2);
    account.deposit(money1, money3);

    expect(account.printTotal()).toEqual(2000);
  });
});
