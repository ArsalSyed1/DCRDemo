import { logStep } from "../../support/e2e";

describe("Application Health Check", () => {
  it("Confirms the site is reachable", () => {
    const siteUrl = Cypress.config("baseUrl");
    logStep(`Checking site availability: ${siteUrl}`);

    cy.task("ensureSiteIsReady", { url: siteUrl, interval: 5000 }, { timeout: 120000 });

    logStep(`Site ${siteUrl} is ready.`);
  });
});