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


    //cy.url().should('include', '/overview')
  })

  // it('should display an error with invalid credentials', () => {
  //   LoginPage.fillEmail('invalid@automation.com')
  //     .fillPassword('invalid 54654')
  //     .submit()

  //   cy.get('p').contains('Your email or password is incorrect!')
  // })
})
