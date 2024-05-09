/// <reference types="cypress" />

import updateusers from '../config/user-update.json'
import users from '../config/payload.json'

describe(' PUT Method ', () => {

    it('PUT Call JSON', () => {
        cy.fixture('payload-put-users').then((payload) => {
            cy.request({

                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/6897633',
                headers: {

                    Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
                },
                body: payload
            }).then((response) => {

                expect(response.status).to.be.equal(200)
                expect(response.body).has.property("name", "Shubham")
            })

        })




    })

    it('PUT Call  Config JSON', () => {

        cy.request({

            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/6897633',
            headers: {

                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            body: updateusers
        }).then((response) => {

            expect(response.status).to.be.equal(200)
            expect(response.body).has.property("name", "AutomtedTest")
        })



    })

    it('End To End Flow', () => {
        it(' End to End Flow', () => {
            users.email = "randoomm123ab@dispostable.com"
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {

                    Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                },
                body: users
            }).then((response) => {
                let id = response.body.id
                cy.request({
                    method: 'PUT',
                    url: 'https://gorest.co.in/public/v2/users/' + id,
                    headers: {

                        Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                    },
                    body: updateusers
                })
                    .then((response) => {
                        expect(response.status).to.be.equal(200)
                    })
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/' + id,
                    headers: {

                        Authorization: 'Bearer 96096fd0358d8c24b76ba3e3e415aae7102a4452fdf0ad819c070462c474b70b'
                    },
                })
                    .then((response) => {
                        expect(response.status).to.be.equal(200)
                        expect(response.body).has.property('name', updateusers.name)
                    })

            })


        })

    })


})