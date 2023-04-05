import ShoppingPage from '/cypress/pages/shopping.page.js'


describe('Shopping', () => {
  beforeEach(() => {
    ShoppingPage.visit()
  })

  it('Verify that the user can add items to the shopping cart.', () => {
    cy.get('a').contains('Samsung galaxy s6').click()
    cy.get('[onclick="addToCart(1)"]').click()
    cy.on('window:alert',(str)=>
      {
          // assert to check items was add to cart
          expect(str).to.equal('Product added')
      })
    cy.get('[id="cartur"]').click()
    //assert to check item is in the list of cart
    cy.get('td')
      .contains('Samsung galaxy s6')
      .should('be.visible');
  })

})
