import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { password, username } = config;

describe("Simulation Menu ", () => {
  beforeEach(() => {
    const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
    cy.log("Using AuthHub login:", useAuthHubLogin);

    if (useAuthHubLogin) {
      cy.loginWithSession(username, password, "DCR Solutions Test");
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.Click_On_AddInitSimulation();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        });
    } else {
      cy.loginWithSession(username, password, "DCR Solutions Test");
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.Click_On_AddInitSimulation();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        });
    }
  });
  describe("0069: Verify the Simulation Menu buttons functionaltiy.", () => {
    it("Verify the Simulation", function () {
      ////// if (!shouldRunTest('0069')) this.skip(); // Skip this test if TEST_CASE does not match
    });
    it("Verify the Retart Simulation", function () {
      ////// if (!shouldRunTest('0069')) this.skip(); // Skip this test if TEST_CASE does not match

      return tests.Click_On_Restart_Simulation();
    });
    it("Verify the Pause Simulation", function () {
      ////// if (!shouldRunTest('0069')) this.skip(); // Skip this test if TEST_CASE does not match

      return tests.Click_On_Pause_Simulation();
    });
    it("Verify the Exit Simulation", function () {
      ////// if (!shouldRunTest('0069')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.Click_On_Exit_Simulation();
    });
  });
});

describe("0073: Verify the Revision History Functionaltiy.", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it("Revision History Functionaltiy", function () {
    const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
    cy.log("Using AuthHub login:", useAuthHubLogin);

    if (useAuthHubLogin) {
      return tests
        .visitpage()
        .then(() => {
          return tests.Auth_hub_Username(username);
        })
        .then(() => {
          return tests.Auth_hub_Continue();
        })
        .then(() => {
          return tests.Auth_hub_Password(password);
        })
        .then(() => {
          return tests.Auth_hub_LoginButton();
        })
        .then(() => {
          return tests.open_the_graph("graph_id_10");
        })
        .then(() => {
          return tests.Click_On_Revision_History();
        });
    } else {
      return tests
        .visitpage()
        .then(() => {
          return tests.Username(username);
        })
        .then(() => {
          return tests.Password(password);
        })
        .then(() => {
          return tests.ClickonLoginButton();
        })
        .then(() => {
          return tests.open_the_graph("graph_id_10");
        })
        .then(() => {
          return tests.Click_On_Revision_History();
        });
    }
  });
});
describe("0074: Verify the Revert Graph Functionlity in revision History.", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it("Revision History Functionaltiy", function () {
    const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
    cy.log("Using AuthHub login:", useAuthHubLogin);

    if (useAuthHubLogin) {
      return tests
        .visitpage()
        .then(() => {
          return tests.Auth_hub_Username(username);
        })
        .then(() => {
          return tests.Auth_hub_Continue();
        })
        .then(() => {
          return tests.Auth_hub_Password(password);
        })
        .then(() => {
          return tests.Auth_hub_LoginButton();
        })
        .then(() => {
          return tests.open_the_graph("graph_id_10");
        })
        .then(() => {
          return tests.Click_On_Revision_History();
        })
        .then(() => {
          return tests.Click_On_Revision_History_list();
        });
    } else {
      return tests
        .visitpage()
        .then(() => {
          return tests.Username(username);
        })
        .then(() => {
          return tests.Password(password);
        })
        .then(() => {
          return tests.ClickonLoginButton();
        })
        .then(() => {
          return tests.open_the_graph("graph_id_10");
        })
        .then(() => {
          return tests.Click_On_Revision_History();
        })
        .then(() => {
          return tests.Click_On_Revision_History_list();
        });
    }
  });
});
