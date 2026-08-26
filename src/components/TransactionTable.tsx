type Transaction = {
  id: number
  merchant: string
  category: string
  date: string
  amount: number
}

const transactions: Transaction[] = [
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
]

function TransactionTable() {
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