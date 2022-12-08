describe('Landing page', () => {
  it('should have a welcome message', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')


    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('GAME OF THRONES')
  })
  it('should have a browse button', () => {
    // Start from the index page

    cy.get('button').contains('Browse')
  })
  it('should have a logo', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')


    cy.get('img').should('have.attr', 'src').should('include','icon')
  })
})

export {}
