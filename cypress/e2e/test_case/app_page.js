
import clickmethod from '../../pages/generic_method/click_method.js';
import EnterValue from '../../pages/generic_method/enter_value.js';
import { logStep } from '../../support/e2e.js';

export const clickonapp = () => {
    logStep('Click on App dropdown');
    return clickmethod.clickElement(':nth-child(5) > .dropdown-toggle', { timeout: 1000 });
};

export const clickonsearchflow = () => {
    logStep('Click on Search Flow');
    return clickmethod.clickElement("a[data-plugin-id='2']", { timeout: 1000 });
}

export const Start_event_inputfield = () => {
    logStep('Enter value in Start Event input field');
    return EnterValue.enterValue('#startEvent', 'fills out the expense report');
}
export const Stop_event_inputfield = () => {
    logStep('Enter value in Stop Event input field');
    return EnterValue.enterValue('#stopEvent', 'must approve the expense report');
}
export const clickbutton = () => {
    logStep('Click Get Flow button');
    // return clickmethod.clickElement('button.btn.btn-sm.btn-primary'); // becaue the flow is change need to verify from dev
    return clickmethod.clickElementmultipletime('button.btn.btn-sm.btn-primary');
}