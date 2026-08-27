import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

export type Transaction = {
  id: string
  merchant: string
  category: string
  date: string
  amount: number
}

type TransactionsState = {
  items: Transaction[]
  loading: boolean
  error: string | null
}

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async () => {
    const response = await fetch('http://localhost:3001/transactions')

    if (!response.ok) {
      throw new Error('Failed to fetch transactions')
    }

    const data: Transaction[] = await response.json()

    return data
  }
)

export const createTransaction = createAsyncThunk(
  'transactions/createTransaction',
  async (transaction: Omit<Transaction, 'id'>) => {
    const response = await fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })

    if (!response.ok) {
      throw new Error('Failed to create transaction')
    }

    const data: Transaction = await response.json()

    return data
  }
)

const initialState: TransactionsState = {
  items: [],
  loading: false,
  error: null,
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.items.unshift(action.payload)
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })

      .addCase(fetchTransactions.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to load transactions'
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.items.unshift(action.payload)
      })
  },
})

export const { addTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer