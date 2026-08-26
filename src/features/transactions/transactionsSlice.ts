import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Transaction = {
  id: number
  merchant: string
  category: string
  date: string
  amount: number
}

type TransactionsState = {
  items: Transaction[]
}

const initialState: TransactionsState = {
  items: [
    {
      id: 1,
      merchant: 'Tesco',
      category: 'Groceries',
      date: '26 Aug',
      amount: -42.5,
    },
    {
      id: 2,
      merchant: 'Salary',
      category: 'Income',
      date: '25 Aug',
      amount: 2800,
    },
    {
      id: 3,
      merchant: 'Netflix',
      category: 'Subscription',
      date: '24 Aug',
      amount: -10.99,
    },
    {
      id: 4,
      merchant: 'TfL',
      category: 'Transport',
      date: '24 Aug',
      amount: -7.4,
    },
  ],
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.items.unshift(action.payload)
    },
  },
})

export const { addTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer