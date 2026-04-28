import fregmentationpage from '../../pages/fregmentation';
import Recommendationpage from '../../pages/recommendation_page';
import ClickMethod from '../../pages/generic_method/click_method';
import EnterValue from '../../pages/generic_method/enter_value';
import DropDown from '../../pages/generic_method/Drop_down';
import { logStep } from '../../support/e2e';

export const enter_text_in_field = (fieldName, text) => {
    logStep(`Entering text "${text}" in field "${fieldName}"`);
    return EnterValue.enterValue(`input[name="${fieldName}"]`, text);
}
export const enter_text_in_description_field = (fieldName, text) => {
    logStep(`Entering text "${text}" in field "${fieldName}"`);
    return EnterValue.enterValue(`textarea[name="${fieldName}"]`, text);
}
export const just_click = () => {
    logStep('Clicking on phase header');
    return cy.get('.phase__header').click({ timeout: 10000 });
}

export const click_on_close_button = (button) => {
    logStep('Clicking on close button');
    return ClickMethod.clickAndWaitForApi(button, `${Cypress.config("formserverApiBaseUrl")}form/submit`, 'wait for close button');
}
export const click_on_cross_button = (button) => {
    logStep('Clicking on close button');
return ClickMethod.clickElementmultipletime(button);
}

export const click_on_close_button_with_APi = () => {
    logStep('Clicking on close button with API');
    return cy.url().then((url) => {
        const params = new URLSearchParams(url.split('?')[1]);
        const graphId = params.get('id');
        return ClickMethod.clickAndWaitForApi(":nth-child(2) > .button__inner-wrapper > .button", `${Cypress.config("repositoryApiBaseUrl")}api/graphs/SwimVisualize`, 'apiRequest');
    });
}

export const verify_start_Field = () => {
    logStep('Verifying Start field');
    return EnterValue.VerifyenterValue('input[name="Start"]');
}

export const verify_End_Field = () => {
    logStep('Verifying End field');
    return EnterValue.VerifyenterValue('input[name="End"]');
}

export const clickonclosebutton = () => {
    logStep('Clicking on close button');
    return ClickMethod.clickElement(':nth-child(2) > .button__inner-wrapper > .button');
}

export const checkExecutedvalues = () => {
    logStep('Checking executed values');
    return Recommendationpage.ClickonStartSimulationButton()
    .then(() => {
        logStep('Opening Activity5');
        return fregmentationpage.clickOnOpen('Activity5');
    }).then(() => {
        logStep('Clicking on input field with special characters');
        return fregmentationpage.clickoninputfield('Item 3 æåøÆÅØéèçà$ù£µ§');
    }).then(() => {
        logStep('Clicking on close button');
        return fregmentationpage.clickonclosebutton();
    }).then(() => {
        logStep('Verifying executed event');
        return fregmentationpage.verifytheexecutedEven();
    });
}

export const checkchoicefield = () => {
    logStep('Checking choice field');
    return Recommendationpage.ClickonStartSimulationButton()
    .then(() => {
        logStep('Opening Choice1');
        return fregmentationpage.clickOnOpen('Choice1');
    }).then(() => {
        logStep('Clicking on input field "Item 1"');
        return fregmentationpage.clickoninputfield('Item 1');
    }).then(() => {
        logStep('Clicking on close button');
        return fregmentationpage.clickonclosebutton();
    }).then(() => {
        logStep('Verifying executed event');
        return fregmentationpage.verifytheexecutedEven();
    });
}

export const Select_field_value = (Value) => {
    logStep(`Selecting field value "${Value}"`);
    return DropDown.selectInputFieldValue(Value);
}
export const Select_field_value_with_checkbox = (Value) => {
    logStep(`Selecting field value "${Value}" with checkbox`);
    return DropDown.selectInputFieldValuewithcheckbox(Value);
}