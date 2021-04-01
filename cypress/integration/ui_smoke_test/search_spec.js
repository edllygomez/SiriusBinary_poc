/// <reference types="Cypress" />

import { home } from '../../support/page_objects/home'

describe('Verify search products', () => {

    it('Searches for Beanie and product is listed', () => {
        home.open()
            .search('Beanie')
        cy.get('.product_title').should('have.text', 'Beanie')
    })
})
