/// <reference types="Cypress"/>

describe('', () => {
    beforeEach(() => {
        cy.visit('/example-3');
    })

    it('Select second input', () => {
        cy.get('input').filter('[data-cy=input-last-name]').should('exist');
    })
})