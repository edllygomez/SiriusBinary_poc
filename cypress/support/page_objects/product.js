/// <reference types="Cypress" />

export class Product {

    hoodie() {

        cy.visit('/product/hoodie/')

        return this
    }
}

export const product = new Product()
