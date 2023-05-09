/* eslint-disable quotes */
/* eslint-disable no-undef */

describe('Home', () => {
  it('should match snapshot', () => {
    cy.visit('/')

    // cy.contains('Pocetna stranica').click() // napravice snapshot za to dugme
    cy.matchImageSnapshot()
  })
})
/*
describe("Storybook", () => {
  before(() => {
    cy.visit("/")
  })

  it("should load all stories", () => {
    cy.get(".sidebar-item").each((item) => {
      cy.wrap(item).click()
      cy.get(".docs-page h1").should("be.visible")
    })
  })
}) */
