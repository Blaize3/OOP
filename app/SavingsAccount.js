const Account = require("./Account.js");


class SavingsAccount extends Account{
	constructor(accountHolder, number, balance, numOfDay, interestRate, numWithdraw){
		super(accountHolder, number, balance);
		this.numberOfDay = numOfDay;
		this.interestRate = interestRate;
		this.numberWithdraw = numWithdraw;
	}

	computeInterest(){
		if (this.numberOfDay > 30){
			if (this.numberWithdraw <= 3){
				this.balance += (this.balance * this.interestRate)
			}
		}
	}
}

module.exports = SavingsAccount;