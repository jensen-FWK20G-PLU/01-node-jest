const { add, convertToCelsius } = require('./script.js')

describe('function Add', () => {
	it('returns the sum of a and b', () => {
		// Arrange
		const testA = 5, testB = 2
		const expectedSum = testA + testB
		
		// Act
		const actualSum = add(testA, testB)
		
		// Assert
		expect(actualSum).toBe(expectedSum)
	})
})

// 2.4a Skriv testfall för en funktion som kan omvandla temperatur från grader Fahrenheit till Celsius. Tips: C = (F - 32) / 1.8 . Fahrenheit till Celsius konvertering 
// 2.4b När du skrivit ett testfall, och det blir rött - implementera funktionen, så att testfallet blir grönt.
describe('function convertToCelsius', () => {
	// convertToCelsius(degreesFahrenheit)
	it('returns the degrees in Celsius', () => {
		const testData = 100
		const expectedTemperature = 37.7777778

		const actualTemperature = convertToCelsius(testData)

		expect(actualTemperature).toBeCloseTo(expectedTemperature)
	})
	it('throws an error if degrees not a number', () => {
		const testData = 'hejsan'

		expect( () => convertToCelsius(testData) ).toThrow()
	})
	// throws an error if temperature below absolute zero

	// Maximum number in JavaScript: ~10^308
	// Lowest possible temperature: -273.15 degrees Celsius
})
