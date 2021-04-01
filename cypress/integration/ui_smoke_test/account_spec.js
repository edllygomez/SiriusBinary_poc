/// <reference types="Cypress" />
import { account } from '../../support/page_objects/account'
const userInfo = require('../../fixtures/wocommerce.json')


describe('Verify account', () => {

    before('Visit account page', () => {
        account.view()
    })

    it('User is able to login', () => {
        account.login(userInfo.username, userInfo.password)
        cy.contains('Hello egomez').should('be.visible')
    })
})
