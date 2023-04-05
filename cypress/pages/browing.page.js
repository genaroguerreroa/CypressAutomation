class BrowsingPage {
    visit() {
      cy.visit('https://www.demoblaze.com/')
    }

    submit() {
      const button = cy.get('button[onClick="register()"]')
      button.click()
    }

  }

  export default new BrowsingPage()
