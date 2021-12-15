// bank: BankManager
// { getBalance, setBalance }
// Mocka den för att kunna testa bank2 separat.

function deposit(account, amount, bank) {
	if( !isAccount(account) ) {
		throw new Error('Invalid account object')
	}
	else if( !isPositiveNumber(amount) ) {
		throw new Error('Amount must be a valid number')
	}
	const oldBalance = bank.getBalance()
	bank.setBalance(oldBalance + amount)
}


function withdraw(account, amount, bank) {
	if( !isAccount(account) ) {
		throw new Error('Invalid account object')
	}
	else if( !isPositiveNumber(amount) ) {
		throw new Error('Amount must be a valid number')
	}
	else if( amount > account.balance ) {
		throw new Error('Not enough money in account')
	}
	// account.balance -= amount
}




// A number >= 0
function isPositiveNumber(maybe) {
	if( (typeof maybe) !== 'number' ) {
		return false
	}
	else if( maybe < 0 || maybe === Infinity || isNaN(maybe) ) {
		return false
	}
	return true
}

function isAccount(maybeAccount) {
	if( !maybeAccount ) {
		return false
	}
	else if( !maybeAccount.id ) {
		return false
	}
	else if( !isPositiveNumber(maybeAccount.balance) ) {
		return false
	}

	return true
}

module.exports = { deposit, withdraw }
