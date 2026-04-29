import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { password, username } = config;

describe("Graph related test case  ", () => {
  beforeEach(() => {
    cy.clearCookies(); // optional, to avoid conflicts

    cy.loginWithSession(username, password, "DCR Solutions Test");
    cy.log(
      "Logged in via session:",
      `${username}-DCR Solutions Test-${Cypress.spec.name}`
    );
  });
  describe("0082: Verify the Graph Filters Functionality - https://www.dcrgraphs.net:42443/Tool?id=1039368#, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009303#.", () => {
    it("Verify the Graph Filters Functionality", function () {
      // if (!shouldRunTest('0082')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_6")
        .then(() => {
          return tests.Click_On_Filter_Button();
        })
        .then(() => {
          return tests.Click_On_Levels("label#1_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#2_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#3_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#5_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#6_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#7_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#8_level>span");
        })
        .then(() => {
          return tests.Scroll("label#8_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#10_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#12_level>span");
        });
    });
  });
  describe("0083: Verify Global check box functionality - https://www.dcrgraphs.net:42443/Tool?id=1039368# filters .", () => {
    it("Verify Global check box functionality", function () {
      // if (!shouldRunTest('0083')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_6")
        .then(() => {
          return tests.Click_On_Filter_Button();
        })
        .then(() => {
          return tests.Click_On_Global_checkBox();
        })
        .then(() => {
          return tests.Click_On_Levels("label#1_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#2_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#3_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#5_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#6_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#7_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#8_level>span");
        })
        .then(() => {
          return tests.Scroll("label#8_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#10_level>span");
        })
        .then(() => {
          return tests.Click_On_Levels("label#12_level>span");
        })
        .then(() => {
          return tests.Click_On_Global_checkBox();
        });
    });
  });
});
