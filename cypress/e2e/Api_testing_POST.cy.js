/// <reference types="cypress" />


import payload from '../config/payload.json'
// POST method API testing with Positive Scenarios

describe('POST Method Positive Case', () => {

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + '@dispostable.com'
        return email
    }

    it('POST Call JSON', () => {

        let emailAddress = generateRandomEmail()
        let payload = {
            "name": "AB Test 01",
            "email": emailAddress,
            "gender": "female",
            "status": "active"
        }

        cy.log(" *** EMail ***** " + emailAddress)

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            body: payload

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "AB Test 01")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })
    })

    it('POST Call JSON using Fixtures', () => {


        cy.fixture('users').then((responseObject) => {
            responseObject.email = generateRandomEmail()

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
                },
                body: responseObject

            }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name", "AB Test 01")
                expect(response.body).has.property("gender", "female")
                expect(response.body).has.property("status", "active")
                expect(response.body.id).to.not.be.null
            })

        })
        // let payload={
        //     "name": "AB Test 01",
        //     "email": emailAddress,
        //     "gender": "female",
        //     "status": "active"
        // }




    })

    it('POST Call Config JSON', () => {
        payload.email = generateRandomEmail()

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            body: payload

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).has.property("name", "AB Test 01")
            expect(response.body).has.property("gender", "female")
            expect(response.body).has.property("status", "active")
            expect(response.body.id).to.not.be.null
        })

    })
})

// POST method API testing with Negative Scenarios

describe('POST Method Negative Case', () => {

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + '@dispostable.com'
        return email
    }

    it(' POST Call Negative Case - Wrong header ', () => {
        payload.email = generateRandomEmail()
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: 'Bearer'
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(401)

        })
    })
    it(' POST CALL Negative Case - Wrong Data ', () => {
        payload.email = null
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(422)

        })
    })

    it(' POST CALL  Negative Case - Duplicate Data ', () => {
        payload.email = "abtest01@dispostable.com"
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {

                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            body: payload,
            failOnStatusCode: false

        }).then((response) => {
            expect(response.status).to.equal(422)

        })
    })



})