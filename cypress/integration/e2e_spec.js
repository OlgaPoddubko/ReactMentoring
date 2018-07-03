describe('End to end test', function() {
  it('Opens home page', function() {
     cy.visit('http://localhost:8000/')
  })

  it('Recieves empty search result', function() {
    cy.get('.empty-search-results')
  })

  it('Searches movies by title', function() {
     cy.get('.search-input')
       .type('joy')
       .should('have.value', 'joy')

    cy.get('.search-button')
    .click()
  })

  it('Searches movies by genre', function() {
     cy.get('.search-input')
      .clear()
       .type('comedy')
       .should('have.value', 'comedy')

    cy.contains('.search-by', 'genre')
      .click()
      .should('have.class', 'active-search search-by')

    cy.get('.search-button')
    .click()
  })

  it('Changes sortBy', function() {

    cy.contains('button', 'rating')
      .click()
      .should('have.class', 'active-sort')

      cy.get('.search-button')
      .click()
  })

  it('Opens Movie page by clicking the movie', function() {
      cy.get('.item').first().click()
      cy.url().should('include', '/movies/')
  })

  it('Returns to Search results by navigating', function() {
     cy.go('back')
     cy.get('.search-input')
       .should('have.value', 'comedy')
  })
})
