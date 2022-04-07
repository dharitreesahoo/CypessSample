///<reference types="cypress-xpath"/>
require('cypress-xpath')
describe('My First Test', () => {
    it('clicks the link "type"', () => {
      cy.visit('https://example.cypress.io')
      cy.xpath('//a[text()="get"]').click()


    })
  })