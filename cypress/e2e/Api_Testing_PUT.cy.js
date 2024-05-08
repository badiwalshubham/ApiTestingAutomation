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

})