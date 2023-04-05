import BrowsingPage from '/cypress/pages/browing.page.js'

describe('Browsing', () => {
  beforeEach(() => {
    BrowsingPage.visit()
  })

  it('Verify that clicking on the "Laptops" category displays all available laptop models', () => {
    cy.get('[onclick="byCat(\'notebook\')"]').click()
    //assert to check amount of items expected to be displayed by category
    cy.get('.card-text').should('have.length', 6)

  })

  it('Verify that clicking on the "Phones" category displays all available phone models.', () => {
    cy.get('[onclick="byCat(\'phone\')"]').click()
    //assert to check amount of items expected to be displayed by category
    cy.get('.card-text').should('have.length', 7)

  })

  it('Verify that clicking on the "Monitors" category displays all available monitor models.', () => {
    cy.get('[onclick="byCat(\'monitor\')"]').click()
    //assert to check amount of items expected to be displayed by category
    cy.get('.card-text').should('have.length', 2)

  })

})
