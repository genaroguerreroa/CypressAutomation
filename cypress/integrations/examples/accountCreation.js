import AccountPage from '/cypress/pages/account.page.js'

describe('Account', () => {
  beforeEach(() => {
    AccountPage.visit()
  })

  it('should sign up with valid non existing credentials', () => {
    cy.get('[id="signin2"]').click()
    const email = AccountPage.generateRandomEmail()
    AccountPage.fillEmail(email)
      .fillPassword('QJVNydt0@5*%3Cfv')
      .submit()
  })

  it('should display an error with already existing credentials', () => {
    cy.get('[id="signin2"]').click()
    AccountPage.fillEmail('invalid@automation.com')
      .fillPassword('invalid 54654')
      .submit()
    cy.on('window:alert',(str)=>
      {
          //Mocha
          expect(str).to.equal('This user already exist.')
      })

  })
})
