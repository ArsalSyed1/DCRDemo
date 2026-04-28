import ClickMethod from "../../pages/generic_method/click_method";
import DropDown from "../../pages/generic_method/Drop_down";
import EnterValue from "../../pages/generic_method/enter_value";
import { logStep } from "../../support/e2e";

export const Edit_process_title = () => {
  logStep("Editing process title");
  return ClickMethod.clickElement("h2[title='Edit Process Title']");
};

export const Resources_Tab = () => {
  logStep("Clicking on Resources Tab");
  return ClickMethod.clickElement("#resourcesTab");
};
export const KPI_Tab = () => {
  logStep("Clicking on KPI Tab");
  return ClickMethod.clickElement("#KPIsTab");
};
export const Click_on_Add_KPI_button = () => {
  logStep("Clicking on Add KPI button");
  return ClickMethod.clickElement("#KPIs a.btn");
};

export const Enter_KPI_text_input = (text) => {
  logStep("Clicking on KPI text input");
  cy.get('#kpisAddEditModal input[type="text"]', { timeout: 100000 })
    .clear({ force: true })
    .type(text, { force: true });
};

export const Enter_KPI_sequence_input = (sequence) => {
  logStep("Clicking on KPI sequence input");
  cy.get('#kpisAddEditModal input[placeholder="Enter Sequence"]', {
    timeout: 100000,
  })
    .clear({ force: true })
    .type(sequence, { force: true });
};

export const Click_on_KPI_save_button = () => {
  logStep("Clicking on KPI save button");
  ClickMethod.clickElement("#kpisAddEditModal input.pull-right");
  return cy.wait(2000, { log: false });
};

export const Click_on_KPI_close_button = () => {
  logStep("Clicking on KPI modal close button");
  return ClickMethod.clickElement("#createGraph");
};
export const Click_on_Edit_KPI_Button = (text) => {
  logStep("Clicking on Edit KPI button");
  return cy.contains("li.roleItem", text).within(() => {
    cy.get('a[title="Edit KPI"]').click();
  });
};
export const Click_on_Delete_KPI_Button = (text) => {
  logStep("Clicking on Delete KPI button");
  return cy.contains("li.roleItem", text, { timeout: 100000 }).within(() => {
    cy.get('a[title="Remove KPI"]', { timeout: 100000 }).click();
  });
};
export const OwnerShip_Tab = () => {
  logStep("Clicking on Ownership Tab");
  return ClickMethod.clickElement("#ownershipTab");
};
export const Click_on_process_Sheet = () => {
  logStep("Clicking on Add Resource button");
  return ClickMethod.clickElement("#processSheetTab");
};
export const Click_on_Import_button = () => {
  logStep("Clicking on Import button");
  return ClickMethod.clickElement("a[title='Import']");
};

export const Add_role_button = (addrole) => {
  logStep("Clicking on Add Role button");
  return ClickMethod.clickElement(addrole);
};
export const Add_role_Field = () => {
  logStep("Entering role name");
  const getRandomAlphabetString = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  };
  const randomText = `edit text ${getRandomAlphabetString()}`;
  // EnterValue.enterValue('#editItemTitle', randomText);
  return EnterValue.enterValue("#newItemTitle", randomText);
};
export const Choose_role_name = () => {
  logStep("Choosing role name from dropdown");
  return DropDown.selectOption("#newItemSpecification", "NotOnStart");
};
export const Click_on_add_button = () => {
  logStep("Clicking on Add button");
  cy.url().then((url) => {
    const params = new URLSearchParams(url.split("?")[1]);
    const graphId = params.get("id");
    return ClickMethod.clickAndWaitForApi(
      "#addItem_container > :nth-child(1) > .modal-content > .modal-body > .btn",
      `${Cypress.config(
        "repositoryApiBaseUrl"
      )}api/graphs/${graphId}/updateGraph`,
      "addGraphRoleApi"
    );
  });
};
export const Click_on_Close_button = () => {
  logStep("Clicking on Close button");
  // clickmethod.clickElement('#addItem_container > :nth-child(1) > .modal-content > .modal-header > .close')
  return ClickMethod.clickElement(
    "#addItem_container > :nth-child(1) > .modal-content > .modal-header > .close"
  );
};
export const Click_on_Edit_role_button = () => {
  logStep("Clicking on Edit role button");
  return ClickMethod.clickElement(
    "ul#manageRoles>li:nth-of-type(2)>a:nth-of-type(2)"
  );
};
export const Click_on_Update_role_button = () => {
  logStep("Clicking on Update role button");
  cy.url().then((url) => {
    cy.log("Current URL: " + url); // Use Cypress log
    const queryString = url.split("?")[1];
    if (!queryString) {
      cy.log("No query string found in URL");
      throw new Error("No query string found in URL");
    }
    const params = new URLSearchParams(queryString);
    // Try to get 'graphId', if not present, fallback to 'id'
    let graphId = params.get("graphId");
    if (!graphId) {
      graphId = params.get("id");
    }
    if (graphId && graphId.endsWith("#")) {
      graphId = graphId.slice(0, -1);
    }
    cy.log("Extracted graphId: " + graphId); // Use Cypress log
    if (!graphId) {
      cy.log("graphId not found in URL parameters");
      throw new Error("graphId not found in URL parameters");
    }
    return ClickMethod.clickAndWaitForApi(
      "input[value='Update']",
      `${Cypress.config(
        "repositoryApiBaseUrl"
      )}api/graphs/${graphId}/updateGraph`,
      "updateGraphApissss"
    );
  });
};
export const Add_Edit_role_Field = () => {
  const getRandomAlphabetString = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return result;
  };
  const randomText = `edit text ${getRandomAlphabetString()}`;
  return EnterValue.enterValue("#editItemTitle", randomText);
  // EnterValue.enterValue('#editItemTitle','ediit text');
};
export const Click_on_Delete_role_button = () => {
  logStep("Clicking on Delete role button");

  return ClickMethod.clickFirstElement("ul#manageRoles>li:nth-of-type(2)>a");
};

export const Enter_text_In_add_role_Field = (Text) => {
  logStep("Clicking on Confirm Delete role button");
  return cy.get('input[placeholder="Enter Role"]').type(Text);

}
export const Enter_Name_in_add_role_Field = (Text) => {
  logStep("Entering Name in add role Field");
return cy.get("#react-select-2-input").type(Text).type('{enter}');
}
export const Click_on_Confirm_Delete_role_button = (text) => {
  logStep("Clicking on Confirm Delete role button");
  return cy.contains("tr", text).within(() => {
            cy.contains("td", text).should("exist");
            cy.get('span[title="Delete"]').click();
  });
}
export const Click_on_Edit_role_icon = (text) => {
  logStep("Clicking on Edit role icon");
  return cy.contains("tr", text).within(() => {
            cy.contains("td", text).should("exist");
            cy.get('span[title="Edit Role"]').click();
  });
}
Click_on_Edit_role_icon,Click_on_Confirm_Delete_role_button