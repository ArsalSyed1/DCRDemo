class DropDown {
  selectOption(selector, option) {
    return cy.get("body").then(($body) => {
      if ($body.find(selector).length > 0) {
        return cy
          .get(selector)
          .should("be.visible")
          .select(option, { force: true });
      } else {
        throw new Error(`Dropdown ${selector} not found in the DOM`);
      }
    });
  }

  selectInputFieldValue(value) {
    return cy.get('.input-field__input').select(value);
  }

  selectInputFieldValuewithcheckbox(value) {

    // Step 1: Click the dropdown to open options
    return cy.get(".multi-select-field").click().then(() => {
      // Step 2: Click the checkbox for the provided value
      cy.contains("li.option", value)
        .find("input.selection-box")
        .click({ force: true });
    });
  }

  selectReactSelectOption(selectId, { selectFirst = false, optionTitle } = {}) {
    cy.wait(1000);
    
    // Open the dropdown input
    cy.get(`#${selectId}-input`).should("be.visible").click({ force: true });

    cy.wait(1000);

    // If optionTitle is passed, select by title
    if (optionTitle) {
      cy.get("body")
        .find(`[id^="${selectId}-option"]`)
        .contains(optionTitle)
        .click();
    } else if (selectFirst) {
      // If no title but selectFirst is true, select first option
      cy.get("body")
        .find(`[id^="${selectId}-option"]`)
        .should("have.length.greaterThan", 0)
        .first()
        .click();
    } else {
      throw new Error(
        `selectReactSelectOption: Neither optionTitle nor selectFirst is provided for ${selectId}`,
      );
    }
  }
}

export default new DropDown();
