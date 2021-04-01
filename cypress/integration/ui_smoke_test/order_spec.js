/// <reference types="Cypress" />

import { account } from '../../support/page_objects/account'
import { cart } from '../../support/page_objects/cart'
import { product } from '../../support/page_objects/product'
import { checkout } from '../../support/page_objects/checkout'

const apiAuth = require('../../fixtures/apiAuth.json')
const userInfo = require('../../fixtures/wocommerce.json')


describe('Verify orders', () => {

    before('Login to the user account', () => {
        account
            .view()
            .login(userInfo.username, userInfo.password)
    })

    after('Delete last order', () => {
        cy.clearCookies()
        cy.getOrder(apiAuth.user, apiAuth.password)
        cy.deleteOrder(apiAuth.user, apiAuth.password, 200, true)
    })

    it('Creates order with a hoodie product', () => {
        product.hoodie()
        cart
            .add()
            .view()
            .proceedToCheckout()
        checkout.placeOrder()
        cy.contains('Order received').should('be.visible')

    })
})
