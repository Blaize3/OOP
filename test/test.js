const assert = require("chai").assert;
const bankAccount1 = require("../app/app");

describe ("bankAccount1", () => {
		describe ("handle valid input for User", () => {
		it("should return 30000 for getBalance()", () => {
			assert.equal(bankAccount1.getBalance(), 30000);
		});

		it("should return 'Transaction was successful' for deposit(5000)", () => {
			assert.equal(bankAccount1.deposit(5000), "Transaction was successful");
		});

	});

		describe ("handle invalid input for User", () => {
		it("should return 'Insuffient Balance. Transaction Failed.' for withdraw(1000000)", () => {
			assert.equal(bankAccount1.withdraw(1000000), "Insuffient Balance. Transaction Failed.");
		});

		it("should return 'deposit was not initiated.' for deposit(etet)", () => {
			assert.equal(bankAccount1.deposit("etet"), "deposit was not initiated.");
		});

	});

});


