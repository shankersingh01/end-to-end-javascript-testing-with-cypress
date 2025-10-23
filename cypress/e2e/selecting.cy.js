describe('Max character input functionality', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('http://localhost:5173/example-3')
    cy.get('span[data-cy=first-name-chars-left-count]').as('fnCharsLeft')
    cy.get('#first-name-input').as('fnInput')
    cy.get('@fnCharsLeft').invoke('text').should('equal', '15')
    cy.get('@fnInput').type('Hello')
    cy.get('@fnCharsLeft').invoke('text').should('equal', '10')
  })
})