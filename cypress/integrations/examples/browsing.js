import BrowsingPage from '/cypress/pages/browing.page.js'

describe('Browsing', () => {
  beforeEach(() => {
    BrowsingPage.visit()
  })

  it('Verify that clicking on the "Laptops" category displays all available laptop models', () => {
    cy.get('[onclick="byCat(\'notebook\')"]').click()
    cy.get('.card-text').should('have.length', 6)

  })

})
