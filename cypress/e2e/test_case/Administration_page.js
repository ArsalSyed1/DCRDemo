import { logStep } from "../../support/e2e";
import DropDown from "../../pages/generic_method/Drop_down";
import ClickMethod from "../../pages/generic_method/click_method";

export const openEffectAdministrationPage = () => {
  logStep("Opening EffectAdministration page");
  return ClickMethod.clickAndWaitForApi(
    'a[href="/effectadministration"]',
    `${Cypress.config("repositoryApiBaseUrl")}api/organizations?active=true`,
    "waiting to load Effect Administration"
  );
};

export const verifyEffectEnableAndDisable = () => {
  logStep("Verifying effect enable and disable");

  return toggleCheckboxInTable("effectsTable");
};

export const verifyEffectPackageAddAndRemove = () => {
  logStep("Verifying effect package add and remove");

  openEffectPackagesTableModal().then((modalOpened) => {
    if (modalOpened === false) {
      cy.log("Modal not opened, skipping test");
      return false;
    }

    return verifyToggleEffectPackage();
  }).then((modalOpened) => {
    if (modalOpened === false) {
      cy.log("Modal not opened, skipping test");
      return false;
    }
    
    return closeEffectPackagesModal();
  });
};

const openEffectPackagesTableModal = () => {
  logStep("Opening Effect Packages Table Modal");

  const selector = "div#EffectAdministration_container>div:nth-of-type(2)>button";

  return cy.get("#EffectAdministration_container").then(($container) => {
    const $btn = $container.find("div:nth-of-type(2)>button");

    if (!$btn.length || $btn.is(":disabled")) {
      cy.log("Button not available or disabled, skipping");
      return false;
    }

    return ClickMethod.clickElement(selector).then(() => true);
  });
};

export const closeEffectPackagesModal = () => {
  logStep("Closing Effect Packages Table Modal");

  const tableId = "effectPackagesTable";

  return cy.get(`#${tableId}`).then(($table) => {
    // go up to modal container
    const $modal = $table.closest(".modal");

    if (!$modal.length) {
      cy.log("Modal not found, skipping close");
      return false;
    }

    cy.wrap($modal)
      .find("button[data-dismiss='modal']")
      .click({ force: true });
  });
};

const verifyToggleEffectPackage = () => {
  logStep("Toggling effect package");

  return toggleCheckboxInTable("effectPackagesTable");
};

export const toggleCheckboxInTable = (tableId) => {
  logStep(`Toggling checkbox in table: ${tableId}`);

  cy.get(`#${tableId}`, { timeout: 10000 }).should("exist");

  cy.get(`#${tableId}`, { timeout: 10000 }).should(($table) => {
    expect($table.find(".spinner-border, .spinner").length).to.eq(0);
  });

  return cy.get(`#${tableId}`, { timeout: 10000 }).then(($table) => {
    // No data fallback inside table
    const $noData = $table.find("tbody td[colspan]");

    if (
      $noData.length &&
      $noData.text().includes("Data not found")
    ) {
      cy.log("Table has no data, skipping toggle");
      return false;
    }

    // Find first checkbox in table
    const $checkbox = $table
      .find("tbody input[type='checkbox']")
      .first();
    
    if (!$checkbox.length) {
      cy.log("No checkbox found in table");
      return false;
    }

    return toggleCheckbox($checkbox).then(() => {
      return cy.wait(2000, { log: false }).then(() => {
        return toggleCheckbox($checkbox).then(() => {
          return cy.wait(2000, { log: false });
        });
      });
    });
  });
}

const toggleCheckbox = ($checkbox) => {
  const isChecked = $checkbox.is(":checked");

  if (isChecked) {
    return cy.wrap($checkbox, { timeout: 5000 }).uncheck({ force: true });
  } else {
    return cy.wrap($checkbox, { timeout: 5000 }).check({ force: true });
  }
};

