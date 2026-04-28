// createProcess.js
import CreateProcessPage from "../../pages/create_process_page";
import ClickMethod from "../../pages/generic_method/click_method";
import EnterValue from "../../pages/generic_method/enter_value";
import DropDown from "../../pages/generic_method/Drop_down";

import { logStep } from "../../support/e2e";

export const createprocesspage = () => {
  logStep("Creating process page");
  logStep("Clicking on new DCR Graph link");
  return ClickMethod.clickElementWithoutTarget("a#newDCRGraph")
    .then(() => {
      logStep("Entering process title");
      return EnterValue.enterValue("input#DCRTitle", "Test Process");
    })
    .then(() => {
      logStep("Verifying process title");
      return EnterValue.VerifyenterValue("input#DCRTitle", "Test Process");
    })
    .then(() => {
      logStep("Selecting graph category");
      return DropDown.selectOption("#selectGraphCategory", "Default");
    })
    .then(() => {
      logStep("Verifying graph category");
      return EnterValue.VerifyenterValue("#selectGraphCategory", "Default");
    })
    .then(() => {
      logStep("Entering first keyword");
      return EnterValue.enterFirstValue(
        "input[placeholder='Enter keywords']",
        "uzair"
      );
    })
    .then(() => {
      logStep("Verifying first keyword");
      return EnterValue.VerifyenterValue(
        "input[placeholder='Enter keywords']",
        "uzair"
      );
    })
    .then(() => {
      logStep("Selecting graph language");
      return DropDown.selectOption("#selectEditedGraphLanguage", "da-DK");
    })
    .then(() => {
      logStep("Verifying graph language");
      return EnterValue.VerifyenterValue("#selectEditedGraphLanguage", "da-DK");
    })
    .then(() => {
      logStep("Selecting graph domain");
      return DropDown.selectOption("#selectEditedGraphDomain", "standard");
    });
};
export const Click_on_Create_graph_button = () => {
  const apiUrl = `${Cypress.config("repositoryApiBaseUrl")}api/graphs`;
  logStep("Clicking on create graph button");
  cy.log(`Calling API: ${apiUrl}`);
  return ClickMethod.clickAndWaitForApi(
    "#createGraph",
    apiUrl,
    "wait for create button."
  );
};
export const Click_on_Update_graph_button = () => {
  logStep("Clicking on update graph button");
  return ClickMethod.clickElement("#createGraph");
};

export const negativecreateprocesspage = () => {
  logStep("Running negative create process page test");
  logStep("Clicking create process button");
  return CreateProcessPage.clickCreateProcessButton()
    .then(() => {
      logStep("Clearing process name");
      return CreateProcessPage.clearProcessName();
    })
    .then(() => {
      logStep("Selecting graph template");
      return CreateProcessPage.selectGraphTemplate();
    })
    .then(() => {
      logStep("Verifying blank title warning");
      return CreateProcessPage.verifyBlankTitleWarning();
    });
};
export const Refreshpage = () => {
  logStep("Refreshing page");
  logStep("Clicking on graph title");
  return ClickMethod.clickElement("#graphTitle")
    .then(() => {
      logStep("Selecting Portuguese language");
      return DropDown.selectOption("#selectEditedGraphLanguage", "pt-BR");
    })
    .then(() => {
      logStep("Refreshing process page");
      return CreateProcessPage.Refreshpage();
    })
    .then(() => {
      logStep("Clicking on graph title again");
      return ClickMethod.clickElement("#graphTitle");
    });
};

export const Deletekeyword = () => {
  logStep("Deleting keyword");
  return ClickMethod.clickElement("#graphTitle")
    .then(() => {
      logStep("Clicking remove keyword button");
      return ClickMethod.clickElement("span[data-role='remove']");
    })
    .then(() => {
      logStep("Refreshing process page after delete");
      return CreateProcessPage.Refreshpage();
    })
    .then(() => {
      logStep("Clicking on graph title after refresh");
      return ClickMethod.clickElement("#graphTitle");
    });
};

export const Share = () => {
  logStep("Sharing process");
  return ClickMethod.clickElement("#sbShareBtn > .fas")
    .then(() => cy.url())
    .then((url) => {
      const params = new URLSearchParams(url.split("?")[1]);
      const graphId = params.get("id");
      return ClickMethod.clickAndWaitForApi(
        "#shareGraph > i",
        `${Cypress.config(
          "repositoryApiBaseUrl"
        )}api/graphs/${graphId}/portalinfo/true/false/false`,
        "wait for close button."
      )
        .then(() => {
          logStep("Verifying shared with connection");
          return CreateProcessPage.verifySharedWithConnection();
        })
        .then(() => {
          logStep("Clicking on public button");
          return CreateProcessPage.clickonpublickbutton();
        })
        .then(() => {
          logStep("Clicking on done button");
          return CreateProcessPage.clickondonebutton();
        });
    });
};
export const Share_public_link = () => {
  logStep("Sharing public link");
  logStep("Clicking on share button");
  return ClickMethod.clickElement("#sbShareBtn > .fas")
    .then(() => {
      logStep("Clicking on get public input text");
      return ClickMethod.clickElement("a[data-action='getPublicInputText']");
    })
    .then(() => {
      logStep("Getting public URL from textarea");
      return cy.get("#graphPublicUrlTextArea").invoke("val");
    })
    .then((url) => {
      logStep("Opening public URL in new tab");
      return cy.window().then((win) => win.open(url, "_blank"));
    });
};
export const Click_On_Comment_Button = () => {
  logStep("Clicking on comment button");
  return cy.url().then((url) => {
    const params = new URLSearchParams(url.split("?")[1]);
    const graphId = params.get("id");
    return ClickMethod.clickAndWaitForApi(
      "i.far.fa-comment-alt",
      `${Cypress.config(
        "repositoryApiBaseUrl"
      )}api/exformation/Search/DL_DCRGraph/${graphId}?PageNumber=1&PageSize=5`,
      "wait for comment button."
    );
    // .then(() => EnterValue.enterValue('textarea.form-control.mainComment.mention', 'testing comment'));
  });
};

export const Click_On_Templtes_Button = () => {
  logStep("Clicking on templates button");
  const apiUrl = `${Cypress.config(
    "repositoryApiBaseUrl"
  )}api/graphs/templates?Visiblity=Templates&OrderBy=Title&OrderByDescending=False`;
  // return ClickMethod.clickElement("button.capitalize.btn.btn-primary")
  return ClickMethod.clickAndWaitForApi(
    "button.capitalize.btn.btn-primary",
    apiUrl,
    "wait for template api to load "
  ).then(() => {
    logStep("Selecting template from list");
    return ClickMethod.clickElement("div#TemplateGraph>ul>li:nth-of-type(4)>a");
  });
};
export const Click_On_Filter_Button = () => {
  logStep("Clicking on filter button");
  return ClickMethod.clickElement("#sbFiltersBtn");
};
export const Click_On_Global_checkBox = () => {
  logStep("Clicking on global checkbox");
  return ClickMethod.clickElement("#globalFilter");
};
export const Click_On_Levels = (levels) => {
  logStep("Clicking on levels button");
  return cy.url().then((currentUrl) => {
    const url = new URL(currentUrl);
    const toolId = url.searchParams.get("id");
    if (toolId) {
      return ClickMethod.clickAndWaitForApi(
        levels,
        `${Cypress.config(
          "repositoryApiBaseUrl"
        )}api/graphs/${toolId}/updateGraph`,
        "wait for levels button."
      );
    }
  });
};
