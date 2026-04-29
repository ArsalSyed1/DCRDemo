import { shouldRunTest } from "../../pages/generic_method/runalltest.js";
import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { username, password } = config;

describe(" designer menu & insert Tab", () => {
  beforeEach(() => {
    cy.loginWithSession(username, password, "DCR Solutions Test");
  });
  describe("0066: Verify the File Menu buttons functionality", () => {
    it("Verify the open tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.click_on_open_menu();
        });
    });
    it("Verify the Save as tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.click_on_Save_DCR_Process_As();
        })
        .then(() => {
          return tests.enter_text("#saveAsGraphTitle", "Test Save As");
        })
        .then(() => {
          return tests.click_on_Save_DCR_Process_As_button();
        });
    });
    it("Verify the Export as Xml tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_on_Export_as_xml();
        });
    });

    it("Verify the Export as SVG tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_on_Export_as_SVG();
        });
    });
    it("Verify the Export as png tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_on_Export_as_PNG();
        });
    });
    it("Verify the Show Revison History tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_on_show_Revision_History();
        });
    });
    it("Verify the Export as png tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_File_tab();
        })
        .then(() => {
          return tests.Click_on_show_Revision_Details();
        });
    });
  });

  describe("0067: Verify the Insert Menu buttons functionaltiy.", () => {
    it("Verify the New activity tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_Insert_tab();
        })
        .then(() => {
          return tests.Click_On_New_activity();
        });
    });
    it("Verify the New Sub graph tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_Insert_tab();
        })
        .then(() => {
          return tests.Click_On_New_Sub_graph();
        });
    });
    it("Verify the Add New fragmentaion tab functionality", function () {
      return tests
        .open_the_graph("graph_id_10")
        .then(() => {
          return tests.Click_On_Insert_tab();
        })
        .then(() => {
          return tests.Click_On_Add_New_fragmentaion();
        });
    });
  });
});
