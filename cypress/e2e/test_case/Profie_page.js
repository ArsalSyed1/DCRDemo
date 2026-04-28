import clickmethod from '../../pages/generic_method/click_method';

import { logStep } from '../../support/e2e';

export const click_on_Edit_profile= () => {
    logStep('Clicking on Edit Profile');
    return clickmethod.clickElement('a[title="Edit Profile"]');
}
export const click_on_Update_profile= () => {
    logStep('Clicking on Update Profile');
    return clickmethod.clickElement('#updateProfileBtn');
}
export const click_on_Upload_pic = () => {
    logStep('Clicking on Upload Profile Pic and uploading file');
    // Click the upload button
    return clickmethod.clickElement('#updateProfilePic')
      .then(() => cy.get('input[type="file"]').attachFile('72673.jpg'));
}