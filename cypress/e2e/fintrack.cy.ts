/// <reference types="cypress" />

describe('FinTrack Dashboard', () => {
  it('allows a user to add a new transaction', () => {
    cy.visit('http://localhost:5173')

    cy.contains('Dashboard').should('be.visible')

    cy.get('input[placeholder="Merchant"]').type('Cypress Coffee')
    cy.get('input[placeholder="Category"]').type('Dining')
    cy.get('input[placeholder="Amount"]').type('-8.50')

    cy.contains('button', 'Add Transaction').click()

    cy.contains('Cypress Coffee').should('be.visible')
    cy.contains('Dining').should('be.visible')
    cy.contains('£8.50').should('be.visible')
  })
})