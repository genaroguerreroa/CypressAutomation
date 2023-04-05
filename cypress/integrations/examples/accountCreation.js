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
    cy.on('window:alert',(str)=>
      {
          //Assert to check when user is created successful
          expect(str).to.equal('Sign up successful.')
      })
  })

  it('should display an error with already existing credentials', () => {
    cy.get('[id="signin2"]').click()
    AccountPage.fillEmail('invalid@automation.com')
      .fillPassword('invalid 54654')
      .submit()
    cy.on('window:alert',(str)=>
      {
          //Assert to check message displayed when user already exist
          expect(str).to.equal('This user already exist.')
      })

  })
})
