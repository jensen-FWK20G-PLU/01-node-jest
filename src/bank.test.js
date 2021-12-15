const { deposit, withdraw, transfer } = require('./bank')

describe('Bank functions', () => {
	
	describe('deposit', () => {
		it('increases the balance with amount', () => {
			// Arrange
			const testAccount = { id: '123', balance: 120 }
			const testAmount = 60
			const expectedBalance = testAccount.balance + testAmount

			// Act
			deposit(testAccount, testAmount)

			// Assert
			expect(testAccount.balance).toBe(expectedBalance)
		})

		it('throws an Exception for invalid Account object', () => {
			// Exception == Error
			const testAccounts = [null, {}, {id: '12345'}, {balance: 2020}]
			const testAmount = 505

			testAccounts.forEach(account => {
				expect( () => deposit(account, testAmount) ).toThrow()
			})
		})

		it('throws an Exception for invalid amount', () => {
			testAccount = { id: '987', balance: 240 }
			testAmounts = ['anka', -1, Infinity, NaN]
			// not a number, negative value, Infinity, NaN

			testAmounts.forEach(amount => {
				expect( () => deposit(testAccount, amount) ).toThrow()
			})
		})
	})

	describe('withdraw', () => {
		it('decreases the balance with amount', () => {
			const testAccount = { id: '5353', balance: 95 }
			const testAmount = 25
			const expectedBalance = testAccount.balance - testAmount

			withdraw(testAccount, testAmount)

			expect(testAccount.balance).toBe(expectedBalance)
		})

		it('throws an Exception for invalid Account object', () => {
			const testAccounts = [null, {}, {id: '12345'}, {balance: 2020}]
			const testAmount = 101

			testAccounts.forEach(account => {
				expect( () => withdraw(account, testAmount) ).toThrow()
			})
		})

		it('throws an Exception for invalid amount', () => {
			const testAccount = { id: '987', balance: 240 }
			const testAmounts = ['anka', -1, Infinity, NaN]

			testAmounts.forEach(amount => {
				expect( () => withdraw(testAccount, amount) ).toThrow()
			})
		})

		it('throws an Exception if amount > balance', () => {
			const testAccount = { id: '404', balance: 1250 }
			const testAmount = 1251

			expect( () => withdraw(testAccount, testAmount) ).toThrow()
		})
	})

	describe('transfer', () => {
		it('transfers money from source to target', () => {
			const testSource = { id: '456', balance: 256 }
			const testTarget = { id: '457', balance: 300 }
			const amount = 56
			const expectedSourceBalance = testSource.balance - amount
			const expectedTargetBalance = testTarget.balance + amount
			
			const actual = transfer(testSource, testTarget, amount)

			expect(actual).toBe(true)
			expect(testSource.balance).toBe(expectedSourceBalance)
			expect(testTarget.balance).toBe(expectedTargetBalance)
		})

		it('returns false for invalid source Account', () => {
			const testSource = 'bacon'
			const testTarget = { id: '932', balance: 2322 }
			const amount = 120

			const actual = transfer(testSource, testTarget, amount)
			expect(actual).toBe(false)
		})

		it('returns false for invalid target Account', () => {
			const testSource = { id: '9300', balance: 232 }
			const testTarget = 1001
			const amount = 110

			const actual = transfer(testSource, testTarget, amount)
			expect(actual).toBe(false)
		})

		it('returns false for invalid amount', () => {
			const testSource = { id: '6653432', balance: 333 }
			const testTarget = { id: '34452', balance: 555 }

			const testAmounts = ['anka', -1, Infinity, NaN]

			testAmounts.forEach(amount => {
				const actual = transfer(testSource, testTarget, amount)
				expect(actual).toBe(false)
			})
		})

		it('returns false if amount > source.balance', () => {
			const testSource = { id: '23232', balance: 100 }
			const testTarget = { id: '8575', balance: 5000 }
			const amount = 101

			const actual = transfer(testSource, testTarget, amount)
			expect(actual).toBe(false)
		})
	})
})


/*
2.12 Skriv tester för, och implementera, följande funktioner som arbetar på Account-objekt. Ett Account beskriver ett bankkonto.

interface Account {
	id: string;
	balance: number;
}
function deposit(account: Account, amount: number): void
Ökar saldot på kontot med amount. Alla flyttal (floating point, normala JavaScript number) som rimligtvis kan tänkas motsvara ett pengabelopp är tillåtna värden. Om funktionen får ett otillåtet tal som parameter ska den kasta ett Error med ett lämpligt felmeddelande.


function withdraw(account: Account, amount: number): void
Minskar saldot på kontot med amount, förutsatt att det finns tillräckligt med pengar på kontot. Om det inte gör det ska funktionen inte dra några pengar utan i stället kasta ett Error med ett lämpligt felmeddelande. Samma sak om amount är ett otillåtet tal.


function transfer(source: Account, target: Account, amount: number): boolean
Genomför en transaktion: Minskar saldot på kontot med amount och ökar med motsvarande belopp på mottagarkontot, förutsatt att inget har gått fel. Om transaktionen misslyckas ska funktionen returnera false. Tips: det kan bli fel av flera anledningar.
*/