
function deposit(account, amount) {
	if( !isAccount(account) ) {
		throw new Error('Invalid account object')
	}
	account.balance += amount
}

function isAccount(maybeAccount) {
	if( !maybeAccount ) {
		return false
	}
	else if( !maybeAccount.id ) {
		return false
	}
	else if( (typeof maybeAccount.balance) !== 'number' ) {
		return false
	}
	else if( maybeAccount.balance < 0 || maybeAccount.balance === Infinity || isNaN(maybeAccount.balance) ) {
		return false
	}

	return true
}

module.exports = { deposit /*, withdraw, transfer*/ }
