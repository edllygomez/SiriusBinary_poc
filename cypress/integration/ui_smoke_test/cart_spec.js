/// <reference types="Cypress" />

import { cart } from '../../support/page_objects/cart'
import { product } from '../../support/page_objects/product'

describe('Verify cart', () => {

    before('User is able to add to cart', () => {
        product.hoodie()
        cart.add()
    })


    it('Delete from cart', () => {
       cart
           .viewByUrl()
           .remove()
        cy.contains('Your cart is currently empty').should('be.visible')
    })
})
