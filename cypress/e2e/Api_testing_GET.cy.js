/// <reference types="cypress" />

// Get method API testing with Positive Scenarios

describe('API Automation GET Positive Case', () => {

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
                expect(response.body.id).to.equal(6895773)
            })

    })

})

// Get method API testing with Negative Scenarios

describe('API Automation GET Negative Case', () => {

    // Get method Api testing
    
    // For multiple users
    it('Get Invalid Users', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/user',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            failOnStatusCode: false

        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                expect(response.status).to.eq(404)
            })

    })

    // Lets Create for validating only single user
    it('Invalid Get User1 only', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/256256',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            failOnStatusCode: false
        })
            .then((response) => {
                cy.log(JSON.stringify(response))
                // expect(response.status).to.equal(200)
                expect(response.status).to.equal(404)
                // expect(response.body.id).to.equal(6895776)
            })

    })

})
