
import { logStep } from '../../support/e2e';
import fregmentation from '../../pages/fregmentation.js';
import Recommendationpage from '../../pages/recommendation_page.js';
import ClickMethod from '../../pages/generic_method/click_method';
import EnterValue from '../../pages/generic_method/enter_value.js';


export const recommendation_test = () => {
  logStep('Clicking on recommendation test element');
  return ClickMethod.clickElement('a > strong');
};

export const click_on_Open_button = (eventid) => {
  logStep(`Clicking on Open button for event id: ${eventid}`);
  return ClickMethod.clickElementByEventId(eventid);

};

export const clickOnrendercheckbox = () => {
  logStep('Clicking on render checkbox');
  return ClickMethod.clickElement('#simRender');
};

export const Scrolltotheexecutebutton = (itemText) => {
  logStep(`Scrolling to the execute button for item: ${itemText}`);
  return Recommendationpage.Scrolltotheexecutebutton(itemText);
};
export const Scroll = (Scroll) => {
  logStep(`Scrolling 1`);
  return Recommendationpage.Scroll(Scroll);
};
export const clickOnExecuteButton = (Eventid) => {
  logStep(`Clicking on Execute button for event id: ${Eventid}`);
  return fregmentation.clickOnOpen(Eventid);

};
export const Verify_activity = (Eventid) => {
  logStep(`Verifying activity for event id: ${Eventid}`);
  return fregmentation.VerifyActivity(Eventid);

};


export const enterValueInField = () => {
  logStep('Entering value in field and clicking phase header');
  return EnterValue.enterValue('.input-field__input', '10')
    .get('.phase__header').click();

}
export const VerifyExecutedIcon = (VerifyExecutedIcon) => {
  logStep(`Verifying executed icon: ${VerifyExecutedIcon}`);
  return Recommendationpage.VerifyExecutedIcon(VerifyExecutedIcon);
}
export const clickonexitbutton = () => {
  logStep('Clicking on exit button');
  return Recommendationpage.clickonexitbutton();
  // ClickMethod.clickElement('#exitSimulation');
}
export const clickondiscardbutton = () => {
  logStep('Clicking on discard button and waiting for exit simulation API');
  // ClickMethod.clickElement('#discardSim');
  return ClickMethod.clickAndWaitForApi('#discardSim', `${Cypress.config("repositoryApiBaseUrl")}api/userexperience/loguserevent`, 'wait for exit simulation.');

}
export const clickonSimulationdropdown = () => {
  logStep('Clicking on simulation dropdown');
  return ClickMethod.clickElement('ul#toolMainMenu>li:nth-of-type(4)>a  ');
}
export const clickonsimulationHistory = () => {
  logStep('Clicking on simulation history and waiting for SimulationsByGraphId API');
  return cy.url().then((url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    const graphId = params.get('id');
    return ClickMethod.clickAndWaitForApi('#showSimHistory', `${Cypress.config("repositoryApiBaseUrl")}api/graphs/${graphId}/DCRSimulator/SimulationsByGraphId`, 'simHistoryApi');
  });
}
export const clickonrerunbutton = () => {
  logStep('Clicking on rerun button');
  return ClickMethod.clickElement('#reRunAllRepSims');

}
export const entersimulationtitle = (element, title) => {
  logStep(`Entering simulation title: ${title} in element: ${element}`);
  return EnterValue.enterValue(element, title);
}
export const clickonsaveandexitbutton = () => {
  logStep('Clicking on save and exit button');
  return ClickMethod.clickElement('#sureLeaveSim');
}
export const verifyswinlane = () => {
  logStep('Verifying swim lane');
  return ClickMethod.clickFirstElementWithoutTarget('ul#graphRepSimHistoryList>li>div:nth-of-type(3)>a');
}

export const Click_On_Create_new_flow_Button = () => {
  logStep('Clicking on create new flow button');
  return cy.url().then((url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    // Try to get 'graphId', if not present, fallback to 'id'
    let graphId = params.get('graphId');
    if (!graphId) {
      graphId = params.get('id');
    }
    return cy.visit(`${Cypress.config("baseUrl")}Swimlane?graphId=${graphId}&simId=?&designMode=true`);
  });
}
export const Click_On_Create_new_flow_Button_on_dashboard = () => {
  logStep('Clicking on create new flow button on dashboard');
  return cy.get('a#newCreateScenario').should('have.attr', 'href').then((href) => {
    // Construct full URL
    const baseUrl = Cypress.config("baseUrl").replace(/\/$/, ''); // Remove trailing slash
    const fullUrl = `${baseUrl}${href}`;
    return cy.visit(fullUrl);
  });
}

