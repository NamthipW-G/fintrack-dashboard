import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'

function TransactionTable() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.items
  )

  return (
    <section className="transactions-section">
      <h2>Recent Transactions</h2>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Merchant</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.merchant}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>

              <td
                className={
                  transaction.amount > 0
                    ? 'amount income'
                    : 'amount expense'
                }
              >
                {transaction.amount > 0 ? '+' : '-'}£
                {Math.abs(transaction.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TransactionTable