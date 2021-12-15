
function deposit(account, amount) {
	if( !isAccount(account) ) {
		throw new Error('Invalid account object')
	}
	else if( !isPositiveNumber(amount) ) {
		throw new Error('Amount must be a valid number')
	}
	account.balance += amount
}


function withdraw(account, amount) {
	if( !isAccount(account) ) {
		throw new Error('Invalid account object')
	}
	else if( !isPositiveNumber(amount) ) {
		throw new Error('Amount must be a valid number')
	}
	else if( amount > account.balance ) {
		throw new Error('Not enough money in account')
	}
	account.balance -= amount
}


function transfer(source, target, amount) {
	if( !isAccount(source) || !isAccount(target) ) {
		return false
	}
	else if( !isPositiveNumber(amount) ) {
		return false
	}
	else if( source.balance < amount ) {
		return false
	}
	target.balance += amount
	source.balance -= amount
	return true
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

module.exports = { deposit, withdraw, transfer }
