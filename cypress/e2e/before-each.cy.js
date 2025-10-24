describe('Max character input functionality', () => {

    beforeEach(() => {
        cy.visit('/example-3')

        cy.get('span[data-cy=first-name-chars-left-count]').as('fnCharsLeft')
        cy.get('#first-name-input').as('fnInput')
    })

  it('displays the appropriate remaining characters count', () => {
    cy.get('@fnCharsLeft').invoke('text').should('equal', '15')
    cy.get('@fnInput').type('Hello')
    cy.get('@fnCharsLeft').invoke('text').should('equal', '10')
  })

   it('displays the appropriate remaining characters count', () => {

    cy.get('@fnCharsLeft').invoke('text').should('equal', '15')
    cy.get('@fnInput').type('HelloHello')
    cy.get('@fnCharsLeft').invoke('text').should('equal', '5')
  })

   it('displays the appropriate remaining characters count', () => {
    
    cy.get('@fnCharsLeft').invoke('text').should('equal', '15')
    cy.get('@fnInput').type('HelloHelloHelloHello')
    cy.get('@fnCharsLeft').invoke('text').should('equal', '0')
  })
})