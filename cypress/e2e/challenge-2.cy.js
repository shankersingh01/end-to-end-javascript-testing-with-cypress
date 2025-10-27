describe( '', () => {
    beforeEach(() => {
        // const e4Path = Cypress.env('EXAMPLE_4_PATH')
        cy.visit('/example-4');
    })

    it('Checks the background color', () => {
        cy.get('ul[data-cy=box-1-items-list] > li').eq(0).click().should('have.css', 'background-color', 'rgb(221, 221, 221)');

    })
})