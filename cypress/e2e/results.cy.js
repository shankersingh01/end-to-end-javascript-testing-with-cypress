describe('Max character input functionality', () => {
  it('displays the appropriate remaining characters count', () => {
    cy.visit('/example-3')

    cy.get('span[data-cy=first-name-chars-left-count]').then(function($charsLeftSpan){
      // expect($charsLeftSpan.text()).to.equal('15')
      cy.wrap($charsLeftSpan).invoke('text').should('equal', '15')
    })

    // Alias the elements for easier reference
    cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').as('fnCharsLeft')
    cy.get('#first-name-input').as('fnInput')
    
    // Initial assertion
    cy.get('@fnCharsLeft')
      .should('exist')
      .and('equal', '15')
    // Type into the input and assert the remaining characters
    cy.get('@fnInput').type('Hello')
    // Final assertions
    cy.get('@fnCharsLeft').should('equal', '10')
    // Verify the input value
    cy.get('@fnInput').should('have.value', 'Hello')
  })
})