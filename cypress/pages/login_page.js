// This file contains the page object for the login page. The login page object contains the following methods:
class LoginPage {
  visit() {
    const baseUrl = Cypress.env("BASE_URL") || '/';
    return cy.visit(baseUrl, {
      onBeforeLoad(win) {
        const origOpen = win.XMLHttpRequest.prototype.open;
        win.XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
          if (async === false) {
            async = true;
          }
          return origOpen.call(this, method, url, async, user, password);
        };
      }
    });
  }
}

export default new LoginPage()


