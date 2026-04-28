import tests from "../imports/imports.js";
import config from "../../configuration/config.json";
const { password, username } = config;

describe("0008: Verify the functionality of Signup by Signup new user.", () => {
  beforeEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.intercept("**/*", (req) => {
      const headerName = Cypress.env("BypassRecaptchaHeaderName");
      const headerValue = Cypress.env("BypassRecaptchaHeaderValue");
      req.headers[headerName] = headerValue;
    });
  });
  it("should verify Signup functionality", function () {
    const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
    cy.log("Using AuthHub login:", useAuthHubLogin);

    if (useAuthHubLogin) {
      return tests.Signup_page_for_auth_hub().then(() => {
        // return tests.verifyEmail();
      });
    } else {
      return tests.Signup_page_test().then(() => {
        // return tests.verifyEmail();
      });
    }
  });

  describe("0090:Verify the Forgot Password Functionality.", () => {
    it(" Verify the Forgot Password Functionality.", function () {
      return tests.visitpage().then(() => {
        return tests.Forgotpassword();
      });
    });
  });
});
describe("0091:Verify the Change Password Functionality..", () => {
  it(" Verify the Change Password Functionality", function () {
    const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
    cy.log("Using AuthHub login:", useAuthHubLogin);

    if (useAuthHubLogin) {
      // AuthHub login flow
      return tests
        .visitpage()
        .then(() => {
          return tests.Auth_hub_Username(username);
        })
        .then(() => {
          return tests.Auth_hub_Continue();
        })
        .then(() => {
          return tests.Auth_hub_Password(password);
        })
        .then(() => {
          return tests.Auth_hub_LoginButton();
        })
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.clickonchangepassword();
        });
    } else {
      // Normal login flow
      return tests
        .visitpage()
        .then(() => {
          return tests.Username(username);
        })
        .then(() => {
          return tests.Password(password);
        })
        .then(() => {
          return tests.ClickonLoginButton();
        })
        .then(() => {
          return tests.ClickonProfileIcon();
        })
        .then(() => {
          return tests.clickonchangepassword();
        });
    }
  });
});
