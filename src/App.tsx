import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <h1>Dashboard</h1>
        <p>Welcome back to FinTrack</p>
      </main>
    </div>
  )
}

export default App