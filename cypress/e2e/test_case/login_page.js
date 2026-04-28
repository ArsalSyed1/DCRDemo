import LoginPage from '../../pages/login_page';
import EnterValue from '../../pages/generic_method/enter_value'; 
import ClickMethod from '../../pages/generic_method/click_method';
import { logStep } from '../../support/e2e';

export const visitpage = () => {
  logStep('Visiting login page');
  return LoginPage.visit();
}

export const Username = (username) => {
  logStep('Entering Username');
  return EnterValue.enterValue("#UserName", username);
}
export const Auth_hub_Username = (username) => {
  logStep('Entering Username');
  return EnterValue.enterValue("#email", username);
}
export const VerifyUsername = (username) => {
  logStep('Verifying Username');
  return EnterValue.VerifyenterValue("#UserName", username);
}

export const Password = (password) => {
  logStep('Entering Password');
  return EnterValue.enterValue("#Password", password);
}
export const Auth_hub_Password = (password) => {
  logStep('Entering Password');
  return EnterValue.enterValue("#password", password);
}
export const VerifyPassword = (password) => {
  logStep('Verifying Password');
  return EnterValue.VerifyenterValue("#Password", password);
}
export const ClickonLoginButton = () => {
  logStep('Clicking on Login Button');
  return ClickMethod.clickAndWaitForApi("input[type='submit']", `${Cypress.config("baseUrl")}`, 'DashboardPageLoad');
}
export const Auth_hub_Continue = () => {
  logStep('Clicking on Continue Button');
  return ClickMethod.clickElement("button.btn.btn-primary.w-100");
  
}
export const Auth_hub_LoginButton = () => {
  logStep('Clicking on Login Button');
    // return ClickMethod.clickElement("button.flex-1.bg-green-600");
      return ClickMethod.clickAndWaitForApi("button.btn.btn-success.w-100", `${Cypress.config("baseUrl")}`, 'DashboardPageLoad');
            // return ClickMethod.clickElement("button.btn.btn-success.w-100");



}