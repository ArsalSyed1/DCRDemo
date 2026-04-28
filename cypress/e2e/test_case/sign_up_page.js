
import sign_up_page from '../../pages/sign_up_page';
import LoginPage from '../../pages/login_page';
import config from '../../configuration/config.json';
const { username, password, username_2 } = config;

export const Signup_page_test = () => {
    return LoginPage.visit()
    
        .then(() =>{
            return sign_up_page.ClickonSignupButton()})
        .then(() => {return sign_up_page.enterregistrationemail(username)})           
        .then(() => {return sign_up_page.clickonRegisterEmailButton()});
}

export const Signup_page_for_auth_hub = () => {
    const baseEmail = "dcrtesting16@gmail.com";
const uniqueSuffix = Date.now(); // always unique
const email = baseEmail.replace("@", `+${uniqueSuffix}@`);

    return LoginPage.visit()
    
        .then(() =>{
            return sign_up_page.ClickonSignupButton()})
        .then(() => {return sign_up_page.enterregistrationemail(email)})   
        .then(() => {return sign_up_page.clickagreeToTerms()})        
        .then(() => {return sign_up_page.clickonRegisterEmailButton()});
}



export const Signup_Profile_page = () => {
    return  sign_up_page.getUserFirstNameField("uzair")
        .then(() => {return sign_up_page.getUserSecondNameField("khan")})
        .then(() =>{return sign_up_page.getUsercompanyname("Teo")})
        .then(() => {return sign_up_page.getUserPasswordField(password)})
        .then(() => {return sign_up_page.getUserConfirmPasswordField(password)})
        .then(() => {return sign_up_page.clcikagreeToTerms()})
        .then(() => {return sign_up_page.selectIsAcademicOption()})
        .then(() => {return sign_up_page.selectIsPublicOption()})
        .then(() => {return sign_up_page.captcha()});
}
export const Forgotpassword = () => {
    // Ensure the first command returns a Cypress chain
    return cy.wrap(null)
        .then(() => sign_up_page.Clickonforgotpassword())
        .then(() => sign_up_page.EnterforgetpasswordEmail(username_2))
        .then(() => sign_up_page.ClickonrecoverpasswordButton());
}

export const enterforgetpassworddetails = () => {
     sign_up_page.enternewpassword(password)
        .then(() =>{return sign_up_page.enterconfirmpassword(password)})
        .then(() => {return sign_up_page.clickonsetpasswordbutton()});
}
export const clickonchangepassword = () => {
    return  sign_up_page.clickonchangepassword()
        .then(() =>{return sign_up_page.clickonoldpassword(password)})
        .then(() => {return sign_up_page.enternewpassword(password)})
        .then(() => {return sign_up_page.enterconfirmpassword(password)})
        .then(() => {return sign_up_page.clickonupdatepasswordbutton()});
}