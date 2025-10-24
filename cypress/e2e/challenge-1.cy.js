describe('Challenge page functionality', () => {
    beforeEach( () => {
        cy.visit('/challenge-1');
        cy.get('input[data-cy=first-name-input').as('fnInput')
        cy.get('span[data-cy=name-greeting]').as('greeting')
    })

    it('Greetings when input is blank', () => {
        
        cy.get('@fnInput').should('have.value', '')
        cy.get('@greeting').should('have.text','')
    }),

    it('Greetings with Name', () => {
        
        cy.get('@fnInput').type('S')
        cy.get('@greeting').should('have.text','Hello, S!')
    })
})