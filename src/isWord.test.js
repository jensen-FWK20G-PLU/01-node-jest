const { isWord } = require('./isWord.js')
// 2.5a Skriv testfall för en funktion med namnet isWord(maybeWord): boolean.
// Följande kriterier gäller för att något ska anses vara ett ord:
// parametern måste vara en sträng
// strängen får inte vara tom
// strängen ska bara innehålla bokstäver, små eller stora: "Pelle" är ok, men inte "Pe1e"

describe('isWord function', () => {


	it('returns true for "snöröjning"', () => {
		testWord('snöröjning', true)
	})

	it('returns false for {} (not a string)', () => {
		testWord({}, false)
	})

	it("returns false for '' (empty string)", () => {
		testWord('', false)
	})
	it("returns false for 'jättebra!' (invalid character)", () => {
		testWord('jättebra!', false)
	})


	function testWord(testData, expectedResult) {
		const actual = isWord(testData)

		expect(actual).toBe(expectedResult)
	}
})