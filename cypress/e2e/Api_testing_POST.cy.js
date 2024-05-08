/// <reference types="cypress" />

// POST method API testing with Positive Scenarios

describe('POST Method Positive Case', () => {

    it('POST Call JSON', () => {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            body: {
                "name": "AB Test 01",
                "email": "AbTest00567@dispostable.com",
                "gender": "female",
                "status": "active"
            }

        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).has.property('name', 'AB Test 01')
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })
    })

})

// POST method API testing with Negative Scenarios

// describe('POST Method Negative Case', () => {

//     it('POST Call', () => {

//     })

//     it('POST Call', () => {

//     })

//     it('POST Call', () => {

//     })

// })