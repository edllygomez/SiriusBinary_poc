Cypress.Commands.add('getOrder', (authUser, authPass) => {
    cy.request({
        url: '/wp-json/wc/v3/orders/',
        auth: {
            username: authUser,
            password: authPass
        }
    }).then((response) => {
        cy.wrap(response.body[0].id).as('order_id')
    })
})

Cypress.Commands.add('deleteOrder', (authUser, authPass, status, failOnCode) => {
    cy.get('@order_id').then((order_id) => {
        cy.request({
            method: 'DELETE',
            url: '/wp-json/wc/v3/orders/' + order_id,
            auth: {
                username: authUser,
                password: authPass
            },
            failOnStatusCode: failOnCode
        }).should((response) => {
            expect(response.status).to.eq(status)
        })
    })
})
