import { logStep } from '../../support/e2e';

class ClickMethod {
    clickElement(selector) {
        logStep(`Clicking element: ${selector}`);
        return cy.get(selector, { timeout: 20000 })
        .should('exist')
        .should('not.be.disabled')
        .click();
    }
    clickElementmultipletime(selector) {
        logStep(`Clicking element multiple times: ${selector}`);
        return cy.get(selector, { timeout: 20000 })
        .should('exist')
        .click({ multiple: true });
    }
    clickElementContainingText(text) {
        logStep(`Clicking element containing text: ${text}`);
        return cy.contains(text, { timeout: 50000 })
        .should('exist')
        .click();
    }
    clickElementWithoutTarget(selector) {
        logStep(`Clicking element without target: ${selector}`);
        return cy.get(selector, { timeout: 20000 })
        .should('exist')
        .invoke("removeAttr", "target")
        .click();
    }

    clickElementByAttribute(attribute, value, element) {
        logStep(`Clicking element by attribute: ${attribute}=${value}, child: ${element}`);
        return cy.get(`[${attribute}="${value}"]`, { timeout: 20000 })
        .should('exist')
        .within(() => {
                return cy.get(element).click();
            });
    }

    clickElementByEventId(eventId) {
        logStep(`Clicking element by eventId: ${eventId}`);
        return cy.get(`li[data-eventid="${eventId}"]`, { timeout: 20000 })
        .should('exist')
        .first()
        .within(() => {
                return cy.get('.btn.btn-primary.executeEvent').click();
            }).wait(2000, { log: false });
    }
    clickFirstElement(selector) {
        logStep(`Clicking first element: ${selector}`);
        return cy.get(selector, { timeout: 20000 })
        .first()
        .should('exist')
        .click();
    }
    clickFirstElementWithoutTarget(selector) {
        logStep(`Clicking first element without target: ${selector}`);
        return cy.get(selector, { timeout: 20000 })
        .first()
        .should('exist')       
        .invoke("removeAttr", "target")
        .click();
    }
    rightClickElement(selector) {
        logStep(`Right clicking element: ${selector}`);
        return cy.get(selector, { timeout: 20000 })
        .should('exist')
        .rightclick();
    }

 clickSimDetailLink(text) {
    logStep(`Clicking sim detail link with text: ${text}`);
    // Keep scrolling until the element is found and visible
    function scrollUntilVisible(retries = 10) {
      return cy
        .contains(".simDetail a.itemTitle", text, { timeout: 10000 })
        .then(($el) => {
          if ($el.length && Cypress.dom.isVisible($el[0])) {
            // Remove target safely
            if ($el.attr("target")) {
              $el.removeAttr("target");
            }
            return cy
              .wrap($el)
              .scrollIntoView({ offset: { top: -100, left: 0 } })
              .click();
          } else {
            if (retries > 0) {
              // Try scrolling to the element itself, disabling ensureScrollable if needed
              return cy
                .contains(".simDetail a.itemTitle", text, { timeout: 10000 })
                .scrollIntoView({ offset: { top: -100, left: 0 }, ensureScrollable: false })
                .then(() => scrollUntilVisible(retries - 1));
            } else {
              throw new Error("Element not found after scrolling.");
            }
          }
        });
    }
    return scrollUntilVisible();
  }




/**
 * Clicks an element and waits for a matching API call to complete.
 * @param {string} buttonSelector - The CSS selector of the button to click.
 * @param {string} apiUrl - The API endpoint to intercept and wait for.
 * @param {string} aliasName - Optional alias for the intercepted call (default: 'apiRequest').
 * @returns {Cypress.Chainable<any>} - The API response body.
 */
    clickAndWaitForApi(buttonSelector, apiUrl, aliasName = 'apiRequest') {
        logStep(`Clicking button ${buttonSelector} and waiting for API: ${apiUrl}`);
        // Intercept the API
        console.log("API URL before replacement:", apiUrl);
        apiUrl = apiUrl.includes("livedemo.dcrgraphs.net:43443")
        ? apiUrl.replace("livedemo", "livetest")
         : apiUrl;
         console.log("API URL after replacement:", apiUrl);
        cy.intercept(apiUrl).as(aliasName);

        // Ensure the button is visible and not disabled before clicking
        return cy.get(buttonSelector)
            .should('exist')
            .should('be.visible')
            .should('not.be.disabled')
            .click()
            .wait(`@${aliasName}`, { timeout: 40000 })
            .then((interception) => {
                const { request, response } = interception;

                // Cypress UI log
                Cypress.log({
                    name: 'API Interception',
                    message: [`[${request.method}] ${apiUrl}`],
                    consoleProps: () => ({
                        RequestBody: request.body,
                        ResponseStatus: response.statusCode,
                        ResponseBody: response.body,
                    }),
                });

                // Assert successful response
                expect([200, 204, 201, 301, 409, 400]).to.include(response.statusCode);

                return cy.wait(10000, { log: false }).then(() => response.body);
            });
    }
}

export default new ClickMethod();