class EnterValue {
    enterValue(selector, value) {
        return cy.get(selector, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .then((element) => {
                try {
                    return cy.wait(500,{log:false}) // Add a short wait before interacting
                        .wrap(element)
                        .should('be.visible')
                        .clear({ force: true })
                        .type(value, { force: true });
                } catch (err) {
                    cy.log(`Element with selector "${selector}" not found or not visible.`);
                    throw err; // Re-throw the error to fail the test
                }
            }).wait(2000,{log:false}); // Add a wait after typing
    }
    

    VerifyenterValue(selector) {
        return cy.get(selector, { timeout: 20000 })
            .should('exist')
            .should('be.visible')
    }
    
    
    enterFirstValue(selector, keywords) {
        return cy.get(selector, { timeout: 20000 })
            .first()
            .type(keywords);
    }

    selectOrEditValue(selector, editIconSelector, formSelector, selectedValue) {
        return cy.get(selector, { timeout: 20000 }).invoke('val').then((currentValue) => {
            if (currentValue) {
                return cy.get(editIconSelector).click({force: true});
            } else {
                return cy.get(formSelector, { timeout: 20000 }).select(selectedValue);
            }
        });
    }
    EnterTextInField(selector, text) {
        return cy.get(selector, { timeout: 20000 })
            .should('exist')
            .type(text, { force: true });
    }
}


export default new EnterValue();