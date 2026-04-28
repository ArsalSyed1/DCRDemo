import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { password, username } = config;

describe("Administration ", () => {
  beforeEach(() => {
    cy.clearCookies(); // optional, to avoid conflicts
    cy.loginWithSession(username, password, "DCR Solutions Test");
    cy.log(
      "Logged in via session:",
      `${username}-DCR Solutions Test-${Cypress.spec.name}`
    );
  });
  describe("0143: In DCR Solutions Test organization - select Effect Administration - https://wwwtest.dcrgraphs.net:43443/effectadministration - PAGE IS SHOWN", () => {
    it("select Effect Administration", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.openEffectAdministrationPage();
        });
    });
  });

  describe("0144: Client Custom effect - ensure taken to https://livetest.dcrgraphs.net:43443/effects?guid=30685e23-5c16-47cf-a17d-6c8e0d557619 - redirect happens", () => {
    it("Client Custom effect", function () {
      // if (!shouldRunTest('0144')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          console.log("0144A");
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          console.log("0144B");
          return tests.openEffectAdministrationPage();
        })
        .then(() => {
          console.log("0144C");
          return tests.verifyEditCustomEffects();
        });
    });
  });
  describe("0145: In DCR Solutions Test organization - select Administration - https://wwwtest.dcrgraphs.net:43443/AdminDashboard/organizationadministration", () => {
    it("select Administration", function () {
      // if (!shouldRunTest('0145')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        });
    });
  });
  describe("0146: Try to change host system - click reload - ensure value is saved", () => {
    it("Try to change host system", function () {
      // if (!shouldRunTest('0146')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          // return tests.Select_Host_system();
          return tests.Reload();
        });
    });
  });
  describe("0147: Click Users - check users", () => {
    it("Click Users - check users", function () {
      // if (!shouldRunTest('0147')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_user_tab();
        });
    });
  });
  describe("0148: Click Processes - check processes", () => {
    it("Click Processes - check processes", function () {
      // if (!shouldRunTest('0148')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_process_tab();
        });
    });
  });
  describe("0149: Click Governance - check governance", () => {
    it("Click Governance - check governance", function () {
      // if (!shouldRunTest('0149')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_governance_tab();
        });
    });
  });
  describe("0070:Verify the designer settings (under profile)", () => {
    it("Verify the designer settings", function () {
      // if (!shouldRunTest('0070')) this.skip(); // Skip this test if TEST_CASE does not match
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_DesignerSettings();
        });
    });
  });
  describe("0157:Check Simple category setup functionality", () => {
    it("Check Simple category setup functionality", function () {
      return tests
        .visitpage()
        .then(() => {
          console.log("0157A");
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          console.log("0157B");
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          console.log("0157C");
          return tests.Click_on_Simple_category_setup_check_box();
        })
        .then(() => {
          console.log("0157D");
          return tests.click_on_DCR();
        })
        .then(() => {
          console.log("0157E");
          return cy.get("#showCategoriesSequenceList > .fa-plus-square").click({ force: true });
          //return tests.click_on_Category();
        });
    });
  });
  describe("0160-0161:Invite user to organization refresh page and check if new invitation is added to table below.", () => {
    it("Invite user to organization refresh page and check if new invitation is added to table below.", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Enter_email_Invite_Users_To_Organization(
            "testing@gmail.com"
          );
        })
        .then(() => {
          return tests.Click_on_Send_Invitation_Button();
        })
        .then(() => {
          return tests.isEmailInInvitationsTable("testing@gmail.com");
        })
        .then(() => {
          return tests.Reload();
        });
    });

    it("copy link and visit it", () => {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.click_on_copy_url_and_open_url("testing@gmail.com");
        });
    });

    it("Test delete invitation,", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_Remove_Invitation("testing@gmail.com");
        })
        .then(() => {
          return tests.ClickonConfirmNode();
        });
    });
  });
  describe("0162:Check excel export works on users tab.", () => {
    it("Check excel export works on users tab.", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_user_tab();
        })
        .then(() => {
          return tests.click_on_export_excel();
        });
    });
  });
  describe("0163:Check if data filters work on users tab.", () => {
    it("Check if data filters work on users tab", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_user_tab();
        })
        .then(() => {
          return tests.Click_On_filters(
            '#UserAdministration div[e-mappinguid="e-flmenu-grid-column5"]'
          );
        })
        .then(() => {
          return tests.uncheckfilters();
        })
        .then(() => {
          return tests.Click_on_Ok_button();
        });
    });
  });
  describe("0165:Check if toolbar options  on processes tabe are enabled and disabled on checkbox check/Uncheck ", () => {
    it("Check if toolbar options  on processes tabe are enabled and disabled on checkbox check/Uncheck ", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_process_tab();
        })

        .then(() => {
          return tests.click_on_CheckBox(
            "#UserAdministration input.select-all-checkbox"
          ); // check all checkbox
        })
        .then(() => {
          return tests.click_on_CheckBox(
            "#UserAdministration input.select-all-checkbox"
          ); // uncheck all checkbox
        });
    });
  });
  //   describe("0166:Check if move process to other organization works. ", () => {
  //     it.only("Check if move process to other organization works.", function () {
  //       return tests
  //         .visitpage()
  //         .then(() => {
  //           return tests.ClickonProfileIcon();
  //         })
  //         .then(() => {
  //           return tests.Click_on_Administration_icon();
  //         })
  //         .then(() => {
  //           return tests.Click_on_process_tab();
  //         })
  //         .then(() => {
  //        return tests.Click_on_Title_filter();
  //         })
  //         .then(() => {
  //           return cy.get('#UserAdministration input.e-input').type('testing test case 165');
  //         })
  //         .then(() => {
  //           return cy.get('#UserAdministration input.e-input').click();
  //         })
  //         .then(() => {
  //           return cy.get('#UserAdministration input.e-input').type('st case 165');
  //         })
  //         .then(() => {
  //           return cy.get('#UserAdministration button.e-primary').click();
  //         })
  //         .then(() => {
  //           return cy.get('#UserAdministration input.row-checkbox').check();
  //         })
  //         .then(() => {
  //           return cy.get('#moveOrg span.e-tbar-btn-text').click();
  //         })
  //         .then(() => {
  //           return cy.get('#ddlOrganizations div.css-t3ipsp-control').click();
  //         })
  //         .then(() => {
  //           return cy.get('#react-select-2-option-1').click();
  //         })
  //         .then(() => {
  //           return cy.get('#react-select-2-option-0').click();
  //         })
  //         .then(() => {
  //           return cy.get('#ddlOrganizations div.css-1dimb5e-singleValue').click();
  //         })
  //         .then(() => {
  //           return cy.get('#react-select-2-option-0').click();
  //         })
  //         .then(() => {
  //           return cy.get('#ddlOrganizations div.css-1dimb5e-singleValue').click();
  //         })
  //         .then(() => {
  //           return cy.get('#moveGraphToOrgDialog').click();
  //         })
  //         .then(() => {
  //           return cy.get('#btnMoveGraphToOrganization').click();s
  //         });

  //         .then(() => {
  //           return tests.click_on_CheckBox('#UserAdministration input.select-all-checkbox');// check all checkbox
  //         })

  //     });
  //   });
  // });

  describe("0173:Check if Roles are added on governance tab.", () => {
    it("Check if Roles are added on governance tab.", function () {
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_governance_tab();
        })
        .then(() => {
          return cy.contains("Add Role").click({ force: true }); /// bilal bhai is deploying code so after that i change the id
          // return tests.Add_role_button("#btnAddRole");
        })
        .then(() => {
          return tests.Enter_text_In_add_role_Field("Testing role");
        })
        .then(() => {
          return tests.Enter_Name_in_add_role_Field("Uzair Khan");
        })
        .then(() => {
          return tests.Add_role_button("#btnSaveRole");
        });
    });
    it("0174:Edit the added role", function () {
      return tests
        .visitpage()
        .then(() => {
          console.log("0174A");
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          console.log("0174B");
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          console.log("0174C");
          return tests.Click_on_governance_tab();
        })
        .then(() => {
          console.log("0174D");
          return tests.Click_on_Edit_role_icon("Testing role");
        })
        .then(() => {
          console.log("0174E");
          return tests.Enter_Name_in_add_role_Field("Uzair Khan");
        })
        .then(() => {
          console.log("0174F");
          return tests.Add_role_button("#btnSaveRole");
        });
    });
    it("0174:Delete the added role", function () {  
      return tests
        .visitpage()
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.Click_on_Administration_icon();
        })
        .then(() => {
          return tests.Click_on_governance_tab();
        })
        .then(() => {
          return tests.Click_on_Confirm_Delete_role_button("Testing role");
        }).then(() => {
          return tests.ClickonConfirmNode();
        });
    });
  });
});
