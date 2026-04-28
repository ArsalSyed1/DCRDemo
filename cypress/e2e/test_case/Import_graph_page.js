import ClickMethod from "../../pages/generic_method/click_method";
import { logStep } from "../../support/e2e";
export const Click_on_file_tab = () => {
  logStep("Clicking on File Tab");
  return ClickMethod.clickElement("a[data-action='exportGraph']");
};
export const Click_on_Import_file = () => {
  logStep("Clicking on Import file");
  return ClickMethod.clickElement("a[title='Import DCR Process']");
};
export const Click_on_Chosse_File = () => {
  logStep("Choosing file");
  return cy
    .get('input[type="file"]')
    .first()
    .attachFile("Test Process.xml", { force: true })
    .trigger("change", { force: true })
  .wait(2000, { log: false });
};

export const Click_on_Continue_import_button = () => {
  logStep("Clicking on Continue import button");
  return ClickMethod.clickElement("#continueImport");
};
export const Click_on_Import_Flow_Button = () => {
  logStep("Clicking on Import Flow button");
  return ClickMethod.clickElement("p > .btn");
};