export const verifyExportJSON = () => {
  logStep("Verifying Export JSON functionality");
  
  cy.contains("button", "Export Json").click();
};

export const Click_on_Administration_icon = () => {
  logStep("Clicking on Administration icon");
  // return ClickMethod.clickElement("a[title='Administration']", {
  //   timeout: 10000,
  // });
  return ClickMethod.clickAndWaitForApi(
    'a[title="Administration"]',
    `${Cypress.config("repositoryApiBaseUrl")}/api/organizations/12/userroles`,
    "waiting to load Administration page"
  );
};
export const Click_on_Simple_category_setup_check_box = () => {
  logStep("Clicking on Simple category setup check box");
  cy.get("#UserAdministration tr:nth-child(2) input", { timeout: 10000 }).then(
    ($cb) => {
      const isChecked = $cb.is(":checked");
      if (isChecked) {
        cy.get("#UserAdministration tr:nth-child(2) input", { timeout: 10000 })
          .should("exist")
          .uncheck({ force: true });
      } else {
        // code is commented becase for now i dont want to check the checkbox
        // cy.get("#UserAdministration tr:nth-child(2) input", { timeout: 10000 })
        //   .should("exist")
        //   .check({ force: true });
      }
    }
  );
};

export const click_on_CheckBox = (CheckBox) => {
  logStep("Clicking on CheckBox");
  return ClickMethod.clickElement(CheckBox);
};

export const verifyEditCustomEffects = () => {
  logStep("Verifying Edit Custom Effects functionality");
  
  return ClickMethod.clickAndWaitForApi(
    "div#EffectAdministration_container>div:nth-of-type(3)>button",
    `${Cypress.config("liveApiBaseUrl")}_blazor/negotiate?negotiateVersion=1`
  );
};

export const Select_Host_system = () => {
  logStep("Selecting Host System");
  return cy.get("select").then(($select) => {
    if ($select.val() !== "WorkZone 2020.0") {
      return DropDown.selectOption("select", "WorkZone 2020.0");
    }
  });
};
export const Click_on_user_tab = () => {
  logStep("Clicking on User Tab");
  return ClickMethod.clickElementContainingText("Users", { timeout: 10000 });
  
};
export const Click_On_filters = (element) => {
    cy.wait(2000,{ log: false }); 
  logStep("Clicking on Roles Tab");
  return ClickMethod.clickElement(element,
    { timeout: 10000 }
  );
};
export const uncheckfilters = () => {
  logStep("Unchecking User Type Filter");
  
  // Check and uncheck the first checkbox if it exists
  cy.get('body').then($body => {
    if ($body.find('#UserAdministration input[aria-labelledby="cbox99cboxLabel"]').length) {
      cy.get('#UserAdministration input[aria-labelledby="cbox99cboxLabel"]').uncheck();
    }
  });
  
  // Check and uncheck the second checkbox if it exists
  cy.get('body').then($body => {
    if ($body.find('#UserAdministration input[aria-labelledby="cbox33cboxLabel"]').length) {
      cy.get('#UserAdministration input[aria-labelledby="cbox33cboxLabel"]').uncheck();
    }
  });
};

export const Click_on_Ok_button = () => {
  logStep("Checking User Type Filter");
  return ClickMethod.clickElement("#UserAdministration button.e-primary", {
    timeout: 10000,
  });
};

export const Click_on_process_tab = () => {
  logStep("Clicking on Process Tab");
  return ClickMethod.clickElementContainingText("Processes", { timeout: 1000 });
};
export const Click_on_governance_tab = () => {
  logStep("Clicking on Governance Tab");
  return ClickMethod.clickElementContainingText("Governance", {
    timeout: 1000,
  });
};
export const Click_on_Title_filter = () => {
  logStep("Clicking on Roles Tab");
  return ClickMethod.clickElement('#UserAdministration div[e-mappinguid="e-flmenu-grid-column1"]', { timeout: 1000 });
}
