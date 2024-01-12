/// <reference types="cypress" />

export class CheckPage {

    checkTable() {
        cy.get("#content").should('have.length', 5).check();
    }
    
    }