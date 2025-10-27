// Activating code completion/suggestions for Cypress commands
/// <reference types="Cypress"/>

describe('Heading Text', () => {
  it('contains title of our site', () => {
    const e2Path = Cypress.env('EXAMPLE_2_PATH')
    cy.visit(e2Path)
    cy.get('span').invoke('text').should('equal', '15')
    cy.get('input').type('Hello')
    cy.get('span').invoke('text').should('equal', '10')
    // special characters can be added using {} notation like {shift}, {alt}, {ctrl}, {meta}, {enter}, {backspace}, {del}, {esc}, {upArrow}, {downArrow}, {leftArrow}, {rightArrow}
  })
})
