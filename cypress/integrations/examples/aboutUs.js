import AccountPage from '/cypress/pages/account.page.js'

describe('Account', () => {
  beforeEach(() => {
    AccountPage.visit()
  })

  it('Verify that clicking the "Play" button for the "About Us" video loads and plays the video.', () => {
    cy.get('[data-target="#videoModal"]').click()
    cy.get('.vjs-poster').click()
    //this asserts checks the video is being played
    cy.get('button[title="Pause"]')
      .should('be.visible');
  })
})
