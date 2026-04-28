// This file contains the page object for the login page. The login page object contains the following methods:
class LoginPage {
  visit() {
    const baseUrl = Cypress.env("BASE_URL") || '/';
    return cy.visit(baseUrl);
  }
}

export default new LoginPage()


