const { isWaterBoiling } = require('./temperature.js')

describe('temperature function', () => {
	it('returns true for high temperatures', () => {
		// ofta en bra idé att testa med gränsvärdena
		const testData = 100

		const actual = isWaterBoiling(testData)

		expect(actual).toBe(true)
	})

	it('returns false for low temperatures', () => {
		const testData = 78
		expect( isWaterBoiling(testData) ).toBe(false)
	})

	it('throws an Error if not a number', () => {
		const testData = false
		const errorMessage = 'Temperature must be a number.'
		expect( () => isWaterBoiling(testData) ).toThrow(errorMessage)
	})
	
	it('throws an Error for too low temperature', () => {
		const absZero = -273.15
		const message = 'Temperature cannot be below absolute zero.'
		const callback = () => isWaterBoiling(absZero - 0.0001)
		expect( callback ).toThrow(message)
	})

	it('throws an Error for NaN', () => {
		const testData = NaN
		const message = 'Temperature must be a number.'
		const callback = () => isWaterBoiling(testData)
		expect( callback ).toThrow(message)
	})
})


// Returns true if water would be boiling at the specified temperature
// Throws an Error on illegal input
//     function isWaterBoiling(degreesCelsius) { }

// Diskutera följande frågor med en klasskamrat:
// Vilka värden kan parametern degreesCelsius ha?
// Alla värden som en JavaScript-variabel kan ha

// Infinity, NaN
// JavaScript har number, andra språk har fler datatyper för tal: int, float (4B), double (8B = 8*8bit) m.m.

// Vilka värden kan funktionen returnera?
// När bör funktionen kasta ett Error? (med ett beskrivande felmeddelande)
// Behövs fler sorters Error? Motivera ert svar.
// Finns det värden som är viktigare att testa än andra? Varför?
