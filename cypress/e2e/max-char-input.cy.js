describe('Heading Text', () => {
  it('contains title of our site', () => {
    cy.visit('/example-2')
    cy.get('span').invoke('text').should('equal', '15')
    cy.get('input').type('Hello')
    cy.get('span').invoke('text').should('equal', '10')
  })
})
