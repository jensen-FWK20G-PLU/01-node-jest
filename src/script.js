// function add(x, y) -> returnera x+y

function add(x, y) {
	return x + y;
}


function convertToCelsius(fahrenheit) {
	if( (typeof fahrenheit) !== 'number' ) {
		throw new Error('Temperature must be a number')
	}

	// C = (F - 32) / 1.8
	const celsius = (fahrenheit - 32) / 1.8
	return celsius
}

module.exports = { add, convertToCelsius }
