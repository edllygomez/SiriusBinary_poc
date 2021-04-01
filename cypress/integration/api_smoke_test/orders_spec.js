/// <reference types="Cypress" />

const apiAuth = require('../../fixtures/apiAuth.json')

describe('Orders Endpoint', () => {
    it('Delete needs authentication', () => {
        cy.getOrder(apiAuth.user, apiAuth.password)
        cy.deleteOrder(apiAuth.user, '', 401, false)
    })

})