export const Click_On_Save_Button = () => {
  logStep('Clicking on save button');
  return ClickMethod.clickElement('#editScenarioModal > .modal-footer > .btn');
}

export const Click_On_Process_Simulate_Details = (text) => {
  logStep(`Clicking on process simulate details for text: ${text}`);
  return ClickMethod.clickSimDetailLink(text);
}
export const Click_On_Validate_flow = () => {
  logStep('Clicking on validate flow button');
  return ClickMethod.clickElement('#validateTrace > .btn');
}
export const Click_On_Analyse_flow = () => {  // TODO: make this chainable
  logStep('Clicking on analyse flow and waiting for analyser API');
  return cy.url().then((url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    const graphId = params.get('id');
    cy.intercept('GET', `**/DotViewer/Index?GraphId=${graphId}&isScenario=true`).as('analyseFlow');
    cy.intercept('POST', `${Cypress.config("repositoryApiBaseUrl")}api/analyser`).as('analyserApi');
    // cy.intercept('POST', `${Cypress.config("repositoryApiBaseUrl")}api/analyser/info`).as('analyserInfoApi');
    return cy.visit(`${Cypress.config("baseUrl")}DotViewer/Index?GraphId=${graphId}&isScenario=true`)
      .then(() => cy.wait(15000,{log:false})) // Wait for the page to load
      .then(() => cy.wait('@analyseFlow', { timeout: 200000 }))
      .then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.statusMessage).to.eq('OK');
      })
      .then(() => cy.wait('@analyserApi', { timeout: 200000 }).its('response.statusCode').should('eq', 200));
      // .then(() => cy.wait('@analyserInfoApi', { timeout: 200000 }).its('response.statusCode').should('eq', 200));
  });
}
export const Click_On_Flow_checkboxes = () => {
  logStep('Clicking on flow checkbox 1');
  return ClickMethod.clickElement('#1')
    .then(() => {
      logStep('Clicking on flow checkbox 3');
      return ClickMethod.clickElement('#3');
    })
    .then(() => {
      logStep('Clicking on flow checkbox 4');
      return ClickMethod.clickElement('#4');
    })
    .then(() => {
      logStep('Clicking on flow checkbox 5');
      return ClickMethod.clickElement('#5');
    });
}
 export const Click_on_Analyze_button = () => {
  logStep('Clicking on analyze button');
  return ClickMethod.clickAndWaitForApi('div#data-foot>div>button:nth-of-type(3)', `${Cypress.config("repositoryApiBaseUrl")}api/analyser`, 'wait for analyze flow.');
}
export const Click_on_View_summary_button = () => {
  logStep('Clicking on view summary button');
  return ClickMethod.clickAndWaitForApi('div#data-foot>div>button:nth-of-type(2)', `${Cypress.config("repositoryApiBaseUrl")}api/analyser`, 'wait for analyze flow.');
}
export const Click_on_Annotation_button = () => {
  logStep('Clicking on annotation button');
  return ClickMethod.clickAndWaitForApi('div#data-foot>div>button:nth-of-type(1)', `${Cypress.config("repositoryApiBaseUrl")}api/analyser`, 'wait for analyze flow.');
}
export const Click_On_File_tab = () => {
  logStep('Clicking on File tab');
  return ClickMethod.clickElementContainingText('File');
}
export const Click_On_Import_Flow = () => {
  logStep('Clicking on Import Flow');
  return ClickMethod.clickElement("a[title='Import Flow']");
}
export const Click_On_Export_Flow = () => {
  logStep('Clicking on Export Flow');
  return ClickMethod.clickElement("a[title='Export Flow']");
}
export const click_on_DMN_icon = () => {
  logStep('Clicking on DMN Icon');
  return ClickMethod.clickElementContainingText('⊞');
}