import ClickMethod from '../../pages/generic_method/click_method';
import { logStep } from '../../support/e2e';


export const click_on_open_menu = () => {
  logStep('Click on Open Menu');
  return ClickMethod.clickElement('#openDCR');
};
export const click_on_Save_DCR_Process_As = () => {
  logStep('Click on Save DCR Process As');
  return ClickMethod.clickElement("a[title='Save DCR Process As']");
};
export const click_on_Save_DCR_Process_As_button = () => {
  logStep('Click on Save DCR Process As button');
  return cy.get('#saveDCRAs')
    .should('be.visible')
    .invoke('removeAttr', 'target')
    .then(($el) => {
      const href = $el.prop('href');
      if (href && href !== 'javascript:void(0)' && href !== '#') {
        window.location.href = href; // open the link in the same tab    
      }
    });
};

export const Click_on_Export_as_xml = () => {
  logStep('Click on Export as XML');
cy.get('a#saveToFile', { timeout: 5000 }).then($el => {
  if ($el.length > 0 && $el.is(':visible')) {
    cy.log('✅ Code 2 element found – clicking Export as XML');
    cy.wrap($el).click();
  } else {
    cy.log('⚠️ Code 2 not visible – trying Code 1 submenu');
    cy.get('a#saveToFile i.fas.fa-caret-right', { timeout: 40000 }) // Click main menu option from Code 1
      .first()
      .click({ force: true });
      cy.wait(2000,{log: false}); // wait for submenu to appear

    cy.get('a[data-action="exportGraphTest"]', { timeout: 40000 }).click({ force: true });
    
  }
});

};

export const Click_on_Export_as_SVG = () => {
  logStep('Click on Export as SVG');
  return ClickMethod.clickElement('#graphToSVG');

};
export const Click_on_Export_as_PNG = () => {
  logStep('Click on Export as PNG');
  return ClickMethod.clickElement('#graphToSVG');

};
export const Click_on_Export_Graph = () => {
  logStep('Click on Export as JPG');
  // return ClickMethod.clickElement('#graphToJPG');
  return ClickMethod.clickFirstElement('button[title="export graph"]');

};

export const Click_on_show_Revision_History = () => {
  logStep('Click on Show Revision History');
  return ClickMethod.clickElement('#showRevisionHistory');
};

export const Click_on_show_Revision_Details = () => {
  logStep('Click on Show Revision Details');
  return cy.get("a[title='Revision Details']", { timeout: 10000 })
    .should('have.attr', 'href')
    .then((href) => {
      // Extract the tool id from the current URL
      return cy.url().then((currentUrl) => {
        const url = new URL(currentUrl);
        const toolId = url.searchParams.get('id');
        let newHref = href;
        if (href.includes('graphId=false') && toolId) {
          newHref = href.replace('graphId=false', `graphId=${toolId}`);
        }
        return cy.wait(3000, { log: false }).then(() => {
          return cy.visit(newHref);
        });
      });
    });
};
export const Click_On_Insert_tab = () => {
  logStep('Click on Insert tab');
  return ClickMethod.clickElementContainingText('Insert');
}
export const Click_On_New_activity = () => {
  logStep('Click on New Activity');
  return ClickMethod.clickElement('#addEvent');
}
export const Click_On_New_Sub_graph = () => {
  logStep('Click on New Sub Graph');
  return ClickMethod.clickElement('#addTemplate');
};

export const Click_On_Add_New_fragmentaion = () => {
  logStep('Click on Add New Fragmentation');
  return ClickMethod.clickAndWaitForApi(
    '#addFragment',
    `${Cypress.config("repositoryApiBaseUrl")}api/graphs?sort=Id&orderby=asc&shared=undefined&pageNumber=1&pageSize=10&format=json&graphType=1`,
    'wait for add fragment button.'
  );
};

export const Click_On_AddInitSimulation = () => {
  logStep('Click on Add Init Simulation');
  return ClickMethod.clickAndWaitForApi(
    '#ddInitSimulation',
    `${Cypress.config("repositoryApiBaseUrl")}api/user/GetConnections?includeAutoUsers=true&OnlyReturnOnlineUsers=true`,
    'wait for add init simulation button.'
  );
};

export const Click_On_Restart_Simulation = () => {
  logStep('Click on Restart Simulation');
  return ClickMethod.clickElement('#ddRestartSimulation');
};

export const Click_On_Pause_Simulation = () => {
  logStep('Click on Pause Simulation');
  return ClickMethod.clickElement('#ddPauseSimulation');
};

export const Click_On_Exit_Simulation = () => {
  logStep('Click on Exit Simulation');
  return ClickMethod.clickElement('#exitSimulation');
};

export const Click_On_DCR_Rule_Assistance = () => {
  logStep('Click on DCR Rule Assistance');
  return ClickMethod.clickElement("a[title='DCR Rules Assistant']");
};

export const Click_On_Help_tab = () => {
  logStep('Click on Help Tab');
  return ClickMethod.clickElementContainingText('Help');
};

export const Click_On_startDCRTour = () => {
  logStep('Click on Start DCR Tour');
  return ClickMethod.clickElement('#startDCRTour');
};

export const Click_On_AboutDCR = () => {
  logStep('Click on About DCR');
  return cy.get('#aboutDCR')
    .should('be.visible')
    .invoke('removeAttr', 'target')
    .then(($el) => {
      const href = $el.prop('href');
      if (href && href !== 'javascript:void(0)' && href !== '#') {
        return cy.visit(href); // use cy.visit to navigate
      }
    });
};

export const Click_On_DCRDoc = () => {
  logStep('Click on DCR Doc');
  return cy.get('#DCRDocs')
    .should('be.visible')
    .invoke('removeAttr', 'target')
    .then(($el) => {
      const href = $el.prop('href');
      if (href && href !== 'javascript:void(0)' && href !== '#') {
        return cy.visit(href); // use cy.visit to navigate
      }
    });
};

export const Click_On_Revision_History = () => {
  logStep('Click on Revision History');
  ClickMethod.clickElement('#sbRevisionBtn > .fas');
  return ClickMethod.clickElement('#sideBarHeaderPane');
   
};

export const Click_On_Revision_History_list = () => {
  logStep('Click on Revision History List');
  return ClickMethod.clickElement('div#revisionContainer>div>ul>li:nth-of-type(3)');
};

export const click_on_export_excel = () => {
  logStep('Click on Restore This Revision');
  return ClickMethod.clickElement('#export span.e-tbar-btn-text');
  
};