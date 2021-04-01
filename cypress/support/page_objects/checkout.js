/// <reference types="Cypress" />

export class Checkout {

    placeOrder() {
        cy.get('#terms').check({force: true})
        cy.contains('Place order').click({force: true})

        return this
    }
}

export const checkout = new Checkout()
