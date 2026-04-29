import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { username, password } = config;

describe("testing 3", () => {
  beforeEach(() => {
    cy.clearCookies(); // optional, to avoid conflicts

    cy.loginWithSession(username, password, "DCR Solutions Test");
    cy.log(
      "Logged in via session:",
      `${username}-DCR Solutions Test-${Cypress.spec.name}`
    );
  });
  describe("0033:Verify the DCR Forms functionaltiy  in simulation (Fragments/Form from advance) - https://www.dcrgraphs.net:41443/Tool?id=1005673#, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009299#", () => {
    it("should verify field retention in forms", function () { // test case is failed because of form  
      // if (!shouldRunTest('0033')) this.skip(); // Skip this test if TEST_CASE does not match
      return (
        tests
          .open_the_graph("graph_id_8")
          .then(() => {
            return tests.Click_On_Simulate_Button();
          })
          .then(() => {
            return tests.Click_on_Start_Simulation_Button();
          })
          .then(() => {
            return tests.click_on_Open_button("Activity0");
          })
          .then(() => {
            return tests.enter_text_in_field("Start", "1");
          })
          .then(() => {
            return tests.just_click();
          })
          .then(() => {
            return tests.enter_text_in_field("End", "1");
          })
          .then(() => {
            return tests.just_click();
          })
          // .then(() => tests.click_on_close_button(":nth-child(2) > .button__inner-wrapper > .button"))
          .then(() => {
            return tests.click_on_close_button_with_APi();
          })
          .then(() => {
            return tests.click_on_Open_button("Activity0");
          })
          .then(() => {
            return tests.verify_start_Field();
          })
          .then(() => {
            return tests.verify_End_Field();
          })
          .then(() => {
            return tests.click_on_close_button(
              ":nth-child(2) > .button__inner-wrapper > .button"
            );
          })
      );
    });
  });
  describe("0034:Verify if executed values retain in form fields on opening again (both for Form from advance and Single data events) - https://www.dcrgraphs.net:42443/Tool?id=1039367, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009301", () => {
    it("should verify field retention in forms", function () {
      // if (!shouldRunTest('0034')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_5")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("Form");
        })
        .then(() => {
          return tests.enter_text_in_field("Integer2", "1");
        })
        .then(() => {
          return tests.just_click();
        })
        .then(() => {
          return tests.enter_text_in_field("Text", "testing");
        })
        .then(() => {
          return tests.just_click();
        })
        .then(() => {
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        })
        .then(() => {
          return tests.click_on_Open_button("Form");
        })
        .then(() => {
          return tests.click_on_Open_button("Choice1");
        })
        .then(() => {
          return tests.Select_field_value("Item 1");
        })
        .then(() => {
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        });
    });
  });
  describe("0035: Verify if 1 blank value is available in Choice field (in preset list as well as in non-preset list)", () => {
    it("should verify blank value availability", function () {
      // if (!shouldRunTest('0035')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_5")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("Choice1");
        })
        .then(() => {
          return tests.Select_field_value("Item 1");
        })
        .then(() => {
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        });
    });
  });
  describe("0036: Verify Choice field with special characters", () => {
    it("should verify Choice field with special characters", function () {
      // if (!shouldRunTest('0036')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_5")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("Activity5");
        })
        .then(() => {
          return tests.Select_field_value("Item 3 æåøÆÅØéèçà$ù£µ§");
        })
        .then(() => {
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        });
    });
  });
  describe("0039:Verify if include/exclude and other relations are working as expected for normal events (in simulation) - https://www.dcrgraphs.net:42443/Tool?id=1039368, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009303", () => {
    it("Verify if include/exclude and other relations are working as expected for normal events", function () {
      // if (!shouldRunTest('0039')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.open_the_graph("graph_id_6");
        })
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickOnrendercheckbox();
        })
        .then(() => {
          return tests.click_on_Open_button("Activity0");
        })
        .then(() => {
          return tests.Scrolltotheexecutebutton("Activity0");
        })
        .then(() => {
          return tests.VerifyExecutedIcon(".executedEvent");
        });
    });
  });
  describe("0040:Verify if include/exclude and other relations are working as expected for normal data events (in sequence editor/simulation)", () => {
    it("Verify if include/exclude and other relations are working as expected ", function () {
      // if (!shouldRunTest('0040')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_6")
        .then(() => {
          console.log("0040A");
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          console.log("0040B");
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          console.log("0040C");
          return tests.clickOnrendercheckbox();
        })
        .then(() => {
          console.log("0040D");
          return tests.Scrolltotheexecutebutton("Activity4");
        })
        .then(() => {
          console.log("0040E");
          return tests.click_on_Open_button("Activity4");
        })
        .then(() => {
          console.log("0040F");
          return tests.enterValueInField();
        })
        .then(() => {
          console.log("0040G");
          return tests.just_click();
        })
        .then(() => {
          console.log("0040H");
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        })
        .then(() => {
          console.log("0040I");
          return tests.Scrolltotheexecutebutton("Activity4");
        })
        .then(() => {
          console.log("0040J");
          return tests.VerifyExecutedIcon(".executedEvent");
        });
    });
  });
  describe("0041: Verify if swimlanes are generating during simulation of a graph -- 1924013", () => {
    // refactor
    it("Verify if swimlanes are generating during simulation of a graph", function () {
      // if (!shouldRunTest('0041')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_6")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity11");
        })
        .then(() => {
          return tests.Scroll("#traceCostSwimLanes > strong");
        })
        .then(() => {
          return tests.VerifyExecutedIcon("#traceCostSwimLanes");
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity13");
        })
        .then(() => {
          return tests.Scroll("#traceCostSwimLanes > strong");
        })
        .then(() => {
          return tests.VerifyExecutedIcon("#traceCostSwimLanes");
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity15");
        })
        .then(() => {
          return tests.Scroll("#traceCostSwimLanes > strong");
        })
        .then(() => {
          return tests.VerifyExecutedIcon("#traceCostSwimLanes");
        });
    });
  });
  describe("0092:Verify Add Resources functionality in Resources tab.", () => {
    it(" Verify Add Resources functionality in Resources tab", function () {
      // if (!shouldRunTest('0092')) this.skip(); // Skip this test if TEST_CASE does not match
      return (
        tests
          .open_the_graph("graph_id_8")
          .then(() => {
            return tests.Edit_process_title();
          })
          .then(() => {
            return tests.Resources_Tab();
          })
          .then(() => {
            return tests.Add_role_button("#addRole");
          })
          .then(() => {
            return tests.Add_role_Field();
          })
          // .then(() => tests.Choose_role_name()) // code comminted becasue it not yet inplemented on production
          .then(() => {
            return tests.Click_on_add_button();
          })
          .then(() => {
            return tests.Click_on_Close_button();
          })
      );
    });
  });
  describe("0093:Verify Update Resources functionality in Resources tab", () => {
    it(" Verify Update Resources functionality in Resources tab", function () {
      // if (!shouldRunTest('0093')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_8")
        .then(() => {
          return tests.Edit_process_title();
        })
        .then(() => {
          return tests.Resources_Tab();
        })
        .then(() => {
          return tests.Click_on_Edit_role_button();
        })
        .then(() => {
          return tests.Add_Edit_role_Field();
        })
        .then(() => {
          return tests.Click_on_Update_role_button();
        });
    });
  });
  describe("0094:Verify Update Resources functionality in Resources tab", () => {
    it(" Verify Update Resources functionality in Resources tab", function () {
      // if (!shouldRunTest('0094')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_8")
        .then(() => {
          return tests.Edit_process_title();
        })
        .then(() => {
          return tests.Resources_Tab();
        })
        .then(() => {
          return tests.Click_on_Delete_role_button();
        });
    });
  });
});
