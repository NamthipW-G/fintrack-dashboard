import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTransaction } from '../features/transactions/transactionsSlice'
import type { AppDispatch } from '../app/store'

function AddTransactionForm() {
  const dispatch = useDispatch<AppDispatch>()

  const [merchant, setMerchant] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!merchant || !category || !amount) {
      return
    }

    dispatch(
     createTransaction({
      merchant,
      category,
      date: '27 Aug',
      amount: Number(amount),
      })
    )

    setMerchant('')
    setCategory('')
    setAmount('')
  }

  return (
    <section className="transaction-form-section">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit} className="transaction-form">
        <input
          type="text"
          placeholder="Merchant"
          value={merchant}
          onChange={(event) => setMerchant(event.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        <button type="submit">Add Transaction</button>
      </form>
    </section>
  )
}

export default AddTransactionForm