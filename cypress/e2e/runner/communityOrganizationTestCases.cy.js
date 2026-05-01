import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { username, password, username_2, password_2 } = config;

describe(" Community Organization ", () => {
  beforeEach(() => {
    cy.clearCookies(); // optional, to avoid conflicts
    cy.loginWithSession(username_2, password, " Community");
    cy.log(
      "Logged in via session:",
      `${username_2}- Community-${Cypress.spec.name}`
    );
  });

  describe("0005: Verify computations from Bug", () => {
    it("should verify computation bug", function () {
      return tests
        .open_the_graph("graph_id_7")
        .then(() => {
          return tests.Click_On_ActivityButton();
        })
        .then(() => {
          return tests.Click_on_advance_Button();
        })
        .then(() => {
          return tests.enter_Value_in_Computation();
        })
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_On_Execute_Button();
        })
        .then(() => {
          return tests.verify_Effect_Logs("Computations: 2");
        })
        .then(() => {
          return tests.verify_swin_lane();
        });
    });
  });

  describe("0007: Verify SimIT (4013 and 15319, 16702) (wwwdemo = 4013, 11972, 12107)", () => {
    it("Verify SimIT ", function () {
      return tests.visitpage().then(() => {
        return tests.open_the_graph("graph_id_2").then(() => {
          return tests.Click_On_Simulate_Button();
        });
      });
    });
  });

  // describe.only("0008: Verify the functionality of Signup by Signup new user.", () => {
  //   beforeEach(function () {
  //     const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
  //     cy.log("Using AuthHub login:", useAuthHubLogin);
  //     if (useAuthHubLogin) {
  //       this.skip();
  //     }

  //     cy.clearCookies();
  //     cy.clearLocalStorage();
  //     cy.intercept("**/*", (req) => {
  //       const headerName = Cypress.env("BypassRecaptchaHeaderName");
  //       const headerValue = Cypress.env("BypassRecaptchaHeaderValue");
  //       req.headers[headerName] = headerValue;
  //     });
  //   });
  //   it("should verify Signup functionality", function () {
  //     return tests.Signup_page_test();
  //   });
  // });





  describe("0009: Verify the login functionality by entring username and password.", () => {
    it("should login with correct credentials", function () {
      return tests.visitpage();
    });
  });

  describe("0017: Verify if an event can be set as Data event and same data type is showing in simulation", () => {
    it("Verify if an event can be set as Data event ", function () {
      return tests
        .open_the_graph("graph_id_4")
        .then(() => {
          return tests.clickonactivitybox("Activity0");
        })

        .then(() => {
          return tests.Click_on_advance_Button();
        })
        .then(() => {
          return tests.selectdatatypedropdown();
        })
        .then(() => {
          return tests.textOption_DisplaySize();
        })
        .then(() => {
          return tests.textOption_Placeholder();
        })
        .then(() => {
          return tests.TextOption_HintText();
        })
        .then(() => {
          return tests.ClickonDoneButton();
        })
        .then(() => {
          return tests.editbutton();
        })
        .then(() => {
          return tests.showSequence();
        })
        .then(() => {
          return tests.Click_On_Sequence_text();
        })
        .then(() => {
          return tests.Click_On_Sequence_Form_tab();
        })
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return cy.wait(5000);
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("Activity0");
        });
    });
  });

  describe("0018: Verify if a data event can be edited properly and correct data event is showing at every time and also on reload", () => {
    it("Verify if a data event can be edited properly and correct data event ", function () {
      return tests
        .open_the_graph("graph_id_4")
        .then(() => {
          return tests.clickonactivitybox("Activity0");
        })
        .then(() => {
          return cy.wait(8000);
        })
        .then(() => {
          return tests.Click_on_advance_Button();
        })
        .then(() => {
          return tests.selectdatatypedropdown();
        })
        .then(() => {
          return tests.Reload();
        })
        .then(() => {
          return tests.Click_on_advance_Button();
        });
    });
  });
  describe("0065: Verify guards functionality in graph, both in Sequence editor and in Simulation - https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009643, https://www.dcrgraphs.net:41443/Tool?id=1047167#", () => {
    it("Verify guards functionality in graph, both in Sequence editor and in Simulation", function () {
      return tests
        .open_the_graph("graph_id_18")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.Verify_activity("Activity7");
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity1");
        });
    });
  });

  describe("0064: Verify guards functionality in graph, both in Sequence editor and in Simulation - https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009643, https://www.dcrgraphs.net:41443/Tool?id=1047167", () => {
    it("Verify guards functionality in graph, both in Sequence editor and in Simulation", function () {
      // if (!shouldRunTest('0061')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.visitpage().then(() => {
        return tests.open_the_graph("graph_id_18");
      });
    });
  });

  describe("0065: Verify all functionalities in Activity Option Panel (pending, included and all others) - https://www.dcrgraphs.net:41443/Tool?id=1047167 - https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009643", () => {
    it(" Verify all functionalities in Activity Option Panel ", function () {
      // if (!shouldRunTest('0061')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests.visitpage().then(() => {
        return tests.open_the_graph("graph_id_18");
      });
    });
  });
  
  describe("0080:Verify if public URL of graph is working.", () => {
    it("Verify if public URL of graph is working.", function () {
      return tests.open_the_graph("graph_id_4").then(() => {
        return tests.Share_public_link();
      });
    });
  });

  describe("0085:Verify the functionality of Activity Stream by post comment, Like and Image..", () => {
    it("Verify if public URL of graph is working.", function () {
      return tests.open_the_graph("graph_id_4").then(() => {
        return tests.Share_public_link();
      });
    });
  });

  describe("0088:Verify the Edit user profile Functionality.", () => {
    it("Verify the Edit user profile Functionality.", function () {
      return tests.open_the_graph("graph_id_4").then(() => {
        return tests.Click_On_Comment_Button();
      });
    });
  });

  describe("0089:Verify the update image in user profile..", () => {
    it("Verify the update image in user profile..", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.click_on_Edit_profile();
        })
        .then(() => {
          return tests.click_on_Upload_pic();
        })
        .then(() => {
          return tests.click_on_Update_profile();
        });
    });
  });

  

  describe("0108:Create a new collection", () => {
    it("Create a new collection", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.click_on_Category();
        })
        .then(() => {
          return cy.wait(1000, { log: false });
        })
        .then(() => {
          return tests.click_on_New_Collection();
        })
        .then(() => {
          return tests.enter_text("#newGroupName", "Test Collection");
        })
        .then(() => {})
        .then(() => {
          return tests.click_on_Collection_checkbox();
        });
    });
  });

  describe("0109:Delete a collection", () => {
    it("Create a new collection", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ScrollInto("Test Category");
        })
        .then(() => {
          return tests.ScrollInto("Test Category");
        })
        .then(() => {
          return tests.ScrollInto("Test Collection");
        })
        .then(() => {
          return tests.click_on_first_icon(
            "span[data-show='categoryGroupOptions']"
          );
        })
        .then(() => {
          return tests.Click_on_delete_button_of_collection();
        });
    });
  });

  describe("0120:Check FEEL langugage - enter 0101001234 as CPR number -  https://www.dcrgraphs.net:41443/Tool?id=1007504, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1009306.", () => {
    it("Check FEEL langugage.", function () {
      return tests
        .open_the_graph("graph_id_13")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("cpr");
        })
        .then(() => {
          return tests.enter_text_in_field("cpr", "0101701234");
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
          return tests.verify_Effect_Logs("Computations: 56");
        });
    });
  });


  describe("0122:FEEL - verify using FEEL on guards - https://wwwdemo.dcrgraphs.net:43443/Tool?id=1012404, https://www.dcrgraphs.net:41443/Tool?id=1480364", () => {
    it("FEEL - verify using FEEL on guards", function () {
      return tests
        .open_the_graph("graph_id_14")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("Integer");
        })
        .then(() => {
          return tests.enter_text_in_field("Integer", "2");
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
    describe("0124:FEEL - ceil and floor - turn off ROBOT - https://www.dcrgraphs.net/Tool?id=1329256, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1012405 dont need to turn off the robot", () => {
    it("FEEL - ceil and floor - turn off ROBOT", function () {
      return tests
        .open_the_graph("graph_id_25")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.click_on_Open_button("Datetime");
        })
        .then(() => {
          return tests.enter_text_in_field("Datetime", "11/5/2025 12:00 AM");
        })
        .then(() => {
          return tests.just_click();
        })
        .then(() => {
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        }).then(() => {
          return tests.validateSimulationComputationValues();
        });
    });
  });
});

 