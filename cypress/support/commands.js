import "cypress-drag-drop";
import "cypress-file-upload";
import "cypress-real-events/support";
import tests from "../e2e/imports/imports";

require("@4tw/cypress-drag-drop");

Cypress.Commands.add("loginWithSession1", (username, password, orgName) => {
  const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
  cy.log("Using AuthHub login:", useAuthHubLogin);

  // No session caching - perform fresh login every time
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

Cypress.Commands.add("logMemoryUsage", () => {
  const memoryUsage = process.memoryUsage();
  console.log("Memory Usage:", memoryUsage);
});




Cypress.Commands.add("loginWithSessionx", (username, password, orgName) => {
  const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");
  cy.log("Using AuthHub login:", useAuthHubLogin);
  console.log('THE_USE_AUTHHUB_LOGIN', useAuthHubLogin);

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



Cypress.Commands.add("loginWithSession", (username, password, orgName) => {
  const useAuthHubLogin = Cypress.env("USE_AUTHHUB_LOGIN");

  cy.session(
    `${username}-${orgName}`,
    
    () => {
      if (useAuthHubLogin) {
        tests.visitpage();
        tests.Auth_hub_Username(username);
        tests.Auth_hub_Continue();
        tests.Auth_hub_Password(password);
        tests.Auth_hub_LoginButton();
        tests.switchOrganization(orgName);
      } else {
        tests.visitpage();
        tests.Username(username);
        tests.VerifyUsername(username);
        tests.Password(password);
        tests.VerifyPassword(password);
        tests.ClickonLoginButton();
        tests.switchOrganization(orgName);
      }

      // Confirm UI ready
      cy.get('.pTitle', { timeout: 30000 })
        .should('exist');
    },

    {
      validate() {
        // ✅ Stable validation (UI based)
        cy.get('.pTitle', { timeout: 20000 }).should('exist');
      }
    }
  );

  cy.visit('/');
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
