import { logStep } from "../support/e2e";

class Fregmentationpage {
    clickOnOpen(eventId) {
        logStep(`Clicking on Open for event ID: ${eventId}`);
        return cy.get(`li[data-eventid="${eventId}"]`)
            .within(() => {
                return cy.get('.btn.btn-primary.executeEvent').click();
            });
    }
    VerifyActivity(eventId) {
        logStep(`Verifying activity for event ID: ${eventId}`);
        return cy.get(`li[data-eventid="${eventId}"]`).should('exist');
    }
    entertextinstartfield(type) {
        logStep('Entering text in Start field');
        return cy.get('input[name="Start"]')
            .clear()  // Clears any existing value
            .type(type) // Enter desired value
            .get('.phase__header').click({ timeout: 1000 })
    }
    entertextinendfield(type) {
        logStep('Entering text in End field');
        return cy.get('input[name="End"]')
            .clear()  // Clears any existing value
            .type(type) // Enter desired value
            .get('.phase__header').click({ timeout: 1000 })
    }
    clickonclosebutton() {
        logStep('Clicking on close button');
        return cy.get(':nth-child(2) > .button__inner-wrapper > .button').click({ timeout: 1000 })
    }
    verifytheexecutedEven() {
        logStep('Verifying the executed event');
        return cy.get('.executedEvent').should('be.visible')
    }

    verifystatField() {
        logStep('Verifying Start Field');
        return cy.get('input[name="Start"]')
            .invoke('val') // Get the value of the input field
            .should('not.be.empty'); // Verify that it is not empty

    }
    verifyEndField() {
        logStep('Verifying End Field');
        return cy.get('input[name="End"]')
            .invoke('val') // Get the value of the input field
            .should('not.be.empty');
    }

    clickonchoicedropdrown(value) {
        logStep(`Clicking on choice dropdown with value: ${value}`);
        return cy.get(':nth-child(7) > .row > .col-lg-10 > .form-control').select(value)
                .get(':nth-child(7) > .row > #editDataValue > .far').click({ timeout: 1000 })
    }
    clickonOpenbutton(open) {
        logStep(`Clicking on Open button: ${open}`);
        return cy.get(open).click({ timeout: 1000 })
    }
    clickoninputfield(value) {
        logStep(`Clicking on input field with value: ${value}`);
        return cy.wait(5000).get('.input-field__input').select(value)
    }

    vericharactersDropdown() {
        logStep('Verifying characters dropdown');
        return cy.get('.input-field__input').should('Item 3 æåøÆÅØéèçà$ù£µ§')
    }
    somethingwentwrong() {
        logStep('Checking if "Something went wrong" message is displayed');
        return cy.get('#errorDialog_container > :nth-child(1) > .modal-content > .modal-body > p').should('be.visible')
    }
}

export default new Fregmentationpage();
