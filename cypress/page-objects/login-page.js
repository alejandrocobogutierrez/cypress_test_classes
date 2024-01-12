/// <reference types="cypress" />

export class LoginPage {

    enterUsername(text) {
        cy.get('#username').type(text);
}

    enterPassword(text) {
        cy.get('#password').type(text);
}

    clickbutton() {
        cy.get('.fa').click()    

    }

}
