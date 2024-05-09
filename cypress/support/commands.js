// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('getAPI', (pathParam) => {

    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users/' + pathParam,
        headers: {

            Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
        }
    })


})

Cypress.Commands.add('postAPI', (payload) => {

    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users/',
        headers: {
            Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
        },
        body: payload

    })
})

Cypress.Commands.add('putAPI', (pathParam) => {

    cy.request({
        method: 'PUT',
        url: 'https://gorest.co.in/public/v2/users/' + pathParam,
        headers: {

            Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
        },
    })

})

Cypress.Commands.add('deleteAPI', (pathParam) => {
    cy.request({
        method: 'DELETE',
        url: 'https://gorest.co.in/public/v2/users/' + pathParam,
        headers: {

            Authorization: "Bearer 78917e46595309accc116964733d049c33d5f78f9caf186981cd757250cf0367"
        },

    })
})