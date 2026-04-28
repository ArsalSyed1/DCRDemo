class Connectionpage {
  SearchConnection(name) {
    return cy
      .wait(5000)
      .then(() => cy.get("#nonConnectionsFilter", { timeout: 5000 }))
      .then(($el) => $el.type(name));
  }
  clickonicon() {
    return cy
      .get("#nonConnectionsList > li > .userThumb > img", { timeout: 1000 })
      .click();
  }
  clickonInvitesent() {
    return cy
      .wait(5000)
      .then(() =>
        cy
          .get(".panel-body > .ui > .btn", { timeout: 1000 })
          .click({ force: true })
      )
      .then(() => cy.wait(1000));
  }
  logout() {
    return cy.contains("Sign out").click({ force: true });
  }

  clickonnotificationicon() {
    return cy.get("#notificationsDD").click();
  }
  clickonpendingrequest() {
    return cy.get("#openGraphTabs > :nth-child(3) > a").click();
  }
}

export default new Connectionpage();
