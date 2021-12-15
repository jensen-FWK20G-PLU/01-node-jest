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
const { deposit /*, withdraw, transfer*/ } = require('./bank')

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

		// it throws an Exception for invalid amount - not a number, negative value, Infinity, NaN
	
	})
})