class CreateProcessPage {
  visitS() {
    return cy.visit("https://wwwtest.dcrgraphs.net:43443/Tool");
  }

  clearProcessName() {
    return cy.get("#DCRTitle", { timeout: 1000 }).clear();
  }

  selectGraphCategory(category) {
    return cy.get("body").then(($body) => {
      if ($body.find("#selectGraphCategory").length > 0) {
        return cy
          .get("#selectGraphCategory")
          .should("be.visible")
          .select(category, { force: true });
      } else {
        throw new Error("Dropdown #selectGraphCategory not found in the DOM");
      }
    });
  }

  Refreshpage() {
    return cy.reload();
  }

  ClickonShareButton() {
    return cy.get("#sbShareBtn > .fas", { timeout: 10000 }).click();
  }
  sharewithconnection() {
    return cy.get("#shareGraph > i", { timeout: 10000 }).click();
  }
  verifySharedWithConnection() {
    return cy.get("body").then(() => {
      const env = Cypress.env("ENV");
      if (env === "test") {
        return cy
          .wait(5000, { log: false })
          .then(() => cy.get('li[data-id="150458"]'))
          .then(($el) =>
            $el.find('a[data-action="shareEditable"]').click({ force: true })
          );
      } else if (env === "prodIIS01" || env === "prodIIS02") {
        return cy
          .wait(5000, { log: false })
          .then(() => cy.get('li[data-id="174324"]'))
          .then(($el) =>
            $el.find('a[data-action="shareEditable"]').click({ force: true })
          );
      } else if (env === "demo") {
        return cy
          .get('li[data-id="150458"]')
          .then(($el) =>
            $el.find('a[data-action="shareEditable"]').click({ force: true })
          );
      } else {
        // Default: try with a safe fallback or log a warning instead of throwing
        cy.log(
          `Warning: Unknown environment "${env}", using default share action`
        );
        return cy
          .get('li[data-id="150458"]')
          .then(($el) =>
            $el.find('a[data-action="shareEditable"]').click({ force: true })
          );
      }
    });
  }
  clickondonebutton() {
    // Stub the POST /share endpoint
    cy.intercept("POST", "/api/graphs/*/share", (req) => {
      const dataId = 1932988;
      req.reply({
        statusCode: 200,
        body: { Id: dataId },
      });
      // Save the id to Cypress env or alias for later use
      Cypress.env("sharedGraphId", id);
    }).as("shareRequest");

    // Stub the PUT /updatepublictemplate endpoint similarly if needed
    cy.intercept("PUT", "/api/graphs/*/updatepublictemplate", (req) => {
      const dataId = 1932988;
      req.reply({
        statusCode: 200,
        body: { Id: dataId },
      });
    }).as("updateRequest");

    return cy
      .get(
        "#shareGraphModal > .modal-dialog > .modal-content > .modal-footer > .pull-right > .btn",
        { timeout: 10000 }
      )
      .click();
  }
  clickonpublickbutton() {
    return cy
      .get("#markAsPublic_chk", { timeout: 100000 })
      .then(($checkbox) => {
        if (!$checkbox.is(":checked")) {
          return cy.wrap($checkbox).click({ force: true });
        }
      });
  }
  clickondeletekeyword() {
    return cy.get("span[data-role='remove']", { timeout: 10000 }).click();
  }
}

export default new CreateProcessPage();
