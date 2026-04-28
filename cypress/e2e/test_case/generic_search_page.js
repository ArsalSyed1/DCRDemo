import generic_search_page from "../../pages/generic_search_page";
import config from "../../configuration/config.json";
const { toolIds } = config;
import { logStep } from "../../support/e2e";

/**
 * Open the tool URL based on the current environment.
 *
 * @param {string} toolKey - The key for the tool to be opened (e.g., 'toolA', 'toolB', or 'toolC').
 */

export const genericSearchTest = () => {
  logStep("Starting generic search test");
  return generic_search_page
    .ClickonProcessbutton()
    .then(() => {
      logStep("Clicked on process button");
      return generic_search_page.EnterProcessName("Expense");
    })
    .then(() => {
      logStep("Entered process name: Expense");
      return generic_search_page.ClickOnSearchButton();
    })
    .then(() => {
      logStep("Clicked on search button");
    });
};

export const genericSearchforProcessAp = () => {
  logStep("Starting generic search for ProcessAp");
  return generic_search_page
    .ClickonProcessbutton()
    .then(() => {
      logStep("Clicked on process button");
      return generic_search_page.EnterProcessName("Expense Report");
    })
    .then(() => {
      logStep("Entered process name: Expense Report");
      return generic_search_page.ClickOnSearchButton();
    })
    .then(() => {
      logStep("Clicked on search button");
      return generic_search_page.ClickOnEyeIcon();
    })
    .then(() => {
      logStep("Clicked on eye icon");
    });
};

export const onlySearch = () => {
  cy.wait(2000, { log: false });
  const baseUrl = Cypress.config("baseUrl");
  const timeout = 50000; // 30 seconds timeout

  if (
    baseUrl.includes("https://wwwtest.dcrgraphs.net:43443/") ||
    baseUrl.includes("https://wwwdemo.dcrgraphs.net:43443/")
  ) {
    return generic_search_page
      .ClickonProcessbutton({ timeout })
      .then(() => {
        return generic_search_page.EnterProcessName("Expense", { timeout });
      })
      .then(() => {
        return cy.wait(2000, { log: false });
      });
  } else if (
    baseUrl.includes("https://dcrgraphs.net:42443/") ||
    baseUrl.includes("https://dcrgraphs.net:41443/")
  ) {
    return generic_search_page
      .ClickonProcessbutton({ timeout })
      .then(() => {
        return generic_search_page.EnterProcessName("Expense", { timeout });
      })
      .then(() => {
        return cy.wait(2000, { log: false });
      });
  }
};


export const Search = () => {
  logStep("Starting search for process");
  return generic_search_page.EnterProcessName("Uzair test");
};
// export const ClickonSearchitem = (test_id, Prod_id) => {
//   const baseUrl = Cypress.config('baseUrl');
//   if (baseUrl.includes('https://wwwtest.dcrgraphs.net:43443/') || baseUrl.includes('https://wwwdemo.dcrgraphs.net:43443/')) {
//     cy.get(`[data-id="${test_id}"] > .itemDetails > .itemTitle > strong`).click({ force: true });
//     cy.wait(2000, { log:false });
//   } else if (baseUrl.includes('https://dcrgraphs.net:42443/') || baseUrl.includes('https://dcrgraphs.net:41443/')) {
//     cy.get(`[data-id="${Prod_id}"][data-selected="false"] > .itemDetails > .itemTitle > strong`).click({ force: true });
//     cy.wait(2000, { log: false });

//   }//10479
//   //1924013

// };
export const ClickonSearchitem = (test_id_key, prod_id_key) => {
  const baseUrl = Cypress.config("baseUrl");
  let env;
  const timeout = 30000; // 10 seconds

  if (baseUrl.includes("wwwtest")) {
    env = "test";
  } else if (baseUrl.includes("wwwdemo")) {
    env = "demo";
  } else if (baseUrl.includes("42443")) {
    env = "prodIIS01";
  } else if (baseUrl.includes("41443")) {
    env = "prodIIS02";
  }

  const test_id = toolIds[env][test_id_key];
  const prod_id = toolIds[env][prod_id_key];

  if (env === "test" || env === "demo") {
    cy.log(`Clicking on test_id: ${test_id}`);
    return cy
      .get(`[data-id="${test_id}"] > .itemDetails > .itemTitle > strong`, { timeout })
      .click({ force: true });
  } else if (env === "prodIIS01" || env === "prodIIS02") {
    cy.log(`Clicking on prod_id: ${prod_id}`);
    return cy
      .get(
        `[data-id="${prod_id}"][data-selected="false"] > .itemDetails > .itemTitle > strong`,
        { timeout }
      )
      .click({ force: true });
  }

  cy.wait(8000, { log: false });
};


export const open_the_graph = (toolKey) => {
  logStep("opening the graph");
  const baseUrl = Cypress.config("baseUrl");
  let currentEnv = "prodIIS01";

  if (baseUrl.includes("https://wwwtest.dcrgraphs.net:43443/")) {
    currentEnv = "test";
  } else if (baseUrl.includes("https://wwwdemo.dcrgraphs.net:43443/")) {
    currentEnv = "demo";
  } else if (baseUrl.includes("https://dcrgraphs.net:42443/")) {
    currentEnv = "prodIIS01";
  } else if (baseUrl.includes("https://dcrgraphs.net:41443/")) {
    currentEnv = "prodIIS02";
  }

  const toolId = toolIds[currentEnv]?.[toolKey] || toolKey;
  const fullUrl = `${baseUrl}Tool?id=${toolId}`;
  logStep(`Visiting URL: ${fullUrl}`);
  return generic_search_page.visit(fullUrl)
  .wait(2000, { log: false });
};
