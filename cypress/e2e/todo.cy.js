describe('agregar tareas', () => {
  
    it('agregar una tarea a la lista', () => {
      cy.visit('https://todomvc.com/examples/react/#/')
      cy.get('.new-todo').click()
      cy.get('.new-todo').type('Tarea 1 {enter}')
      cy.get('.toggle').click()
      cy.get('.toggle').click()
      cy.get('.view > label').dblclick()
      
    })




})