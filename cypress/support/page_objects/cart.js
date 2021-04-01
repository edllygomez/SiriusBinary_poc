/// <reference types="Cypress" />

export class Cart {

    viewByUrl() {
        cy.visit('/cart/')

        return this
    }

    view() {
        cy.contains('View cart').click()

        return this
    }

    add() {
        cy.contains('Add to cart').click()

        return this
    }

    remove() {
        cy.get('.remove').click()

        return this
    }

    proceedToCheckout() {
        cy.contains('Proceed to checkout').click()
    }
}

export const cart = new Cart()
