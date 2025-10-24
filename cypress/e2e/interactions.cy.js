describe('', () => {
    beforeEach( () => {
        cy.visit('/example-4');
    })

    it('Sets the header text to the item name when double clicked', () => {
        cy.get('ul[data-cy=box-1-items-list] > li').eq(0).dblclick();
        cy.get('span[data-cy=box-1-selected-name]').invoke('text').should('equal', 'Option One');
    })
})