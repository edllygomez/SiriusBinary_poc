/// <reference types="Cypress" />

const apiAuth = require('../../fixtures/apiAuth.json')


describe('Products Endpoint', () => {
    it('First Product has SKU', () => {
        cy.request({
            url: '/wp-json/wc/v3/products/',
            auth: {
                username: apiAuth.user,
                password: apiAuth.password
            }
        }).then((response) => {
            expect(response.body[0].sku).not.be.empty
        })
    })
})
