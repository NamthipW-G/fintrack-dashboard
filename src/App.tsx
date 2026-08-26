import './App.css'
import Sidebar from './components/Sidebar'
import SummaryCard from './components/SummaryCard'
import TransactionTable from './components/TransactionTable'
import AddTransactionForm from './components/AddTransactionForm'


const summaryCards = [
  {
    title: 'Total Balance',
    value: '£4,820.50',
    subtitle: 'Across all accounts',
  },
  {
    title: 'Monthly Spending',
    value: '£1,284.20',
    subtitle: '64% of monthly budget',
  },
  {
    title: 'Budget Remaining',
    value: '£715.80',
    subtitle: '9 days remaining',
  },
]

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <h1>Dashboard</h1>
        <p>Welcome back to FinTrack</p>

        <section className="summary-grid">
  {summaryCards.map((card) => (
    <SummaryCard
      key={card.title}
      title={card.title}
      value={card.value}
      subtitle={card.subtitle}
    />
  ))}
</section>
<AddTransactionForm />
 <TransactionTable />

      </main>
    </div>
  )
}

export default App