import LoginPage from '/cypress/pages/login.page.js'

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('should login with valid credentials', () => {
    cy.get('[id="login2"]').click()
    LoginPage.fillEmail('test2@automation.com')
      .fillPassword('QJVNydt0@5*%3Cfv')
      .submit()
  })

  it('should display an error with invalid credentials', () => {
    cy.get('[id="login2"]').click()
    LoginPage.fillEmail('invalid@automation.com')
      .fillPassword('invalid 54654')
      .submit()

    cy.on('window:alert',(str)=>
      {
          //Mocha
          expect(str).to.equal('User does not exist.')
      })
  })
})
