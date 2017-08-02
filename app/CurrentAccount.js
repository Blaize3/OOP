const Account = require("./Account.js");

class CurrentAccount extends Account{
	constructor(accountHolder, number, balance){
		super(accountHolder, number, balance);
	}
	computeInterest(){
		this.balance += (this.balance * 0.03)
	}
}

module.exports = CurrentAccount;