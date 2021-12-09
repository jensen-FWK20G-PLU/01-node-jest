const { store, retrieve, clear } = require('./storage.js')
// 2.7 Skriv testfall utifrån följande kravspec:
// Det ska finnas två funktioner: store och retrieve. Funktionen store ska ta en parameter. När man anropar den ska värdet på parametern sparas. Funktionen retrieve ska inte ha några parametrar. När den anropas ska den returnera värdet som man senast sparade med store.
// Exempel:
// store(1)
// retrieve()  // returnerar 1
// store(2)
// store(100)
// retrieve()  // returnerar 100

describe('Storage functions', () => {
	describe('store', () => {
		it('does not throw an error (smoke test)', () => {
			const testData = 'ekorre'
			store(testData)
		})
		it('throws an error for no parameter', () => {
			expect( () => store() ).toThrow()
		})
		
	})

	describe('retrieve', () => {
		beforeEach(() => {
			clear()
		})
		
		it('throws an error if no value has been stored', () => {
			expect( () => retrieve() ).toThrow()
		})
		it('returns the stored value', () => {
			const testData = [2, 3, 5]
			store(testData)

			const actualStored = retrieve()

			expect(actualStored).toBe(testData)
		})
		// returns the last stored value
	})

	describe('clear', () => {
		it('clears the stored value', () => {
			const testData = 'snart rast'
			store(testData)
			
			clear()

			expect( () => retrieve() ).toThrow()
		})
	})
})