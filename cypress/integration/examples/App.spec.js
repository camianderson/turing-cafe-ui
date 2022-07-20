context('Turing Cafe Reservation', () => {
    
    it("should display the main page correctly", () => {
        cy.visit('http://localhost:3000/')
    })
    it("should display the title", () => {
        cy.contains('h1', 'Turing Cafe Reservations')
    })
    it("should display the form", () => {
        cy.get('.resy-form')
    })
    it("should display the list of reservations", () => {
        cy.get('.resy-container')
        cy.contains('p', 'Date')
    })
    it("should take information in the form", () => {
        cy.get('form')
        cy.get('.input-name').type('text')
    })
    it("should submit information", () => {
        cy.get('form')
        cy.get('.res-button').click()
    })
    
})