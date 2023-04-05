class ContactPage {
    visit() {
      cy.visit('https://www.demoblaze.com/')
    }

    fillEmail(value) {
      const field = cy.get('[id="recipient-email"]')
      field.clear()
      field.type(value)
      return this
    }

    fillRecipient(value) {
      const field = cy.get('[id="recipient-name"]')
      field.clear()
      field.type(value)
      return this
    }

    fillMessage(value) {
      const field = cy.get('[id="message-text"]')
      field.clear()
      field.type(value)
      return this
    }

    submit() {
      const button = cy.get('button[onClick="send()"]')
      button.click()
    }

    generateRandomEmail() {
      const username = Math.random().toString(36).substring(2, 8) // Generate a random username
      const domain = 'example.com' // Change this to your desired domain
      return `${username}@${domain}` // Return the email address
    }
  }

  export default new ContactPage()
