/// <reference types="cypress" />

export class ExamplePage {

clickMenuElement() {
        cy.contains('Example 1: Menu Element').click();
}

}