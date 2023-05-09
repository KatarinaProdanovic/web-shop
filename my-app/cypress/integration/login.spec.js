/* eslint-disable no-undef */

/*
describe('LoginPage', () => {
    it('should match snapshot', () => {
      cy.visit('/');

      cy.contains('Pocetna stranica').click()
      cy.get('#my-component').matchImageSnapshot();

    });
  });
  */

describe('LoginPage', () => {
  it('should match snapshot', () => {
    localStorage.setItem('logged', false)
    cy.visit('/login')

    cy.matchImageSnapshot()
  })
})
