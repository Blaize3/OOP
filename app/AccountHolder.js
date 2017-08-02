class AccountHolder{
	constructor(name, pin, email, address, telephone){
		this.name = name;
		this.pin = pin;
		this.email = email;
		this.address = address;
		this.telephone = telephone;
	}

	changePin(userPin){
		let myPin = userPin.toString;
		if (myPin.length = 4){
			this.pin = myPin;
			return "PIN was changed successful.";
		}else{
			return "Operation failed. New PIN length MUST equal 4";
		}
	}

	getPin(){
		return this.pin;
	}

	changeAddress(userAddress){
		this.address = userAddress.toString();
	}

	getAddress(){
		return this.address;
	}

	changeTelephone(userTelephone){
		if (typeof(userTelephone) == typeof("") && userTelephone.length > 9){
			this.telephone = userTelephone;
		}else{
			return "Invalid telephone number.";
		}
	}

	getTelephone(){
		return this.telephone;
	}

	changeName(userName){
		let myName;
		if (typeof(userName) == typeof("")){
			
			myName = userName.split();
			if (myName.length < 2){
				return "Enter First name and last name";
			}else{
				this.name = userName;
			}
		}
		return "Invalid";	
	}

	getName(){
		return this.name;
	}
}

module.exports = AccountHolder;
