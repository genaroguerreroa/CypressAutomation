class AccountPage {
    visit() {
      cy.visit('https://www.demoblaze.com/')
    }

    fillEmail(value) {
      const field = cy.get('[id="sign-username"]')
      field.clear()
      field.type(value)
      return this
    }

    fillPassword(value) {
      const field = cy.get('[id="sign-password"]')
      field.clear()
      field.type(value)
      return this
    }

    submit() {
      const button = cy.get('button[onClick="register()"]')
      button.click()
    }

    generateRandomEmail() {
      const username = Math.random().toString(36).substring(2, 8) // Generate a random username
      const domain = 'example.com' // Change this to your desired domain
      return `${username}@${domain}` // Return the email address
    }
  }

  export default new AccountPage()
