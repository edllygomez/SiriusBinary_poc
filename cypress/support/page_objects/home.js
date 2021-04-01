/// <reference types="Cypress" />

export class Home {

    open() {
        cy.visit('/')

        return this
    }

    search(criteria) {
        cy.get('#woocommerce-product-search-field-0').type(criteria+'{enter}')

        return this
    }
}

export const home = new Home()
