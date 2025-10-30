describe('Heading Text', () => {
  it('contains the title of our site', () => {
    // cy.visit('/example-1'); // Can be omitted if baseUrl is set
    cy.prompt([
      'visit the page "/example-2"', 
      'type Hello in the input',
      'verify the span element contains the text "10"'
    ])
  })
})
