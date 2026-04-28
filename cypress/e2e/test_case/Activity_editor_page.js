import clickmethod from '../../pages/generic_method/click_method';
import { logStep } from '../../support/e2e';

export const editbutton= () => {
    // clickmethod.clickElement(':nth-child(3) > .dropdown-toggle');
    logStep('Clicking on edit button');
    return clickmethod.clickElement(':nth-child(3) > .dropdown-toggle');
}
export const showSequence= () => {
    logStep('Clicking on Show Sequence');
    return clickmethod.clickElement('#showSequence');
}


