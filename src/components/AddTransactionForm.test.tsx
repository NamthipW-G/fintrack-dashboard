import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import AddTransactionForm from './AddTransactionForm'
import transactionsReducer from '../features/transactions/transactionsSlice'

describe('AddTransactionForm', () => {
  it('allows the user to enter transaction details', async () => {
    const user = userEvent.setup()

    const store = configureStore({
      reducer: {
        transactions: transactionsReducer,
      },
    })

    render(
      <Provider store={store}>
        <AddTransactionForm />
      </Provider>
    )

    const merchantInput = screen.getByPlaceholderText('Merchant')
    const categoryInput = screen.getByPlaceholderText('Category')
    const amountInput = screen.getByPlaceholderText('Amount')

    await user.type(merchantInput, 'Starbucks')
    await user.type(categoryInput, 'Dining')
    await user.type(amountInput, '-5.50')

    expect(merchantInput).toHaveValue('Starbucks')
    expect(categoryInput).toHaveValue('Dining')
    expect(amountInput).toHaveValue(-5.5)
  })
})