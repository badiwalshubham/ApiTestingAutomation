// API Automation in CYpress
// Get
// Get users Details
// Invalid URL
// Get User Detail for 1 user
// Invaild Users

/// <reference types="cypress" />

describe('API Automation using Cypress', () => {

    // Get method Api testing

    it('Get Users', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            }
        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(200)
            })

    })

    // Lets Create for validating only single user
    it('Get User1 only', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/6895773',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            }
        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.equal(200)
                expect(response.body.id).to.equal(689577)
            })

    })

})
