const { password, username } = config;
import tests from "../imports/imports.js";
import { logStep } from "../../support/e2e.js";
import config from "../../configuration/config.json";
import Drop_down from "../../pages/generic_method/Drop_down.js";

describe("DCR Test Organization ", () => {
  beforeEach(() => {
   
    cy.clearCookies();
    cy.loginWithSession(username, password, "DCR Solutions Test");
    cy.log(
      "Logged in via session:",
      `${username}-DCR Solutions Test-${Cypress.spec.name}`
    );
  });
  describe("0076: Verify the Nested Activities in Graph - https://www.dcrgraphs.net/Tool?id=1039368, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1484327", () => {
    it("Verify the Nested Activities in Graph", function () {
      return tests
        .open_the_graph("graph_id_21")
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
          return tests.clickOnExecuteButton("Activity20");
        })
        .then(() => {
          return tests.Verify_activity("Activity21"); // verify that in nesting activity 21 is visible and not executed
        })
        .then(() => {
          return tests.Verify_activity("Activity22"); // verify that in nesting activity 22 is visible and not executed
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity21");
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity22");
        })
        .then(() => {
          return tests.Verify_activity("Activity29"); // verify check 77-check is not checked
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity29");
        });
    });
   
  });
  describe("0077: Verify the Nested Processes in Graph - https://www.dcrgraphs.net:42443/Tool?id=1039368, https://wwwdemo.dcrgraphs.net:43443/Tool?id=1484327", () => {
    it("Verify the Nested Processes in Graph", function () {
      return tests
        .open_the_graph("graph_id_21")
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
          return tests.clickOnExecuteButton("Activity24"); // 78 DO subprocessing
        })
        .then(() => {
          return tests.Verify_activity("Activity25"); // verify subprocess activity 25 is visible and not executed
        })
        .then(() => {
          return tests.Verify_activity("Activity26"); // verify subprocess activity 26 is visible and not executed
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity25");
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity26");
        })
        .then(() => {
          return tests.Verify_activity("Activity28"); // verify check 77-check is not checked
        })
        .then(() => {
          return tests.clickOnExecuteButton("Activity28");
        });
    });
     
  });
  describe("0121:Test rules wizard - https://wwwdemo.dcrgraphs.net:43443/Tool?id=1012403, https://www.dcrgraphs.net:42443/Tool?id=1480498", () => {
    it("Test rules wizard", function () {
      console.log('USE_AUTHHUB_LOGIN', Cypress.env('USE_AUTHHUB_LOGIN'));
      return tests
        .open_the_graph("graph_id_23")
        .then(() => {
          console.log("0121A");
          //return tests.clickonactivitybox("Activity0");
          return cy.get("path[event-id='Activity0']").click({ force: true });
        })
        .then(() => {
          console.log("0121B");
          return tests.Add_lines_between_activities("Activity0", "Activity1");
        })
        .then(() => {
          console.log("0121C");
          return tests.getRulesWizard();
        })
        .then(() => {
          console.log("0121D");
          return tests.Click_on_response_line();
        });
    });
  });

  describe("0124:Test spawn in subgraph . https://www.dcrgraphs.net:41443/Tool?id=1480366, https://wwwtest.dcrgraphs.net:43443/Tool?id=1484765", () => {
    it("Test spawn in subgraph", function () {
      return tests
        .open_the_graph("graph_id_15")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickOnExecuteButton("NewGraph");
        });
    });
  });
  describe("0126:Test DMN with multiple outputs - https://wwwdemo.dcrgraphs.net:43443/Tool?id=1491031#, https://www.dcrgraphs.net:41443/Tool?id=1705077", () => {
    it("Test DMN with multiple outputs", function () {
      return tests
        .open_the_graph("graph_id_16")
        .then(() => {
          console.log("0126A");
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          console.log("0126B");
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          console.log("0126C");
          return tests.click_on_Open_button("Integer");
        })
        .then(() => {
          console.log("0126D");
          return tests.Select_field_value("Item 1");
        })
        .then(() => {
          console.log("0126E");
          return tests.just_click();
        })
        .then(() => {
          console.log("0126F");
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        })
        .then(() => {
          console.log("0126G");
          return tests.verify_Effect_Logs(
            'Computations: ["Hans OK1","Peter1","Kurt1"]'
          );
        })
        .then(() => {
          console.log("0126H");
          return tests.Click_On_Exit_Simulation();
        })
        .then(() => {
          console.log("0126I");
          cy.wait(2000);
          return tests.clickondiscardbutton();
        })
        .then(() => {
          console.log("0126J");
          //return tests.click_on_DMN_icon();
          return cy.contains('⊞', { timeout: 50000 })
        .should('exist')
        .click({ force: true });
        });
    });
  });
  describe("0127:Test CVRapi effect - https://wwwtest.dcrgraphs.net:43443/Tool?id=1484617, https://www.dcrgraphs.net:41443/Tool?id=1705078 enter value 39351781", () => {
    it("Test CVRapi effect", function () {
      return tests
        .open_the_graph("graph_id_24")
        .then(() => {
          console.log("0127A");
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          console.log("0127B");
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          console.log("0127C");
          return tests.click_on_Open_button("CVRNumber");
        })
        .then(() => {
            console.log("0127D");
          return tests.enter_text_in_field("CVRNumber", "39351781");
        })
        .then(() => {
          console.log("0127E");
          return tests.just_click();
        })
        .then(() => {
          console.log("0127F");
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        })
        .then(() => {
          console.log("0127G");
          return tests.click_on_Open_button("Activity2");
        })
        .then(() => {
          console.log("0127H");
          return tests.just_click();
        })
        .then(() => {
          console.log("0127I");
          return tests.verify_text_inside_field(
            "Activity2",
            ""
          );
        })
        .then(() => {
          console.log("0127J");
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        });
    });
  });
  describe("0132:Resources  - click to import effects in a new graph", () => {
    it("click to import effects in a new graph", function () {
      return tests
        .open_the_graph("graph_id_22")
        .then(() => {
          return tests.Edit_process_title();
        })
        .then(() => {
          return tests.Resources_Tab();
        })
        .then(() => {
          return tests.Click_on_Import_button();
        });
    });
  });

  describe("0134:Process Classification - admin", () => {
    it("Process Classification - admin", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administrate_Classification();
        })

        .then(() => {
          return tests.Checking_node_is_avalible();
        })

        .then(() => {
          cy.get("@parentExists").then((exists) => {
            if (exists) {
              cy.log("Parent already exists → SKIP CREATION");
              return;
            }

            cy.log("Parent NOT found → Creating parent + child + sub-child");

            return tests
              .Click_on_Root_Node_plus_button()
              .then(() => {
                logStep("Selecting node type");
                return Drop_down.selectOption("#formNodeType", "core");
              })
              .then(() => {
                logStep("Selecting node icon");
                return Drop_down.selectReactSelectOption("react-select-2", {
                  selectFirst: true,
                  optionTitle: "Box",
                });
              })
              .then(() => {
                logStep("Selecting node owner");
                return Drop_down.selectReactSelectOption("react-select-3", {
                  selectFirst: true
                });
              })
              .then(() => {
                return tests.enter_text_in_field("title", "parent");
              })
              .then(() => {
                return tests.enter_text_in_field("shortName", "P");
              })
              .then(() => {
                return tests.enter_text_in_description_field(
                  "description",
                  "this is parent"
                );
              })
              .then(() => {
                return tests.Click_on_add_node_button();
              })

              .then(() => {
                return tests.Click_on_plus_button("parent");
              })
              .then(() => {
                return tests.enter_text_in_field("title", "child");
              })
              .then(() => {
                return tests.enter_text_in_field("shortName", "C");
              })
              .then(() => {
                return tests.enter_text_in_description_field(
                  "description",
                  "this is child"
                );
              })
              .then(() => {
                return tests.Click_on_add_node_button();
              })

              .then(() => {
                return tests.Click_on_plus_button("child");
              })
              .then(() => {
                return tests.enter_text_in_field("title", "sub child");
              })
              .then(() => {
                return tests.enter_text_in_field("shortName", "s");
              })
              .then(() => {
                return tests.enter_text_in_description_field(
                  "description",
                  "this is sub child"
                );
              })
              .then(() => {
                return tests.Click_on_add_node_button();
              });
          });
        });
    });
  });

  describe("0135:Process Classification - associate graph with classification (under resources)", () => {
    it("Process Classification - associate graph with classification", function () {
      return tests
        .visitpage()
        .then(() => {
          cy.wait(2000);
          cy.reload(true);
          cy.wait(2000);
          return tests.open_the_graph("graph_id_10");
        })
        .then(() => {
          return tests.Edit_process_title();
        })
        .then(() => {
          return tests.Click_on_process_Sheet();
        })
        .then(() => {
          return tests.ClickonOwnerClassification();
        })
        .then(() => {
          return tests.SelectOnOwnerClassificationtab();
        })
        .then(() => {
          return tests.Click_on_Update_graph_button();
        });
    });
  });
  describe("0136:Process Classification - View classification (https://wwwtest.dcrgraphs.net:43443/ProcessClassification)", () => {
    it("Process Classification - View classification classification", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.ClickonClassification();
        })
        .then(() => {
          return tests.clickCategoryByTitle('parent');
        })
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administrate_Classification();
        })
        .then(() => {
          return tests.ClickonRemoveNode();
        })
        .then(() => {
          return tests.ClickonConfirmNode();
        });
    });
  });
  describe("0137:Effect Administration - try to add packages, remove packages, set parameters, export json", () => {
    it("Effect Administration - try to add packages, remove packages, set parameters, export json", function () {
      return tests
        .visitpage()
        .then(() => {
          console.log("0137A");
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          console.log("0137B");
          return tests.openEffectAdministrationPage();
        })
        .then(() => {
          console.log("0137C");
          return tests.verifyEffectEnableAndDisable();
        })
        .then(() => {
          console.log("0137D");
          return tests.verifyEffectPackageAddAndRemove();
        })
        .then(() => {
          console.log("0137E");
          return tests.verifyExportJSON();
        });
    });
  });
  describe("0140:From Dashboard open 'Instances', i.e. DCR live - no login - does it work", () => {
    it("From Dashboard open 'Instances', i.e. DCR live - no login - does it work", function () {
      console.log("0140A");
      return tests.visitpage().then(() => {
        console.log("0140B");
        return tests.Click_on_Instances_button();
      });
    });
  });
  describe("0141:Open advanced simulator - expense graph 1924013 -  does it open correctly in DCR Live?", () => {
    it("Open advanced simulator", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.open_the_graph("graph_id_1");
        })
        .then(() => {
          return tests.Click_on_advance_simulation_button();
        });
    });
  });
  describe("0154: Check revision history and detail page - https://www.dcrgraphs.net:41443/RevisionDetails?graphId=1924013, export a revision", () => {
    it("Check revision history and detail page", function () {
      return tests
        .open_the_graph("graph_id_1")
       // .then(() => {
         // console.log("0154A");
        //  return tests.Click_On_File_tab();
      //  })
        .then(() => {
          console.log("0154B");
          return tests.Click_On_Revision_History();
        })
        .then(() => {
          console.log("0154C");
          return tests.Click_On_File_tab();
        })
        .then(() => {
          console.log("0154D");
          return tests.Click_on_show_Revision_Details();
        })
        .then(() => {
          console.log("0154E");
          return tests.Click_on_Export_Graph();
        });
    });
  });
  describe("0155: Check all effects , https://wwwtest.dcrgraphs.net:43443/Tool?id=1957848, https://www.dcrgraphs.net:41443/Tool?id=2001167", () => {
    it(" Check all effects", function () {
      return tests
        .open_the_graph("graph_id_19")
        .then(() => {
          return tests.Click_On_Simulate_Button();
        })

        .then(() => {
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          return tests.clickOnExecuteButton("A1");
        })
        .then(() => {
          return tests.clickOnExecuteButton("A8");
        })
        .then(() => {
          return tests.clickOnExecuteButton("A1");
        });
    });
  });
  describe("0156: DMN effect fragment - enter 17 + Denmark - result must be Wine and Beer - https://wwwtest.dcrgraphs.net:43443/Tool?id=1953272, https://www.dcrgraphs.net:41443/Tool?id=2001169#", () => {
    it(" DMN effect fragment - enter 17 + Denmark - result must be Wine and Beer", function () {
      return tests
        .open_the_graph("graph_id_20")
        .then(() => {
          console.log("0156A");
          return tests.Click_On_Simulate_Button();
        })
        .then(() => {
          console.log("0156A");
          return tests.Click_on_Start_Simulation_Button();
        })
        .then(() => {
          console.log("0156A");
          return tests.click_on_Open_button("A1");
        })
        .then(() => {
          console.log("0156A");
          return tests.enter_text_in_field("Land", "Denmark");
        })
        .then(() => {
          console.log("0156A");
          return tests.just_click();
        })
        .then(() => {
          console.log("0156A");
          return tests.enter_text_in_field("Alder", "17");
        })
        .then(() => {
          console.log("0156A");
          return tests.just_click();
        })
        .then(() => {
          console.log("0156A");
          return tests.click_on_close_button(
            ":nth-child(2) > .button__inner-wrapper > .button"
          );
        })
        .then(() => {
          console.log("0156A");
          return tests.verify_Effect_Logs('Computations: "Beer and Wine"');
        });
    });
  });

  describe("0175: Verify that Kpis are saved and loaded, also verify mandatory and optional fields (GraphID)", () => {
    it(" Verify that Kpis are saved and loaded, also verify mandatory and optional fields (GraphID)", function () {
      return tests
        .open_the_graph("graph_id_20")
        .then(() => {
          return tests.Edit_process_title();
        })
        .then(() => {
          return tests.Resources_Tab();
        })
        .then(() => {
          return tests.KPI_Tab();
        })
        .then(() => {
          return tests.Click_on_Add_KPI_button();
        })
        .then(() => {
          return tests.Enter_KPI_text_input("Test KPI");
        })
        .then(() => {
          return tests.Enter_KPI_sequence_input("1");
        })
        .then(() => {
          return tests.Click_on_KPI_save_button();
        })
        .then(() => {
          return tests.Click_on_KPI_close_button();
        }) .then(() => {
          return tests.Click_on_Update_graph_button();
        });
    });
    it("0176:Verify that saved kpi's edit functionality works fine.", function () {
      return tests
        .open_the_graph("graph_id_20")
        .then(() => {
          console.log("0176A");
          return tests.Edit_process_title();
        })
        .then(() => {
          console.log("0176B");
          return tests.Resources_Tab();
        })
        .then(() => {
          console.log("0176C");
          return tests.KPI_Tab();
        })
        .then(() => {
          console.log("0176D");
          return tests.Click_on_Edit_KPI_Button("Test KPI");
        })
        .then(() => {
          console.log("0176E");
          return tests.Enter_KPI_text_input("Test KPI");
        })
        .then(() => {
          console.log("0176F");
          return tests.Enter_KPI_sequence_input("2");
        })
        .then(() => {
          console.log("0176G");
          return tests.Click_on_KPI_save_button();
        })
        .then(() => {
          console.log("0176H");
          return tests.Click_on_KPI_close_button();
        });
    });
    it("0177:Verify that saved kpi's delete functionality works fine.", function () {
      return tests
        .open_the_graph("graph_id_20")
        .then(() => {
          return tests.Edit_process_title();
        })
        .then(() => {
          return tests.Resources_Tab();
        })
        .then(() => {
          return tests.KPI_Tab();
        })
        .then(() => {
          return tests.Click_on_Delete_KPI_Button("Test KPI");
        }).then(() => {
          return tests.Click_on_Update_graph_button;
        });
    });
  });
  describe("0180:Check if design comments are saved and edited against activity.", () => {
    it("Check if design comments are saved and edited against activity.", function () {
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
        }).then(() => {
          return tests.add_Comments_on_activity( "A1");
        }).then(() => {
          return tests.Enter_comments_text("add first comment");
        })          
    });
  });
  describe("0181:Check if design comments are saved and edited against rule.", () => {
    it("Check if design comments are saved and edited against rule.", function () {
      // if (!shouldRunTest('0100')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          console.log("0181A");
          return tests.createprocesspage();
        })
        .then(() => {
          console.log("0181B");
          return tests.Click_on_Create_graph_button();
        })
        .then(() => {
          console.log("0181C");
          return tests.activitypagetest("A2", "A1");
        })
        .then(() => {
          console.log("0181D");
          return tests.Right_Click();
        }).then(() => {
          console.log("0181E");
          return tests.Click_on_add_comments(true);
        }).then(() => {
          console.log("0181F");
          return tests.Enter_comments_text("add first comment");
        })          
    });
  });
});
