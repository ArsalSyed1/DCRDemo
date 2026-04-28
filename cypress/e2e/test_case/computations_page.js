import Computationpage from "../../pages/computations_page.js";
import ClickMethod from "../../pages/generic_method/click_method.js";
import DragMethod from "../../pages/generic_method/drag_method.js";
import EnterValue from "../../pages/generic_method/enter_value.js";
import { logStep } from "../../support/e2e";

export const Click_On_ActivityButton = () => {
  logStep("Clicking on Activity Button");
  return ClickMethod.clickElement(
    'path[data-type="activityBody"][title="Should get value1,979"]'
  );
};

export const Click_on_advance_Button = () => {
  logStep("Clicking on Advance Button and scrolling to computation");
  return ClickMethod.clickElement(
    "div#eventOptions>div:nth-of-type(6)>span"
  ).then(() => {
    return DragMethod.scrollToElement("#eventcomputation");
  });
};

export const enter_Value_in_Computation = () => {
  logStep("Entering value in computation");
  return EnterValue.enterValue("#eventcomputation", "1+1");
};

export const Click_On_Simulate_Button = (Api) => {
  logStep("Clicking on Simulate Button");
  return cy.url().then((url) => {
    const params = new URLSearchParams(url.split("?")[1]);
    const graphId = params.get("id");
    const cleanGraphId = graphId ? graphId.replace(/#.*$/, "") : "";
    cy.log(`Graph ID: ${cleanGraphId}`);
    const apiUrl = `${Cypress.config(
      "repositoryApiBaseUrl"
    )}api/graphs/${cleanGraphId}/validate`;
    cy.log(`Triggering API: ${apiUrl}`);
    return ClickMethod.clickAndWaitForApi(
      "#initSimulation",
      apiUrl,
      "wait for Simulate DCR process."
    );
  });
};

export const Click_on_Start_Simulation_Button = () => {
  logStep("Clicking on Start Simulation Button");
  // cy.wait(2000, { log: false }); // Wait for 2 seconds before clicking the button
  return ClickMethod.clickAndWaitForApi(
    "#startSimulation",
    `${Cypress.config("repositoryApiBaseUrl")}api/userexperience/loguserevent`,
    "wait for Start Simulation."
  );
};

export const Click_on_advance_simulation_button = () => {
  logStep("Clicking on Advance Simulation Button");
  return cy.url().then((url) => {
    const queryString = url.includes("?") ? url.split("?")[1] : "";
    const params = new URLSearchParams(queryString);
    const graphId = params.get("id");
    if (!graphId) {
      throw new Error("Graph ID not found in URL.");
    }
    return cy
      .visit(`${Cypress.config("liveApiBaseUrl")}simulator/${graphId}/new`)
      .wait(3000, { log: false });
  });
};

export const Click_On_Calendar_icon = () => {
  logStep("Clicking on Calendar icon");
  return ClickMethod.clickElement("input#simAdvanceTime").clear().type("09/20/2026 4:00 PM");
};
export const Click_on_advance_time = () => {
  logStep("Entering value in advance time");
  return ClickMethod.clickElement("#advanceTime");
};
export const Select_language_dropdown = (language) => {
  logStep(`Selecting language: ${language}`);
  // return ClickMethod.clickElement("a[data-locale='da-DK']").click({force: true}).wait(5000));

  return ClickMethod.clickElement(`a[data-locale='${language}']`).wait(9000, {
    log: false,
  });
};
export const Click_on_Robot_user = () => {
  logStep("Clicking on Robot user");
  return ClickMethod.clickElement("li#invited_-4>input");
};
export const Click_on_Lazy_user = () => {
  logStep("Clicking on Lazy user");
  return ClickMethod.clickElement("li#invited_-1>input");
};
export const Click_on_Aggressive_user = () => {
  logStep("Clicking on Aggressive user");
  return ClickMethod.clickElement("li#invited_-2>input");
};
export const click_On_Execute_Button = () => {
  logStep("Clicking on Execute Button");
  // Computationpage.clickOnExecuteButton();
  return ClickMethod.clickElement("a.btn.btn-primary.executeEvent");
};

export const verify_Effect_Logs = (expectedText) => {
  logStep(`Verifying Effect Logs for text: ${expectedText}`);
  return Computationpage.verifyEffectLogs(expectedText);
};

export const validateSimulationComputationValues = () => {
  logStep("Verifying simulation computation consistency between Ceiling, Floor, and DurationX");
  return Computationpage.validateSimulationComputationValues();
};

export const verify_text_inside_field = (expectedValue,expectedText) => {
  logStep(`Verifying text inside field for text: ${expectedText}`);
cy.get(`textarea[name="${expectedValue}"]`, { timeout: 10000 })
    .should('be.visible')
    .invoke('val')
    .should('include', expectedText);
};

export const verify_swin_lane = () => {
  logStep("Verifying swim lane");
  return Computationpage.verifyswinlane();
};
