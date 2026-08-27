import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SummaryCard from './SummaryCard'

describe('SummaryCard', () => {
  it('renders the title, value and subtitle', () => {
    render(
      <SummaryCard
        title="Total Balance"
        value="£4,820.50"
        subtitle="Across all accounts"
      />
    )

    expect(screen.getByText('Total Balance')).toBeInTheDocument()
    expect(screen.getByText('£4,820.50')).toBeInTheDocument()
    expect(screen.getByText('Across all accounts')).toBeInTheDocument()
  })
})