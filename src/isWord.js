
function isWord(maybeWord) {
	const allowedChars = 'abcdefghijklmnopqrstuvwxyzåäö'

	if( (typeof maybeWord) !== 'string' ) {
		return false
	} else if( maybeWord === '' ) {
		return false
	// Alternativ 1: regex
	// } else if( maybeWord.match(/^[a-öA-Ö]+$/) === null ) {
	// return false
	}
	// Alternativ 2: loopa över strängen med higher order functions
	let word = [...maybeWord.toLowerCase()]
	if( !word.every(character => allowedChars.includes(character) ) ) {
		return false
	}

	return true
}



module.exports = { isWord }
