import "cypress-drag-drop";
import "cypress-file-upload";
import "cypress-real-events/support";
import tests from "../e2e/imports/imports";

require("@4tw/cypress-drag-drop");

Cypress.Commands.add("loginWithSession", (username, password, orgName) => {
  const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
  cy.log("Using AuthHub login:", useAuthHubLogin);

  cy.session(`${username}-${orgName}-${Cypress.spec.name}`, () => {
    if (useAuthHubLogin) {
      // AuthHub flow
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
        }).then(() => {
          return tests.switchOrganization(orgName);
        });
    } else {
      // Legacy login flow
      return tests
        .visitpage()
        .then(() => {
          return tests.Username(username);
        })
        .then(() => {
          return tests.VerifyUsername(username);
        })
        .then(() => {
          return tests.Password(password);
        })
        .then(() => {
          return tests.VerifyPassword(password);
        })
        .then(() => {
          return tests.ClickonLoginButton();
        })
        .then(() => {
          return tests.switchOrganization(orgName);
        });
    }
  });
});

Cypress.Commands.add("logMemoryUsage", () => {
  const memoryUsage = process.memoryUsage();
  console.log("Memory Usage:", memoryUsage);
});




// import "cypress-drag-drop";
// import "cypress-file-upload";
// import "cypress-real-events/support";
// import tests from "../e2e/imports/imports";

// require("@4tw/cypress-drag-drop");

// Cypress.Commands.add("loginWithSession", (microsoft_username,microsoft_password,username, password, orgName) => {
//   const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
//   cy.log("Using AuthHub login:", useAuthHubLogin);

//   cy.session(`${username}-${orgName}-${Cypress.spec.name}`, () => {
//     if (useAuthHubLogin) {
//       // AuthHub flow
//       return tests
//         .visitpage()
//         .then(() => {
//           return tests.Auth_hub_Username(microsoft_username);
//         }).then(() => {
//               cy.wait(2000); // Adjust the wait time as necessary
//         })
//         .then(() => {
//           return tests.Auth_hub_Continue();
//         }).then(() => {
//               cy.wait(20000); // Adjust the wait time as necessary
//         });
//         // .then(() => {
//         //   return tests.Auth_hub_Password(microsoft_password);
//         // })
//         // .then(() => {
//         //   return tests.Auth_hub_LoginButton();
//         // });
//     // } else {
//     //   // Legacy login flow
//     //   return tests
//     //     .visitpage()
//     //     .then(() => {
//     //       return tests.Username(username);
//     //     })
//     //     .then(() => {
//     //       return tests.VerifyUsername(username);
//     //     })
//     //     .then(() => {
//     //       return tests.Password(password);
//     //     })
//     //     .then(() => {
//     //       return tests.VerifyPassword(password);
//     //     })
//     //     .then(() => {
//     //       return tests.ClickonLoginButton();
//     //     })
//     //     .then(() => {
//     //       return tests.switchOrganization(orgName);
//     //     });
//     }
//   });
// });

// Cypress.Commands.add("logMemoryUsage", () => {
//   if (typeof process !== "undefined" && process.memoryUsage) {
//     const memoryUsage = process.memoryUsage();
//     // eslint-disable-next-line no-console
//     console.log("Memory Usage:", memoryUsage);
//   } else {
//     // eslint-disable-next-line no-console
//     console.log("Memory Usage not available in this context.");
//   }
// });
