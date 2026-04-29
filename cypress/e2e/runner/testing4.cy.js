import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { username, password, username_2, password_2 } = config;

describe("testing 4 ", () => {
  beforeEach(() => {
    cy.clearCookies(); // optional, to avoid conflicts

    cy.loginWithSession(username, password, "DCR Solutions Test");
    cy.log(
      "Logged in via session:",
      `${username}-DCR Solutions Test-${Cypress.spec.name}`
    );
  });

  describe("0029: Verify if Search Flow (Path Analyzer, Search Scenario) plugin is working fine", () => {
    it("Verify if Search Flow ", function () {
      // if (!shouldRunTest('0029')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_9")
        .then(() => {
          return tests.clickonapp();
        })
        .then(() => {
          return tests.clickonsearchflow();
        })
        .then(() => {
          return tests.Start_event_inputfield();
        })
        .then(() => {
          return tests.Stop_event_inputfield();
        })
        .then(() => {
          return tests.clickbutton();
        });
    });
  });
  describe("0030: Verify Process Discovery plugin", () => {
    it("should verify Process Discovery functionality", function () {
      // if (!shouldRunTest('0030')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_9")
        .then(() => {
          return tests.clickonapp();
        })
        .then(() => {
          return tests.click_on_Process_dicovery_App();
        })
        .then(() => {
          return tests.click_on_Find_rule_button();
        });
    });
  });
  describe("0096:Verify importing of some exported graph", () => {
    /// BE dependency
    it("Verify importing of some exported graph", function () {
      // if (!shouldRunTest('0096')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_on_Import_file();
        })
        .then(() => {
          return tests.Click_on_Chosse_File();
        })
        .then(() => {
          return tests.Click_on_Continue_import_button();
        });
    });
  });
  describe("0138:Simulate with Robot user - turn it off - does WorkFlow layer runs it? https://wwwtest.dcrgraphs.net:43443/Tool?id=1837030, https://www.dcrgraphs.net:41443/Tool?id=1924842", () => {
    it("Simulate with Robot user - turn it off - does WorkFlow layer runs it?", function () {
      // if (!shouldRunTest('0138')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .open_the_graph("graph_id_11")
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
  describe("0010:Verify that Create Graph button is working.", () => {
    it("Verify that Create Graph button is working.", function () {
      // if (!shouldRunTest('0010')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.createprocesspage();
        })
        .then(() => {
          return tests.Click_on_Create_graph_button();
        });
    });
  });
  describe("0011-0012:Verify the addition of keywords in new graph (after reload).", () => {
    it("Verify the addition of keywords in new graph", function () {
      // if (!shouldRunTest('0011')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.createprocesspage();
        })
        .then(() => {
          return tests.Click_on_Create_graph_button();
        })
        .then(() => {
          return tests.Refreshpage();
        });
    });
  });
  describe("0013:Verify the addition of keywords in new graph (after reload).", () => {
    it("Verify the addition of keywords in new graph", function () {
      // if (!shouldRunTest('0013')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.createprocesspage();
        })
        .then(() => {
          return tests.Click_on_Create_graph_button();
        })
        .then(() => {
          return tests.Deletekeyword();
        });
    });
  });
  // describe('0022: Verify the functionalty of changing users Organization.', () => {
  //   it('Verify the functionalty of changing users Organization.', function () {
  //    // if (!shouldRunTest('0022')) this.skip(); // Skip this test if TEST_CASE does not match

  //   });
  // });

  describe("0023: Verify the Search functionality of Graph on Dashboard", () => {
    it("should perform search", function () {
      // if (!shouldRunTest('0023')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.visitpage().then(() => {
        return tests.genericSearchTest();
      });
    });
  });
  // describe('0024: Verify organization change pop-up', () => {
  //   it('should verify organization change functionality', function () {
  //    // if (!shouldRunTest('0024')) this.skip(); // Skip this test if TEST_CASE does not match

  //     tests.Homepage();
  //   });
  // });

  describe("0025: Verify Favorite/Unfavorite functionality", () => {
    it("should verify Favorite/Unfavorite functionality", function () {
      // if (!shouldRunTest('0025')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.FavoriteIcon();
        });
    });
  });
  describe("0026: Verify Like functionality of Graph on Dashboard", () => {
    it("should verify Like functionality", function () {
      // if (!shouldRunTest('0026')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.onlySearch();
        })
        .then(() => {
          return tests.likeIcon();
        });
    });
  });
});
