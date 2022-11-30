describe('Home page', () => {
  it('should have a welcome message', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')


    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Welcome to Ice and Fire')
  })
})

export {}
