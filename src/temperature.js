
function isWaterBoiling(degrees) {
	if( (typeof degrees) !== 'number' ) {
		throw new Error('Temperature must be a number.')
	} else if( degrees < -273.15 ) {
		throw new Error('Temperature cannot be below absolute zero.')
	}
	else if( isNaN(degrees) ) {
		throw new Error('Temperature must be a number.')
	}
	else if( degrees >= 100 ) {
		return true
	} else {
		return false
	}
}

module.exports = { isWaterBoiling}
