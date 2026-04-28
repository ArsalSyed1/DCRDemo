import { Password } from "../e2e/test_case/login_page";
class Signuppage {
   // code committed brcase auth hub is implemented on both test and demo env 
  // Click on the "Sign Up" button
  // ClickonSignupButton() {
  //   // Check if running on demo environment by inspecting the baseUrl or location
  //   cy.url().then((url) => {
  //     if (url.includes("demo")) {
  //       return cy.contains("a", "Don't have an account? Sign up").click();
  //     } else {
  //       return cy.get("span > .btn").click({ force: true });
  //     }
  //   });
  // }
  ClickonSignupButton() {
    return cy.contains("a", "Don't have an account? Sign up").click();
  }
 // code committed brcase auth hub is implemented on both test and demo env 
  // Enter registration email (username)
  // enterregistrationemail(Username) {
  //   cy.url().then((url) => {
  //     if (url.includes("demo")) {
  //       return cy.get("#email").type(Username);
  //     } else {
  //       return cy.get("#registerEmailtxt").type(Username);
  //     }
  //   });
  // }

  enterregistrationemail(Username) {
    return cy.get("#email").type(Username);
  }

  // Intercept the CAPTCHA verification request and mock a successful response
  interceptCaptchaVerification() {
    return cy
      .intercept("POST", "https://www.google.com/recaptcha/api/siteverify", {
        statusCode: 200,
        body: { success: true }, // Mocking successful CAPTCHA verification
      })
      .as("captchaVerification");
  }
 // code committed brcase auth hub is implemented on both test and demo env 
  // Click on the "Register Email" button
  // clickonRegisterEmailButton() {
  //   cy.url().then((url) => {
  //     if (url.includes("demo")) {
  //       return cy.get("#signupSubmit").click({ force: true }); //for auth demo
  //     } else {
  //       return cy.get("#registerEmailButton").click();
  //     }
  //   });
  // }

  clickonRegisterEmailButton() {
    return cy.get("#signupSubmit").click({ force: true });
  }

  getUserFirstNameField(userFirstName) {
    return cy.get("#UserProfile_FirstName").type(userFirstName);
  }
  getUserSecondNameField(userSecondName) {
    return cy.get("#UserProfile_SecondName").type(userSecondName);
  }
  getUsercompanyname(userAffiliation) {
    return cy.get("#UserProfile_Affiliation").type(userAffiliation);
  }
  getUserPasswordField(userPassword) {
    return cy.get("#RegisterModel_Password").type(userPassword);
  }
  getUserConfirmPasswordField(userConfirmPassword) {
    return cy.get("#RegisterModel_ConfirmPassword").type(userConfirmPassword);
  }
  clcikagreeToTerms() {
    return cy.get("#agreeTerms").click({ force: true });
  }
  selectIsAcademicOption() {
    return cy.get("#UserProfile_IsAcademic").click();
  }
  selectIsPublicOption() {
    return cy.get("#UserProfile_IsPublic").click();
  }
  // captcha() {
  //     describe('Handle reCAPTCHA in Cypress', () => {
  //         it('should bypass reCAPTCHA and submit the form successfully', () => {
  //           // Intercept the reCAPTCHA validation request
  //           cy.intercept('POST', 'https://www.google.com/recaptcha/api/siteverify', {
  //             statusCode: 200,
  //             body: { success: true },
  //           }).as('captchaVerify');

  //           // Visit the target page

  //           // Wait for the reCAPTCHA iframe to load
  //           cy.get(':nth-child(15) > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').should('be.visible');    // Adjust based on your reCAPTCHA selector

  //           // Access the iframe content and interact with reCAPTCHA
  //           cy.get(':nth-child(15) > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').then(($iframe) => {
  //             const body = $iframe.contents().find('body');
  //             cy.wrap(body).find('.recaptcha-checkbox-border').eq(2).click(); // Click the checkbox
  //             cy.wrap(body).find('textarea[name="g-recaptcha-response"]').invoke('val', 'fake-recaptcha-token'); // Inject token
  //           });

  //           // Submit the form
  //         //   cy.get('#regSubmit').invoke("removeAttr", "target").click();

  //           // Validate the intercepted reCAPTCHA request
  //           cy.wait('@captchaVerify').then((interception) => {
  //             expect(interception.response.statusCode).to.eq(200);
  //             expect(interception.response.body.success).to.be.true;
  //           });

  //           // Assert the form submission success
  //           cy.contains('Form submitted successfully').should('be.visible'); // Adjust based on your success message
  //         });
  //       });

  // }

  captcha() {
    return cy
      .intercept("POST", "https://www.google.com/recaptcha/api/siteverify", {
        statusCode: 200,
        body: { success: true },
      })
      .as("captchaVerify")
      .then(() => cy.window())
      .then((win) => {
        // Mock the reCAPTCHA token response
        const tokenField = win.document.querySelector(
          'textarea[name="g-recaptcha-response"]'
        );
        if (tokenField) {
          tokenField.value = "fake-recaptcha-token";
          return cy.wrap(tokenField).trigger("change"); // Trigger change event
        } else {
          throw new Error("g-recaptcha-response field not found");
        }
      })
      .then(() => cy.get("#regSubmit").click())
      .then(() => cy.wait("@captchaVerify"))
      .then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body.success).to.be.true;
      })
      .then(() =>
        cy.contains("Form submitted successfully").should("be.visible")
      );
  }
  // code committed brcase auth hub is implemented on both test and demo env 
  // Clickonforgotpassword() {
  //   cy.url().then((url) => {
  //     if (url.includes("demo")) {
  //       return cy.contains("a", "Forgot password?").click();
  //     } else {
  //       return cy.contains("a", "Forgot password").click();
  //     }
  //   });
  // }

  Clickonforgotpassword() {
    return cy.get("#forgotPasswordLink").click();
  }
   // code committed brcase auth hub is implemented on both test and demo env 
  // EnterforgetpasswordEmail(email) {
  //   cy.url().then((url) => {
  //     if (url.includes("demo")) {
  //       return cy.get("#email").type(email);
  //     } else {
  //       return cy.get("#Email").type(email);
  //     }
  //   });
  // }
  EnterforgetpasswordEmail(email) {
    return cy.get("#email").type(email);
  }
   // code committed brcase auth hub is implemented on both test and demo env 
  // ClickonrecoverpasswordButton() {
  //   cy.url().then((url) => {
  //     if (url.includes("demo")) {
  //       return cy.get(".btn");
  //     } else {
  //       return cy.get("#recover").click();
  //     }
  //   });
  // }
  ClickonrecoverpasswordButton() {
    return cy.get(".btn");
  }
  enternewpassword(Password) {
    return cy.get("#NewPassword").type(Password);
  }
  enterconfirmpassword(Password) {
    return cy.get("#ConfirmPassword").type(Password);
  }
  clickonsetpasswordbutton() {
    return cy.get(".d-flex > .btn-primary").click();
  }

  clickonchangepassword() {
    return cy.get("span.show > .dropdown-menu > :nth-child(2)").click();
  }

  clickonoldpassword(Password) {
    return cy.get("#OldPassword").type(Password);
  }
  clickonupdatepasswordbutton() {
    return cy.get("#ChangePassword").click();
  }
  clickagreeToTerms() {
    return cy.get("#agreeTermsAndPrivacy").click({ force: true });
  }
}

export default new Signuppage();
