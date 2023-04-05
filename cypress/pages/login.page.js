class LoginPage {
    visit() {
      cy.visit('https://www.demoblaze.com/')
    }

    fillEmail(value) {
      const field = cy.get('[id="loginusername"]')
      field.clear()
      field.type(value)
      return this
    }

    fillPassword(value) {
      const field = cy.get('[id="loginpassword"]')
      field.clear()
      field.type(value)
      return this
    }

    submit() {
      const button = cy.get('button[onClick="logIn()"]')
      button.click()
    }
  }

  export default new LoginPage()
