/// <reference types="Cypress" />

describe('API Health Check', () => {
    it('API Index returns 200', () => {
        cy.request('/wp-json/wc/v3')
            .its('status').should('eq', 200)
    })
})
