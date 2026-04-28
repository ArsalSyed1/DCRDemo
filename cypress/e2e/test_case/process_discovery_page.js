import process_discovery_page from '../../pages/process_discovery_page.js';
import ClickMethod from '../../pages/generic_method/click_method.js';
import { logStep } from '../../support/e2e.js';

export const ProcessDiscovery_test = () => {
    logStep('Clicking on Process Discovery App');
   return ClickMethod.clickElement(':nth-child(5) > .dropdown-toggle');    
}

export const click_on_Process_dicovery_App = () => {
  logStep('Clicking on Process Discovery App');
  return ClickMethod.clickElement("a[title='Process Discovery']")
      .wait(15000,{log:false});

}
export const click_on_Find_rule_button = () => {
    logStep('Clicking on Find Rule button');
    return ClickMethod.clickElement('#modelRecommendation');
}



export const click_on_DCR_Publisher = () => {
    logStep('Clicking on DCR Publisher');
    return ClickMethod.clickElement('#extensionsMenu > :nth-child(4) > a');
}
export const click_on_Xlsheet_button = () => {
    logStep('Clicking on Convert to XLSheet button');
    return ClickMethod.clickElement('#convertIntoDocx')
        .then(() => {
            logStep('Verifying document file');
            return process_discovery_page.Verifdocfile();
        });
}
