import clickmethod from "../../pages/generic_method/click_method";
import EnterValue from "../../pages/generic_method/enter_value";

import { logStep } from "../../support/e2e";

export const click_on_Category = () => {
  logStep("Clicking on Category");
  return cy
    .wait(1000, { log: false })
    .then(() =>
      clickmethod.clickElement("#showCategoriesSequenceList > .fa-plus-square")
    );
};
export const click_on_DCR = () => {
  logStep("Clicking on Category");
  return clickmethod.clickElement("h1#appLogo>a");
};
export const click_on_New_Category = () => {
  logStep("Clicking on New Category");
  return clickmethod.clickElement("a[data-action='showNewCategoryModal']");
};
export const click_on_New_Collection = () => {
  logStep("Clicking on New Collection");
  return clickmethod.clickElement("a[data-action='showNewGroupModal']");
};
export const click_on_Collection_checkbox = () => {
  logStep("Clicking on Collection checkboxes and creating collection");
  logStep("Clicking on 4th category checkbox");
  return clickmethod
    .clickElement("#selectCategoriesList > :nth-child(4) > a")
    .then(() => {
      logStep("Clicking on 5th category checkbox");
      return clickmethod.clickElement(
        "#selectCategoriesList > :nth-child(5) > a"
      );
    })
    .then(() => {
      logStep("Clicking on 6th category checkbox");
      return clickmethod.clickElement(
        "#selectCategoriesList > :nth-child(6) > a"
      );
    })
    .then(() => {
      logStep("Clicking on Create Collection button");
      return clickmethod.clickAndWaitForApi(
        "#content-addNewGroupModal > .modal-footer > .btn",
        `${Cypress.config("repositoryApiBaseUrl")}api/categories/AddGroup`,
        "wait for Create Collection."
      );
    });
};

export const enter_text = (element, text) => {
  logStep(`Entering text: ${text} in element: ${element}`);
  return EnterValue.enterValue(element, text);
};
export const Click_On_Create_Button = () => {
  logStep("Clicking on Create Category button");
  // clickmethod.clickElement('#content-addNewCategoryModal > .modal-footer > .btn')
  return clickmethod.clickAndWaitForApi(
    "#content-addNewCategoryModal > .modal-footer > .btn",
    `${Cypress.config("repositoryApiBaseUrl")}api/categories`,
    "wait for Create Category."
  );
};
export const ScrollInto = (text) => {
  logStep(`Scrolling into view for text: ${text}`);
  return cy
    .wait(1000, { log: false }) // Wait for 1 second
    .then(() =>
      cy.contains(text).scrollIntoView().should("be.visible").realHover()
    );
};
export const Click_on_Instances_button = () => {
  logStep("Clicking on Instances button");
  // return clickmethod.clickElementWithoutTarget("a[data-action='openInstances']");
  // return cy.get("a[data-action='openInstances']").invoke('removeAttr', 'target').click({ force: true });
  // Open in same tab instead of new one 
  cy.visit(`${Cypress.config("liveApiBaseUrl")}cases`).wait(3000,{log: false});
};

export const click_on_first_icon = (icon) => {
  logStep(`Clicking on first icon: ${icon}`);
  return clickmethod.clickFirstElement(icon);
};
export const Click_on_delete_drop_down_button = () => {
  logStep("Clicking on delete drop down button");
  return clickmethod
    .clickElement(
      "#menuOptions > .dropdown-menu > :nth-child(2) > .dropdown-item"
    )
    .then(() => cy.wait(2000))
    .then(() =>
      clickmethod.clickElement(
        "#content-removeCategoryModal > .modal-footer > .btn"
      )
    );
};
export const Click_on_delete_button_of_collection = () => {
  logStep("Clicking on delete button of collection");
  return clickmethod
    .clickElement("a[data-action='showDeleteCategoryModal']")
    .then(() => {
      logStep("Waiting for delete modal to appear");
      return cy.wait(2000);
    })
    .then(() => {
      logStep("Clicking confirm delete button");
      return clickmethod.clickElement(
        "#content-removeCategoryModal > .modal-footer > .btn"
      );
    });
};
