import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { username, password, username_2, password_2 } = config;

describe("Verify all testcase", () => {
  beforeEach(() => {
    cy.clearCookies(); // optional, to avoid conflicts

    cy.loginWithSession(username, password, "DCR Solutions Test");
    cy.log(
      "Logged in via session:",
      `${username}-DCR Solutions Test-${Cypress.spec.name}`
    );
  });

  describe("0037: Verify the Simulation Functionaltiy for New Graph.", () => {
    it("Verify the Simulation Functionaltiy for New Graph.", function () {
      // if (!shouldRunTest('0037')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.createprocesspage();
        })
        .then(() => {
          return tests.Click_on_Create_graph_button();
        })
        .then(() => {
          return tests.activitypagetest('A1', 'A2');
        })
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        });
    });
  });
  describe("0049:Verify the swimlanes (scenarios) functionality from dashboard for old simulations", () => {
    it("Verify the swimlanes (scenarios) functionality from dashboard for old simulations", function () {
      // if (!shouldRunTest('0049')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.ClickonSearchitem("graph_id_1", "graph_id_1");
        });
    });
  });
  describe("0051:Verify the swimlanes (scenarios) functionality from dashboard for new simulations -- 1924013", () => {
    it("Verify the swimlanes (scenarios) functionality from dashboard for new simulations", function () {
      if (!shouldRunTest('0051')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.ClickonSearchitem("graph_id_1", "graph_id_1");
        })
        .then(() => {
          return tests.Click_On_Process_Simulate_Details("testcase 50");
        })
        .then(() => {
          return tests.Click_On_Validate_flow();
        });
    });
  });
  describe("0054: Verify import flow functionality from Flow Editor", () => {
    it("Verify import flow functionality from Flow Editor", function () {
      // if (!shouldRunTest('0054')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.open_the_graph("graph_id_1");
        })
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
        })
        .then(() => {
          return tests.Click_On_Import_Flow();
        })
        .then(() => {
          return tests.Click_on_Chosse_File();
        })
        .then(() => {
          return tests.Click_on_Import_Flow_Button();
        });
    });
  });
  describe("0055: Verify export flow functionality from Flow Editor", () => {
    it("Verify import flow functionality from Flow Editor", function () {
      // if (!shouldRunTest('0055')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.open_the_graph("graph_id_1");
        })
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
        })
        .then(() => {
          return tests.Click_On_Export_Flow();
        });
    });
  });
  describe("0056: Verify import flows functionality from dcr editor", () => {
    it("Verify import flows functionality from dcr editor", function () {
      // if (!shouldRunTest('0056')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.ClickonSearchitem("graph_id_1", "graph_id_1");
        })
        .then(() => {
          return tests.Click_On_Process_Simulate_Details("testcase 50");
        })
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_On_Import_Flow();
        })
        .then(() => {
          return tests.Click_on_Chosse_File();
        })
        .then(() => {
          return tests.Click_on_Import_Flow_Button();
        });
    });
  });
  describe("0057: Verify export flows functionality from dcr editor", () => {
    it("Verify export flows functionality from dcr editor", function () {
      // if (!shouldRunTest('0057')) this.skip(); // Skip this test if TEST_CASE does not match
      // TODO: Browser crashing, need to investigate and fix
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.ClickonSearchitem("graph_id_1", "graph_id_1");
        })
        .then(() => {
          return tests.Click_On_Process_Simulate_Details("testcase 50");
        })
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_On_Export_Flow();
        });
    });
  });
  describe("0060: Verify re-run simulation scenario for old simulations from Dashboard -- 1924013 -- and re-run result is showing", () => {
    it("Verify re-run simulation scenario for old simulations from Dashboard -- 1924013 -- and re-run result is showing", function () {
      // if (!shouldRunTest('0060')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.ClickonSearchitem("graph_id_1", "graph_id_9");
        })
        .then(() => {
          return tests.clickonrerunbutton();
        });
    });
  });
  describe("0061: Verify re-run simulation scenario for new simulations from Dashboard -- and re-run result is showing", () => {
    it("Verify re-run simulation scenario for new simulations from Dashboard -- and re-run result is showing", function () {
      // if (!shouldRunTest('0061')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => tests.Search())
        .then(() => tests.ClickonSearchitem("graph_id_12", "graph_id_12"))
        .then(() => tests.clickonrerunbutton());
    });
  });
  describe("0063: Verify Analyze Flows (Analyzer App) functionality from Dashboard and Simulation History -- 1924013", () => {
    it("Also verify if image is changing on including (checking) every trace and every event", function () {
      // if (!shouldRunTest('0061')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.open_the_graph("graph_id_1");
        })
        .then(() => {
          return tests.clickonSimulationdropdown();
        })
        .then(() => {
          return tests.clickonsimulationHistory();
        })
        .then(() => {
          return tests.Click_On_Analyse_flow();
        })
        .then(() => {
          return tests.Click_On_Flow_checkboxes();
        })
        .then(() => {
          return tests.Click_on_Analyze_button();
        })
        .then(() => {
          return tests.Click_on_View_summary_button();
        })
        .then(() => {
          return tests.Click_on_Annotation_button();
        });
    });
  });
  describe("0098:Verify Template Graph functionality", () => {
    it("Verify Template Graph functionality", function () {
      // if (!shouldRunTest('0098')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.createprocesspage();
        })

        .then(() => {
          return tests.Click_On_Templtes_Button();
        })
        .then(() => {
          return cy.wait(5000);
        })
        .then(() => {
          return tests.Click_on_Create_graph_button();
        });
    });
  });
  describe("0099:Verify creation of rules  between activities/processes", () => {
    it("Verify creation of rules  between activities/processes", function () {
      // if (!shouldRunTest('0099')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.createprocesspage();
        })
        .then(() => {
          return tests.Click_on_Create_graph_button();
        })
        .then(() => {
          return tests.activitypagetest("A2", "A1");
        });
    });
  });
  // 0107
  describe("0100:Verify deletion of rules between activities/processes", () => {
    it("Verify deletion of rules between activities/processes", function () {
      // if (!shouldRunTest('0100')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.createprocesspage();
        })
        .then(() => {
          return tests.Click_on_Create_graph_button();
        })
        .then(() => {
          return tests.activitypagetest("A2", "A1");
        })
        .then(() => {
          return tests.Right_Click();
        })
        .then(() => {
          return tests.Click_on_delete_button();
        });
    });
  });
  describe("0106:Create a new category", () => {
    it("Create a new category", function () {
      // if (!shouldRunTest('0106')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.click_on_Category();
        })
        .then(() => {
          return tests.click_on_New_Category();
        })
        .then(() => {
          return tests.enter_text("#newCategoryName", "Test Category");
        })
        .then(() => {
          return tests.enter_text("#newCategoryDescription", "some thing");
        })
        .then(() => {
          return tests.Click_On_Create_Button();
        });
    });
  });
  describe("0107:Delete a category", () => {
    it("Delete a category", function () {
      // if (!shouldRunTest('010')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.ScrollInto("Public category");
        })
        .then(() => {
          return tests.ScrollInto("Test Category");
        })
        .then(() => {
          return tests.click_on_first_icon(
            '[data-title="Test Category"] > .menuTitle > .fa-chevron-circle-down'
          );
        })
        .then(() => {
          return tests.Click_on_delete_drop_down_button();
        });
    });
  });
   describe("0139:Multi select in form work - https://wwwtest.dcrgraphs.net:43443/Tool?id=1929606#", () => {
    it("Multi select in form work", function () {
      return tests
        .open_the_graph("graph_id_17")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("Activity1");
        })
        .then(() => {
          return tests.Select_field_value_with_checkbox("Item 1");
        })

        .then(() => {
          return tests.just_click();
        })
        .then(() => {
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        });
        
    });
  });

  describe("0138:Simulate with Robot user - turn it off - does WorkFlow layer runs it? https://wwwtest.dcrgraphs.net:43443/Tool?id=1837030, https://www.dcrgraphs.net:41443/Tool?id=1924842", () => {
    it("Simulate with Robot user - turn it off - does WorkFlow layer runs it?", function () {
      // if (!shouldRunTest('0138')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.open_the_graph("graph_id_11");
        })
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.VerifyExecutedIcon(".executedEvent");
        })
        .then(() => {
          return tests.open_the_graph("graph_id_11");
        })
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Robot_user();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.VerifyExecutedIcon(".pendingEvent");
        });
    });
  });
});
