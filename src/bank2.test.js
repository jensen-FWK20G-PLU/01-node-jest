const { deposit, withdraw } = require('./bank2')

describe('BankManager functions', () => {

	describe('deposit', () => {
		it('increases the balance with amount', () => {
			const testAccount = { id: '123', balance: 120 }
			const testAmount = 60
			const expectedBalance = testAccount.balance + testAmount
			const manager = {
				getBalance: jest.fn( () => testAccount.balance ),
				setBalance: jest.fn()
			}

			deposit(testAccount, testAmount, manager)

			const actualCallsToGetBalance = manager.getBalance.mock.calls.length
			const actualCallsToSetBalance = manager.setBalance.mock.calls.length
			expect(actualCallsToGetBalance).toBe(1)
			expect(actualCallsToSetBalance).toBe(1)
			const setBalanceParam = manager.setBalance.mock.calls[0][0]
			expect(setBalanceParam).toBe(expectedBalance)
		})

		// it('increases the balance with amount', () => {
		// 	// Arrange
		// 	const testAccount = { id: '123', balance: 120 }
		// 	const testAmount = 60
		// 	const expectedBalance = testAccount.balance + testAmount

		// 	// Act
		// 	deposit(testAccount, testAmount)

		// 	// Assert
		// 	expect(testAccount.balance).toBe(expectedBalance)
		// })
	})
})