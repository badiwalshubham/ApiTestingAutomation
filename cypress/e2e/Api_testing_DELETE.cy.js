/// <reference types="cypress"/>

// DELETE method API testing 

describe('DELETE Call APi Automation', () => {

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 10)
        const email = randomString + "@dispostable.com"
        return email
    }

    it(' DELETE User', () => {
        let emailAddress = generateRandomEmail()
        let payload = {
            "name": "AB Test 01",
            "email": emailAddress,
            "gender": "female",
            "status": "active"
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
            },
            body: payload
        }).then((response) => {
            const userId = response.body.id


            cy.request({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                    Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
                }
            })
                .then((response) => {

                    expect(response.status).to.be.equal(204)
                })
            cy.request({

                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + userId,
                headers: {
                    Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.be.equal(404)
            })
        })


    })



})