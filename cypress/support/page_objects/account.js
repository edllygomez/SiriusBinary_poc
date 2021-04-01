/// <reference types="Cypress" />

export class Account {

    view() {
        cy.visit('/my-account/')

        return this
    }

    login(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.contains('Log in').click()

        return this
    }
}

export const account = new Account()
