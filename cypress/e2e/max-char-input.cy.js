describe('Heading Text', () => {
  it('contains title of our site', () => {
    const e2Path = Cypress.env('EXAMPLE_2_PATH')
    cy.visit(e2Path)
    cy.get('span').invoke('text').should('equal', '15')
    cy.get('input').type('Hello')
    cy.get('span').invoke('text').should('equal', '10')
  })
})
