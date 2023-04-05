import ContactPage from '/cypress/pages/contact.page.js'
// Import the faker library
import faker from 'faker';

const message = faker.lorem.sentence();
const name = faker.name.firstName();

describe('Contact', () => {
  beforeEach(() => {
    ContactPage.visit()
  })

  it('Verify that a confirmation message is displayed after sending the message', () => {
    cy.get('[data-target="#exampleModal"]').click()
    const email = ContactPage.generateRandomEmail()
    ContactPage.fillEmail(email)
      .fillRecipient(name)
      .fillMessage(message)
      .submit()

    cy.on('window:alert',(str)=>
      {
          // assert to check message was correctly send
          expect(str).to.equal('Thanks for the message!!')
      })
  })

})
