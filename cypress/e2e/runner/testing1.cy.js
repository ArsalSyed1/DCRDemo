import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { username, password } = config;

describe("testing 1", () => {
  beforeEach(() => {
    cy.clearCookies(); // optional, to avoid conflicts

    cy.loginWithSession(username, password, "DCR Solutions Test");
    cy.log(
      "Logged in via session:",
      `${username}-DCR Solutions Test-${Cypress.spec.name}`
    );
  });

  describe("0006: Verify if Highlighter app is opening/working fine and items are creating fine (also open app for 1924013)", () => {
    it("Verify if Highlighter app is opening", function () {
      // if (!shouldRunTest('0006')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.open_the_graph("graph_id_1").then(() => tests.clickonapp());
    });
  });
  describe("0015: Verify that Graph gets shared with friend.", () => {
    it("should verify graph sharing with a friend", function () {
      // if (!shouldRunTest('0015')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.open_the_graph("graph_id_1").then(() => tests.Share());
    });
  });
  describe("0016: Verify Graph sharing with Public", () => {
    it("should verify graph sharing with public", function () {
      // if (!shouldRunTest('0016')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.open_the_graph("graph_id_1").then(() => tests.Share());
    });
  });
  describe("0031: Verify Publisher/Doc Generator functionality", () => {
    it("should verify Publisher functionality", function () {
      // if (!shouldRunTest('0031')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.clickonapp();
        })
        .then(() => {
          return tests.click_on_Process_dicovery_App();
        })
        .then(() => {
          return tests.click_on_DCR_Publisher();
        });
      // tests.click_on_Xlsheet_button(); // commenting this line because the xsheet is not available
    });
  });
  describe("0042: Verify recommendations during graph simulation", () => {
    it("should verify model recommendations", function () {
      // if (!shouldRunTest('0042')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.recommendation_test();
        });
    });
  });
  describe("0043: Verify the Simulation Functionaltiy for Existing Graph", () => {
    it("Verify the Simulation Functionaltiy for Existing Graph", function () {
      // if (!shouldRunTest('0043')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        });
    });
  });
  describe("0045:Verify advance time functionality - calendar is fine for both English and Danish", () => {
    it("Verify advance time functionality - calendar is fine for both English and Danish", function () {
      // if (!shouldRunTest('0046')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.Click_On_Calendar_icon();
        })
        .then(() => {
          return tests.Click_on_advance_time();
        })
        .then(() => {
          return tests.Click_On_Exit_Simulation();
        })
        .then(() => {
          return tests.clickondiscardbutton();
        })
        .then(() => {
          return tests.Select_language_dropdown("da-DK");
        })
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.Click_On_Calendar_icon();
        })
        .then(() => {
          return tests.Click_on_advance_time();
        })
        .then(() => {
          return tests.Click_On_Exit_Simulation();
        })
        .then(() => {
          return tests.clickondiscardbutton();
        })
        .then(() => {
          return tests.Select_language_dropdown("en-US");
        });
    });
  });

  describe("0046:Verify the Simulation Functionalty with aggressive and lazy users (also Roles are inserting in dl_simulationlog) - 1924013", () => {
    it("Verify the Simulation Functionalty with aggressive users", function () {
      // if (!shouldRunTest('0046')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Robot_user();
        })
        .then(() => {
          return tests.Click_on_Aggressive_user();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        });
    });
    it("Verify the Simulation Functionalty with lazy users", function () {
      // if (!shouldRunTest('0046')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Robot_user();
        })
        .then(() => {
          return tests.Click_on_Lazy_user();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        });
    });
  });
  describe("0047:Verify Graph Simulation History", () => {
    it("Verify Graph Simulation History", function () {
      // if (!shouldRunTest('0047')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickonexitbutton();
        })
        .then(() => {
          return tests.clickondiscardbutton();
        })
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.clickonsimulationHistory();
        });
    });
  });
  describe("0048:Verify the swimlanes (scenarios) functionality from simulation history for old simulations", () => {
    it("Verify the swimlanes (scenarios) functionality from simulation history for old simulations", function () {
      // if (!shouldRunTest('0048')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickonexitbutton();
        })
        .then(() => {
          return tests.clickondiscardbutton();
        })
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.clickonsimulationHistory();
        })
        .then(() => tests.verifyswinlane());
    });
  });
  describe("0050:Verify the swimlanes (scenarios) functionality from simulation history for new simulations -- 1924013", () => {
    it("Verify the swimlanes (scenarios) functionality from simulation history for new simulations", function () {
      // if (!shouldRunTest('0050')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickonexitbutton();
        })
        .then(() => {
          return tests.entersimulationtitle(
            "#simTitle > .form-control",
            "testcase 50"
          );
        })
        .then(() => {
          return tests.clickonsaveandexitbutton();
        })
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.clickonsimulationHistory();
        })
        .then(() => {
          return tests.Click_On_Process_Simulate_Details("testcase 50");
        })
        .then(() => {
          return tests.Click_On_Validate_flow();
        });
    });
  });
  describe("0052: Verify creating new scenario from dashboard/simulation history/simulation file menu -- 1924013", () => {
    it("Verify creating new scenario from simulation history", function () {
      // if (!shouldRunTest('0052')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.clickonsimulationHistory();
        })
        .then(() => {
          return tests.Click_On_Create_new_flow_Button();
        })
        .then(() => {
          return tests.entersimulationtitle(".handlePaste", "test");
        })
        .then(() => {
          return tests.Click_On_Save_Button();
        });
    });
    it("Verify creating new scenario from dashboard", function () {
      // if (!shouldRunTest('0052')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.ClickonSearchitem("graph_id_1", "graph_id_1");
        })
        .then(() => {
          return tests.Click_On_Create_new_flow_Button_on_dashboard();
        })
        .then(() => {
          return tests.entersimulationtitle(".handlePaste", "test");
        })
        .then(() => {
          return tests.Click_On_Save_Button();
        });
    });

    it("Verify creating new scenario from simulation file men", function () {
      // if (!shouldRunTest('0052')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.Click_On_Create_new_flow_Button();
        })
        .then(() => {
          return tests.entersimulationtitle(".handlePaste", "test");
        })
        .then(() => {
          return tests.Click_On_Save_Button();
        });
    });
  });
  describe("0058:  Verify re-run simulation scenario for old simulations from Simulation History -- 1924013 -- and re-run result is showing", () => {
    it("Verify re-run simulation scenario for old simulations from Simulation History ", function () {
      // if (!shouldRunTest('0058')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickonexitbutton();
        })
        .then(() => {
          return tests.clickondiscardbutton();
        })
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.clickonsimulationHistory();
        })
        .then(() => {
          return tests.clickonrerunbutton();
        });
    });
  });
  describe("0059: Verify re-run simulation scenario for new simulations from Simulation History -- and re-run result is showing", () => {
    it("Verify re-run simulation scenario for new simulations from Simulation History", function () {
      // if (!shouldRunTest('0059')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_1")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickonexitbutton();
        })
        .then(() => {
          return tests.entersimulationtitle(
            "#simTitle > .form-control",
            "test"
          );
        })
        .then(() => {
          return tests.clickonsaveandexitbutton();
        })
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.clickonsimulationHistory();
        })
        .then(() => {
          return tests.clickonrerunbutton();
        });
    });
  });
});
