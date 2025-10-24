describe('', () => {
    beforeEach( () => {
        cy.visit('/example-4');
    })

    it('Sets the header text to the item name when double clicked', () => {
        cy.get('ul[data-cy=box-1-items-list] > li').eq(0).dblclick();
        cy.get('span[data-cy=box-1-selected-name]').invoke('text').should('equal', 'Option One');
    })

    it('displays the correct number of checked options', () => {
        cy.get('span[data-cy=box-2-selected-count]').invoke('text').should('equal', '0');
        cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(0).check();
        cy.get('span[data-cy=box-2-selected-count]').invoke('text').should('equal', '1');
        cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(1).check();
        cy.get('span[data-cy=box-2-selected-count]').invoke('text').should('equal', '2');
        cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(0).uncheck();
        cy.get('span[data-cy=box-2-selected-count]').invoke('text').should('equal', '1');
    })

    it('displays the correct selected option in box 3', () => {
        cy.get('select[data-cy=box-3-dropdown]').select('Option Two');
        cy.get('span[data-cy=box-3-selected-name]').invoke('text').should('equal', 'Option Two');
    })

    it('Sets the header text to the item name when hovered over', () => {
        cy.get('ul[data-cy=box-4-items-list] > li').eq(0).trigger('mouseover');
        cy.get('span[data-cy=box-4-selected-name]').invoke('text').should('equal', 'Option One');
    })
})