let storedValue

function store(value) {
	if( value === undefined ) {
		throw new Error('No parameter')
	}
	storedValue = value
}

function retrieve() {
	// console.log('Stored: ', storedValue)
	if( storedValue === undefined ) {
		throw new Error('No value has been stored')
	}
	return storedValue
}

function clear() {
	storedValue = undefined
}

module.exports = { store, retrieve, clear }
