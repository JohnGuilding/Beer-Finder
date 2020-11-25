beforeEach(() => {
    cy.visit('http://localhost:3000');
})

// VALID INPUT
it ('should show all the beers', () => {
    cy.get('[data-cy=card]').should('have.length', 25) 
})

it ('should show the correct beer', () => {
    cy.get('[data-cy=searchBox]').type('trashy blonde');
    cy.get('[data-cy=card]').should('have.length', 1) 
})

// INVALID INPUT

it ('should show the correct beer', () => {
    cy.get('[data-cy=searchBox]').type('87fu3j4h');
    cy.get('[data-cy=card]').should('have.length', 0) 
})

// NULL INPUT