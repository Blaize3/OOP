
const CurrentAccount = require("./CurrentAccount.js");
const AccountHolder = require("./AccountHolder.js");
const SavingsAccount = require("./SavingsAccount.js");
const Account = require("./Account.js");




const user1 = new AccountHolder("Precious Ode", "2580", "preciousode@gmail.com", "Anthony", "07064537789");

const user2 = new AccountHolder("Akugbe Ode", "2580", "akugbeode@yahoo.com", "Obanikoro", "0705285859");

const bankAccount1 = new SavingsAccount(user1, "6110102445", 30000, 0, 6, 0);

const bankAccount2 = new SavingsAccount(user2, "9874653536", 30000);

module.exports = bankAccount1;
module.exports = bankAccount2;





console.log(bankAccount1.getBalance());
console.log(bankAccount2.getBalance());
//console.log(bankAccount2.transfer(user2, 20000));

// implementing polymorphism

const allBankAccount = [bankAccount1, bankAccount2];

for (var i = 0; i < allBankAccount.length; i++){
	console.log(allBankAccount[i].getBalance());
}
