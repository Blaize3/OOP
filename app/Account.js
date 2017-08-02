class Account{
	constructor(accountHolder, number, balance){
		this.holder = accountHolder;
		this.number = number;
		this.balance = balance;
	}

	getNumber(){
		return this.number;
	}

	withdraw(amt){
		if (typeof(amt) == typeof(2)){
				if (this.balance >= amt){
				this.balance -= amt;
				return "Transaction was successful";
			}else{
				return "Insuffient Balance. Transaction Failed.";
			}
		}else{
			return "withdrawal was not initiated.";
		}
	}

	deposit(amt){
		if (typeof(amt) == typeof(2)){
				this.balance += amt;
				return "Transaction was successful";
		}else{
			return "deposit was not initiated.";
		}
	}

	transfer(account, amt){
		if (typeof(amt) == typeof(2)){
			if (this.balance >= amt){
				this.balance -= amt;
				account.balance += amt;
				return "Transaction was successful";
			}else{
				return "Insuffient Balance. Transaction Failed.";
			}
		}else{
			return "Transfer was not initiated.";
		}
	}

	getBalance(){
		return this.balance;
	}
}


module.exports = Account;