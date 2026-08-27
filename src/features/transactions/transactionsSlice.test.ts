import { describe, it, expect } from 'vitest'
import transactionsReducer, {
  addTransaction,
} from './transactionsSlice'

describe('transactionsSlice', () => {
  it('adds a transaction to the store', () => {
    const initialState = {
      items: [],
      loading: false,
      error: null,
    }

    const transaction = {
      id: 'test-1',
      merchant: 'Tesco',
      category: 'Groceries',
      date: '27 Aug',
      amount: -25,
    }

    const newState = transactionsReducer(
      initialState,
      addTransaction(transaction)
    )

    expect(newState.items).toHaveLength(1)
    expect(newState.items[0]).toEqual(transaction)
  })
})