describe('pruebas test suite', () => {
  
  it('login con usuario y contraseña válidos', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area!")
  })
  
  
  
  it('login con usuario erróneo y contraseña válida', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("pepe")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
  })



  it('login con usuario válido y contraseña errónea', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPasswor")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
  })

  it('login con usuario erróneo y contraseña errónea', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmithh")
    cy.get('#password').type("SuperSecretPasswor")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
  })
})